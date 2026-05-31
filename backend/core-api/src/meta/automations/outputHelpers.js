"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveUserLabelByIdField = void 0;
const core_modules_1 = require("erxes-api-shared/core-modules");
const utils_1 = require("erxes-api-shared/utils");
const resolveUserLabelByIdField = (sourceField) => (0, core_modules_1.resolveFromSourceField)(sourceField, async ({ subdomain, value, defaultValue }) => {
    var _a;
    if (!value) {
        return defaultValue !== null && defaultValue !== void 0 ? defaultValue : '';
    }
    const user = await (0, utils_1.sendTRPCMessage)({
        subdomain,
        pluginName: 'core',
        method: 'query',
        module: 'users',
        action: 'findOne',
        input: { _id: value },
        defaultValue: null,
    });
    return ((_a = user === null || user === void 0 ? void 0 : user.details) === null || _a === void 0 ? void 0 : _a.fullName) || (user === null || user === void 0 ? void 0 : user.email) || defaultValue || '';
});
exports.resolveUserLabelByIdField = resolveUserLabelByIdField;
//# sourceMappingURL=outputHelpers.js.map