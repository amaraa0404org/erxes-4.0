// packages/core-api/src/db/models/PermissionGroups.ts

import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { permissionGroupSchema } from '../definitions/permissions';

import {
  IPermissionGroup,
  IPermissionGroupDocument,
} from 'erxes-api-shared/core-types';

export interface IPermissionGroupModel extends Model<IPermissionGroupDocument> {
  createGroup(doc: IPermissionGroup): Promise<IPermissionGroupDocument>;
  updateGroup(
    id: string,
    doc: IPermissionGroup,
  ): Promise<IPermissionGroupDocument>;
  removeGroup(id: string): Promise<{ success: boolean }>;
  getGroup(id: string): Promise<IPermissionGroupDocument>;
}

export const loadPermissionGroupClass = (models: IModels) => {
  class PermissionGroup {
    public static async createGroup(doc: IPermissionGroup) {
      return models.PermissionGroups.create(doc);
    }

    public static async updateGroup(id: string, doc: IPermissionGroup) {
      await models.PermissionGroups.updateOne({ _id: id }, { $set: doc });
      return models.PermissionGroups.findOne({ _id: id });
    }

    public static async removeGroup(id: string) {
      const group = await models.PermissionGroups.findOne({ _id: id });
      if (!group) {
        throw new Error('Permission group not found');
      }

      // Remove from all users
      await models.Users.updateMany(
        { permissionGroupIds: id },
        { $pull: { permissionGroupIds: id } },
      );

      await models.PermissionGroups.deleteOne({ _id: id });
      return { success: true };
    }

    public static async getGroup(id: string) {
      const group = await models.PermissionGroups.findOne({ _id: id });
      if (!group) {
        throw new Error('Permission group not found');
      }
      return group;
    }
  }

  permissionGroupSchema.loadClass(PermissionGroup);
  return permissionGroupSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const PERMISSIONGROUP_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaPermissionGroupToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaPermissionGroup(update);
      return prisma.permissionGroup.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.permissionGroup.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaPermissionGroup(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaPermissionGroup(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaPermissionGroup(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaPermissionGroup(update));
  }
  return data;
}

export const loadPrismaPermissionGroups = (models: IModels) => {
  const origSchema = loadPermissionGroupClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.permissionGroup,
    mapPrismaPermissionGroupToMongoose,
    mapMongooseToPrismaPermissionGroup,
    mapMongooseUpdateToPrismaPermissionGroup,
    PERMISSIONGROUP_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

