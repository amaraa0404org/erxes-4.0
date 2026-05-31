import { IDeliveryReportsDocument, IStatsDocument } from '@/broadcast/@types';
import { statsSchema } from '@/broadcast/db/definitions/deliveryReports';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';

export interface IStatsModel extends Model<IStatsDocument> {
  updateStats(engageMessageId: string, stat: string): Promise<IStatsDocument>;
}

export const loadStatsClass = (models: IModels) => {
  class Stat {
    /**
     * Increase stat by 1
     */
    public static async updateStats(engageMessageId: string, stat: string) {
      return models.Stats.findOneAndUpdate(
        { engageMessageId },
        { $inc: { [stat]: 1 } },
        { new: true },
      );
    }
  }

  statsSchema.loadClass(Stat);

  return statsSchema;
};

export interface IDeliveryReportModel extends Model<IDeliveryReportsDocument> {
  updateOrCreateReport(headers: any, status: string): Promise<boolean | string>;
}

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const STATS_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaStatsToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaStats(update);
      return prisma.stats.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.stats.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaStats(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaStats(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaStats(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaStats(update));
  }
  return data;
}

export const loadPrismaStats = (models: IModels) => {
  const origSchema = loadStatsClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.stats,
    mapPrismaStatsToMongoose,
    mapMongooseToPrismaStats,
    mapMongooseUpdateToPrismaStats,
    STATS_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

const DELIVERYREPORT_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaDeliveryReportToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaDeliveryReport(update);
      return prisma.deliveryReport.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.deliveryReport.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaDeliveryReport(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaDeliveryReport(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaDeliveryReport(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaDeliveryReport(update));
  }
  return data;
}

export const loadPrismaDeliveryReports = () => {
  const modelAdapter = createPrismaAdapter(
    prisma.deliveryReport,
    mapPrismaDeliveryReportToMongoose,
    mapMongooseToPrismaDeliveryReport,
    mapMongooseUpdateToPrismaDeliveryReport,
    DELIVERYREPORT_ARRAY_FIELDS
  );

  return modelAdapter as any;
};

