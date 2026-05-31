import { Model } from 'mongoose';
import { ICPComment, ICPCommentDocument } from '../../types/comment';
import { IModels } from '~/connectionResolvers';
import { commentSchema } from 'erxes-api-shared/core-modules';
import { sendTRPCMessage } from 'erxes-api-shared/utils';

export interface ICPCommentsModel extends Model<ICPCommentDocument> {
  getComment(_id: string): Promise<ICPCommentDocument>;
  createComment(doc: ICPComment): Promise<ICPCommentDocument>;
  updateComment(
    _id: string,
    doc: Partial<ICPComment>,
  ): Promise<ICPCommentDocument>;
  deleteComment(_id: string): Promise<void>;
}

export const loadCommentClass = (models: IModels, subdomain: string) => {
  class Comment {
    /**
     * Retrieves comment
     */
    public static async getComment(_id: string) {
      const comment = await models.CPComments.findOne({ _id });

      if (!comment) {
        throw new Error('Comment not found');
      }

      return comment;
    }

    public static async createComment(doc: ICPCommentDocument) {
      const comment = await models.CPComments.create({
        ...doc,
        createdAt: new Date(),
      });

      // Create activity log via tRPC for sales deal comments
      if (doc.type === 'sales:deal') {
        try {
          await sendTRPCMessage({
            subdomain,
            pluginName: 'sales',
            method: 'mutation',
            module: 'deal',
            action: 'createCommentActivityLog',
            input: {
              dealId: doc.typeId,
              commentId: comment._id,
              commentContent: doc.content,
              createdBy: comment.userId,
              processId: '',
              userId: comment.userId,
            },
            defaultValue: null,
          });
        } catch (error) {
          // Activity log creation should not block comment creation
          // Error is silently caught to prevent blocking the mutation
        }
      }

      return comment;
    }

    public static async updateComment(_id: string, doc: Partial<ICPComment>) {
      const comment = await models.CPComments.findOneAndUpdate(
        { _id },
        { $set: { ...doc, updatedAt: new Date() } },
        { new: true },
      );

      if (!comment) {
        throw new Error('Comment not found');
      }

      return comment;
    }

    public static async deleteComment(_id: string) {
      return models.CPComments.deleteOne({ _id });
    }
  }

  commentSchema.loadClass(Comment);

  return commentSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const COMMENT_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaCommentToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaComment(update);
      return prisma.cPComment.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.cPComment.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaComment(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaComment(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaComment(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaComment(update));
  }
  return data;
}

export const loadPrismaCPComments = (models: IModels, subdomain: string) => {
  const origSchema = loadCommentClass(models, subdomain);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.cPComment,
    mapPrismaCommentToMongoose,
    mapMongooseToPrismaComment,
    mapMongooseUpdateToPrismaComment,
    COMMENT_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

