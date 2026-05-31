import { Document, Schema } from 'mongoose';

export interface IOAuthRefreshTokenDocument extends Document {
  tokenHash: string;
  userId: string;
  clientId: string;
  scope: string;
  expiresAt: Date;
  revokedAt?: Date;
  replacedByTokenHash?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const oauthRefreshTokenSchema = new Schema(
  {
    tokenHash: {
      type: String,
      label: 'Token hash',
      index: true,
      unique: true,
    },
    userId: { type: String, label: 'User id', index: true },
    clientId: { type: String, label: 'Client id', index: true },
    scope: { type: String, label: 'Scope' },
    expiresAt: { type: Date, label: 'Expires at', index: true },
    revokedAt: { type: Date, label: 'Revoked at', index: true },
    replacedByTokenHash: { type: String, label: 'Replaced by token hash' },
  },
  {
    timestamps: true,
  },
);

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const OAUTH_REFRESH_TOKEN_ARRAY_FIELDS = new Set<string>();

function mapPrismaOAuthRefreshTokenToMongoose(token: any): any {
  if (!token) return null;
  return {
    ...token,
    _id: token.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaOAuthRefreshToken(update);
      return prisma.oAuthRefreshToken.update({ where: { id: token.id }, data });
    },
    async deleteOne() {
      return prisma.oAuthRefreshToken.delete({ where: { id: token.id } });
    }
  };
}

function mapMongooseToPrismaOAuthRefreshToken(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaOAuthRefreshToken(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaOAuthRefreshToken(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaOAuthRefreshToken(update));
  }
  return data;
}

export const loadPrismaOAuthRefreshTokens = () => {
  const modelAdapter = createPrismaAdapter(
    prisma.oAuthRefreshToken,
    mapPrismaOAuthRefreshTokenToMongoose,
    mapMongooseToPrismaOAuthRefreshToken,
    mapMongooseUpdateToPrismaOAuthRefreshToken,
    OAUTH_REFRESH_TOKEN_ARRAY_FIELDS
  );

  return modelAdapter as any;
};

