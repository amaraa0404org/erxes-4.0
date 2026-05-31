import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import {
  IOrgWhiteLabel,
  IOrgWhiteLabelDocument,
} from '@/organization/whitelabel/@types/orgWhiteLabel';
import { orgWhiteLabelSchema } from '@/organization/whitelabel/db/definitions/orgWhiteLabel';

const SINGLETON_ID = 'ORG_WHITE_LABEL';

export interface IOrgWhiteLabelModel extends Model<IOrgWhiteLabelDocument> {
  getOrgWhiteLabel(): Promise<IOrgWhiteLabelDocument | null>;
  upsertOrgWhiteLabel(
    orgWhiteLabel: IOrgWhiteLabel,
  ): Promise<IOrgWhiteLabelDocument>;
}

export const loadOrgWhiteLabelClass = (models: IModels) => {
  class OrgWhiteLabel {
    public static async getOrgWhiteLabel() {
      return models.OrgWhiteLabel.findOne({}).lean();
    }

    public static async upsertOrgWhiteLabel(orgWhiteLabel: IOrgWhiteLabel) {
      return models.OrgWhiteLabel.findOneAndUpdate(
        { _id: SINGLETON_ID },
        {
          ...orgWhiteLabel,
          _id: SINGLETON_ID,
        },
        {
          upsert: true,
          new: true,
        },
      ).lean();
    }
  }

  orgWhiteLabelSchema.loadClass(OrgWhiteLabel);
  return orgWhiteLabelSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const ORG_WHITE_LABEL_ARRAY_FIELDS = new Set<string>();

function mapPrismaOrgWhiteLabelToMongoose(owl: any): any {
  if (!owl) return null;
  return {
    ...owl,
    _id: owl.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaOrgWhiteLabel(update);
      return prisma.orgWhiteLabel.update({ where: { id: owl.id }, data });
    },
    async deleteOne() {
      return prisma.orgWhiteLabel.delete({ where: { id: owl.id } });
    }
  };
}

function mapMongooseToPrismaOrgWhiteLabel(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaOrgWhiteLabel(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaOrgWhiteLabel(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaOrgWhiteLabel(update));
  }
  return data;
}

export const loadPrismaOrgWhiteLabel = (models: IModels) => {
  const origSchema = loadOrgWhiteLabelClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.orgWhiteLabel,
    mapPrismaOrgWhiteLabelToMongoose,
    mapMongooseToPrismaOrgWhiteLabel,
    mapMongooseUpdateToPrismaOrgWhiteLabel,
    ORG_WHITE_LABEL_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

