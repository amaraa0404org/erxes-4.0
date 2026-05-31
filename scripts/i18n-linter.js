#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

// Colors for output
const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';

const DIRECTORIES_TO_SCAN = [
  path.join(__dirname, '../frontend/core-ui/src'),
];

const EXCLUDED_PATHS = [
  'node_modules',
  'dist',
  '.next',
  'assets',
  '__tests__',
  '__stories__',
  'scripts',
];

// Helper to determine if a string is a human-readable hardcoded English/Mongolian text
function isHardcodedUserText(str) {
  const trimmed = str.trim();
  if (!trimmed) return false;

  // Ignore numbers, punctuation, or single characters
  if (/^[0-9\s.,\/#!$%\^&\*;:{}=\-_`~()?"'<>+]+$/.test(trimmed)) return false;
  if (trimmed.length <= 1) return false;

  // Ignore technical strings like camelCase or snake_case key references, or classes, or paths, or colors, or icons
  if (/^[a-z0-9]+([A-Z_][a-z0-9]+)+$/.test(trimmed)) return false; // camelCase / snake_case keys
  if (/^[a-z0-9\-_]+(\.[a-z0-9\-_]+)+$/.test(trimmed)) return false; // dot notation keys (e.g. settings.title)
  if (/^(http|https|ftp):\/\//.test(trimmed)) return false; // URLs
  if (/^(Icon|icon)[A-Z]/.test(trimmed)) return false; // Icon names
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(trimmed)) return false; // hex colors
  if (/^[a-z]+$/.test(trimmed) && trimmed.length < 8) return false; // short lowercase words (often CSS classes or attributes)
  if (/^[A-Z0-9_\-]+$/.test(trimmed)) return false; // CONSTANTS/ENUMS

  // Ignore standard SVG paths or React attributes
  if (trimmed.includes('M') && trimmed.includes('L') && trimmed.length > 20) return false; // SVG path d attribute

  // If it has spaces, capital letters, or common human text patterns, it's user-facing text
  return /\s/.test(trimmed) || /^[A-Z]/.test(trimmed) || /[а-яөүжэеёийклнопрстуфхцчшщъыьэюя]/i.test(trimmed);
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const violations = [];

  // Helper to get line number from character index
  function getLineNumber(lineNum) {
    return lineNum;
  }

  function getLinePreview(lineNum) {
    const lines = content.split('\n');
    return lines[lineNum - 1].trim();
  }

  let ast;
  try {
    ast = babel.parseSync(content, {
      filename: filePath,
      configFile: false,
      babelrc: false,
      parserOpts: {
        sourceType: 'module',
        plugins: [
          'typescript',
          'jsx'
        ]
      }
    });
  } catch (err) {
    console.error(`${RED}Parsing error in file ${filePath}:${RESET}`, err.message);
    return violations;
  }

  // Simple AST traversal with ancestor tracking
  function traverse(node, ancestors = []) {
    if (!node) return;

    // Check JSXText (plain text in JSX elements)
    if (node.type === 'JSXText') {
      const text = node.value;
      if (isHardcodedUserText(text)) {
        const lineNum = node.loc ? node.loc.start.line : 0;
        violations.push({
          lineNumber: lineNum,
          type: 'JSX Plain Text',
          text: text.trim(),
          linePreview: getLinePreview(lineNum),
        });
      }
    }

    // Check StringLiteral
    if (node.type === 'StringLiteral') {
      const text = node.value;
      if (isHardcodedUserText(text) && !shouldIgnoreStringLiteral(node, ancestors)) {
        const lineNum = node.loc ? node.loc.start.line : 0;
        violations.push({
          lineNumber: lineNum,
          type: 'JS/TS String Literal',
          text,
          linePreview: getLinePreview(lineNum),
        });
      }
    }

    // Check TemplateLiteral
    if (node.type === 'TemplateLiteral') {
      node.quasis.forEach(quasi => {
        const text = quasi.value.cooked;
        if (isHardcodedUserText(text) && !shouldIgnoreTemplateLiteral(node, ancestors)) {
          const lineNum = node.loc ? node.loc.start.line : 0;
          violations.push({
            lineNumber: lineNum,
            type: 'Template Literal String',
            text: text.trim(),
            linePreview: getLinePreview(lineNum),
          });
        }
      });
    }

    // Traverse children
    const newAncestors = [...ancestors, node];
    for (const key in node) {
      if (node[key] && typeof node[key] === 'object') {
        if (Array.isArray(node[key])) {
          node[key].forEach(child => traverse(child, newAncestors));
        } else {
          traverse(node[key], newAncestors);
        }
      }
    }
  }

  function shouldIgnoreStringLiteral(node, ancestors) {
    if (ancestors.length === 0) return false;
    const parent = ancestors[ancestors.length - 1];

    // 1. Ignore if inside import or require statements
    if (parent.type === 'ImportDeclaration' || parent.type === 'ExportNamedDeclaration' || parent.type === 'ExportAllDeclaration') {
      return true;
    }
    if (parent.type === 'CallExpression' && parent.callee.name === 'require') {
      return true;
    }

    // 2. Ignore if part of translation function t(...) or __(...)
    if (parent.type === 'CallExpression' && (parent.callee.name === 't' || parent.callee.name === '__')) {
      return true;
    }

    // 3. Ignore if part of console.log, console.error, etc.
    if (parent.type === 'CallExpression' && 
        parent.callee.type === 'MemberExpression' && 
        parent.callee.object.name === 'console') {
      return true;
    }

    // 4. Ignore GraphQL tag queries
    if (parent.type === 'TaggedTemplateExpression' && parent.tag.name === 'gql') {
      return true;
    }

    // 5. Ignore if inside ignored JSX attributes (like className)
    const isInIgnoredAttribute = ancestors.some(a => {
      if (a.type === 'JSXAttribute') {
        const attrName = a.name.name;
        const ignoredAttrs = [
          'className', 'id', 'type', 'key', 'value', 'variant', 'size', 'color', 
          'theme', 'icon', 'align', 'justify', 'cursor', 'direction', 'mode', 
          'status', 'method', 'endpoint', 'url', 'path', 'href', 'rel', 'target', 
          'name', 'fieldName', 'queryKey', 'asChild', 'as', 'filterKey'
        ];
        return ignoredAttrs.includes(attrName);
      }
      return false;
    });
    if (isInIgnoredAttribute) return true;

    // 6. Ignore if it's an object property key (e.g. { name: "..." })
    if (parent.type === 'ObjectProperty' && parent.key === node) {
      return true;
    }

    // 7. Ignore if it's a binary comparison against event keys (e.g. e.key === 'Enter')
    if (parent.type === 'BinaryExpression') {
      const op = parent.operator;
      const isComparison = op === '===' || op === '==' || op === '!==' || op === '!=';
      if (isComparison) return true;
    }

    // 8. Ignore strings inside KEY_LABELS technical constant object
    const isInsideKeyLabels = ancestors.some(a => 
      a.type === 'VariableDeclarator' && 
      a.id && 
      a.id.name === 'KEY_LABELS'
    );
    if (isInsideKeyLabels) return true;

    return false;
  }

  function shouldIgnoreTemplateLiteral(node, ancestors) {
    if (ancestors.length === 0) return false;
    const parent = ancestors[ancestors.length - 1];

    if (parent.type === 'TaggedTemplateExpression' && parent.tag.name === 'gql') {
      return true;
    }
    if (parent.type === 'CallExpression' && (parent.callee.name === 't' || parent.callee.name === '__')) {
      return true;
    }

    // Ignore if inside ignored JSX attributes (like className)
    const isInIgnoredAttribute = ancestors.some(a => {
      if (a.type === 'JSXAttribute') {
        const attrName = a.name.name;
        const ignoredAttrs = [
          'className', 'id', 'type', 'key', 'value', 'variant', 'size', 'color', 
          'theme', 'icon', 'align', 'justify', 'cursor', 'direction', 'mode', 
          'status', 'method', 'endpoint', 'url', 'path', 'href', 'rel', 'target', 
          'name', 'fieldName', 'queryKey', 'asChild', 'as', 'filterKey'
        ];
        return ignoredAttrs.includes(attrName);
      }
      return false;
    });
    if (isInIgnoredAttribute) return true;

    return false;
  }

  traverse(ast.program);
  return violations;
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip excluded folders
    if (EXCLUDED_PATHS.some(exclude => filePath.includes(exclude))) {
      return;
    }

    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (stat.isFile() && /\.(tsx|jsx|ts|js)$/.test(file)) {
      // Exclude translation definitions or queries/mutations config
      if (!file.includes('queries') && !file.includes('mutations') && !file.includes('graphql')) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function run() {
  let targets = [];
  
  if (process.argv[2]) {
    const customPath = path.resolve(process.argv[2]);
    if (!fs.existsSync(customPath)) {
      console.log(`${RED}Error: Path not found: ${customPath}${RESET}`);
      process.exit(1);
    }
    const stat = fs.statSync(customPath);
    if (stat.isFile()) {
      targets = [customPath];
    } else {
      targets = walkDir(customPath);
    }
  } else {
    DIRECTORIES_TO_SCAN.forEach(dir => {
      if (fs.existsSync(dir)) {
        const stat = fs.statSync(dir);
        if (stat.isFile()) {
          targets.push(dir);
        } else {
          targets.push(...walkDir(dir));
        }
      }
    });
  }

  console.log(`${BOLD}${CYAN}🔍 Scanning codebase for hardcoded user-facing strings...${RESET}\n`);

  let filesScanned = targets.length;
  let totalViolations = 0;

  targets.forEach(file => {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const violations = scanFile(file);

    if (violations.length > 0) {
      totalViolations += violations.length;
      console.log(`${BOLD}${YELLOW}📄 File: ${relativePath}${RESET}`);
      
      violations.forEach(v => {
        console.log(`  ${RED}[Line ${v.lineNumber}]${RESET} [${CYAN}${v.type}${RESET}] Found: "${BOLD}${v.text}${RESET}"`);
        console.log(`     ${YELLOW}→${RESET} ${v.linePreview.replace(v.text, `${BOLD}${RED}${v.text}${RESET}`)}`);
      });
      console.log('');
    }
  });

  console.log(`${BOLD}📊 Scan Summary:${RESET}`);
  console.log(`  Scanned Files: ${BOLD}${GREEN}${filesScanned}${RESET}`);
  console.log(`  Violations Found: ${BOLD}${totalViolations > 0 ? RED : GREEN}${totalViolations}${RESET}\n`);

  if (totalViolations > 0) {
    console.log(`${BOLD}${RED}❌ Linter failed: Please replace the hardcoded strings above with i18n translation functions like t('key').${RESET}`);
    process.exit(1);
  } else {
    console.log(`${BOLD}${GREEN}✅ Linter passed: No hardcoded user-facing strings detected!${RESET}`);
    process.exit(0);
  }
}

run();
