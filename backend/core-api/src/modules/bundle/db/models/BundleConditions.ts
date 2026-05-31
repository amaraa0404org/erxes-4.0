import { IBundleCondition, IBundleConditionDocument } from '@/bundle/@types';
import { bundleConditionsSchema } from '@/bundle/db/definitions/bundleCondition';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';

export interface IBundleConditionModel extends Model<IBundleConditionDocument> {
  getCondidtion(doc: any): IBundleConditionDocument;
  getConditionByCode(code: string): IBundleConditionDocument;
  generateCode(code: string): string;
  createCondition(doc: IBundleCondition): IBundleConditionDocument;
  updateCondition(
    _id: string,
    fields: IBundleCondition,
  ): IBundleConditionDocument;
  removeCondition(_ids: string[]): void;
}

export const loadBundleConditionClass = (
  models: IModels,
  subdomain: string,
) => {
  class BundleCondition {
    /*
     * Get a BundleCondition
     */
    public static async getCondidtion(doc: any) {
      const condition = await models.BundleCondition.findOne(doc).lean();

      if (!condition) {
        throw new Error('BundleCondition not found');
      }

      return condition;
    }

    public static async createCondition(doc: IBundleCondition) {
      return await models.BundleCondition.create({
        ...doc,
        createdAt: new Date(),
      });
    }

    public static async updateCondition(_id: string, fields: IBundleCondition) {
      return models.BundleCondition.findOneAndUpdate(
        { _id },
        { $set: { ...fields } },
        { new: true },
      );
    }

    public static async removeCondition(_ids: string[]) {
      const objects = await models.BundleCondition.deleteMany({ _id: { $in: _ids } });

      if (objects.deletedCount === 0) {
        throw new Error(`BundleCondition not found with ids ${_ids.join(', ')}`);
      }

      return objects;
    }
  }

  bundleConditionsSchema.loadClass(BundleCondition);

  return bundleConditionsSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const BUNDLECONDITION_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaBundleConditionToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaBundleCondition(update);
      return prisma.bundleCondition.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.bundleCondition.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaBundleCondition(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaBundleCondition(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaBundleCondition(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaBundleCondition(update));
  }
  return data;
}

export const loadPrismaBundleConditions = (models: IModels, subdomain: string) => {
  const origSchema = loadBundleConditionClass(models, subdomain);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.bundleCondition,
    mapPrismaBundleConditionToMongoose,
    mapMongooseToPrismaBundleCondition,
    mapMongooseUpdateToPrismaBundleCondition,
    BUNDLECONDITION_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

