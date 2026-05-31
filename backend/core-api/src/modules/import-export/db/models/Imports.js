"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImportClass = void 0;
const import_1 = require("../definitions/import");
const buildNotificationMessage = (importDoc) => {
    if (importDoc.status === 'completed') {
        const recordsText = importDoc.successRows > 0
            ? ` ${importDoc.successRows.toLocaleString()} records imported successfully.`
            : '';
        const errorText = importDoc.errorRows > 0
            ? ` ${importDoc.errorRows.toLocaleString()} records failed.`
            : '';
        return `Your import "${importDoc.fileName}" has been completed.${recordsText}${errorText}`;
    }
    if (importDoc.errorMessage) {
        return `Import "${importDoc.fileName}" failed: ${importDoc.errorMessage}`;
    }
    return `Import "${importDoc.fileName}" failed. Please try again or contact support if the issue persists.`;
};
const buildNotificationMetadata = (importDoc) => ({
    importId: importDoc._id,
    fileName: importDoc.fileName,
    status: importDoc.status,
    processedRows: importDoc.processedRows,
    successRows: importDoc.successRows,
    errorRows: importDoc.errorRows,
    totalRows: importDoc.totalRows,
    errorMessage: importDoc.errorMessage,
    errorFileUrl: importDoc.errorFileUrl,
    terminalError: importDoc.terminalError,
});
const loadImportClass = (models, { sendNotificationMessage }) => {
    class Import {
        static async getImport(_id) {
            return models.Imports.findOne({ _id }).lean();
        }
        static async updateImportProgress(_id, progress) {
            const update = {};
            const unset = {};
            if (progress.processedRows !== undefined) {
                update.processedRows = progress.processedRows;
            }
            if (progress.successRows !== undefined) {
                update.successRows = progress.successRows;
            }
            if (progress.errorRows !== undefined) {
                update.errorRows = progress.errorRows;
            }
            if (progress.totalRows !== undefined) {
                update.totalRows = progress.totalRows;
            }
            if (progress.lastProcessedRow !== undefined) {
                update.lastProcessedRow = progress.lastProcessedRow;
            }
            if (progress.terminalError === undefined) {
                unset.terminalError = 1;
            }
            else {
                update.terminalError = progress.terminalError;
            }
            if (progress.errorMessage !== undefined) {
                update.errorMessage = progress.errorMessage;
            }
            if (progress.errorFileUrl !== undefined) {
                update.errorFileUrl = progress.errorFileUrl;
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
            const importDoc = await models.Imports.findOneAndUpdate({ _id }, Object.assign(Object.assign({}, (Object.keys(update).length ? { $set: update } : {})), (Object.keys(unset).length ? { $unset: unset } : {})), { new: true }).lean();
            if (importDoc &&
                (importDoc.status === 'completed' || importDoc.status === 'failed')) {
                const isCompleted = importDoc.status === 'completed';
                sendNotificationMessage({
                    userIds: [importDoc.userId],
                    title: isCompleted ? 'Import completed' : 'Import failed',
                    message: buildNotificationMessage(importDoc),
                    type: isCompleted ? 'success' : 'error',
                    priority: 'low',
                    kind: 'system',
                    contentType: 'core:import-export.imports',
                    metadata: buildNotificationMetadata(importDoc),
                });
            }
            return importDoc;
        }
        static async addImportedIds(_id, recordIds) {
            await models.Imports.updateOne({ _id }, { $push: { importedIds: { $each: recordIds } } });
        }
    }
    import_1.importSchema.loadClass(Import);
    return import_1.importSchema;
};
exports.loadImportClass = loadImportClass;
//# sourceMappingURL=Imports.js.map