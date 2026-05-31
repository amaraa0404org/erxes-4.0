"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documents = void 0;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const utils_1 = require("erxes-api-shared/utils");
const _ = tslib_1.__importStar(require("lodash"));
const connectionResolvers_1 = require("~/connectionResolvers");
const utils_2 = require("~/modules/documents/utils");
const utils_3 = require("~/modules/forms/utils");
exports.documents = {
    types: [
        {
            label: 'Customer',
            contentType: 'core:contact.customer',
        },
        {
            label: 'Company',
            contentType: 'core:contact.company',
        },
        {
            label: 'Product',
            contentType: 'core:product',
        },
        {
            label: 'Team member',
            contentType: 'core:user',
        },
        {
            label: 'Broadcast',
            contentType: 'core:broadcast',
        },
    ],
    editorAttributes: async (models, subdomain, contentType) => {
        const [pluginName, moduleName] = contentType.split(':');
        const isEnabledService = await (0, utils_1.isEnabled)(pluginName);
        if (!isEnabledService) {
            return [];
        }
        const fields = await (0, utils_3.fieldsCombinedByContentType)(models, subdomain, {
            contentType,
        });
        const fieldsList = fields.map(({ name, label, groupDetail }) => ({
            value: name,
            name: label,
            groupDetail,
        }));
        if (moduleName === 'product') {
            const productFields = fields
                .filter((field) => !['categoryId', 'code'].includes(field.name))
                .map((field) => ({
                value: field.name,
                name: field.label,
                type: field.type,
            }));
            return [
                { value: 'name', name: 'Name' },
                { value: 'shortName', name: 'Short name' },
                { value: 'code', name: 'Code' },
                { value: 'price', name: 'Price' },
                { value: 'bulkQuantity', name: 'Bulk quantity' },
                { value: 'bulkPrice', name: 'Bulk price' },
                { value: 'barcode', name: 'Barcode' },
                { value: 'barcodeText', name: 'Barcode Text' },
                { value: 'date', name: 'Date' },
                { value: 'barcodeDescription', name: 'Barcode description' },
                ...productFields,
            ];
        }
        return fieldsList;
    },
    replaceContent: async ({ subdomain, data: { replacerIds, content, config, contentType }, }) => {
        const { dateFormat = 'YYYY-MM-DD' } = config || {};
        const models = await (0, connectionResolvers_1.generateModels)(subdomain);
        const [_pluginName, moduleName] = contentType.split(':');
        const modelMap = {
            customer: models.Customers,
            user: models.Users,
            company: models.Companies,
            form: models.Forms,
            product: models.Products,
            automation: models.Automations,
        };
        const model = modelMap[moduleName];
        if (!model) {
            throw new Error(`Unknown content type: ${moduleName}`);
        }
        const documents = await model.find({ _id: { $in: replacerIds } });
        const replacedContents = [];
        for (const document of documents) {
            const replacedContent = await (0, utils_2.replaceContent)({
                replacer: document,
                content,
                replacement: (replacer, path) => {
                    const value = _.get(replacer, path);
                    if (typeof value === 'number') {
                        return value.toString();
                    }
                    if (value instanceof Date) {
                        return (0, dayjs_1.default)(value).format(dateFormat);
                    }
                    return (value === null || value === void 0 ? void 0 : value.toString()) || '-';
                },
            });
            replacedContents.push(replacedContent);
        }
        return replacedContents;
    },
};
//# sourceMappingURL=documents.js.map