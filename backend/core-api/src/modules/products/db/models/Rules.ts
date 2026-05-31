import { IProductRule, IProductRuleDocument } from '@/products/@types/rule';
import { productRuleSchema } from '@/products/db/definitions/rules';
import { prepareDoc } from '@/products/utils/productRule';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';

export interface IProductRuleModel extends Model<IProductRuleDocument> {
  getRule(_id: string): Promise<IProductRuleDocument>;
  createRule(doc: IProductRule): Promise<IProductRuleDocument>;
  updateRule(_id: string, doc: IProductRule): Promise<IProductRuleDocument>;
  removeRule(_ids: string[]): void;
}

export const loadProductRuleClass = (models: IModels, _subdomain: string) => {
  class ProductRule {
    public static async getRule(_id: string) {
      const rule = await models.ProductRules.findById(_id);

      if (!rule) {
        throw new Error('Rule not found');
      }

      return rule;
    }

    public static async createRule(doc: IProductRule) {
      const preparedDoc = prepareDoc(doc);

      return models.ProductRules.create(preparedDoc);
    }

    public static async updateRule(_id: string, doc: IProductRule) {
      const rule = await models.ProductRules.getRule(_id);

      const preparedDoc = prepareDoc(doc);

      return models.ProductRules.findOneAndUpdate(
        { _id: rule._id },
        { $set: preparedDoc },
        { new: true },
      );
    }

    public static async removeRule(_ids: string[]) {
      return models.ProductRules.deleteMany({ _id: { $in: _ids } });
    }
  }

  productRuleSchema.loadClass(ProductRule);

  return productRuleSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const PRODUCT_RULE_ARRAY_FIELDS = new Set([
  'categoryIds',
  'excludeCategoryIds',
  'productIds',
  'excludeProductIds',
  'tagIds',
  'excludeTagIds'
]);

function mapPrismaProductRuleToMongoose(r: any): any {
  if (!r) return null;
  return {
    ...r,
    _id: r.id,
    categoryIds: r.categoryIds || [],
    excludeCategoryIds: r.excludeCategoryIds || [],
    productIds: r.productIds || [],
    excludeProductIds: r.excludeProductIds || [],
    tagIds: r.tagIds || [],
    excludeTagIds: r.excludeTagIds || [],
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaProductRule(update);
      return prisma.productRule.update({ where: { id: r.id }, data });
    },
    async deleteOne() {
      return prisma.productRule.delete({ where: { id: r.id } });
    }
  };
}
function mapMongooseToPrismaProductRule(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaProductRule(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaProductRule(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaProductRule(update));
  }
  return data;
}

export const loadPrismaProductRules = (models: IModels, subdomain: string) => {
  const origSchema = loadProductRuleClass(models, subdomain);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.productRule,
    mapPrismaProductRuleToMongoose,
    mapMongooseToPrismaProductRule,
    mapMongooseUpdateToPrismaProductRule,
    PRODUCT_RULE_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

