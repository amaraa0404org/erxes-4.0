import {
  activityLogsSchema,
  IActivityLogDocument,
} from 'erxes-api-shared/core-modules';
import { graphqlPubsub } from 'erxes-api-shared/utils';
import { Model } from 'mongoose';

type CreateActivityLogInput = Omit<
  Partial<IActivityLogDocument>,
  'createdAt' | 'contextType'
>;

export interface IActivityLogsModel extends Model<IActivityLogDocument> {
  createActivityLog(
    subdomain: string,
    doc: CreateActivityLogInput,
  ): Promise<IActivityLogDocument>;
}

export const loadActivityLogsClass = (models) => {
  class ActivityLogs {
    public static async createActivityLog(
      subdomain: string,
      doc: CreateActivityLogInput,
    ) {
      const targetId = doc.target?._id;
      const activityLog = await models.ActivityLogs.create({
        ...doc,
        targetId,
      });

      graphqlPubsub.publish(`activityLogInserted:${subdomain}:${targetId}`, {
        activityLogInserted: activityLog.toObject(),
      });

      return activityLog;
    }
  }

  activityLogsSchema.loadClass(ActivityLogs);

  return activityLogsSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const ACTIVITY_LOG_ARRAY_FIELDS = new Set<string>();

function mapPrismaActivityLogToMongoose(log: any): any {
  if (!log) return null;
  return {
    ...log,
    _id: log.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaActivityLog(update);
      return prisma.activityLog.update({ where: { id: log.id }, data });
    },
    async deleteOne() {
      return prisma.activityLog.delete({ where: { id: log.id } });
    }
  };
}

function mapMongooseToPrismaActivityLog(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaActivityLog(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaActivityLog(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaActivityLog(update));
  }
  return data;
}

export const loadPrismaActivityLogs = (models: any) => {
  const origSchema = loadActivityLogsClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.activityLog,
    mapPrismaActivityLogToMongoose,
    mapMongooseToPrismaActivityLog,
    mapMongooseUpdateToPrismaActivityLog,
    ACTIVITY_LOG_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

