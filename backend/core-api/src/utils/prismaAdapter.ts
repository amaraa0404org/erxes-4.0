import { prisma } from 'erxes-api-shared/utils';
import * as fs from 'fs';
import * as path from 'path';

// =========================================================================
// QUERY TRANSLATION: Mongoose query operators → Prisma where clauses
// =========================================================================

function castToId(value: any): any {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) {
    return value.map(castToId);
  }
  if (typeof value === 'object') {
    if (typeof value.toHexString === 'function') {
      return value.toHexString();
    }
    if (value._id) {
      return typeof value._id === 'object' ? castToId(value._id) : String(value._id);
    }
    if (value.id) {
      if (Buffer.isBuffer(value.id)) {
        return value.id.toString('hex');
      }
      return typeof value.id === 'object' ? castToId(value.id) : String(value.id);
    }
  }
  return value;
}

export function translateQuery(query: any, arrayFields: Set<string> = new Set(), modelName?: string): any {
  if (!query) return {};
  const where: any = {};

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

    // Handle $in arrays containing null
    const hasIn = val && typeof val === 'object' && '$in' in val && Array.isArray((val as any).$in);
    if (hasIn && ((val as any).$in as any[]).includes(null)) {
      const nonNulls = ((val as any).$in as any[]).filter(x => x !== null && x !== undefined);
      const castedNonNulls = castToId(nonNulls);
      if (castedNonNulls.length === 0) {
        if (nullableFields && !nullableFields.has(prismaKey)) {
          continue;
        }
        where[prismaKey] = null;
      } else {
        const orConditions: any[] = [];
        if (!nullableFields || nullableFields.has(prismaKey)) {
          orConditions.push({ [prismaKey]: null });
        }
        if (castedNonNulls.length > 0) {
          orConditions.push({ [prismaKey]: { in: castedNonNulls } });
        }
        if (orConditions.length === 1) {
          const singleCond = orConditions[0];
          where[prismaKey] = singleCond[prismaKey];
        } else if (orConditions.length > 1) {
          if (where.OR) {
            if (!where.AND) where.AND = [];
            where.AND.push({ OR: orConditions });
          } else {
            where.OR = orConditions;
          }
        }
      }
      continue;
    }

    // Handle $nin arrays containing null
    const hasNin = val && typeof val === 'object' && '$nin' in val && Array.isArray((val as any).$nin);
    if (hasNin && ((val as any).$nin as any[]).includes(null)) {
      const nonNulls = ((val as any).$nin as any[]).filter(x => x !== null && x !== undefined);
      const castedNonNulls = castToId(nonNulls);
      const condition: any = {};
      if (!nullableFields || nullableFields.has(prismaKey)) {
        condition.not = null;
      }
      if (castedNonNulls.length > 0) {
        condition.notIn = castedNonNulls;
      }
      if (Object.keys(condition).length > 0) {
        where[prismaKey] = condition;
      }
      continue;
    }

    const translatedVal = translateVal(prismaKey, val, arrayFields, nullableFields, modelName);

    if (translatedVal === undefined) {
      continue;
    }

    // Skip querying null on non-nullable field
    if (translatedVal === null && nullableFields && !nullableFields.has(prismaKey)) {
      continue;
    }

    where[prismaKey] = translatedVal;
  }

  return where;
}

/**
 * Translate a regex source string to a Prisma-compatible filter.
 *
 * MongoDB regex patterns like `^foo$` (exact match), `^foo` (starts with),
 * `foo$` (ends with) are common. Prisma doesn't support regex, so we map
 * them to `equals`, `startsWith`, `endsWith`, or `contains`.
 */
function regexToPrismaFilter(source: string, caseInsensitive: boolean) {
  const mode = caseInsensitive ? 'insensitive' : undefined;
  const startsWithAnchor = source.startsWith('^');
  const endsWithAnchor = source.endsWith('$') && !source.endsWith('\\$');

  // Strip anchors to get the plain pattern
  let pattern = source;
  if (startsWithAnchor) pattern = pattern.slice(1);
  if (endsWithAnchor) pattern = pattern.slice(0, -1);

  // ^exact$ → equals
  if (startsWithAnchor && endsWithAnchor) {
    return { equals: pattern, mode };
  }
  // ^prefix → startsWith
  if (startsWithAnchor) {
    return { startsWith: pattern, mode };
  }
  // suffix$ → endsWith
  if (endsWithAnchor) {
    return { endsWith: pattern, mode };
  }
  // fallback → contains
  return { contains: pattern, mode };
}

