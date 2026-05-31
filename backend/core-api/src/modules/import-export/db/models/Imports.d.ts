import { Model } from 'mongoose';
import { IModels } from '~/connectionResolvers';
import { EventDispatcherReturn } from 'erxes-api-shared/core-modules';
export interface IImportDocument {
    _id: string;
    entityType: string;
    pluginName: string;
    moduleName: string;
    collectionName: string;
    fileKey: string;
    fileName: string;
    status: 'pending' | 'validating' | 'processing' | 'completed' | 'failed' | 'cancelled';
    totalRows: number;
    processedRows: number;
    successRows: number;
    errorRows: number;
    lastProcessedRow: number;
    terminalError?: {
        code?: string;
        stage?: string;
        retryable?: boolean;
    };
    importedIds: string[];
    errorFileUrl?: string;
    startedAt?: Date;
    completedAt?: Date;
    userId: string;
    subdomain: string;
    jobId?: string;
    createdAt: Date;
    updatedAt: Date;
    errorMessage?: string;
}
export interface IImportModel extends Model<IImportDocument> {
    getImport(_id: string): Promise<IImportDocument | null>;
    updateImportProgress(_id: string, progress: {
        processedRows?: number;
        successRows?: number;
        errorRows?: number;
        totalRows?: number;
        lastProcessedRow?: number;
        terminalError?: {
            code?: string;
            stage?: string;
            retryable?: boolean;
        };
        status?: IImportDocument['status'];
        errorMessage?: string;
        errorFileUrl?: string;
    }): Promise<IImportDocument>;
    addImportedIds(_id: string, recordIds: string[]): Promise<void>;
}
export declare const loadImportClass: (models: IModels, { sendNotificationMessage }: EventDispatcherReturn) => import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
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
