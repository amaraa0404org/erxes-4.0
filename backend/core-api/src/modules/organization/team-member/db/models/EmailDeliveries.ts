import {
  IEmailDeliveries,
  IEmailDeliveriesDocument,
} from '@/organization/types';
import { emailDeliverySchema } from 'erxes-api-shared/core-modules';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';

export interface IEmailDeliveryModel extends Model<IEmailDeliveriesDocument> {
  createEmailDelivery(doc: IEmailDeliveries): Promise<IEmailDeliveriesDocument>;
  updateEmailDeliveryStatus(_id: string, status: string): Promise<void>;
}

export const loadEmailDeliveryClass = (models: IModels) => {
  class EmailDelivery {
    /**
     * Create an EmailDelivery document
     */
    public static async createEmailDelivery(doc: IEmailDeliveries) {
      return models.EmailDeliveries.create({
        ...doc,
      });
    }

    public static async updateEmailDeliveryStatus(_id: string, status: string) {
      return models.EmailDeliveries.updateOne({ _id }, { $set: { status } });
    }
  }

  emailDeliverySchema.loadClass(EmailDelivery);

  return emailDeliverySchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const EMAIL_DELIVERY_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaEmailDeliveryToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaEmailDelivery(update);
      return prisma.emailDelivery.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.emailDelivery.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaEmailDelivery(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaEmailDelivery(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaEmailDelivery(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaEmailDelivery(update));
  }
  return data;
}

export const loadPrismaEmailDeliveries = (models: IModels) => {
  const origSchema = loadEmailDeliveryClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.emailDelivery,
    mapPrismaEmailDeliveryToMongoose,
    mapMongooseToPrismaEmailDelivery,
    mapMongooseUpdateToPrismaEmailDelivery,
    EMAIL_DELIVERY_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
