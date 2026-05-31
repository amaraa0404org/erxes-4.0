import { IModels } from '~/connectionResolvers';
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

// ================= TYPES =================

export interface ITranslationModel {
  getTranslations(
    clientPortalId: string | null,
    namespace: string,
    language: string,
  ): Promise<any[]>;
  upsertTranslation(doc: {
    clientPortalId?: string | null;
    namespace: string;
    language: string;
    key: string;
    value: string;
    updatedBy?: string;
  }): Promise<any>;
  upsertTranslationsBulk(entries: {
    clientPortalId?: string | null;
    namespace: string;
    language: string;
    entries: Array<{ key: string; value: string }>;
    updatedBy?: string;
  }): Promise<{ inserted: number; updated: number }>;
  removeTranslation(id: string): Promise<any>;
  find(query?: any): any;
  findOne(query?: any): any;
  countDocuments(query?: any): Promise<number>;
  create(doc: any): Promise<any>;
}

// ================= MAPPING FUNCTIONS =================

const TRANSLATION_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaTranslationToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaTranslation(update);
      return prisma.translation.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.translation.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaTranslation(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaTranslation(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaTranslation(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaTranslation(update));
  }
  return data;
}

// ================= PRISMA ADAPTER =================

export const loadPrismaTranslations = (models: IModels): ITranslationModel => {
  const modelAdapter = createPrismaAdapter(
    prisma.translation,
    mapPrismaTranslationToMongoose,
    mapMongooseToPrismaTranslation,
    mapMongooseUpdateToPrismaTranslation,
    TRANSLATION_ARRAY_FIELDS
  ) as any;

  /**
   * Get translations for a namespace+language with portal override chain.
   * First fetches global translations (clientPortalId = null), then overlays
   * portal-specific translations on top.
   */
  modelAdapter.getTranslations = async (
    clientPortalId: string | null,
    namespace: string,
    language: string,
  ) => {
    // Fetch global (default) translations
    const globalTranslations = await prisma.translation.findMany({
      where: {
        clientPortalId: null,
        namespace,
        language,
      },
    });

    if (!clientPortalId) {
      return globalTranslations.map(mapPrismaTranslationToMongoose);
    }

    // Fetch portal-specific overrides
    const portalTranslations = await prisma.translation.findMany({
      where: {
        clientPortalId,
        namespace,
        language,
      },
    });

    // Merge: portal-specific overrides global
    const mergedMap = new Map<string, any>();

    for (const t of globalTranslations) {
      mergedMap.set(t.key, t);
    }

    for (const t of portalTranslations) {
      mergedMap.set(t.key, t);
    }

    return Array.from(mergedMap.values()).map(mapPrismaTranslationToMongoose);
  };

  /**
   * Create or update a single translation
   */
  modelAdapter.upsertTranslation = async (doc: {
    clientPortalId?: string | null;
    namespace: string;
    language: string;
    key: string;
    value: string;
    updatedBy?: string;
  }) => {
    const result = await prisma.translation.upsert({
      where: {
        clientPortalId_namespace_language_key: {
          clientPortalId: doc.clientPortalId || null,
          namespace: doc.namespace,
          language: doc.language,
          key: doc.key,
        } as any,
      },
      update: {
        value: doc.value,
        updatedBy: doc.updatedBy || null,
      },
      create: {
        clientPortalId: doc.clientPortalId || null,
        namespace: doc.namespace,
        language: doc.language,
        key: doc.key,
        value: doc.value,
        updatedBy: doc.updatedBy || null,
      },
    });

    return mapPrismaTranslationToMongoose(result);
  };

  /**
   * Bulk upsert translations
   */
  modelAdapter.upsertTranslationsBulk = async (input: {
    clientPortalId?: string | null;
    namespace: string;
    language: string;
    entries: Array<{ key: string; value: string }>;
    updatedBy?: string;
  }) => {
    let inserted = 0;
    let updated = 0;

    for (const entry of input.entries) {
      const existing = await prisma.translation.findUnique({
        where: {
          clientPortalId_namespace_language_key: {
            clientPortalId: input.clientPortalId || null,
            namespace: input.namespace,
            language: input.language,
            key: entry.key,
          } as any,
        },
      });

      await prisma.translation.upsert({
        where: {
          clientPortalId_namespace_language_key: {
            clientPortalId: input.clientPortalId || null,
            namespace: input.namespace,
            language: input.language,
            key: entry.key,
          } as any,
        },
        update: {
          value: entry.value,
          updatedBy: input.updatedBy || null,
        },
        create: {
          clientPortalId: input.clientPortalId || null,
          namespace: input.namespace,
          language: input.language,
          key: entry.key,
          value: entry.value,
          updatedBy: input.updatedBy || null,
        },
      });

      if (existing) {
        updated++;
      } else {
        inserted++;
      }
    }

    return { inserted, updated };
  };

  /**
   * Remove a translation by id
   */
  modelAdapter.removeTranslation = async (id: string) => {
    return prisma.translation.delete({ where: { id } });
  };

  return modelAdapter as any;
};
