import { Model } from 'mongoose';
import {
  automationExecutionSchema,
  IAutomationExecution,
  IAutomationExecutionDocument,
} from 'erxes-api-shared/core-modules';
import { IModels } from '~/connectionResolvers';

export interface IExecutionModel extends Model<IAutomationExecutionDocument> {
  createExecution(doc: IAutomationExecution): IAutomationExecutionDocument;
  getExecution(selector: any): IAutomationExecutionDocument;
  removeExecutions(automationIds: string[]): Promise<void>;
}

export const loadClass = (models: IModels) => {
  class Execution {
    public static async createExecution(doc) {
      return models.AutomationExecutions.create({
        createdAt: new Date(),
        ...doc,
      });
    }

    public static async getExecution(selector) {
      return models.AutomationExecutions.findOne(selector);
    }

    public static async removeExecutions(automationIds) {
      return models.AutomationExecutions.deleteMany({
        automationId: { $in: automationIds },
      });
    }
  }

  automationExecutionSchema.loadClass(Execution);

  return automationExecutionSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const EXECUTION_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaExecutionToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaExecution(update);
      return prisma.automationExecution.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.automationExecution.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaExecution(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaExecution(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaExecution(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaExecution(update));
  }
  return data;
}

export const loadPrismaAutomationExecutions = (models: IModels) => {
  const origSchema = loadClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.automationExecution,
    mapPrismaExecutionToMongoose,
    mapMongooseToPrismaExecution,
    mapMongooseUpdateToPrismaExecution,
    EXECUTION_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

