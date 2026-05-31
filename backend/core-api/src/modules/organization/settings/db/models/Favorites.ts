import { Model } from 'mongoose';

import { IModels } from '~/connectionResolvers';
import {
  IFavorites,
  favoritesSchema,
  IFavoritesDocument,
} from '@/organization/settings/db/definitions/favorites';

export interface IFavoritesModel extends Model<IFavoritesDocument> {
  createFavorite({
    type,
    path,
    userId,
  }: IFavorites): Promise<IFavoritesDocument>;
  getFavorites({
    type,
    path,

    userId,
  }: IFavorites): Promise<IFavoritesDocument[]>;

  getFavorite({
    type,
    path,

    userId,
  }: IFavorites): Promise<IFavoritesDocument>;

  deleteFavorite({ type, path }: IFavorites): Promise<IFavoritesDocument>;

  getFavoritesByCurrentUser({
    userId,
  }: {
    userId: string;
  }): Promise<IFavoritesDocument[]>;
}

export const loadFavoritesClass = (models: IModels) => {
  class Favorites {
    public static async createFavorite(doc: IFavoritesDocument) {
      const favorite = await models.Favorites.create(doc);
      return favorite;
    }

    public static async getFavoritesByCurrentUser({
      userId,
    }: {
      userId: string;
    }) {
      const favorites = await models.Favorites.find({ userId });
      return favorites;
    }

    public static async deleteFavorite(doc: IFavorites) {
      const favorite = await models.Favorites.findOneAndDelete(doc);

      return favorite;
    }

    public static async getFavorites(doc: IFavorites) {
      const favorite = await models.Favorites.findOne(doc);
      return favorite;
    }

    public static async getFavorite(doc: IFavorites) {
      const favorite = await models.Favorites.findOne(doc);
      return favorite;
    }
  }

  favoritesSchema.loadClass(Favorites);

  return favoritesSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const FAVORITE_ARRAY_FIELDS = new Set<string>();

function mapPrismaFavoriteToMongoose(fav: any): any {
  if (!fav) return null;
  return {
    ...fav,
    _id: fav.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaFavorite(update);
      return prisma.favorite.update({ where: { id: fav.id }, data });
    },
    async deleteOne() {
      return prisma.favorite.delete({ where: { id: fav.id } });
    }
  };
}

function mapMongooseToPrismaFavorite(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaFavorite(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaFavorite(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaFavorite(update));
  }
  return data;
}

export const loadPrismaFavorites = (models: IModels) => {
  const origSchema = loadFavoritesClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.favorite,
    mapPrismaFavoriteToMongoose,
    mapMongooseToPrismaFavorite,
    mapMongooseUpdateToPrismaFavorite,
    FAVORITE_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
