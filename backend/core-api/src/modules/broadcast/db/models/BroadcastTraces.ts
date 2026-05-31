import { broadcastTraceSchema } from '@/broadcast/db/definitions/broadcastTraces';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';

export type TraceType = 'regular' | 'success' | 'failure';

export interface IBroadcastTrace {
  engageMessageId: string;
  message: string;
  type: TraceType;
}

export interface IBroadcastTraceDocument extends IBroadcastTrace, Document {}

export interface IBroadcastTraceModel extends Model<IBroadcastTraceDocument> {
  createTrace(
    engageMessageId: string,
    type: TraceType,
    message: string,
  ): Promise<IBroadcastTraceDocument>;
}

export const loadBroadcastTraceClass = (models: IModels) => {
  class BroadcastTrace {
    public static async createTrace(
      engageMessageId: string,
      type: TraceType,
      message: string,
    ) {
      return models.BroadcastTraces.create({ engageMessageId, type, message });
    }
  }

  broadcastTraceSchema.loadClass(BroadcastTrace);

  return broadcastTraceSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const TRACE_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaTraceToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaTrace(update);
      return prisma.broadcastTrace.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.broadcastTrace.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaTrace(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaTrace(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaTrace(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaTrace(update));
  }
  return data;
}

export const loadPrismaBroadcastTraces = (models: IModels) => {
  const origSchema = loadBroadcastTraceClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.broadcastTrace,
    mapPrismaTraceToMongoose,
    mapMongooseToPrismaTrace,
    mapMongooseUpdateToPrismaTrace,
    TRACE_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

