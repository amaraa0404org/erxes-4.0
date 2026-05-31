"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadExportClass = void 0;
const export_1 = require("../definitions/export");
const buildNotificationMessage = (exportDoc) => {
    var _a;
    if (exportDoc.status === 'completed') {
        const recordsText = exportDoc.totalRows > 0
            ? ` ${exportDoc.totalRows.toLocaleString()} records exported.`
            : '';
        const derivedLabel = exportDoc.entityType
            ? (_a = exportDoc.entityType.toUpperCase().split(':').pop()) === null || _a === void 0 ? void 0 : _a.split('.').pop()
            : undefined;
        const typeLabel = (derivedLabel === null || derivedLabel === void 0 ? void 0 : derivedLabel.trim()) ? derivedLabel : exportDoc.fileName;
        return `Your export "${typeLabel}" has been completed successfully.${recordsText}`;
    }
    if (exportDoc.errorMessage) {
        return `Export "${exportDoc.fileName}" failed: ${exportDoc.errorMessage}`;
    }
    return `Export "${exportDoc.fileName}" failed. Please try again or contact support if the issue persists.`;
};
const buildNotificationMetadata = (exportDoc) => ({
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
const loadExportClass = (models, { sendNotificationMessage }) => {
    class Export {
        static async getExport(_id) {
            return models.Exports.findOne({ _id }).lean();
        }
        static async updateExportProgress(_id, progress) {
            const update = {};
            const unset = {};
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
            }
            else {
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
            const exportDoc = await models.Exports.findOneAndUpdate({ _id }, Object.assign(Object.assign({}, (Object.keys(update).length ? { $set: update } : {})), (Object.keys(unset).length ? { $unset: unset } : {})), { new: true }).lean();
            if (exportDoc &&
                (exportDoc.status === 'completed' || exportDoc.status === 'failed')) {
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
        static async saveExportFile(_id, fileKey, fileName) {
            return models.Exports.findOneAndUpdate({ _id }, {
                $set: { fileKey, fileName },
            }, {
                new: true,
            }).lean();
        }
    }
    export_1.exportSchema.loadClass(Export);
    return export_1.exportSchema;
};
exports.loadExportClass = loadExportClass;
//# sourceMappingURL=Exports.js.map