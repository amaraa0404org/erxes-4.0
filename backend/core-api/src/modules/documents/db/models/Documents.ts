import { sendTRPCMessage } from 'erxes-api-shared/utils';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { documents } from '~/meta/documents';
import { IDocumentDocument } from '~/modules/documents/types';
import { prepareContent } from '~/modules/documents/utils';
import { documentSchema } from '../definitions/documents';
export interface IDocumentModel extends Model<IDocumentDocument> {
  getDocument({ _id }: { _id: string }): Promise<IDocumentDocument>;
  saveDocument({ _id, doc }): Promise<IDocumentDocument>;
  processDocument({ _id, replacerIds, config }): Promise<IDocumentDocument>;
}

export const loadDocumentClass = (models: IModels, subdomain: string) => {
  class Document {
    public static async getDocument({ _id }: { _id: string }) {
      const document = await models.Documents.findOne({ _id });

      if (!document) {
        throw new Error('Document not found');
      }

      return document;
    }

    /**
     * Marks documents as read
     */
    public static async saveDocument({ _id, doc }) {
      if (_id) {
        const document = await models.Documents.getDocument({ _id });

        return await models.Documents.findOneAndUpdate(
          { _id: document._id },
          { $set: doc },
          { new: true },
        );
      }

      return await models.Documents.create(doc);
    }

    public static async processDocument(doc) {
      const { _id, config } = doc;

      const document = await models.Documents.getDocument({ _id });

      const { content, contentType } = document;

      const [pluginName, moduleName] = contentType.split(':');

      if (pluginName === 'core') {
        const replaceContent = documents.replaceContent;

        const replacedContents = await replaceContent({
          subdomain,
          data: {
            ...(doc || {}),
            content,
            contentType: document.contentType,
          },
        });

        return prepareContent({
          contents: replacedContents,
          config,
        });
      }

      const replacedContents = await sendTRPCMessage({
        subdomain,

        pluginName,
        method: 'query',
        module: moduleName,
        action: 'replaceContent',
        input: {
          ...(doc || {}),
          content,
          contentType: document.contentType,
        },
        defaultValue: [],
      });

      return prepareContent({
        contents: replacedContents,
        config,
      });
    }
  }

  documentSchema.loadClass(Document);

  return documentSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const CORE_DOCUMENT_ARRAY_FIELDS = new Set<string>();

function mapPrismaDocumentToMongoose(d: any): any {
  if (!d) return null;
  return {
    ...d,
    _id: d.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaDocument(update);
      return prisma.document.update({ where: { id: d.id }, data });
    },
    async deleteOne() {
      return prisma.document.delete({ where: { id: d.id } });
    }
  };
}

function mapMongooseToPrismaDocument(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaDocument(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaDocument(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaDocument(update));
  }
  return data;
}

export const loadPrismaDocuments = (models: IModels, subdomain: string) => {
  const origSchema = loadDocumentClass(models, subdomain);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.document,
    mapPrismaDocumentToMongoose,
    mapMongooseToPrismaDocument,
    mapMongooseUpdateToPrismaDocument,
    CORE_DOCUMENT_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
