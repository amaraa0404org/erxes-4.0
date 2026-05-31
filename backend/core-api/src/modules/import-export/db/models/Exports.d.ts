import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';
export interface IExportDocument {
    _id: string;
    entityType: string;
    pluginName: string;
    moduleName: string;
    collectionName: string;
    fileName: string;
    status: 'pending' | 'validating' | 'processing' | 'completed' | 'failed' | 'cancelled';
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
    updateExportProgress(_id: string, progress: {
        processedRows?: number;
        totalRows?: number;
        terminalError?: {
            code?: string;
            stage?: string;
            retryable?: boolean;
        };
        status?: IExportDocument['status'];
        errorMessage?: string;
    }): Promise<IExportDocument>;
    saveExportFile(_id: string, fileKey: string, fileName: string): Promise<IExportDocument>;
}
export declare const loadExportClass: (models: IModels, { sendNotificationMessage }: EventDispatcherReturn) => import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    [x: string]: unknown;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    [x: string]: unknown;
}>> & import("mongoose").FlatRecord<{
    [x: string]: unknown;
}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
