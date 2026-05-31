import { productsConfigSchema } from '@/products/db/definitions/configs';
import {
  IProductsConfig,
  IProductsConfigDocument,
} from 'erxes-api-shared/core-types';
import { Model } from 'mongoose';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';
import { IModels } from '~/connectionResolvers';

export interface IProductsConfigModel extends Model<IProductsConfigDocument> {
  getConfig(
    code: string,
    defaultValue?: string,
  ): Promise<IProductsConfigDocument>;
  createOrUpdateConfig({
    code,
    value,
  }: IProductsConfig): Promise<IProductsConfigDocument>;
}

export const loadProductsConfigClass = (
  models: IModels,
  subdomain: string,
  { sendDbEventLog }: EventDispatcherReturn,
) => {
  class ProductsConfig {
    /*
     * Get a Config
     */
    public static async getConfig(code: string, defaultValue?: any) {
      const config = await models.ProductsConfigs.findOne({ code });

      if (!config) {
        return defaultValue || '';
      }

      return config.value;
    }

    /**
     * Create or update config
     */
    public static async createOrUpdateConfig({
      code,
      value,
    }: {
      code: string;
      value: string[];
    }) {
      const obj = await models.ProductsConfigs.findOne({ code });

      if (obj) {
        await models.ProductsConfigs.updateOne(
          { _id: obj._id },
          { $set: { value } },
        );

        const updated = await models.ProductsConfigs.findOne({ _id: obj._id });
        if (updated) {
          sendDbEventLog({
            action: 'update',
            docId: updated._id,
            currentDocument: updated.toObject(),
            prevDocument: obj.toObject(),
          });
        }
        return updated;
      }

      const newConfig = await models.ProductsConfigs.create({ code, value });
      sendDbEventLog({
        action: 'create',
        docId: newConfig._id,
        currentDocument: newConfig.toObject(),
      });
      return newConfig;
    }
  }

  productsConfigSchema.loadClass(ProductsConfig);

  return productsConfigSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

function mapPrismaProductsConfigToMongoose(c: any): any {
  if (!c) return null;
  return {
    ...c,
    _id: c.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaProductsConfig(update);
      return prisma.productsConfig.update({ where: { id: c.id }, data });
    },
    async deleteOne() {
      return prisma.productsConfig.delete({ where: { id: c.id } });
    }
  };
}
function mapMongooseToPrismaProductsConfig(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaProductsConfig(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaProductsConfig(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaProductsConfig(update));
  }
  return data;
}

export const loadPrismaProductsConfigs = (
  models: IModels,
  subdomain: string,
  coreEventHandlers: (
    moduleName: string,
    collectionName: string,
  ) => EventDispatcherReturn,
) => {
  const origSchema = loadProductsConfigClass(models, subdomain, coreEventHandlers('products', 'products_configs'));
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.productsConfig,
    mapPrismaProductsConfigToMongoose,
    mapMongooseToPrismaProductsConfig,
    mapMongooseUpdateToPrismaProductsConfig
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

