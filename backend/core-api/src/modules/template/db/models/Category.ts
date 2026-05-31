import { IUserDocument } from 'erxes-api-shared/core-types';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { ITemplateCategory, ITemplateCategoryDocument } from '../../@types';
import { templateCategorySchema } from '../definitions/category';

export interface ITemplateCategoryModal extends Model<ITemplateCategoryDocument> {
  getTemplateCategory(_id: string): Promise<ITemplateCategoryDocument>;
  createTemplateCategory(
    category: ITemplateCategory,
    user: IUserDocument,
  ): Promise<ITemplateCategoryDocument>;
  updateTemplateCategory(
    _id: string,
    category: ITemplateCategory,
    user: IUserDocument,
  ): Promise<ITemplateCategoryDocument>;
  removeTemplateCategory(_ids: string[]): Promise<void>;
}

export const loadTemplateCategoryClass = (models: IModels) => {
  class Category {
    public static async getTemplateCategory(_id: string) {
      const category = await models.TemplateCategory.findOne({ _id }).lean();

      if (!category) {
        throw new Error('Template Category not found');
      }

      return category;
    }

    public static async createTemplateCategory(
      category: ITemplateCategory,
      user: IUserDocument,
    ) {
      await this.validateTemplateCategory({ category });

      return await models.TemplateCategory.create({
        ...category,
        createdBy: user._id,
      });
    }

    public static async updateTemplateCategory(
      _id: string,
      category: ITemplateCategory,
      user: IUserDocument,
    ) {
      await this.validateTemplateCategory({ _id, category });

      return await models.TemplateCategory.findOneAndUpdate(
        { _id },
        {
          $set: {
            ...category,
            updatedBy: user?._id,
          },
        },
        { new: true },
      );
    }

    public static async removeTemplateCategory(_ids: string[]) {
      return models.TemplateCategory.deleteMany({
        _id: { $in: _ids },
      });
    }

    public static async validateTemplateCategory({
      _id,
      category,
    }: {
      _id?: string;
      category: ITemplateCategory;
    }) {
      const { code = '', parentId } = category || {};

      if (code) {
        if (code.includes('/')) {
          throw new Error('The "/" character is not allowed in the code');
        }

        const category = await models.TemplateCategory.findOne({ code }).lean();

        if (category) {
          throw new Error('Code must be unique');
        }
      }

      if (parentId && _id) {
        const category = await models.TemplateCategory.findOne({
          parentId,
        }).lean();

        if (_id === category?.parentId) {
          throw new Error('Cannot change category');
        }
      }
    }
  }

  templateCategorySchema.loadClass(Category);

  return templateCategorySchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const CATEGORY_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaCategoryToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaCategory(update);
      return prisma.templateCategory.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.templateCategory.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaCategory(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaCategory(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaCategory(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaCategory(update));
  }
  return data;
}

export const loadPrismaTemplateCategories = (models: IModels) => {
  const origSchema = loadTemplateCategoryClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.templateCategory,
    mapPrismaCategoryToMongoose,
    mapMongooseToPrismaCategory,
    mapMongooseUpdateToPrismaCategory,
    CATEGORY_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

