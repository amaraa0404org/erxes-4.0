"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentralPrismaFindOneQuery = exports.CentralPrismaQuery = void 0;
exports.translateQuery = translateQuery;
exports.translateSort = translateSort;
exports.translateUpdate = translateUpdate;
exports.translateSelect = translateSelect;
exports.executeAggregate = executeAggregate;
exports.filterPrismaInput = filterPrismaInput;
exports.createPrismaAdapter = createPrismaAdapter;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
function translateQuery(query, arrayFields = new Set(), modelName) {
    if (!query)
        return {};
    const where = {};
    const fieldsMap = modelName ? loadModelFields() : null;
    const nullableFields = fieldsMap && modelName ? fieldsMap[modelName.toLowerCase() + '_nullable'] : null;
    for (const [key, val] of Object.entries(query)) {
        if (key === '$or') {
            if (Array.isArray(val)) {
                where.OR = val.map(q => translateQuery(q, arrayFields, modelName)).filter(Boolean);
            }
            continue;
        }
        if (key === '$and') {
            if (Array.isArray(val)) {
                where.AND = val.map(q => translateQuery(q, arrayFields, modelName)).filter(Boolean);
            }
            continue;
        }
        if (key === '$nor') {
            if (Array.isArray(val)) {
                where.NOT = val.map(q => translateQuery(q, arrayFields, modelName)).filter(Boolean);
            }
            continue;
        }
        let prismaKey = key === '_id' ? 'id' : key;
        if (prismaKey.startsWith('details.')) {
            prismaKey = prismaKey.substring(8);
        }
        const translatedVal = translateVal(prismaKey, val, arrayFields);
        if (translatedVal === null && nullableFields && !nullableFields.has(prismaKey)) {
            continue;
        }
        where[prismaKey] = translatedVal;
    }
    return where;
}
function regexToPrismaFilter(source, caseInsensitive) {
    const mode = caseInsensitive ? 'insensitive' : undefined;
    const startsWithAnchor = source.startsWith('^');
    const endsWithAnchor = source.endsWith('$') && !source.endsWith('\\$');
    let pattern = source;
    if (startsWithAnchor)
        pattern = pattern.slice(1);
    if (endsWithAnchor)
        pattern = pattern.slice(0, -1);
    if (startsWithAnchor && endsWithAnchor) {
        return { equals: pattern, mode };
    }
    if (startsWithAnchor) {
        return { startsWith: pattern, mode };
    }
    if (endsWithAnchor) {
        return { endsWith: pattern, mode };
    }
    return { contains: pattern, mode };
}
function translateVal(prismaKey, val, arrayFields) {
    var _a;
    const isArrayField = arrayFields.has(prismaKey);
    if (val === null || val === undefined) {
        return val;
    }
    if (val instanceof RegExp) {
        return regexToPrismaFilter(val.source, val.flags.includes('i'));
    }
    if (typeof val === 'object' && !Array.isArray(val) && !(val instanceof Date)) {
        const keys = Object.keys(val);
        if (keys.length > 1 && keys.every(k => k.startsWith('$'))) {
            const compound = {};
            for (const k of keys) {
                if (k === '$gt')
                    compound.gt = val[k];
                else if (k === '$gte')
                    compound.gte = val[k];
                else if (k === '$lt')
                    compound.lt = val[k];
                else if (k === '$lte')
                    compound.lte = val[k];
                else if (k === '$ne')
                    compound.not = val[k];
                else if (k === '$in') {
                    if (isArrayField)
                        return { hasSome: val[k] };
                    compound.in = val[k];
                }
                else if (k === '$nin') {
                    if (isArrayField)
                        return { not: { hasSome: val[k] } };
                    compound.notIn = val[k];
                }
                else if (k === '$regex') {
                    compound.contains = val[k] instanceof RegExp ? val[k].source : val[k];
                    if ((_a = val.$options) === null || _a === void 0 ? void 0 : _a.includes('i'))
                        compound.mode = 'insensitive';
                }
                else if (k === '$options') {
                }
                else if (k === '$exists') {
                    return val[k] ? { not: null } : null;
                }
            }
            if (Object.keys(compound).length > 0)
                return compound;
        }
        if (keys.includes('$in')) {
            if (isArrayField) {
                return { hasSome: val.$in };
            }
            return { in: val.$in };
        }
        if (keys.includes('$nin')) {
            if (isArrayField) {
                return { not: { hasSome: val.$nin } };
            }
            return { notIn: val.$nin };
        }
        if (keys.includes('$ne')) {
            if (isArrayField) {
                return { not: { has: val.$ne } };
            }
            if (val.$ne === null) {
                return { not: null };
            }
            return { not: val.$ne };
        }
        if (keys.includes('$eq')) {
            if (isArrayField) {
                return { has: val.$eq };
            }
            return val.$eq;
        }
        if (keys.includes('$gt')) {
            return { gt: val.$gt };
        }
        if (keys.includes('$gte')) {
            return { gte: val.$gte };
        }
        if (keys.includes('$lt')) {
            return { lt: val.$lt };
        }
        if (keys.includes('$lte')) {
            return { lte: val.$lte };
        }
        if (keys.includes('$regex')) {
            const source = val.$regex instanceof RegExp ? val.$regex.source : val.$regex;
            const caseInsensitive = val.$regex instanceof RegExp
                ? val.$regex.flags.includes('i')
                : (val.$options || '').includes('i');
            return regexToPrismaFilter(source, caseInsensitive);
        }
        if (keys.includes('$exists')) {
            if (val.$exists) {
                return { not: null };
            }
            else {
                return null;
            }
        }
        if (keys.includes('$all')) {
            if (isArrayField) {
                return { hasEvery: val.$all };
            }
        }
        if (keys.includes('$elemMatch')) {
            return { some: translateQuery(val.$elemMatch, arrayFields) };
        }
        if (keys.includes('$not')) {
            return { not: translateVal(prismaKey, val.$not, arrayFields) };
        }
        if (keys.includes('$size')) {
            return undefined;
        }
    }
    if (isArrayField) {
        if (Array.isArray(val)) {
            return { equals: val };
        }
        return { has: val };
    }
    return val;
}
function translateSort(sort) {
    if (!sort)
        return undefined;
    if (typeof sort === 'string') {
        const parts = sort.split(' ');
        return parts.map(p => {
            if (p.startsWith('-')) {
                return { [p.substring(1)]: 'desc' };
            }
            return { [p]: 'asc' };
        });
    }
    const orderList = [];
    for (const [key, val] of Object.entries(sort)) {
        const prismaKey = key === '_id' ? 'id' : key;
        const direction = val === -1 || val === 'desc' ? 'desc' : 'asc';
        orderList.push({ [prismaKey]: direction });
    }
    return orderList;
}
function translateUpdate(update, toPrismaUpdate, arrayFields = new Set()) {
    if (!update)
        return {};
    const data = {};
    if (update.$set) {
        Object.assign(data, toPrismaUpdate(update.$set));
    }
    if (update.$unset) {
        for (const key of Object.keys(update.$unset)) {
            const prismaKey = key === '_id' ? 'id' : key;
            data[prismaKey] = null;
        }
    }
    if (update.$push) {
        for (const [key, val] of Object.entries(update.$push)) {
            const prismaKey = key === '_id' ? 'id' : key;
            if (arrayFields.has(prismaKey)) {
                if (val && typeof val === 'object' && '$each' in val) {
                    data[prismaKey] = { push: val.$each };
                }
                else {
                    data[prismaKey] = { push: val };
                }
            }
        }
    }
    if (update.$inc) {
        for (const [key, val] of Object.entries(update.$inc)) {
            const prismaKey = key === '_id' ? 'id' : key;
            data[prismaKey] = { increment: val };
        }
    }
    const hasOperators = Object.keys(update).some(k => k.startsWith('$'));
    if (!hasOperators) {
        Object.assign(data, toPrismaUpdate(update));
    }
    return data;
}
function translateSelect(select) {
    if (!select)
        return undefined;
    if (typeof select === 'string') {
        const result = {};
        for (const field of select.split(' ')) {
            if (field.startsWith('-')) {
                continue;
            }
            const prismaKey = field === '_id' ? 'id' : field;
            result[prismaKey] = true;
        }
        result.id = true;
        return result;
    }
    if (typeof select === 'object') {
        const result = {};
        let hasInclusions = false;
        for (const [key, val] of Object.entries(select)) {
            const prismaKey = key === '_id' ? 'id' : key;
            if (val === 1 || val === true) {
                result[prismaKey] = true;
                hasInclusions = true;
            }
        }
        if (hasInclusions) {
            result.id = true;
            return result;
        }
    }
    return undefined;
}
class CentralPrismaQuery {
    constructor(query, prismaModel, mapper, arrayFields) {
        this.sortOrder = null;
        this.limitVal = null;
        this.skipVal = null;
        this.selectFields = null;
        this.query = query;
        this.prismaModel = prismaModel;
        this.mapper = mapper;
        this.arrayFields = arrayFields;
    }
    sort(sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    limit(limit) {
        this.limitVal = limit;
        return this;
    }
    skip(skip) {
        this.skipVal = skip;
        return this;
    }
    lean() {
        return this;
    }
    select(fields) {
        this.selectFields = fields;
        return this;
    }
    async distinct(field) {
        const where = translateQuery(this.query, this.arrayFields);
        const prismaField = field === '_id' ? 'id' : field;
        const items = await this.prismaModel.findMany({
            where,
            select: { [prismaField]: true }
        });
        const values = items.map((item) => item[prismaField]);
        return Array.from(new Set(values));
    }
    async exec() {
        const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
        const where = translateQuery(this.query, this.arrayFields, modelName);
        const options = { where };
        if (this.limitVal !== null) {
            options.take = this.limitVal;
        }
        if (this.skipVal !== null) {
            options.skip = this.skipVal;
        }
        if (this.sortOrder) {
            options.orderBy = translateSort(this.sortOrder);
        }
        if (this.selectFields) {
            const select = translateSelect(this.selectFields);
            if (select) {
                const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
                options.select = filterPrismaInput(modelName, select);
            }
        }
        const items = await this.prismaModel.findMany(options);
        return items.map(this.mapper);
    }
    async cursor() {
        const results = await this.exec();
        let index = 0;
        return {
            next: () => {
                if (index < results.length) {
                    return { value: results[index++], done: false };
                }
                return { value: undefined, done: true };
            },
            [Symbol.asyncIterator]() {
                return this;
            }
        };
    }
    then(onfulfilled, onrejected) {
        return this.exec().then(onfulfilled, onrejected);
    }
}
exports.CentralPrismaQuery = CentralPrismaQuery;
class CentralPrismaFindOneQuery {
    constructor(query, prismaModel, mapper, arrayFields) {
        this.sortOrder = null;
        this.selectFields = null;
        this.query = query;
        this.prismaModel = prismaModel;
        this.mapper = mapper;
        this.arrayFields = arrayFields;
    }
    sort(sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    lean() {
        return this;
    }
    select(fields) {
        this.selectFields = fields;
        return this;
    }
    async exec() {
        const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
        const where = translateQuery(this.query, this.arrayFields, modelName);
        const options = { where };
        if (this.sortOrder) {
            options.orderBy = translateSort(this.sortOrder);
        }
        if (this.selectFields) {
            const select = translateSelect(this.selectFields);
            if (select) {
                const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
                options.select = filterPrismaInput(modelName, select);
            }
        }
        const item = await this.prismaModel.findFirst(options);
        return this.mapper(item);
    }
    then(onfulfilled, onrejected) {
        return this.exec().then(onfulfilled, onrejected);
    }
}
exports.CentralPrismaFindOneQuery = CentralPrismaFindOneQuery;
async function executeAggregate(prismaModel, pipeline, mapper, arrayFields = new Set(), tableName) {
    if (pipeline.length === 1 && pipeline[0].$match) {
        const where = translateQuery(pipeline[0].$match, arrayFields);
        const items = await prismaModel.findMany({ where });
        return items.map(mapper);
    }
    const matchStage = pipeline.find((s) => s.$match);
    const groupStage = pipeline.find((s) => s.$group);
    const sortStage = pipeline.find((s) => s.$sort);
    const limitStage = pipeline.find((s) => s.$limit);
    const skipStage = pipeline.find((s) => s.$skip);
    const lookupStages = pipeline.filter((s) => s.$lookup);
    const unwindStages = pipeline.filter((s) => s.$unwind);
    const projectStage = pipeline.find((s) => s.$project);
    if (groupStage) {
        return executeGroupAggregate(prismaModel, pipeline, arrayFields, mapper);
    }
    if (lookupStages.length > 0 || unwindStages.length > 0) {
        return executeLookupAggregate(prismaModel, pipeline, arrayFields, mapper);
    }
    const where = matchStage ? translateQuery(matchStage.$match, arrayFields) : {};
    const options = { where };
    if (sortStage) {
        options.orderBy = translateSort(sortStage.$sort);
    }
    if (limitStage) {
        options.take = limitStage.$limit;
    }
    if (skipStage) {
        options.skip = skipStage.$skip;
    }
    const items = await prismaModel.findMany(options);
    let results = items.map(mapper);
    if (projectStage) {
        results = results.map((item) => {
            const projected = {};
            for (const [key, val] of Object.entries(projectStage.$project)) {
                if (val === 1 || val === true) {
                    projected[key] = item[key];
                }
            }
            if (projectStage.$project._id !== 0 && projectStage.$project._id !== false) {
                projected._id = item._id || item.id;
            }
            return projected;
        });
    }
    return results;
}
async function executeGroupAggregate(prismaModel, pipeline, arrayFields, mapper) {
    var _a, _b, _c, _d, _e;
    const matchStage = pipeline.find((s) => s.$match);
    const groupStage = pipeline.find((s) => s.$group);
    if (!groupStage)
        return [];
    const where = matchStage ? translateQuery(matchStage.$match, arrayFields) : {};
    const groupId = groupStage.$group._id;
    let by = [];
    if (typeof groupId === 'string' && groupId.startsWith('$')) {
        const field = groupId.substring(1);
        by = [field === '_id' ? 'id' : field];
    }
    else if (groupId === null) {
        const aggregations = {};
        for (const [key, val] of Object.entries(groupStage.$group)) {
            if (key === '_id')
                continue;
            if (typeof val === 'object' && val !== null) {
                const op = Object.keys(val)[0];
                const field = val[op];
                const prismaField = typeof field === 'string' && field.startsWith('$')
                    ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
                    : undefined;
                if (op === '$sum') {
                    if (field === 1) {
                        aggregations._count = { id: true };
                    }
                    else if (prismaField) {
                        aggregations._sum = Object.assign(Object.assign({}, (aggregations._sum || {})), { [prismaField]: true });
                    }
                }
                else if (op === '$avg' && prismaField) {
                    aggregations._avg = Object.assign(Object.assign({}, (aggregations._avg || {})), { [prismaField]: true });
                }
                else if (op === '$max' && prismaField) {
                    aggregations._max = Object.assign(Object.assign({}, (aggregations._max || {})), { [prismaField]: true });
                }
                else if (op === '$min' && prismaField) {
                    aggregations._min = Object.assign(Object.assign({}, (aggregations._min || {})), { [prismaField]: true });
                }
            }
        }
        const result = await prismaModel.aggregate(Object.assign({ where }, aggregations));
        const output = { _id: null };
        for (const [key, val] of Object.entries(groupStage.$group)) {
            if (key === '_id')
                continue;
            if (typeof val === 'object' && val !== null) {
                const op = Object.keys(val)[0];
                const field = val[op];
                const prismaField = typeof field === 'string' && field.startsWith('$')
                    ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
                    : undefined;
                if (op === '$sum' && field === 1) {
                    output[key] = ((_a = result._count) === null || _a === void 0 ? void 0 : _a.id) || 0;
                }
                else if (op === '$sum' && prismaField) {
                    output[key] = ((_b = result._sum) === null || _b === void 0 ? void 0 : _b[prismaField]) || 0;
                }
                else if (op === '$avg' && prismaField) {
                    output[key] = ((_c = result._avg) === null || _c === void 0 ? void 0 : _c[prismaField]) || 0;
                }
                else if (op === '$max' && prismaField) {
                    output[key] = (_d = result._max) === null || _d === void 0 ? void 0 : _d[prismaField];
                }
                else if (op === '$min' && prismaField) {
                    output[key] = (_e = result._min) === null || _e === void 0 ? void 0 : _e[prismaField];
                }
            }
        }
        return [output];
    }
    if (by.length === 0)
        return [];
    const groupByOptions = {
        by,
        where,
    };
    for (const [key, val] of Object.entries(groupStage.$group)) {
        if (key === '_id')
            continue;
        if (typeof val === 'object' && val !== null) {
            const op = Object.keys(val)[0];
            const field = val[op];
            const prismaField = typeof field === 'string' && field.startsWith('$')
                ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
                : undefined;
            if (op === '$sum' && field === 1) {
                groupByOptions._count = Object.assign(Object.assign({}, (groupByOptions._count || {})), { id: true });
            }
            else if (op === '$sum' && prismaField) {
                groupByOptions._sum = Object.assign(Object.assign({}, (groupByOptions._sum || {})), { [prismaField]: true });
            }
        }
    }
    const results = await prismaModel.groupBy(groupByOptions);
    return results.map((r) => {
        var _a, _b;
        const output = { _id: by.length === 1 ? r[by[0]] : {} };
        for (const [key, val] of Object.entries(groupStage.$group)) {
            if (key === '_id')
                continue;
            if (typeof val === 'object' && val !== null) {
                const op = Object.keys(val)[0];
                const field = val[op];
                const prismaField = typeof field === 'string' && field.startsWith('$')
                    ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
                    : undefined;
                if (op === '$sum' && field === 1) {
                    output[key] = ((_a = r._count) === null || _a === void 0 ? void 0 : _a.id) || 0;
                }
                else if (op === '$sum' && prismaField) {
                    output[key] = ((_b = r._sum) === null || _b === void 0 ? void 0 : _b[prismaField]) || 0;
                }
            }
        }
        return output;
    });
}
async function executeLookupAggregate(prismaModel, pipeline, arrayFields, mapper) {
    var _a;
    const matchStage = pipeline.find((s) => s.$match);
    const where = matchStage ? translateQuery(matchStage.$match, arrayFields) : {};
    const items = await prismaModel.findMany({ where });
    let results = items.map(mapper);
    for (const stage of pipeline) {
        if (stage.$match)
            continue;
        if (stage.$unwind) {
            const field = typeof stage.$unwind === 'string'
                ? stage.$unwind.replace('$', '')
                : (_a = stage.$unwind.path) === null || _a === void 0 ? void 0 : _a.replace('$', '');
            if (field) {
                const unwound = [];
                for (const item of results) {
                    const arr = item[field];
                    if (Array.isArray(arr)) {
                        for (const val of arr) {
                            unwound.push(Object.assign(Object.assign({}, item), { [field]: val }));
                        }
                    }
                    else if (arr !== undefined && arr !== null) {
                        unwound.push(item);
                    }
                }
                results = unwound;
            }
        }
        if (stage.$sort) {
            const sortFields = Object.entries(stage.$sort);
            results.sort((a, b) => {
                for (const [field, dir] of sortFields) {
                    const aVal = a[field];
                    const bVal = b[field];
                    if (aVal < bVal)
                        return dir === 1 ? -1 : 1;
                    if (aVal > bVal)
                        return dir === 1 ? 1 : -1;
                }
                return 0;
            });
        }
        if (stage.$limit) {
            results = results.slice(0, stage.$limit);
        }
        if (stage.$skip) {
            results = results.slice(stage.$skip);
        }
        if (stage.$project) {
            results = results.map((item) => {
                const projected = {};
                for (const [key, val] of Object.entries(stage.$project)) {
                    if (val === 1 || val === true) {
                        projected[key] = item[key];
                    }
                    else if (typeof val === 'string' && val.startsWith('$')) {
                        projected[key] = item[val.substring(1)];
                    }
                }
                if (stage.$project._id !== 0) {
                    projected._id = item._id || item.id;
                }
                return projected;
            });
        }
    }
    return results;
}
let modelFieldsMap = null;
function loadModelFields() {
    if (modelFieldsMap)
        return modelFieldsMap;
    modelFieldsMap = {};
    try {
        let schemaPath = path.resolve(__dirname, '../../../erxes-api-shared/prisma/schema.prisma');
        if (!fs.existsSync(schemaPath)) {
            schemaPath = path.resolve(__dirname, '../../../../erxes-api-shared/prisma/schema.prisma');
        }
        if (!fs.existsSync(schemaPath)) {
            schemaPath = path.resolve(process.cwd(), '../erxes-api-shared/prisma/schema.prisma');
        }
        if (!fs.existsSync(schemaPath)) {
            schemaPath = path.resolve(process.cwd(), 'backend/erxes-api-shared/prisma/schema.prisma');
        }
        if (!fs.existsSync(schemaPath)) {
            schemaPath = path.resolve(process.cwd(), 'erxes-api-shared/prisma/schema.prisma');
        }
        if (!fs.existsSync(schemaPath)) {
            console.error('Adapter could NOT find schema.prisma in any fallbacks. executing from:', __dirname, 'process.cwd:', process.cwd());
        }
        if (fs.existsSync(schemaPath)) {
            const schemaContent = fs.readFileSync(schemaPath, 'utf8');
            const blocks = schemaContent.split(/\bmodel\s+/);
            for (const block of blocks) {
                const lines = block.split('\n');
                const firstLine = lines[0].trim();
                const modelNameMatch = firstLine.match(/^(\w+)/);
                if (!modelNameMatch)
                    continue;
                const modelName = modelNameMatch[1].toLowerCase();
                const fields = new Set();
                const nullableFields = new Set();
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
    }
    catch (err) {
        console.error('Failed to parse schema.prisma in adapter:', err);
    }
    return modelFieldsMap;
}
function filterPrismaInput(modelName, data) {
    if (!data || typeof data !== 'object')
        return data;
    const fieldsMap = loadModelFields();
    const validFields = fieldsMap[modelName.toLowerCase()];
    if (!validFields)
        return data;
    const filtered = {};
    for (const [key, val] of Object.entries(data)) {
        if (validFields.has(key)) {
            filtered[key] = val;
        }
    }
    return filtered;
}
function createPrismaAdapter(prismaModel, mapper, toPrismaData, toPrismaUpdate, arrayFields = new Set(), tableName) {
    const modelName = (prismaModel.name || prismaModel.$name || tableName || '').toLowerCase();
    async function handlePullUpdate(id, pullOps) {
        const current = await prismaModel.findUnique({ where: { id } });
        if (!current)
            return;
        const data = {};
        for (const [key, val] of Object.entries(pullOps)) {
            const prismaKey = key === '_id' ? 'id' : key;
            if (arrayFields.has(prismaKey) && Array.isArray(current[prismaKey])) {
                if (typeof val === 'object' && val !== null && '$in' in val) {
                    data[prismaKey] = current[prismaKey].filter((item) => !val.$in.includes(item));
                }
                else {
                    data[prismaKey] = current[prismaKey].filter((item) => item !== val);
                }
            }
        }
        if (Object.keys(data).length > 0) {
            await prismaModel.update({ where: { id }, data });
        }
    }
    async function handleAddToSetUpdate(id, addToSetOps) {
        const current = await prismaModel.findUnique({ where: { id } });
        if (!current)
            return;
        const data = {};
        for (const [key, val] of Object.entries(addToSetOps)) {
            const prismaKey = key === '_id' ? 'id' : key;
            if (arrayFields.has(prismaKey)) {
                const currentArr = current[prismaKey] || [];
                if (typeof val === 'object' && val !== null && '$each' in val) {
                    const newItems = val.$each.filter((item) => !currentArr.includes(item));
                    data[prismaKey] = [...currentArr, ...newItems];
                }
                else if (!currentArr.includes(val)) {
                    data[prismaKey] = [...currentArr, val];
                }
            }
        }
        if (Object.keys(data).length > 0) {
            await prismaModel.update({ where: { id }, data });
        }
    }
    async function processComplexUpdate(id, update) {
        const simpleData = translateUpdate(update, toPrismaUpdate, arrayFields);
        if (Object.keys(simpleData).length > 0) {
            await prismaModel.update({ where: { id }, data: filterPrismaInput(modelName, simpleData) });
        }
        if (update.$pull) {
            await handlePullUpdate(id, update.$pull);
        }
        if (update.$addToSet) {
            await handleAddToSetUpdate(id, update.$addToSet);
        }
    }
    return {
        find(query = {}, projection) {
            const q = new CentralPrismaQuery(query, prismaModel, mapper, arrayFields);
            if (projection) {
                q.select(projection);
            }
            return q;
        },
        findOne(query = {}, projection) {
            const q = new CentralPrismaFindOneQuery(query, prismaModel, mapper, arrayFields);
            if (projection) {
                q.select(projection);
            }
            return q;
        },
        async findById(id) {
            if (!id)
                return null;
            const item = await prismaModel.findUnique({ where: { id } });
            return mapper(item);
        },
        async countDocuments(query = {}) {
            const where = translateQuery(query, arrayFields);
            return prismaModel.count({ where });
        },
        async estimatedDocumentCount() {
            return prismaModel.count({});
        },
        async updateOne(query, update) {
            const where = translateQuery(query, arrayFields);
            const item = await prismaModel.findFirst({ where, select: { id: true } });
            if (item) {
                const hasPullOrAddToSet = update.$pull || update.$addToSet;
                if (hasPullOrAddToSet) {
                    await processComplexUpdate(item.id, update);
                }
                else {
                    const data = filterPrismaInput(modelName, translateUpdate(update, toPrismaUpdate, arrayFields));
                    await prismaModel.update({
                        where: { id: item.id },
                        data,
                    });
                }
                return { matchedCount: 1, modifiedCount: 1, acknowledged: true };
            }
            return { matchedCount: 0, modifiedCount: 0, acknowledged: true };
        },
        async updateMany(query, update) {
            const where = translateQuery(query, arrayFields);
            const hasPullOrAddToSet = update.$pull || update.$addToSet;
            if (hasPullOrAddToSet) {
                const items = await prismaModel.findMany({ where, select: { id: true } });
                for (const item of items) {
                    await processComplexUpdate(item.id, update);
                }
                return {
                    matchedCount: items.length,
                    modifiedCount: items.length,
                    acknowledged: true,
                };
            }
            const data = filterPrismaInput(modelName, translateUpdate(update, toPrismaUpdate, arrayFields));
            const result = await prismaModel.updateMany({ where, data });
            return {
                matchedCount: result.count,
                modifiedCount: result.count,
                acknowledged: true,
            };
        },
        async findByIdAndUpdate(idOrObj, update, options) {
            const id = typeof idOrObj === 'object' ? (idOrObj._id || idOrObj.id) : idOrObj;
            const hasPullOrAddToSet = update.$pull || update.$addToSet;
            if (hasPullOrAddToSet) {
                await processComplexUpdate(id, update);
                const updated = await prismaModel.findUnique({ where: { id } });
                return mapper(updated);
            }
            const data = filterPrismaInput(modelName, translateUpdate(update, toPrismaUpdate, arrayFields));
            const updated = await prismaModel.update({
                where: { id },
                data,
            });
            return mapper(updated);
        },
        async findOneAndUpdate(query, update, options) {
            const where = translateQuery(query, arrayFields);
            const item = await prismaModel.findFirst({ where });
            if (!item) {
                if (options === null || options === void 0 ? void 0 : options.upsert) {
                    const data = filterPrismaInput(modelName, translateUpdate(update, toPrismaUpdate, arrayFields));
                    const created = await prismaModel.create({ data: filterPrismaInput(modelName, Object.assign(Object.assign({}, translateQuery(query, arrayFields)), data)) });
                    return mapper(created);
                }
                return null;
            }
            const hasPullOrAddToSet = update.$pull || update.$addToSet;
            if (hasPullOrAddToSet) {
                await processComplexUpdate(item.id, update);
                const updated = await prismaModel.findUnique({ where: { id: item.id } });
                return mapper(updated);
            }
            const data = filterPrismaInput(modelName, translateUpdate(update, toPrismaUpdate, arrayFields));
            const updated = await prismaModel.update({
                where: { id: item.id },
                data,
            });
            return mapper(updated);
        },
        async findOneAndDelete(query) {
            const where = translateQuery(query, arrayFields);
            const item = await prismaModel.findFirst({ where });
            if (item) {
                await prismaModel.delete({ where: { id: item.id } });
                return mapper(item);
            }
            return null;
        },
        async create(docOrDocs) {
            if (Array.isArray(docOrDocs)) {
                const results = [];
                for (const doc of docOrDocs) {
                    const data = filterPrismaInput(modelName, toPrismaData(doc));
                    const created = await prismaModel.create({ data });
                    results.push(mapper(created));
                }
                return results;
            }
            const data = filterPrismaInput(modelName, toPrismaData(docOrDocs));
            const created = await prismaModel.create({ data });
            return mapper(created);
        },
        async insertMany(docs, options) {
            const results = [];
            for (const doc of docs) {
                const data = filterPrismaInput(modelName, toPrismaData(doc));
                const created = await prismaModel.create({ data });
                results.push(mapper(created));
            }
            return results;
        },
        async deleteOne(query) {
            const where = translateQuery(query, arrayFields);
            const item = await prismaModel.findFirst({ where, select: { id: true } });
            if (item) {
                await prismaModel.delete({ where: { id: item.id } });
                return { deletedCount: 1, acknowledged: true };
            }
            return { deletedCount: 0, acknowledged: true };
        },
        async deleteMany(query = {}) {
            const where = translateQuery(query, arrayFields);
            const result = await prismaModel.deleteMany({ where });
            return { deletedCount: result.count, acknowledged: true };
        },
        async findByIdAndDelete(id) {
            if (!id)
                return null;
            const item = await prismaModel.findUnique({ where: { id } });
            if (item) {
                await prismaModel.delete({ where: { id } });
                return mapper(item);
            }
            return null;
        },
        async exists(query) {
            const where = translateQuery(query, arrayFields);
            const item = await prismaModel.findFirst({ where, select: { id: true } });
            return item ? { _id: item.id } : null;
        },
        async distinct(field, query) {
            const prismaField = field === '_id' ? 'id' : field;
            const where = query ? translateQuery(query, arrayFields) : {};
            const items = await prismaModel.findMany({
                where,
                select: { [prismaField]: true },
            });
            const values = items.map((item) => item[prismaField]);
            return Array.from(new Set(values));
        },
        async aggregate(pipeline) {
            return executeAggregate(prismaModel, pipeline, mapper, arrayFields, tableName);
        },
        async bulkWrite(operations) {
            var _a, _b;
            let matched = 0;
            let modified = 0;
            let inserted = 0;
            for (const op of operations) {
                if (op.insertOne) {
                    const data = filterPrismaInput(modelName, toPrismaData(op.insertOne.document || op.insertOne));
                    await prismaModel.create({ data });
                    inserted++;
                }
                if (op.updateOne) {
                    const where = translateQuery(op.updateOne.filter, arrayFields);
                    const item = await prismaModel.findFirst({ where, select: { id: true } });
                    if (item) {
                        const hasPullOrAddToSet = ((_a = op.updateOne.update) === null || _a === void 0 ? void 0 : _a.$pull) || ((_b = op.updateOne.update) === null || _b === void 0 ? void 0 : _b.$addToSet);
                        if (hasPullOrAddToSet) {
                            await processComplexUpdate(item.id, op.updateOne.update);
                        }
                        else {
                            const data = filterPrismaInput(modelName, translateUpdate(op.updateOne.update, toPrismaUpdate, arrayFields));
                            await prismaModel.update({ where: { id: item.id }, data });
                        }
                        matched++;
                        modified++;
                    }
                }
                if (op.updateMany) {
                    const where = translateQuery(op.updateMany.filter, arrayFields);
                    const data = filterPrismaInput(modelName, translateUpdate(op.updateMany.update, toPrismaUpdate, arrayFields));
                    const result = await prismaModel.updateMany({ where, data });
                    matched += result.count;
                    modified += result.count;
                }
                if (op.deleteOne) {
                    const where = translateQuery(op.deleteOne.filter, arrayFields);
                    const item = await prismaModel.findFirst({ where, select: { id: true } });
                    if (item) {
                        await prismaModel.delete({ where: { id: item.id } });
                    }
                }
                if (op.deleteMany) {
                    const where = translateQuery(op.deleteMany.filter, arrayFields);
                    await prismaModel.deleteMany({ where });
                }
            }
            return {
                matchedCount: matched,
                modifiedCount: modified,
                insertedCount: inserted,
                acknowledged: true,
                ok: 1,
                result: { ok: 1 },
            };
        },
    };
}
//# sourceMappingURL=prismaAdapter.js.map