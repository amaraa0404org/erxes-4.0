import { Model } from 'mongoose';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';
import { IModels } from '~/connectionResolvers';
import { internalNoteSchema } from '~/modules/internalNote/db/definitions/internalNote';
import {
  IInternalNote,
  IInternalNoteDocument,
} from '~/modules/internalNote/types';

export interface IInternalNoteModel extends Model<IInternalNoteDocument> {
  getInternalNote(_id: string): Promise<IInternalNoteDocument>;
  createInternalNote(
    { contentType, contentTypeId, ...fields }: IInternalNote,
    user,
  ): Promise<IInternalNoteDocument>;
  updateInternalNote(
    _id: string,
    doc: IInternalNote,
  ): Promise<IInternalNoteDocument>;
  removeInternalNote(_id: string): Promise<IInternalNoteDocument>;
  removeInternalNotes(
    contentType: string,
    contentTypeIds: string[],
  ): Promise<{ n: number; ok: number }>;
}

export const loadInternalNoteClass = (
  models: IModels,
  subdomain: string,
  { createActivityLog }: EventDispatcherReturn,
) => {
  class InternalNote {
    public static async getInternalNote(_id: string) {
      const internalNote = await models.InternalNotes.findOne({ _id }).lean();

      if (!internalNote) {
        throw new Error('Internal note not found');
      }

      return internalNote;
    }

    /*
     * Create new internalNote
     */
    public static async createInternalNote(
      { contentType, contentTypeId, ...fields }: IInternalNote,
      user,
    ) {
      const note = await models.InternalNotes.create({
        contentType,
        contentTypeId,
        createdUserId: user._id,
        ...fields,
      });
      createActivityLog({
        activityType: 'create',
        target: {
          _id: note._id,
        },
        action: {
          type: 'create',
          description: 'Note created',
        },
        changes: {},
      });
      return note;
    }

    /*
     * Update internalNote
     */
    public static async updateInternalNote(_id: string, doc: IInternalNote) {
      return await models.InternalNotes.findOneAndUpdate(
        { _id },
        { $set: doc },
        { new: true },
      );
    }

    /*
     * Remove internalNote
     */
    public static async removeInternalNote(_id: string) {
      const internalNoteObj = await models.InternalNotes.findOneAndDelete({
        _id,
      });

      if (!internalNoteObj) {
        throw new Error(`InternalNote not found with id ${_id}`);
      }

      return internalNoteObj;
    }

    /**
     * Remove internal notes
     */
    public static async removeInternalNotes(
      contentType: string,
      contentTypeIds: string[],
    ) {
      // Removing every internal notes of contentType
      const toDelete = await models.InternalNotes.find({
        contentType,
        contentTypeId: { $in: contentTypeIds },
      });
      const result = await models.InternalNotes.deleteMany({
        contentType,
        contentTypeId: { $in: contentTypeIds },
      });
      return result;
    }
  }

  internalNoteSchema.loadClass(InternalNote);

  return internalNoteSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const INTERNAL_NOTE_ARRAY_FIELDS = new Set<string>();

function mapPrismaInternalNoteToMongoose(inote: any): any {
  if (!inote) return null;
  return {
    ...inote,
    _id: inote.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaInternalNote(update);
      return prisma.internalNote.update({ where: { id: inote.id }, data });
    },
    async deleteOne() {
      return prisma.internalNote.delete({ where: { id: inote.id } });
    }
  };
}

function mapMongooseToPrismaInternalNote(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaInternalNote(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaInternalNote(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaInternalNote(update));
  }
  return data;
}

export const loadPrismaInternalNotes = (
  models: IModels,
  subdomain: string,
  coreEventHandlers: (
    moduleName: string,
    collectionName: string,
  ) => EventDispatcherReturn,
) => {
  const origSchema = loadInternalNoteClass(models, subdomain, coreEventHandlers('internalNotes', 'internalNotes'));
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.internalNote,
    mapPrismaInternalNoteToMongoose,
    mapMongooseToPrismaInternalNote,
    mapMongooseUpdateToPrismaInternalNote,
    INTERNAL_NOTE_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
