import { Model } from 'mongoose';
import { exportSchema } from '../definitions/export';
import { IModels } from '~/connectionResolvers';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';

export interface IExportDocument {
  _id: string;
  entityType: string;
  pluginName: string;
  moduleName: string;
  collectionName: string;
  fileName: string;
  status:
    | 'pending'
    | 'validating'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'cancelled';
  totalRows: number;
  processedRows: number;
  terminalError?: {
    code?: string;
    stage?: string;
    retryable?: boolean;
  };
  fileFormat: 'csv' | 'xlsx';
  fileKey?: string;
  filters?: Record<string, any>;
  ids: string[];
  selectedFields?: string[];
  startedAt?: Date;
  completedAt?: Date;
  userId: string;
  subdomain: string;
  jobId?: string;
  createdAt: Date;
  updatedAt: Date;
  errorMessage?: string;
  lastCursor?: string;
}

export interface IExportModel extends Model<IExportDocument> {
  getExport(_id: string): Promise<IExportDocument | null>;
  updateExportProgress(
    _id: string,
    progress: {
      processedRows?: number;
      totalRows?: number;
      terminalError?: {
        code?: string;
        stage?: string;
        retryable?: boolean;
      };
      status?: IExportDocument['status'];
      errorMessage?: string;
    },
  ): Promise<IExportDocument>;
  saveExportFile(
    _id: string,
    fileKey: string,
    fileName: string,
  ): Promise<IExportDocument>;
}

const buildNotificationMessage = (exportDoc: IExportDocument): string => {
  if (exportDoc.status === 'completed') {
    const recordsText =
      exportDoc.totalRows > 0
        ? ` ${exportDoc.totalRows.toLocaleString()} records exported.`
        : '';
    const derivedLabel = exportDoc.entityType
      ? exportDoc.entityType.toUpperCase().split(':').pop()?.split('.').pop()
      : undefined;
    const typeLabel = derivedLabel?.trim() ? derivedLabel : exportDoc.fileName;
    return `Your export "${typeLabel}" has been completed successfully.${recordsText}`;
  }

  if (exportDoc.errorMessage) {
    return `Export "${exportDoc.fileName}" failed: ${exportDoc.errorMessage}`;
  }

  return `Export "${exportDoc.fileName}" failed. Please try again or contact support if the issue persists.`;
};

const buildNotificationMetadata = (exportDoc: IExportDocument) => ({
  exportId: exportDoc._id,
  fileName: exportDoc.fileName,
  status: exportDoc.status,
  processedRows: exportDoc.processedRows,
  totalRows: exportDoc.totalRows,
  errorMessage: exportDoc.errorMessage,
  fileKey: exportDoc.fileKey,
  fileFormat: exportDoc.fileFormat,
  terminalError: exportDoc.terminalError,
});

export const loadExportClass = (
  models: IModels,
  { sendNotificationMessage }: EventDispatcherReturn,
) => {
  class Export {
    public static async getExport(_id: string) {
      return models.Exports.findOne({ _id }).lean();
    }

    public static async updateExportProgress(
      _id: string,
      progress: {
        processedRows?: number;
        totalRows?: number;
        terminalError?: {
          code?: string;
          stage?: string;
          retryable?: boolean;
        };
        status?: IExportDocument['status'];
        errorMessage?: string;
        lastCursor?: string;
      },
    ) {
      const update: Record<string, any> = {};
      const unset: Record<string, any> = {};

      if (progress.processedRows !== undefined) {
        update.processedRows = progress.processedRows;
      }

      if (progress.totalRows !== undefined) {
        update.totalRows = progress.totalRows;
      }

      if (progress.errorMessage !== undefined) {
        update.errorMessage = progress.errorMessage;
      }

      if (progress.lastCursor !== undefined) {
        update.lastCursor = progress.lastCursor;
      }

      if (progress.terminalError === undefined) {
        unset.terminalError = 1;
      } else {
        update.terminalError = progress.terminalError;
      }

      if (progress.status) {
        update.status = progress.status;

        if (progress.status === 'processing' && !update.startedAt) {
          update.startedAt = new Date();
        }

        if (progress.status === 'completed' || progress.status === 'failed') {
          update.completedAt = new Date();
        }
      }

      const exportDoc = await models.Exports.findOneAndUpdate(
        { _id },
        {
          ...(Object.keys(update).length ? { $set: update } : {}),
          ...(Object.keys(unset).length ? { $unset: unset } : {}),
        },
        { new: true },
      ).lean();

      if (
        exportDoc &&
        (exportDoc.status === 'completed' || exportDoc.status === 'failed')
      ) {
        const isCompleted = exportDoc.status === 'completed';

        sendNotificationMessage({
          userIds: [exportDoc.userId],
          title: isCompleted ? 'Export completed' : 'Export failed',
          message: buildNotificationMessage(exportDoc),
          type: isCompleted ? 'success' : 'error',
          priority: 'low',
          kind: 'system',
          contentType: 'core:import-export.exports',
          metadata: buildNotificationMetadata(exportDoc),
        });
      }

      return exportDoc;
    }

    public static async saveExportFile(
      _id: string,
      fileKey: string,
      fileName: string,
    ) {
      return models.Exports.findOneAndUpdate(
        { _id },
        {
          $set: { fileKey, fileName },
        },
        {
          new: true,
        },
      ).lean();
    }
  }

  exportSchema.loadClass(Export);

  return exportSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

const EXPORT_ARRAY_FIELDS = new Set<string>(['ids', 'selectedFields']);

function mapPrismaExportToMongoose(exp: any): any {
  if (!exp) return null;
  return {
    ...exp,
    _id: exp.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaExport(update);
      return prisma.export.update({ where: { id: exp.id }, data });
    },
    async deleteOne() {
      return prisma.export.delete({ where: { id: exp.id } });
    }
  };
}

function mapMongooseToPrismaExport(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}

function mapMongooseUpdateToPrismaExport(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaExport(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaExport(update));
  }
  return data;
}

export const loadPrismaExports = (
  models: IModels,
  coreEventHandlers: EventDispatcherReturn,
) => {
  const origSchema = loadExportClass(models, coreEventHandlers);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.export,
    mapPrismaExportToMongoose,
    mapMongooseToPrismaExport,
    mapMongooseUpdateToPrismaExport,
    EXPORT_ARRAY_FIELDS
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

