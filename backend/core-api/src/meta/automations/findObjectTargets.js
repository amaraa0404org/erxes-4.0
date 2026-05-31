"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFindObjectResult = exports.CORE_FIND_OBJECT_TARGETS_CONST = exports.CORE_FIND_OBJECT_TARGETS = void 0;
const core_modules_1 = require("erxes-api-shared/core-modules");
const triggerOutputs_1 = require("./triggerOutputs");
const generateCompanyFilter = (field, value) => {
    const base = { status: { $ne: 'deleted' } };
    if (field === '_id') {
        return Object.assign(Object.assign({}, base), { _id: value });
    }
    if (field === 'code') {
        return Object.assign(Object.assign({}, base), { code: value });
    }
    if (field === 'primaryName') {
        return Object.assign(Object.assign({}, base), { $or: [{ primaryName: value }, { names: { $in: [value] } }] });
    }
    if (field === 'primaryEmail') {
        return Object.assign(Object.assign({}, base), { $or: [{ primaryEmail: value }, { emails: { $in: [value] } }] });
    }
    if (field === 'primaryPhone') {
        return Object.assign(Object.assign({}, base), { $or: [{ primaryPhone: value }, { phones: { $in: [value] } }] });
    }
    return null;
};
const generateCustomerFilter = (field, value) => {
    const base = { status: { $ne: 'deleted' } };
    if (field === '_id') {
        return Object.assign(Object.assign({}, base), { _id: value });
    }
    if (field === 'code') {
        return Object.assign(Object.assign({}, base), { code: value });
    }
    if (field === 'primaryEmail') {
        return Object.assign(Object.assign({}, base), { $or: [{ primaryEmail: value }, { emails: { $in: [value] } }] });
    }
    if (field === 'primaryPhone') {
        return Object.assign(Object.assign({}, base), { $or: [{ primaryPhone: value }, { phones: { $in: [value] } }] });
    }
    return null;
};
const generateUserFilter = (field, value) => {
    if (field === '_id') {
        return { _id: value };
    }
    if (field === 'email') {
        return { email: value };
    }
    if (field === 'username') {
        return { username: value };
    }
    if (field === 'employeeId') {
        return { employeeId: value };
    }
    if (field === 'code') {
        return { code: value };
    }
    return null;
};
exports.CORE_FIND_OBJECT_TARGETS = {
    [core_modules_1.TAutomationFindObjectType.COMPANY]: {
        label: 'Company',
        lookupFields: [
            { value: '_id', label: 'ID' },
            { value: 'code', label: 'Code' },
            { value: 'primaryName', label: 'Primary Name' },
            { value: 'primaryEmail', label: 'Primary Email' },
            { value: 'primaryPhone', label: 'Primary Phone' },
        ],
        getCollection: (models) => models.Companies,
        generateFilter: generateCompanyFilter,
        output: triggerOutputs_1.COMPANY_TRIGGER_OUTPUT,
    },
    [core_modules_1.TAutomationFindObjectType.CUSTOMER]: {
        label: 'Customer',
        lookupFields: [
            { value: '_id', label: 'ID' },
            { value: 'code', label: 'Code' },
            { value: 'primaryEmail', label: 'Primary Email' },
            { value: 'primaryPhone', label: 'Primary Phone' },
        ],
        getCollection: (models) => models.Customers,
        generateFilter: generateCustomerFilter,
        output: triggerOutputs_1.CUSTOMER_TRIGGER_OUTPUT,
    },
    [core_modules_1.TAutomationFindObjectType.USER]: {
        label: 'Team member',
        lookupFields: [
            { value: '_id', label: 'ID' },
            { value: 'email', label: 'Email' },
            { value: 'username', label: 'Username' },
            { value: 'code', label: 'Code' },
            { value: 'employeeId', label: 'Employee ID' },
        ],
        getCollection: (models) => models.Users,
        generateFilter: generateUserFilter,
        output: triggerOutputs_1.TEAM_MEMBER_TRIGGER_OUTPUT,
    },
};
exports.CORE_FIND_OBJECT_TARGETS_CONST = Object.entries(exports.CORE_FIND_OBJECT_TARGETS).map(([value, target]) => ({
    value,
    label: target.label,
    lookupFields: target.lookupFields,
    output: target.output,
}));
const buildFindObjectResult = ({ objectType, field, value, doc, }) => ({
    found: !!doc,
    objectType,
    objectId: typeof (doc === null || doc === void 0 ? void 0 : doc._id) === 'string'
        ? doc._id
        : (doc === null || doc === void 0 ? void 0 : doc._id)
            ? String(doc._id)
            : undefined,
    object: doc || null,
    matchedBy: {
        field,
        value,
    },
});
exports.buildFindObjectResult = buildFindObjectResult;
//# sourceMappingURL=findObjectTargets.js.map