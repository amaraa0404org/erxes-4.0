import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const NOTIFICATION_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaNotificationToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaNotification(update);
      return prisma.notification.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.notification.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaNotification(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaNotification(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaNotification(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaNotification(update));
  }
  return data;
}

export const loadPrismaNotifications = () => {
  const modelAdapter = createPrismaAdapter(
    prisma.notification,
    mapPrismaNotificationToMongoose,
    mapMongooseToPrismaNotification,
    mapMongooseUpdateToPrismaNotification,
    NOTIFICATION_ARRAY_FIELDS
  );

  return modelAdapter as any;
};
