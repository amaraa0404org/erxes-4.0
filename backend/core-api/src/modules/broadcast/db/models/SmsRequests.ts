import { ISmsRequest, ISmsRequestDocument } from '@/broadcast/@types/sms';
import { smsRequestSchema } from '@/broadcast/db/definitions/smsRequest';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';

export interface ISmsRequestModel extends Model<ISmsRequest> {
  createRequest(doc: ISmsRequest): Promise<ISmsRequestDocument>;
  updateRequest(_id: string, doc: ISmsRequest): Promise<ISmsRequestDocument>;
}

export const loadSmsRequestClass = (models: IModels) => {
  class SmsRequest {
    public static createRequest(doc: ISmsRequest) {
      return models.SmsRequests.create(doc);
    }

    public static async updateRequest(_id: string, doc: ISmsRequest) {
      await models.SmsRequests.updateOne({ _id }, { $set: doc });

      return models.SmsRequests.findOne({ _id });
    }
  }

  smsRequestSchema.loadClass(SmsRequest);

  return smsRequestSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const SMSREQUEST_ARRAY_FIELDS = new Set<string>(['errorMessages']);

function mapPrismaSmsRequestToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaSmsRequest(update);
      return prisma.smsRequest.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.smsRequest.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaSmsRequest(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaSmsRequest(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaSmsRequest(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaSmsRequest(update));
  }
  return data;
}

export const loadPrismaSmsRequests = (models: IModels) => {
  const origSchema = loadSmsRequestClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.smsRequest,
    mapPrismaSmsRequestToMongoose,
    mapMongooseToPrismaSmsRequest,
    mapMongooseUpdateToPrismaSmsRequest,
    SMSREQUEST_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

