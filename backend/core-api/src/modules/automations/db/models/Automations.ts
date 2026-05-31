import { Model } from 'mongoose';
import {
  automationSchema,
  IAutomationDocument,
} from 'erxes-api-shared/core-modules';
import { IModels } from '~/connectionResolvers';

export interface IAutomationModel extends Model<IAutomationDocument> {
  getAutomation(_id: string): Promise<IAutomationDocument>;
}

export const loadClass = (models: IModels) => {
  class Automation {
    public static async getAutomation(_id) {
      return await models.Automations.findOne({ _id }).lean();
    }
  }

  automationSchema.loadClass(Automation);

  return automationSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const AUTOMATION_ARRAY_FIELDS = new Set<string>(['tagIds']);

function mapPrismaAutomationToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaAutomation(update);
      return prisma.automation.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.automation.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaAutomation(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaAutomation(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaAutomation(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaAutomation(update));
  }
  return data;
}

export const loadPrismaAutomations = (models: IModels) => {
  const origSchema = loadClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.automation,
    mapPrismaAutomationToMongoose,
    mapMongooseToPrismaAutomation,
    mapMongooseUpdateToPrismaAutomation,
    AUTOMATION_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

