import { Document, Schema } from 'mongoose';

export type OAuthDeviceCodeStatus = 'pending' | 'approved' | 'denied';

export interface IOAuthDeviceCodeDocument extends Document {
  deviceCodeHash: string;
  userCodeHash: string;
  clientId: string;
  scope: string;
  grantedScope?: string;
  userId?: string;
  status: OAuthDeviceCodeStatus;
  expiresAt: Date;
  approvedAt?: Date;
  lastPolledAt?: Date;
  failedAttempts: number;
  createdAt: Date;
  updatedAt: Date;
}

export const oauthDeviceCodeSchema = new Schema(
  {
    deviceCodeHash: {
      type: String,
      label: 'Device code hash',
      index: true,
      unique: true,
    },
    userCodeHash: {
      type: String,
      label: 'User code hash',
      index: true,
      unique: true,
    },
    clientId: { type: String, label: 'Client id', index: true },
    scope: { type: String, label: 'Scope' },
    grantedScope: { type: String, label: 'Granted scope' },
    userId: { type: String, label: 'User id', index: true },
    status: {
      type: String,
      label: 'Status',
      enum: ['pending', 'approved', 'denied'],
      default: 'pending',
      index: true,
    },
    expiresAt: { type: Date, label: 'Expires at', index: true },
    approvedAt: { type: Date, label: 'Approved at' },
    lastPolledAt: { type: Date, label: 'Last polled at' },
    failedAttempts: {
      type: Number,
      label: 'Failed approval attempts',
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const OAUTH_DEVICE_CODE_ARRAY_FIELDS = new Set<string>();

function mapPrismaOAuthDeviceCodeToMongoose(code: any): any {
  if (!code) return null;
  return {
    ...code,
    _id: code.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaOAuthDeviceCode(update);
      return prisma.oAuthDeviceCode.update({ where: { id: code.id }, data });
    },
    async deleteOne() {
      return prisma.oAuthDeviceCode.delete({ where: { id: code.id } });
    }
  };
}

function mapMongooseToPrismaOAuthDeviceCode(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaOAuthDeviceCode(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaOAuthDeviceCode(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaOAuthDeviceCode(update));
  }
  return data;
}

export const loadPrismaOAuthDeviceCodes = () => {
  const modelAdapter = createPrismaAdapter(
    prisma.oAuthDeviceCode,
    mapPrismaOAuthDeviceCodeToMongoose,
    mapMongooseToPrismaOAuthDeviceCode,
    mapMongooseUpdateToPrismaOAuthDeviceCode,
    OAUTH_DEVICE_CODE_ARRAY_FIELDS
  );

  return modelAdapter as any;
};

