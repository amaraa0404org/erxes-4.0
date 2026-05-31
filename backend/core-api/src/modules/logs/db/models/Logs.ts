import { logsSchema } from 'erxes-api-shared/core-modules';
import { ILogDocument } from 'erxes-api-shared/core-types';
import { Model } from 'mongoose';

export interface ILogModel extends Model<ILogDocument> {}

export const loadLogsClass = (models) => {
  class Logs {}

  logsSchema.loadClass(Logs);

  return logsSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const LOG_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaLogToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaLog(update);
      return prisma.log.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.log.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaLog(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaLog(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaLog(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaLog(update));
  }
  return data;
}

export const loadPrismaLogs = (models: any) => {
  const origSchema = loadLogsClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.log,
    mapPrismaLogToMongoose,
    mapMongooseToPrismaLog,
    mapMongooseUpdateToPrismaLog,
    LOG_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

