import { IUserDocument } from 'erxes-api-shared/core-types';
import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { fieldGroupSchema } from '~/modules/properties/db/definitions/group';
import { IFieldGroup, IFieldGroupDocument } from '../../@types';
import { ORDER_GAP } from '../../constants';

export interface IFieldGroupModel extends Model<IFieldGroupDocument> {
  getGroup({ _id }: { _id: string }): Promise<IFieldGroupDocument>;
  createGroup(
    doc: IFieldGroup,
    user: IUserDocument,
  ): Promise<IFieldGroupDocument>;
  updateGroup(
    _id: string,
    doc: IFieldGroup,
    user: IUserDocument,
  ): Promise<IFieldGroupDocument>;
  removeGroup(_id: string): Promise<IFieldGroupDocument>;
}

export const loadFieldGroupClass = (models: IModels) => {
  class FieldGroup {
    public static async getGroup({ _id }: { _id: string }) {
      const group = await models.FieldsGroups.findOne({ _id }).lean();

      if (!group) {
        throw new Error('Group not found');
      }

      return group;
    }

    public static async createGroup(doc: IFieldGroup, user: IUserDocument) {
      await this.validateGroup(doc);

      const { contentType } = doc || {};

      doc.order = await this.generateOrder({ contentType });

      return models.FieldsGroups.create({ ...doc, createdBy: user._id });
    }

    public static async updateGroup(
      _id: string,
      doc: IFieldGroup,
      user: IUserDocument,
    ) {
      await this.validateGroup(doc, _id);

      return models.FieldsGroups.findOneAndUpdate(
        { _id },
        { $set: { ...doc, updatedBy: user._id } },
        { new: true },
      );
    }

    public static async removeGroup(_id: string) {
      await this.validateGroup({} as IFieldGroup, _id);

      // Deleting fields that are associated with this group
      const fields = await models.Fields.find({ groupId: _id }).lean();

      for (const field of fields) {
        await models.Fields.removeField(field._id.toString());
      }

      return models.FieldsGroups.findOneAndDelete({ _id });
    }

    public static async generateOrder({
      contentType,
    }: {
      contentType: string;
    }) {
      const group = await models.FieldsGroups.findOne({ contentType }).sort({
        order: -1,
      });

      return (group?.order || 0) + ORDER_GAP;
    }

    public static async validateGroup(doc: IFieldGroup, _id?: string) {
      const { code } = doc || {};

      if (code && _id) {
        const group = await models.FieldsGroups.getGroup({ _id });

        if (group.code !== code) {
          const group = await models.FieldsGroups.findOne({ code }).lean();

          if (group) {
            throw new Error('Group code already exists');
          }
        }
      }

      if (code && !_id) {
        const group = await models.FieldsGroups.findOne({ code }).lean();

        if (group) {
          throw new Error('Group code already exists');
        }
      }
    }
  }

  fieldGroupSchema.loadClass(FieldGroup);

  return fieldGroupSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const FIELD_GROUP_ARRAY_FIELDS = new Set<string>();

function mapPrismaFieldGroupToMongoose(fg: any): any {
  if (!fg) return null;
  return {
    ...fg,
    _id: fg.id,
    logics: fg.logics || [],
    configs: fg.configs || {},
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaFieldGroup(update);
      return prisma.fieldGroup.update({ where: { id: fg.id }, data });
    },
    async deleteOne() {
      return prisma.fieldGroup.delete({ where: { id: fg.id } });
    }
  };
}

function mapMongooseToPrismaFieldGroup(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaFieldGroup(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaFieldGroup(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaFieldGroup(update));
  }
  return data;
}

export const loadPrismaFieldGroups = (models: IModels) => {
  const origSchema = loadFieldGroupClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.fieldGroup,
    mapPrismaFieldGroupToMongoose,
    mapMongooseToPrismaFieldGroup,
    mapMongooseUpdateToPrismaFieldGroup,
    FIELD_GROUP_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};
