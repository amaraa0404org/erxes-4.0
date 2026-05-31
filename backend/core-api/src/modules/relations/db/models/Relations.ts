import { IRelation, IRelationDocument } from 'erxes-api-shared/core-types';
import lodash from 'lodash';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { relationSchema } from '@/relations/db/definitions/relations';

export interface IRelationModel extends Model<IRelationDocument> {
  createRelation: ({
    relation,
  }: {
    relation: IRelation;
  }) => Promise<IRelationDocument>;
  updateRelation: ({
    _id,
    doc,
  }: {
    _id: string;
    doc: IRelation;
  }) => Promise<IRelationDocument>;
  deleteRelation: ({ _id }: { _id: string }) => Promise<IRelationDocument>;
  cleanRelation: ({ contentType, contentIds }: { contentType: string, contentIds: string[] }) => Promise<string>;
  getRelationsByEntity: ({
    contentType,
    contentId,
    relatedContentType,
  }: {
    contentType: string;
    contentId: string;
    relatedContentType: string;
  }) => Promise<IRelationDocument[]>;
  getRelationsByEntities: ({
    contentType,
    contentId,
  }: {
    contentType: string;
    contentId: string;
  }) => Promise<IRelationDocument[]>;
  filterRelations: ({
    contentType,
    contentIds,
    relatedContentType,
  }: {
    contentType: string;
    contentIds: string[];
    relatedContentType: string;
  }) => Promise<IRelationDocument[]>;
  getRelationIds: ({
    contentType, contentId, relatedContentType
  }: {
    contentType: string, contentId: string, relatedContentType: string
  }) => Promise<string[]>;
  filterRelationIds: ({
    contentType, contentIds, relatedContentType
  }: {
    contentType: string, contentIds: string[], relatedContentType: string
  }) => Promise<string[]>;
  createMultipleRelations: ({
    relations,
  }: {
    relations: IRelation[];
  }) => Promise<IRelationDocument[]>;
  manageRelations: ({
    contentType,
    contentId,
    relatedContentType,
    relatedContentIds,
  }: {
    contentType: string;
    contentId: string;
    relatedContentType: string;
    relatedContentIds: string[];
  }) => Promise<IRelationDocument[]>;
}

export const loadRelationClass = (models: IModels) => {
  class Relation {
    public static async createRelation({ relation }: { relation: IRelation }) {
      return models.Relations.create(relation);
    }

    public static async createMultipleRelations({
      relations,
    }: {
      relations: IRelation[];
    }) {
      return models.Relations.insertMany(relations);
    }

    public static async updateRelation({
      _id,
      doc,
    }: {
      _id: string;
      doc: IRelation;
    }) {
      return models.Relations.updateOne({ _id }, doc);
    }

    public static async deleteRelation({ _id }: { _id: string }) {
      return models.Relations.deleteOne({ _id });
    }

    public static async cleanRelation({ contentType, contentIds }: { contentType: string, contentIds: string[] }) {
      await models.Relations.deleteMany({
        entities: {
          $elemMatch: {
            contentType: contentType,
            contentId: { $in: contentIds },
          },
        },
      })
      return 'success';
    }

    public static async getRelationsByEntity({
      contentType,
      contentId,
      relatedContentType,
    }: {
      contentType: string;
      contentId: string;
      relatedContentType: string;
    }) {
      const relation = await models.Relations.find({
        $and: [
          {
            entities: {
              $elemMatch: {
                contentType: contentType,
                contentId: contentId,
              },
            },
          },
          {
            entities: {
              $elemMatch: {
                contentType: relatedContentType,
              },
            },
          },
        ],
      });

      return relation;
    }

    public static async getRelationsByEntities({
      contentType,
      contentId,
    }: {
      contentType: string;
      contentId: string;
    }) {
      return await models.Relations.find({
        'entities.contentType': { $in: [contentType] },
        'entities.contentId': { $in: [contentId] },
      }).lean();
    }

    public static async filterRelations({
      contentType,
      contentIds,
      relatedContentType,
    }: {
      contentType: string;
      contentIds: string[];
      relatedContentType: string;
    }) {
      const relations = await models.Relations.find({
        $and: [
          {
            entities: {
              $elemMatch: {
                contentType: contentType,
                contentId: { $in: contentIds },
              },
            },
          },
          {
            entities: {
              $elemMatch: {
                contentType: relatedContentType,
              },
            },
          },
        ],
      });
      return relations;
    }

    public static async getRelationIds({
      contentType, contentId, relatedContentType
    }: {
      contentType: string, contentId: string, relatedContentType: string
    }) {
      const relations = await models.Relations.getRelationsByEntity({ contentType, contentId, relatedContentType });
      return lodash.uniq(relations.map(r => (
        r.entities.find(e => e.contentType === relatedContentType && e.contentId)?.contentId ?? ''
      )));
    }

    public static async filterRelationIds({
      contentType, contentIds, relatedContentType
    }: {
      contentType: string, contentIds: string[], relatedContentType: string
    }) {
      const relations = await models.Relations.filterRelations({ contentType, contentIds, relatedContentType })

      return lodash.uniq(relations.map(r => (
        r.entities.find(e => e.contentType === relatedContentType && e.contentId)?.contentId ?? ''
      )));
    }

    public static async manageRelations({
      contentType,
      contentId,
      relatedContentType,
      relatedContentIds,
    }: {
      contentType: string;
      contentId: string;
      relatedContentType: string;
      relatedContentIds: string[];
    }) {
      const existingRels = await models.Relations.getRelationsByEntity({ contentType, contentId, relatedContentType });

      const existingRelIds: string[] = lodash.uniq(existingRels.map(r => (
        r.entities.find(e => e.contentType === relatedContentType && e.contentId)?.contentId ?? ''
      )));

      const relContentIds: string[] = lodash.uniq(relatedContentIds);
      const toCreateRelIds: string[] = lodash.difference(relContentIds, existingRelIds);
      const toDeleteRelIds: string[] = lodash.difference(existingRelIds, relContentIds);

      if (toDeleteRelIds.length) {
        await models.Relations.deleteMany({
          $and: [
            {
              entities: {
                $elemMatch: {
                  contentType: contentType,
                  contentId: contentId,
                },
              },
            },
            {
              entities: {
                $elemMatch: {
                  contentType: relatedContentType,
                  contentId: { $in: toDeleteRelIds }
                },
              },
            },
          ],
        });
      }

      if (toCreateRelIds.length) {
        await models.Relations.insertMany(toCreateRelIds.map(relId => ({
          entities: [
            { contentType, contentId },
            { contentType: relatedContentType, contentId: relId }
          ]
        })));
      }
      return models.Relations.getRelationsByEntity({ contentType, contentId, relatedContentType })
    }
  }

  relationSchema.loadClass(Relation);

  return relationSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const RELATION_ARRAY_FIELDS = new Set<string>();

function mapPrismaRelationToMongoose(rel: any): any {
  if (!rel) return null;
  return {
    ...rel,
    _id: rel.id,
    entities: rel.entities || [],
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaRelation(update);
      return prisma.relation.update({ where: { id: rel.id }, data });
    },
    async deleteOne() {
      return prisma.relation.delete({ where: { id: rel.id } });
    }
  };
}

function mapMongooseToPrismaRelation(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaRelation(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaRelation(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaRelation(update));
  }
  return data;
}

export const loadPrismaRelations = (models: IModels) => {
  const origSchema = loadRelationClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.relation,
    mapPrismaRelationToMongoose,
    mapMongooseToPrismaRelation,
    mapMongooseUpdateToPrismaRelation,
    RELATION_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
