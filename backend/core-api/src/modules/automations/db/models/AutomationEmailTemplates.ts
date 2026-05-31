import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { automationEmailTemplateSchema } from '@/automations/db/definitions/automationEmailTemplate';
import {
  IAutomationEmailTemplate,
  IAutomationEmailTemplateDocument,
} from 'erxes-api-shared/core-types';

export interface IAutomationEmailTemplateModel
  extends Model<IAutomationEmailTemplateDocument> {
  getEmailTemplate(_id: string): Promise<IAutomationEmailTemplateDocument>;
  createEmailTemplate(
    doc: IAutomationEmailTemplate,
  ): Promise<IAutomationEmailTemplateDocument>;
  updateEmailTemplate(
    _id: string,
    doc: Partial<IAutomationEmailTemplate>,
  ): Promise<IAutomationEmailTemplateDocument>;
  removeEmailTemplate(_id: string): Promise<any>;
}

export const loadAutomationEmailTemplateClass = (models: IModels) => {
  class AutomationEmailTemplate {
    public static async getEmailTemplate(_id: string) {
      const template = await models.AutomationEmailTemplates.findOne({ _id });

      if (!template) {
        throw new Error('Email template not found');
      }

      return template;
    }

    public static async createEmailTemplate(doc: IAutomationEmailTemplate) {
      const template = await models.AutomationEmailTemplates.create({
        ...doc,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return template;
    }

    public static async updateEmailTemplate(
      _id: string,
      doc: Partial<IAutomationEmailTemplate>,
    ) {
      const template = await models.AutomationEmailTemplates.getEmailTemplate(
        _id,
      );

      await models.AutomationEmailTemplates.updateOne(
        { _id },
        {
          $set: {
            ...doc,
            updatedAt: new Date(),
          },
        },
      );

      return models.AutomationEmailTemplates.findOne({ _id: template._id });
    }

    public static async removeEmailTemplate(_id: string) {
      const template = await models.AutomationEmailTemplates.getEmailTemplate(
        _id,
      );

      if (!template) {
        throw new Error('Email template not found');
      }

      return models.AutomationEmailTemplates.deleteOne({ _id });
    }
  }

  automationEmailTemplateSchema.loadClass(AutomationEmailTemplate);

  return automationEmailTemplateSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const TEMPLATE_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaTemplateToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaTemplate(update);
      return prisma.automationEmailTemplate.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.automationEmailTemplate.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaTemplate(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaTemplate(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaTemplate(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaTemplate(update));
  }
  return data;
}

export const loadPrismaAutomationEmailTemplates = (models: IModels) => {
  const origSchema = loadAutomationEmailTemplateClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.automationEmailTemplate,
    mapPrismaTemplateToMongoose,
    mapMongooseToPrismaTemplate,
    mapMongooseUpdateToPrismaTemplate,
    TEMPLATE_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

