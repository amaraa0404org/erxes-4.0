"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTemplate = exports.readFile = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const fs = tslib_1.__importStar(require("fs"));
const Handlebars = tslib_1.__importStar(require("handlebars"));
const readFile = async (filename) => {
    const filePath = path_1.default.resolve(__dirname, `../../private/emailTemplates/${filename}.html`);
    return fs.promises.readFile(filePath, 'utf8');
};
exports.readFile = readFile;
const applyTemplate = async (data, templateName) => {
    let template = await (0, exports.readFile)(templateName);
    template = Handlebars.compile(template.toString());
    return template(data);
};
exports.applyTemplate = applyTemplate;
//# sourceMappingURL=index.js.map