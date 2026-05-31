import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { cpNotificationSchema } from 'erxes-api-shared/core-modules';
import { ICPNotificationDocument } from '@/clientportal/types/cpNotification';

export interface ICPNotificationModel extends Model<ICPNotificationDocument> {}

export const loadCPNotificationClass = (models: IModels) => {
  class CPNotification {}

  cpNotificationSchema.loadClass(CPNotification);

  return cpNotificationSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const CPNOTIFICATION_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaCPNotificationToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaCPNotification(update);
      return prisma.cPNotification.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.cPNotification.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaCPNotification(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaCPNotification(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaCPNotification(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaCPNotification(update));
  }
  return data;
}

export const loadPrismaCPNotifications = (models: IModels) => {
  const origSchema = loadCPNotificationClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.cPNotification,
    mapPrismaCPNotificationToMongoose,
    mapMongooseToPrismaCPNotification,
    mapMongooseUpdateToPrismaCPNotification,
    CPNOTIFICATION_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
