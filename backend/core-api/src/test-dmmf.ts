import { prisma } from 'erxes-api-shared/utils';
import * as fs from 'fs';
import * as path from 'path';

let modelFieldsMap: Record<string, Set<string>> | null = null;

function loadModelFields() {
  if (modelFieldsMap) return modelFieldsMap;
  modelFieldsMap = {};
  try {
    let schemaPath = path.resolve(__dirname, '../../../erxes-api-shared/prisma/schema.prisma');
    console.log('Path 1 resolved:', schemaPath, 'Exists:', fs.existsSync(schemaPath));
    if (!fs.existsSync(schemaPath)) {
      schemaPath = path.resolve(__dirname, '../../../../erxes-api-shared/prisma/schema.prisma');
      console.log('Path 1b resolved:', schemaPath, 'Exists:', fs.existsSync(schemaPath));
    }
    if (!fs.existsSync(schemaPath)) {
      schemaPath = path.resolve(process.cwd(), '../erxes-api-shared/prisma/schema.prisma');
      console.log('Path 2 resolved:', schemaPath, 'Exists:', fs.existsSync(schemaPath));
    }
    if (!fs.existsSync(schemaPath)) {
      schemaPath = path.resolve(process.cwd(), 'backend/erxes-api-shared/prisma/schema.prisma');
      console.log('Path 3 resolved:', schemaPath, 'Exists:', fs.existsSync(schemaPath));
    }
    if (fs.existsSync(schemaPath)) {
      const schemaContent = fs.readFileSync(schemaPath, 'utf8');
      const blocks = schemaContent.split(/\bmodel\s+/);
      for (const block of blocks) {
        const lines = block.split('\n');
        const firstLine = lines[0].trim();
        const modelNameMatch = firstLine.match(/^(\w+)/);
        if (!modelNameMatch) continue;
        const modelName = modelNameMatch[1].toLowerCase();
        
        const fields = new Set<string>();
        const nullableFields = new Set<string>();
        for (let i = 1; i < lines.length; i++) {
          const trimmed = lines[i].trim();
          if (!trimmed || trimmed === '}' || trimmed.startsWith('@@') || trimmed.startsWith('//')) {
            continue;
          }
          const fieldMatch = trimmed.match(/^(\w+)\s+(\w+\??)/);
          if (fieldMatch) {
            const fieldName = fieldMatch[1];
            const fieldType = fieldMatch[2];
            fields.add(fieldName);
            if (fieldType.endsWith('?')) {
              nullableFields.add(fieldName);
            }
          }
        }
        modelFieldsMap[modelName] = fields;
        modelFieldsMap[modelName + '_nullable'] = nullableFields;
      }
    }
  } catch (err) {
    console.error('Failed to parse schema.prisma in adapter:', err);
  }
  return modelFieldsMap;
}

const map = loadModelFields();
console.log('Keys of modelFieldsMap:', Object.keys(map || {}).length);
console.log('Customer nullable fields:', map ? map['customer_nullable'] : 'none');
