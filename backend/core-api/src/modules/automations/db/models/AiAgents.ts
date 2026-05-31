import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const AIAGENT_ARRAY_FIELDS = new Set<string>([]);

function mapPrismaAiAgentToMongoose(doc: any): any {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaAiAgent(update);
      return prisma.aiAgent.update({ where: { id: doc.id }, data });
    },
    async deleteOne() {
      return prisma.aiAgent.delete({ where: { id: doc.id } });
    }
  };
}

function mapMongooseToPrismaAiAgent(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaAiAgent(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaAiAgent(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaAiAgent(update));
  }
  return data;
}

export const loadPrismaAiAgents = () => {
  const modelAdapter = createPrismaAdapter(
    prisma.aiAgent,
    mapPrismaAiAgentToMongoose,
    mapMongooseToPrismaAiAgent,
    mapMongooseUpdateToPrismaAiAgent,
    AIAGENT_ARRAY_FIELDS
  );

  return modelAdapter as any;
};