function translateVal(prismaKey: string, val: any, arrayFields: Set<string>, nullableFields?: Set<string> | null, modelName?: string): any {
  const isArrayField = arrayFields.has(prismaKey);

  if (val === null || val === undefined) {
    if (val === null && nullableFields && !nullableFields.has(prismaKey)) {
      return undefined;
    }
    return val;
  }

  if (val instanceof RegExp) {
    return regexToPrismaFilter(val.source, val.flags.includes('i'));
  }

  if (typeof val === 'object' && !Array.isArray(val) && !(val instanceof Date)) {
    const keys = Object.keys(val);

    // Handle compound operators like { $gt: x, $lt: y }
    if (keys.length > 1 && keys.every(k => k.startsWith('$'))) {
      const compound: any = {};
      for (const k of keys) {
        if (k === '$gt') compound.gt = castToId(val[k]);
        else if (k === '$gte') compound.gte = castToId(val[k]);
        else if (k === '$lt') compound.lt = castToId(val[k]);
        else if (k === '$lte') compound.lte = castToId(val[k]);
        else if (k === '$ne') {
          if (val[k] === null && nullableFields && !nullableFields.has(prismaKey)) {
            // Skip since required field is never null
          } else {
            compound.not = castToId(val[k]);
          }
        }
        else if (k === '$in') {
          if (isArrayField) return { hasSome: castToId(val[k]) };
          compound.in = castToId(val[k]);
        }
        else if (k === '$nin') {
          if (isArrayField) return { not: { hasSome: castToId(val[k]) } };
          compound.notIn = castToId(val[k]);
        }
        else if (k === '$regex') {
          compound.contains = val[k] instanceof RegExp ? val[k].source : val[k];
          if (val.$options?.includes('i')) compound.mode = 'insensitive';
        }
        else if (k === '$options') {
          // handled above
        }
        else if (k === '$exists') {
          if (val[k]) {
            if (nullableFields && !nullableFields.has(prismaKey)) {
              // Skip since required field always exists
            } else {
              return { not: null };
            }
          } else {
            return null;
          }
        }
      }
      if (Object.keys(compound).length > 0) return compound;
      return undefined;
    }

    if (keys.includes('$in')) {
      if (isArrayField) {
        return { hasSome: castToId(val.$in) };
      }
      return { in: castToId(val.$in) };
    }
    if (keys.includes('$nin')) {
      if (isArrayField) {
        return { not: { hasSome: castToId(val.$nin) } };
      }
      return { notIn: castToId(val.$nin) };
    }
    if (keys.includes('$ne')) {
      if (isArrayField) {
        return { not: { has: castToId(val.$ne) } };
      }
      if (val.$ne === null) {
        if (nullableFields && !nullableFields.has(prismaKey)) {
          return undefined;
        }
        return { not: null };
      }
      return { not: castToId(val.$ne) };
    }
    if (keys.includes('$eq')) {
      if (isArrayField) {
        return { has: castToId(val.$eq) };
      }
      if (val.$eq === null && nullableFields && !nullableFields.has(prismaKey)) {
        return undefined;
      }
      return castToId(val.$eq);
    }
    if (keys.includes('$gt')) {
      return { gt: castToId(val.$gt) };
    }
    if (keys.includes('$gte')) {
      return { gte: castToId(val.$gte) };
    }
    if (keys.includes('$lt')) {
      return { lt: castToId(val.$lt) };
    }
    if (keys.includes('$lte')) {
      return { lte: castToId(val.$lte) };
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
        if (nullableFields && !nullableFields.has(prismaKey)) {
          return undefined;
        }
        return { not: null };
      } else {
        return null;
      }
    }
    if (keys.includes('$all')) {
      if (isArrayField) {
        return { hasEvery: castToId(val.$all) };
      }
    }
    if (keys.includes('$elemMatch')) {
      return { some: translateQuery(val.$elemMatch, arrayFields, modelName) };
    }
    if (keys.includes('$not')) {
      const inner = translateVal(prismaKey, val.$not, arrayFields, nullableFields, modelName);
      if (inner === undefined) return undefined;
      return { not: inner };
    }
    
    // Support Prisma-style operators (in, notIn, not, gt, gte, lt, lte, equals)
    if (keys.includes('in')) {
      if (isArrayField) {
        return { hasSome: castToId(val.in) };
      }
      return { in: castToId(val.in) };
    }
    if (keys.includes('notIn')) {
      if (isArrayField) {
        return { not: { hasSome: castToId(val.notIn) } };
      }
      return { notIn: castToId(val.notIn) };
    }
    if (keys.includes('not')) {
      if (val.not === null) {
        if (nullableFields && !nullableFields.has(prismaKey)) {
          return undefined;
        }
        return { not: null };
      }
      const inner = translateVal(prismaKey, val.not, arrayFields, nullableFields, modelName);
      if (inner === undefined) return undefined;
      return { not: inner };
    }
    if (keys.includes('gt')) {
      return { gt: castToId(val.gt) };
    }
    if (keys.includes('gte')) {
      return { gte: castToId(val.gte) };
    }
    if (keys.includes('lt')) {
      return { lt: castToId(val.lt) };
    }
    if (keys.includes('lte')) {
      return { lte: castToId(val.lte) };
    }
    if (keys.includes('equals')) {
      if (val.equals === null && nullableFields && !nullableFields.has(prismaKey)) {
        return undefined;
      }
      return { equals: castToId(val.equals) };
    }
    if (keys.includes('$size')) {
      return undefined;
    }
  }

  if (isArrayField) {
    if (Array.isArray(val)) {
      return { equals: castToId(val) };
    }
    return { has: castToId(val) };
  }

  return castToId(val);
}

