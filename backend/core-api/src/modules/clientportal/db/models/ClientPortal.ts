import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import {
  IClientPortal,
  IClientPortalDocument,
} from '@/clientportal/types/clientPortal';
import { clientPortalSchema } from 'erxes-api-shared/core-modules';
import {
  removeExtraSpaces,
  removeLastTrailingSlash,
} from 'erxes-api-shared/utils';
import { jwtManager } from '@/clientportal/services';
import { deepMerge } from '@/clientportal/utils/deepMerge';

export interface IClientPortalModel extends Model<IClientPortalDocument> {
  getConfig(_id: string): Promise<IClientPortalDocument>;
  createClientPortal(name: string): Promise<IClientPortalDocument>;
  updateClientPortal(_id: string, doc: IClientPortal): Promise<void>;
  clientPortalChangeToken(_id: string): Promise<string>;
}

export const loadClientPortalClass = (models: IModels) => {
  class ClientPortal {
    public static async createClientPortal(name: string) {
      const clientPortal = await models.ClientPortal.create({ name });

      const token = jwtManager.createClientPortalToken(clientPortal._id);

      return models.ClientPortal.findOneAndUpdate(
        { _id: clientPortal._id },
        { $set: { token: token } },
        { new: true },
      );
    }

    public static async clientPortalChangeToken(_id: string) {
      const clientPortal = await models.ClientPortal.findOne({
        _id,
      });
      if (!clientPortal) {
        throw new Error('Client portal not found');
      }

      const token = jwtManager.createClientPortalToken(_id);

      await models.ClientPortal.findOneAndUpdate(
        { _id },
        { $set: { token: token } },
      );
      return token;
    }

    public static async getConfig(_id: string) {
      const config = await models.ClientPortal.findOne({ _id }).lean();

      if (!config) {
        throw new Error('Config not found');
      }

      return config;
    }

    public static async updateClientPortal(_id: string, doc: IClientPortal) {
      if (doc.url) {
        doc.url = removeExtraSpaces(removeLastTrailingSlash(doc.url));
      }

      const existing = await models.ClientPortal.findOne({
        _id,
      }).lean<IClientPortalDocument>();

      if (!existing) {
        throw new Error('Client portal not found');
      }

      const mergedAuth =
        doc.auth || existing.auth
          ? deepMerge(existing.auth || {}, doc.auth || {})
          : undefined;

      const mergedSecurityAuthConfig =
        doc.securityAuthConfig || existing.securityAuthConfig
          ? deepMerge(
              existing.securityAuthConfig || {},
              doc.securityAuthConfig || {},
            )
          : undefined;

      const updateDoc: IClientPortal = {
        ...existing,
        ...doc,
        auth: mergedAuth as IClientPortal['auth'],
        securityAuthConfig:
          mergedSecurityAuthConfig as IClientPortal['securityAuthConfig'],
      };

      await models.ClientPortal.findOneAndUpdate(
        { _id },
        { $set: updateDoc },
        { new: true },
      );
    }
  }

  clientPortalSchema.loadClass(ClientPortal);

  return clientPortalSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const CLIENTPORTAL_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaClientPortalToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaClientPortal(update);
      return prisma.clientPortal.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.clientPortal.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaClientPortal(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaClientPortal(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaClientPortal(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaClientPortal(update));
  }
  return data;
}

export const loadPrismaClientPortals = (models: IModels) => {
  const origSchema = loadClientPortalClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.clientPortal,
    mapPrismaClientPortalToMongoose,
    mapMongooseToPrismaClientPortal,
    mapMongooseUpdateToPrismaClientPortal,
    CLIENTPORTAL_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

