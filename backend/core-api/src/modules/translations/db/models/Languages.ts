import { IModels } from '~/connectionResolvers';
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

// ================= TYPES =================

export interface ILanguageModel {
  getLanguages(): Promise<any[]>;
  getActiveLanguages(): Promise<any[]>;
  createLanguage(doc: {
    code: string;
    name: string;
    isActive?: boolean;
    isDefault?: boolean;
  }): Promise<any>;
  updateLanguage(
    id: string,
    doc: {
      code?: string;
      name?: string;
      isActive?: boolean;
      isDefault?: boolean;
    },
  ): Promise<any>;
  removeLanguage(id: string): Promise<any>;
  find(query?: any): any;
  findOne(query?: any): any;
  countDocuments(query?: any): Promise<number>;
  create(doc: any): Promise<any>;
}

// ================= MAPPING FUNCTIONS =================

const LANGUAGE_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaLanguageToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaLanguage(update);
      return prisma.language.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.language.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaLanguage(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaLanguage(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaLanguage(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaLanguage(update));
  }
  return data;
}

// ================= PRISMA ADAPTER =================

export const loadPrismaLanguages = (models: IModels): ILanguageModel => {
  const modelAdapter = createPrismaAdapter(
    prisma.language,
    mapPrismaLanguageToMongoose,
    mapMongooseToPrismaLanguage,
    mapMongooseUpdateToPrismaLanguage,
    LANGUAGE_ARRAY_FIELDS
  ) as any;

  /**
   * Get all languages
   */
  modelAdapter.getLanguages = async () => {
    const languages = await prisma.language.findMany({
      orderBy: { name: 'asc' },
    });
    return languages.map(mapPrismaLanguageToMongoose);
  };

  /**
   * Get active languages only
   */
  modelAdapter.getActiveLanguages = async () => {
    const languages = await prisma.language.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
    return languages.map(mapPrismaLanguageToMongoose);
  };

  /**
   * Create a language
   */
  modelAdapter.createLanguage = async (doc: {
    code: string;
    name: string;
    isActive?: boolean;
    isDefault?: boolean;
  }) => {
    // If setting as default, unset other defaults first
    if (doc.isDefault) {
      await prisma.language.updateMany({
        where: { isDefault: true },
        data: { isDefault: false },
      });
    }

    const result = await prisma.language.create({
      data: {
        code: doc.code,
        name: doc.name,
        isActive: doc.isActive ?? true,
        isDefault: doc.isDefault ?? false,
      },
    });

    return mapPrismaLanguageToMongoose(result);
  };

  /**
   * Update a language
   */
  modelAdapter.updateLanguage = async (
    id: string,
    doc: {
      code?: string;
      name?: string;
      isActive?: boolean;
      isDefault?: boolean;
    },
  ) => {
    const existing = await prisma.language.findUnique({ where: { id } });

    if (!existing) {
      throw new Error('Language not found');
    }

    // If setting as default, unset other defaults first
    if (doc.isDefault) {
      await prisma.language.updateMany({
        where: { isDefault: true, id: { not: id } },
        data: { isDefault: false },
      });
    }

    const result = await prisma.language.update({
      where: { id },
      data: {
        ...(doc.code !== undefined && { code: doc.code }),
        ...(doc.name !== undefined && { name: doc.name }),
        ...(doc.isActive !== undefined && { isActive: doc.isActive }),
        ...(doc.isDefault !== undefined && { isDefault: doc.isDefault }),
      },
    });

    return mapPrismaLanguageToMongoose(result);
  };

  /**
   * Remove a language
   */
  modelAdapter.removeLanguage = async (id: string) => {
    const existing = await prisma.language.findUnique({ where: { id } });

    if (!existing) {
      throw new Error('Language not found');
    }

    return prisma.language.delete({ where: { id } });
  };

  return modelAdapter as any;
};