// =========================================================================
// SORT TRANSLATION: Mongoose sort → Prisma orderBy
// =========================================================================

export function translateSort(sort: any): any {
  if (!sort) return undefined;
  if (typeof sort === 'string') {
    const parts = sort.split(' ');
    return parts.map(p => {
      if (p.startsWith('-')) {
        return { [p.substring(1)]: 'desc' };
      }
      return { [p]: 'asc' };
    });
  }
  const orderList: any[] = [];
  for (const [key, val] of Object.entries(sort)) {
    const prismaKey = key === '_id' ? 'id' : key;
    const direction = val === -1 || val === 'desc' ? 'desc' : 'asc';
    orderList.push({ [prismaKey]: direction });
  }
  return orderList;
}

// =========================================================================
// UPDATE TRANSLATION: Mongoose $set/$unset/$push/$pull/$addToSet → Prisma data
// =========================================================================

export function translateUpdate(
  update: any,
  toPrismaUpdate: (u: any) => any,
  arrayFields: Set<string> = new Set()
): any {
  if (!update) return {};
  const data: any = {};

  // Handle $set
  if (update.$set) {
    Object.assign(data, toPrismaUpdate(update.$set));
  }

  // Handle $unset
  if (update.$unset) {
    for (const key of Object.keys(update.$unset)) {
      const prismaKey = key === '_id' ? 'id' : key;
      data[prismaKey] = null;
    }
  }

  // Handle $push for array fields
  if (update.$push) {
    for (const [key, val] of Object.entries(update.$push as Record<string, any>)) {
      const prismaKey = key === '_id' ? 'id' : key;
      if (arrayFields.has(prismaKey)) {
        if (val && typeof val === 'object' && '$each' in val) {
          data[prismaKey] = { push: val.$each };
        } else {
          data[prismaKey] = { push: val };
        }
      }
      // For JSONB fields, we need to handle at the application level
    }
  }

  // Handle $pull for array fields - Prisma doesn't support $pull natively,
  // so we need to read-modify-write for array fields
  // This is handled in the adapter methods below

  // Handle $addToSet for array fields  
  // Similar to $push but ensures uniqueness - handled in adapter methods

  // Handle $inc
  if (update.$inc) {
    for (const [key, val] of Object.entries(update.$inc as Record<string, any>)) {
      const prismaKey = key === '_id' ? 'id' : key;
      data[prismaKey] = { increment: val };
    }
  }

  // If no operators found, treat as a plain update object
  const hasOperators = Object.keys(update).some(k => k.startsWith('$'));
  if (!hasOperators) {
    Object.assign(data, toPrismaUpdate(update));
  }

  return data;
}

