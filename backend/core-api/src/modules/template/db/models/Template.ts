import { IUserDocument } from 'erxes-api-shared/core-types';
import { sendTRPCMessage } from 'erxes-api-shared/utils';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { templates } from '~/meta/templates';
import { ITemplate, ITemplateDocument } from '../../@types';
import { templateSchema } from '../definitions/template';

export interface ITemplateModal extends Model<ITemplateDocument> {
  getTemplate(_id: string): Promise<ITemplateDocument>;
  createTemplate(
    template: ITemplate,
    user: IUserDocument,
  ): Promise<ITemplateDocument>;
  updateTemplate(
    _id: string,
    template: ITemplate,
    user?: IUserDocument,
  ): Promise<ITemplateDocument>;
  removeTemplates(_ids: string[]): Promise<void>;
}

export const loadTemplateClass = (models: IModels, subdomain: string) => {
  class Template {
    public static async getTemplate(_id: string) {
      const template = await models.Template.findOne({ _id }).lean();

      if (!template) {
        throw new Error('Template not found');
      }

      return template;
    }

    public static async createTemplate(
      template: ITemplate,
      user: IUserDocument,
    ) {
      if (!template.contentId || !template.contentType) {
        throw new Error('Content ID and Content Type are required');
      }

      template.createdBy = user._id;

      const [pluginName, moduleName, collectionName] = template.contentType.split(':');

      if (!pluginName || !moduleName) {
        throw new Error('Invalid content type format');
      }

      try {
        if (pluginName === 'core') {
          const { modules } = templates || {};

          const content = await modules[moduleName][collectionName].getContent({ template, models }) || null;

          if (!content) {
            throw new Error(`This ${moduleName} doesn't have content`);
          }

          template.content = content.content || content || {};

          return models.Template.create(template);
        }

        const content = await sendTRPCMessage({
          subdomain,
          pluginName,
          method: 'query',
          module: moduleName,
          action: 'template.getContent',
          input: { contentId: template.contentId, collectionName },
          defaultValue: null,
        });

        if (!content) {
          throw new Error(`This ${moduleName} doesn't have content`);
        }

        template.content = content.content || content || {};
      } catch (error) {
        throw new Error(error);
      }

      return models.Template.create(template);
    }

    public static async updateTemplate(
      _id: string,
      template: ITemplate,
      user: IUserDocument,
    ) {
      await models.Template.getTemplate(_id);

      return models.Template.findOneAndUpdate(
        { _id },
        {
          $set: {
            ...template,
            updatedBy: user?._id,
          },
        },
        { new: true },
      );
    }

    public static async removeTemplates(_ids: string[]) {
      return models.Template.deleteMany({ _id: { $in: _ids } });
    }
  }

  templateSchema.loadClass(Template);

  return templateSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const TEMPLATE_ARRAY_FIELDS = new Set<string>(['categoryIds']);

function mapPrismaTemplateToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaTemplate(update);
      return prisma.template.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.template.delete({ where: { id: doc.id } });
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

export const loadPrismaTemplates = (models: IModels, subdomain: string) => {
  const origSchema = loadTemplateClass(models, subdomain);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.template,
    mapPrismaTemplateToMongoose,
    mapMongooseToPrismaTemplate,
    mapMongooseUpdateToPrismaTemplate,
    TEMPLATE_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

