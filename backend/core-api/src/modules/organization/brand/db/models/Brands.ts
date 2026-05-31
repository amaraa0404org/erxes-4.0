import { brandSchema } from '@/organization/brand/db/definitions/brands';
import { IBrand, IBrandDocument } from '@/organization/brand/types';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { IModels } from '~/connectionResolvers';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';

export interface IBrandModel extends Model<IBrandDocument> {
  getBrand(doc: any): Promise<IBrandDocument>;
  generateCode(code: string): Promise<string>;
  createBrand(doc: IBrand): Promise<IBrandDocument>;
  updateBrand(_id: string, fields: IBrand): Promise<IBrandDocument>;
  removeBrands(_ids: string[]): Promise<{ n: number; ok: number }>;
}

export const loadBrandClass = (
  subdomain: string,
  models: IModels,
  { sendDbEventLog }: EventDispatcherReturn,
) => {
  class Brand {
    /*
     * Get a Brand
     */
    public static async getBrand(doc: any) {
      const brand = await models.Brands.findOne(doc).lean();

      if (!brand) {
        throw new Error('Brand not found');
      }

      return brand;
    }

    public static async generateCode(code?: string) {
      let generatedCode = code || nanoid(6);

      let prevBrand = await models.Brands.findOne({ code: generatedCode });

      // search until not existing one found
      while (prevBrand) {
        generatedCode = nanoid(6);

        prevBrand = await models.Brands.findOne({ code: generatedCode });
      }

      return generatedCode;
    }

    public static async createBrand(doc: IBrand) {
      // generate code automatically
      // if there is no brand code defined

      let code = doc.code;

      if (code) {
        const exists = await models.Brands.findOne({ code });
        if (exists) {
          throw new Error('Code already exists');
        }
      } else {
        code = await this.generateCode();
      }

      const newBrand = await models.Brands.create({
        ...doc,
        code,
        emailConfig:
          Object.keys(doc.emailConfig || {}).length > 0
            ? doc.emailConfig
            : { type: 'simple' },
      });
      sendDbEventLog({
        action: 'create',
        docId: newBrand._id,
        currentDocument: newBrand.toObject(),
      });
      return newBrand;
    }

    public static async updateBrand(_id: string, fields: IBrand) {
      const updatedBrand = await models.Brands.findOneAndUpdate(
        { _id },
        { $set: { ...fields } },
        { new: true },
      );
      if (updatedBrand) {
        sendDbEventLog({
          action: 'update',
          docId: updatedBrand._id,
          currentDocument: updatedBrand.toObject(),
          prevDocument: updatedBrand.toObject(),
        });
      }
      return updatedBrand;
    }

    public static async removeBrands(_ids: string[]) {
      const deletedBrands = await models.Brands.deleteMany({ _id: _ids });
      if (deletedBrands.deletedCount > 0) {
        sendDbEventLog({
          action: 'deleteMany',
          docIds: _ids,
        });
      }
      return deletedBrands;
    }
  }

  brandSchema.loadClass(Brand);

  return brandSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

function mapPrismaBrandToMongoose(b: any): any {
  if (!b) return null;
  return {
    ...b,
    _id: b.id,
    toObject() {
      return this;
    },
    toJSON() {
      return this;
    },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaBrand(update);
      return prisma.brand.update({
        where: { id: b.id },
        data,
      });
    },
    async deleteOne() {
      return prisma.brand.delete({
        where: { id: b.id },
      });
    }
  };
}

function mapMongooseToPrismaBrand(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaBrand(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaBrand(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaBrand(update));
  }
  return data;
}

export const loadPrismaBrands = (
  subdomain: string,
  models: IModels,
  coreEventHandlers: (
    moduleName: string,
    collectionName: string,
  ) => EventDispatcherReturn,
) => {
  const origSchema = loadBrandClass(subdomain, models, coreEventHandlers('organization', 'brands'));
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.brand,
    mapPrismaBrandToMongoose,
    mapMongooseToPrismaBrand,
    mapMongooseUpdateToPrismaBrand
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

