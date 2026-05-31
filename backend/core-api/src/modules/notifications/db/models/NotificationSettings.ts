import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const NOTIFICATION_SETTINGS_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaNotificationSettingToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaNotificationSetting(update);
      return prisma.notificationSetting.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.notificationSetting.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaNotificationSetting(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  // Convert Mongoose Maps to plain JSON objects for Prisma Json columns
  if (mapped.channels instanceof Map) {
    mapped.channels = Object.fromEntries(mapped.channels);
  }
  if (mapped.events instanceof Map) {
    mapped.events = Object.fromEntries(mapped.events);
  }
  return mapped;
}

function mapMongooseUpdateToPrismaNotificationSetting(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaNotificationSetting(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaNotificationSetting(update));
  }
  return data;
}

export const loadPrismaNotificationSettings = () => {
  const modelAdapter = createPrismaAdapter(
    prisma.notificationSetting,
    mapPrismaNotificationSettingToMongoose,
    mapMongooseToPrismaNotificationSetting,
    mapMongooseUpdateToPrismaNotificationSetting,
    NOTIFICATION_SETTINGS_ARRAY_FIELDS
  );

  return modelAdapter as any;
};