// =========================================================================
// SELECT/PROJECTION TRANSLATION: Mongoose select/projection → Prisma select
// =========================================================================

export function translateSelect(select: any): any {
  if (!select) return undefined;
  if (typeof select === 'string') {
    const result: any = {};
    for (const field of select.split(' ')) {
      if (field.startsWith('-')) {
        // Prisma doesn't support exclusion projections natively
        continue;
      }
      const prismaKey = field === '_id' ? 'id' : field;
      result[prismaKey] = true;
    }
    // Always include id
    result.id = true;
    return result;
  }
  if (typeof select === 'object') {
    const result: any = {};
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

// =========================================================================
// CHAINABLE QUERY BUILDERS (mimic Mongoose Query interface)
// =========================================================================

export class CentralPrismaQuery {
  private query: any;
  private prismaModel: any;
  private sortOrder: any = null;
  private limitVal: number | null = null;
  private skipVal: number | null = null;
  private selectFields: any = null;
  private mapper: (item: any) => any;
  private arrayFields: Set<string>;

  constructor(query: any, prismaModel: any, mapper: (item: any) => any, arrayFields: Set<string>) {
    this.query = query;
    this.prismaModel = prismaModel;
    this.mapper = mapper;
    this.arrayFields = arrayFields;
  }

  sort(sortOrder: any) {
    this.sortOrder = sortOrder;
    return this;
  }

  limit(limit: number) {
    this.limitVal = limit;
    return this;
  }

  skip(skip: number) {
    this.skipVal = skip;
    return this;
  }

  lean() {
    return this;
  }

  select(fields: any) {
    this.selectFields = fields;
    return this;
  }

  async distinct(field: string) {
    const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
    const where = translateQuery(this.query, this.arrayFields, modelName);
    const prismaField = field === '_id' ? 'id' : field;
    const items = await this.prismaModel.findMany({
      where,
      select: { [prismaField]: true }
    });
    const values = items.map((item: any) => item[prismaField]);
    return Array.from(new Set(values));
  }

  async exec() {
    const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
    const where = translateQuery(this.query, this.arrayFields, modelName);
    const options: any = { where };

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

  // Support cursor-based iteration
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

  then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
    return this.exec().then(onfulfilled, onrejected);
  }
}

export class CentralPrismaFindOneQuery {
  private query: any;
  private prismaModel: any;
  private mapper: (item: any) => any;
  private sortOrder: any = null;
  private selectFields: any = null;
  private arrayFields: Set<string>;

  constructor(query: any, prismaModel: any, mapper: (item: any) => any, arrayFields: Set<string>) {
    this.query = query;
    this.prismaModel = prismaModel;
    this.mapper = mapper;
    this.arrayFields = arrayFields;
  }

  sort(sortOrder: any) {
    this.sortOrder = sortOrder;
    return this;
  }

  lean() {
    return this;
  }

  select(fields: any) {
    this.selectFields = fields;
    return this;
  }

  async exec() {
    const modelName = (this.prismaModel.name || this.prismaModel.$name || '').toLowerCase();
    const where = translateQuery(this.query, this.arrayFields, modelName);
    const options: any = { where };
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

  then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
    return this.exec().then(onfulfilled, onrejected);
  }
}

// =========================================================================
// AGGREGATE PIPELINE TRANSLATOR
// =========================================================================

/**
 * Translates a subset of MongoDB aggregation pipeline stages to Prisma operations.
 * This handles the most common patterns: $match, $group, $sort, $limit, $skip, $project,
 * $lookup (basic), $unwind.
 * 
 * For complex aggregations, falls back to raw SQL via prisma.$queryRaw.
 */
export async function executeAggregate(
  prismaModel: any,
  pipeline: any[],
  mapper: (item: any) => any,
  arrayFields: Set<string> = new Set(),
  tableName?: string,
): Promise<any[]> {
  const modelName = (prismaModel.name || prismaModel.$name || tableName || '').toLowerCase();
  // Simple pipelines: just $match
  if (pipeline.length === 1 && pipeline[0].$match) {
    const where = translateQuery(pipeline[0].$match, arrayFields, modelName);
    const items = await prismaModel.findMany({ where });
    return items.map(mapper);
  }

  // For $match + $group patterns (common)
  const matchStage = pipeline.find((s: any) => s.$match);
  const groupStage = pipeline.find((s: any) => s.$group);
  const sortStage = pipeline.find((s: any) => s.$sort);
  const limitStage = pipeline.find((s: any) => s.$limit);
  const skipStage = pipeline.find((s: any) => s.$skip);
  const lookupStages = pipeline.filter((s: any) => s.$lookup);
  const unwindStages = pipeline.filter((s: any) => s.$unwind);
  const projectStage = pipeline.find((s: any) => s.$project);

  // If there's a $group stage, we need to use groupBy
  if (groupStage) {
    return executeGroupAggregate(prismaModel, pipeline, arrayFields, mapper);
  }

  // $lookup support (basic join simulation)
  if (lookupStages.length > 0 || unwindStages.length > 0) {
    return executeLookupAggregate(prismaModel, pipeline, arrayFields, mapper);
  }

  // Simple match + sort + limit + skip + project
  const where = matchStage ? translateQuery(matchStage.$match, arrayFields, modelName) : {};
  const options: any = { where };

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

  // Apply $project if present
  if (projectStage) {
    results = results.map((item: any) => {
      const projected: any = {};
      for (const [key, val] of Object.entries(projectStage.$project)) {
        if (val === 1 || val === true) {
          projected[key] = item[key];
        }
      }
      // Always include _id unless explicitly excluded
      if (projectStage.$project._id !== 0 && projectStage.$project._id !== false) {
        projected._id = item._id || item.id;
      }
      return projected;
    });
  }

  return results;
}

async function executeGroupAggregate(
  prismaModel: any,
  pipeline: any[],
  arrayFields: Set<string>,
  mapper: (item: any) => any,
): Promise<any[]> {
  const modelName = (prismaModel.name || prismaModel.$name || '').toLowerCase();
  const matchStage = pipeline.find((s: any) => s.$match);
  const groupStage = pipeline.find((s: any) => s.$group);

  if (!groupStage) return [];

  const where = matchStage ? translateQuery(matchStage.$match, arrayFields, modelName) : {};
  const groupId = groupStage.$group._id;

  // Determine groupBy fields
  let by: string[] = [];
  if (typeof groupId === 'string' && groupId.startsWith('$')) {
    const field = groupId.substring(1);
    by = [field === '_id' ? 'id' : field];
  } else if (groupId === null) {
    // Group all records together - use aggregate without groupBy
    const aggregations: any = {};
    for (const [key, val] of Object.entries(groupStage.$group)) {
      if (key === '_id') continue;
      if (typeof val === 'object' && val !== null) {
        const op = Object.keys(val as object)[0];
        const field = (val as any)[op];
        const prismaField = typeof field === 'string' && field.startsWith('$')
          ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
          : undefined;

        if (op === '$sum') {
          if (field === 1) {
            aggregations._count = { id: true };
          } else if (prismaField) {
            aggregations._sum = { ...(aggregations._sum || {}), [prismaField]: true };
          }
        } else if (op === '$avg' && prismaField) {
          aggregations._avg = { ...(aggregations._avg || {}), [prismaField]: true };
        } else if (op === '$max' && prismaField) {
          aggregations._max = { ...(aggregations._max || {}), [prismaField]: true };
        } else if (op === '$min' && prismaField) {
          aggregations._min = { ...(aggregations._min || {}), [prismaField]: true };
        }
      }
    }

    const result = await prismaModel.aggregate({
      where,
      ...aggregations,
    });

    // Map the result to match MongoDB's output format
    const output: any = { _id: null };
    for (const [key, val] of Object.entries(groupStage.$group)) {
      if (key === '_id') continue;
      if (typeof val === 'object' && val !== null) {
        const op = Object.keys(val as object)[0];
        const field = (val as any)[op];
        const prismaField = typeof field === 'string' && field.startsWith('$')
          ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
          : undefined;

        if (op === '$sum' && field === 1) {
          output[key] = result._count?.id || 0;
        } else if (op === '$sum' && prismaField) {
          output[key] = result._sum?.[prismaField] || 0;
        } else if (op === '$avg' && prismaField) {
          output[key] = result._avg?.[prismaField] || 0;
        } else if (op === '$max' && prismaField) {
          output[key] = result._max?.[prismaField];
        } else if (op === '$min' && prismaField) {
          output[key] = result._min?.[prismaField];
        }
      }
    }

    return [output];
  }

  if (by.length === 0) return [];

  // Build Prisma groupBy
  const groupByOptions: any = {
    by,
    where,
  };

  // Add aggregate operations
  for (const [key, val] of Object.entries(groupStage.$group)) {
    if (key === '_id') continue;
    if (typeof val === 'object' && val !== null) {
      const op = Object.keys(val as object)[0];
      const field = (val as any)[op];
      const prismaField = typeof field === 'string' && field.startsWith('$')
        ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
        : undefined;

      if (op === '$sum' && field === 1) {
        groupByOptions._count = { ...(groupByOptions._count || {}), id: true };
      } else if (op === '$sum' && prismaField) {
        groupByOptions._sum = { ...(groupByOptions._sum || {}), [prismaField]: true };
      }
    }
  }

  const results = await prismaModel.groupBy(groupByOptions);

  return results.map((r: any) => {
    const output: any = { _id: by.length === 1 ? r[by[0]] : {} };
    for (const [key, val] of Object.entries(groupStage.$group)) {
      if (key === '_id') continue;
      if (typeof val === 'object' && val !== null) {
        const op = Object.keys(val as object)[0];
        const field = (val as any)[op];
        const prismaField = typeof field === 'string' && field.startsWith('$')
          ? (field.substring(1) === '_id' ? 'id' : field.substring(1))
          : undefined;

        if (op === '$sum' && field === 1) {
          output[key] = r._count?.id || 0;
        } else if (op === '$sum' && prismaField) {
          output[key] = r._sum?.[prismaField] || 0;
        }
      }
    }
    return output;
  });
}

async function executeLookupAggregate(
  prismaModel: any,
  pipeline: any[],
  arrayFields: Set<string>,
  mapper: (item: any) => any,
): Promise<any[]> {
  const modelName = (prismaModel.name || prismaModel.$name || '').toLowerCase();
  // For lookup aggregations, we simulate by doing multiple queries
  const matchStage = pipeline.find((s: any) => s.$match);
  const where = matchStage ? translateQuery(matchStage.$match, arrayFields, modelName) : {};

  const items = await prismaModel.findMany({ where });
  let results = items.map(mapper);

  // Process remaining pipeline stages in order
  for (const stage of pipeline) {
    if (stage.$match) continue; // already handled

    if (stage.$unwind) {
      const field = typeof stage.$unwind === 'string'
        ? stage.$unwind.replace('$', '')
        : stage.$unwind.path?.replace('$', '');
      if (field) {
        const unwound: any[] = [];
        for (const item of results) {
          const arr = item[field];
          if (Array.isArray(arr)) {
            for (const val of arr) {
              unwound.push({ ...item, [field]: val });
            }
          } else if (arr !== undefined && arr !== null) {
            unwound.push(item);
          }
        }
        results = unwound;
      }
    }

    if (stage.$sort) {
      const sortFields = Object.entries(stage.$sort);
      results.sort((a: any, b: any) => {
        for (const [field, dir] of sortFields) {
          const aVal = a[field];
          const bVal = b[field];
          if (aVal < bVal) return (dir as number) === 1 ? -1 : 1;
          if (aVal > bVal) return (dir as number) === 1 ? 1 : -1;
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
      results = results.map((item: any) => {
        const projected: any = {};
        for (const [key, val] of Object.entries(stage.$project)) {
          if (val === 1 || val === true) {
            projected[key] = item[key];
          } else if (typeof val === 'string' && val.startsWith('$')) {
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

let modelFieldsMap: Record<string, Set<string>> | null = null;

function loadModelFields() {
  if (modelFieldsMap) return modelFieldsMap;
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

export function filterPrismaInput(modelName: string, data: any): any {
  if (!data || typeof data !== 'object') return data;
  const fieldsMap = loadModelFields();
  const validFields = fieldsMap[modelName.toLowerCase()];
  if (!validFields) return data;

  const filtered: any = {};
  for (const [key, val] of Object.entries(data)) {
    if (validFields.has(key)) {
      filtered[key] = val;
    }
  }
  return filtered;
}

// =========================================================================
// MAIN ADAPTER FACTORY
// =========================================================================

export function createPrismaAdapter(
  prismaModel: any,
  mapper: (item: any) => any,
  toPrismaData: (doc: any) => any,
  toPrismaUpdate: (update: any) => any,
  arrayFields: Set<string> = new Set(),
  tableName?: string,
) {
  const modelName = (prismaModel.name || prismaModel.$name || tableName || '').toLowerCase();

  // Helper: handle $pull on array fields by read-modify-write
  async function handlePullUpdate(id: string, pullOps: Record<string, any>) {
    const current = await prismaModel.findUnique({ where: { id } });
    if (!current) return;

    const data: any = {};
    for (const [key, val] of Object.entries(pullOps)) {
      const prismaKey = key === '_id' ? 'id' : key;
      if (arrayFields.has(prismaKey) && Array.isArray(current[prismaKey])) {
        if (typeof val === 'object' && val !== null && '$in' in val) {
          data[prismaKey] = current[prismaKey].filter((item: any) => !val.$in.includes(item));
        } else {
          data[prismaKey] = current[prismaKey].filter((item: any) => item !== val);
        }
      }
    }
    if (Object.keys(data).length > 0) {
      await prismaModel.update({ where: { id }, data });
    }
  }

  // Helper: handle $addToSet on array fields by read-modify-write
  async function handleAddToSetUpdate(id: string, addToSetOps: Record<string, any>) {
    const current = await prismaModel.findUnique({ where: { id } });
    if (!current) return;

    const data: any = {};
    for (const [key, val] of Object.entries(addToSetOps)) {
      const prismaKey = key === '_id' ? 'id' : key;
      if (arrayFields.has(prismaKey)) {
        const currentArr = current[prismaKey] || [];
        if (typeof val === 'object' && val !== null && '$each' in val) {
          const newItems = val.$each.filter((item: any) => !currentArr.includes(item));
          data[prismaKey] = [...currentArr, ...newItems];
        } else if (!currentArr.includes(val)) {
          data[prismaKey] = [...currentArr, val];
        }
      }
    }
    if (Object.keys(data).length > 0) {
      await prismaModel.update({ where: { id }, data });
    }
  }

  // Process complex update with $pull/$addToSet/$push
  async function processComplexUpdate(id: string, update: any) {
    // First handle simple operations via translateUpdate
    const simpleData = translateUpdate(update, toPrismaUpdate, arrayFields);

    // Remove array push operations from simpleData (handled separately for $push with Prisma native push)
    // Actually Prisma supports push natively for String[] fields, but $pull and $addToSet need read-modify-write
    
    if (Object.keys(simpleData).length > 0) {
      await prismaModel.update({ where: { id }, data: filterPrismaInput(modelName, simpleData) });
    }

    // Handle $pull
    if (update.$pull) {
      await handlePullUpdate(id, update.$pull);
    }

    // Handle $addToSet
    if (update.$addToSet) {
      await handleAddToSetUpdate(id, update.$addToSet);
    }
  }

  return {
    find(query: any = {}, projection?: any) {
      const q = new CentralPrismaQuery(query, prismaModel, mapper, arrayFields);
      if (projection) {
        q.select(projection);
      }
      return q;
    },

    findOne(query: any = {}, projection?: any) {
      const q = new CentralPrismaFindOneQuery(query, prismaModel, mapper, arrayFields);
      if (projection) {
        q.select(projection);
      }
      return q;
    },

    async findById(id: string) {
      if (!id) return null;
      const item = await prismaModel.findUnique({ where: { id } });
      return mapper(item);
    },

    async countDocuments(query: any = {}) {
      const where = translateQuery(query, arrayFields, modelName);
      return prismaModel.count({ where });
    },

    async estimatedDocumentCount() {
      return prismaModel.count({});
    },

    async updateOne(query: any, update: any) {
      const where = translateQuery(query, arrayFields, modelName);
      const item = await prismaModel.findFirst({ where, select: { id: true } });
      if (item) {
        const hasPullOrAddToSet = update.$pull || update.$addToSet;
        if (hasPullOrAddToSet) {
          await processComplexUpdate(item.id, update);
        } else {
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

    async updateMany(query: any, update: any) {
      const where = translateQuery(query, arrayFields, modelName);
      const hasPullOrAddToSet = update.$pull || update.$addToSet;

      if (hasPullOrAddToSet) {
        // Need read-modify-write for each item
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

    async findByIdAndUpdate(idOrObj: any, update: any, options?: any) {
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

    async findOneAndUpdate(query: any, update: any, options?: any) {
      const where = translateQuery(query, arrayFields, modelName);
      const item = await prismaModel.findFirst({ where });

      if (!item) {
        if (options?.upsert) {
          const data = filterPrismaInput(modelName, translateUpdate(update, toPrismaUpdate, arrayFields));
          const created = await prismaModel.create({ data: filterPrismaInput(modelName, { ...translateQuery(query, arrayFields, modelName), ...data }) });
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

    async findOneAndDelete(query: any) {
      const where = translateQuery(query, arrayFields, modelName);
      const item = await prismaModel.findFirst({ where });
      if (item) {
        await prismaModel.delete({ where: { id: item.id } });
        return mapper(item);
      }
      return null;
    },

    async create(docOrDocs: any) {
      if (Array.isArray(docOrDocs)) {
        const results: any[] = [];
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

    async insertMany(docs: any[], options?: any) {
      const results: any[] = [];
      for (const doc of docs) {
        const data = filterPrismaInput(modelName, toPrismaData(doc));
        const created = await prismaModel.create({ data });
        results.push(mapper(created));
      }
      return results;
    },

    async deleteOne(query: any) {
      const where = translateQuery(query, arrayFields, modelName);
      const item = await prismaModel.findFirst({ where, select: { id: true } });
      if (item) {
        await prismaModel.delete({ where: { id: item.id } });
        return { deletedCount: 1, acknowledged: true };
      }
      return { deletedCount: 0, acknowledged: true };
    },

    async deleteMany(query: any = {}) {
      const where = translateQuery(query, arrayFields, modelName);
      const result = await prismaModel.deleteMany({ where });
      return { deletedCount: result.count, acknowledged: true };
    },

    async findByIdAndDelete(id: string) {
      if (!id) return null;
      const item = await prismaModel.findUnique({ where: { id } });
      if (item) {
        await prismaModel.delete({ where: { id } });
        return mapper(item);
      }
      return null;
    },

    async exists(query: any) {
      const where = translateQuery(query, arrayFields, modelName);
      const item = await prismaModel.findFirst({ where, select: { id: true } });
      return item ? { _id: item.id } : null;
    },

    async distinct(field: string, query?: any) {
      const prismaField = field === '_id' ? 'id' : field;
      const where = query ? translateQuery(query, arrayFields, modelName) : {};
      const items = await prismaModel.findMany({
        where,
        select: { [prismaField]: true },
      });
      const values = items.map((item: any) => item[prismaField]);
      return Array.from(new Set(values));
    },

    async aggregate(pipeline: any[]) {
      return executeAggregate(prismaModel, pipeline, mapper, arrayFields, tableName);
    },

    async bulkWrite(operations: any[]) {
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
          const where = translateQuery(op.updateOne.filter, arrayFields, modelName);
          const item = await prismaModel.findFirst({ where, select: { id: true } });
          if (item) {
            const hasPullOrAddToSet = op.updateOne.update?.$pull || op.updateOne.update?.$addToSet;
            if (hasPullOrAddToSet) {
              await processComplexUpdate(item.id, op.updateOne.update);
            } else {
              const data = filterPrismaInput(modelName, translateUpdate(op.updateOne.update, toPrismaUpdate, arrayFields));
              await prismaModel.update({ where: { id: item.id }, data });
            }
            matched++;
            modified++;
          }
        }
        if (op.updateMany) {
          const where = translateQuery(op.updateMany.filter, arrayFields, modelName);
          const data = filterPrismaInput(modelName, translateUpdate(op.updateMany.update, toPrismaUpdate, arrayFields));
          const result = await prismaModel.updateMany({ where, data });
          matched += result.count;
          modified += result.count;
        }
        if (op.deleteOne) {
          const where = translateQuery(op.deleteOne.filter, arrayFields, modelName);
          const item = await prismaModel.findFirst({ where, select: { id: true } });
          if (item) {
            await prismaModel.delete({ where: { id: item.id } });
          }
        }
        if (op.deleteMany) {
          const where = translateQuery(op.deleteMany.filter, arrayFields, modelName);
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
