import { Model } from 'mongoose';
import * as crypto from 'crypto';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';
import { IModels } from '~/connectionResolvers';
import { appSchema } from '@/apps/db/definitions/apps';
import { IAppDocument, IApp } from 'erxes-api-shared/core-types';
import { redis } from 'erxes-api-shared/utils';

export interface IAppModel extends Model<IAppDocument> {
  getApp(_id: string): Promise<IAppDocument>;
  createApp(doc: IApp): Promise<IAppDocument>;
  updateApp(_id: string, doc: IApp): Promise<IAppDocument>;
  revokeApp(_id: string): Promise<IAppDocument>;
  removeApp(_id: string): Promise<any>;
}

export const loadAppClass = (
  models: IModels,
  { sendDbEventLog }: EventDispatcherReturn,
  subdomain: string,
) => {
  class App {
    public static async getApp(_id: string) {
      const app = await models.Apps.findOne({ _id });

      if (!app) {
        throw new Error('App not found');
      }

      return app;
    }

    public static async createApp(doc: IApp) {
      const token = 'sk_' + crypto.randomBytes(24).toString('hex');

      const app = await models.Apps.create({
        ...doc,
        token,
        status: 'active',
      });

      sendDbEventLog({
        action: 'create',
        docId: app._id,
        currentDocument: app.toObject(),
      });

      return app;
    }

    public static async updateApp(_id: string, doc: IApp) {
      const app = await models.Apps.getApp(_id);

      await models.Apps.updateOne({ _id }, { $set: doc });

      const updatedApp = await models.Apps.findOne({ _id: app._id });

      if (updatedApp) {
        sendDbEventLog({
          action: 'update',
          docId: updatedApp._id,
          currentDocument: updatedApp.toObject(),
          prevDocument: app.toObject(),
        });
      }

      return updatedApp;
    }

    public static async revokeApp(_id: string) {
      const app = await models.Apps.getApp(_id);

      await models.Apps.updateOne({ _id }, { $set: { status: 'revoked' } });

      await redis.del(`app_token:${subdomain}:${app.token}`);

      const updatedApp = await models.Apps.findOne({ _id: app._id });

      if (updatedApp) {
        sendDbEventLog({
          action: 'update',
          docId: updatedApp._id,
          currentDocument: updatedApp.toObject(),
          prevDocument: app.toObject(),
        });
      }

      return updatedApp;
    }

    public static async removeApp(_id: string) {
      const app = await models.Apps.getApp(_id);

      await redis.del(`app_token:${subdomain}:${app.token}`);

      sendDbEventLog({
        action: 'delete',
        docId: app._id,
      });

      return models.Apps.deleteOne({ _id });
    }
  }

  appSchema.loadClass(App);

  return appSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const APP_ARRAY_FIELDS = new Set<string>();

function mapPrismaAppToMongoose(a: any): any {
  if (!a) return null;
  return {
    ...a,
    _id: a.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaApp(update);
      return prisma.app.update({ where: { id: a.id }, data });
    },
    async deleteOne() {
      return prisma.app.delete({ where: { id: a.id } });
    }
  };
}

function mapMongooseToPrismaApp(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaApp(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaApp(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaApp(update));
  }
  return data;
}

export const loadPrismaApps = (
  models: IModels,
  coreEventHandlers: EventDispatcherReturn,
  subdomain: string,
) => {
  const origSchema = loadAppClass(models, coreEventHandlers, subdomain);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.app,
    mapPrismaAppToMongoose,
    mapMongooseToPrismaApp,
    mapMongooseUpdateToPrismaApp,
    APP_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
