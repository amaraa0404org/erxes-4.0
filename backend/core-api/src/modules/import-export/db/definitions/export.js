"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportSchema = void 0;
const utils_1 = require("erxes-api-shared/utils");
const mongoose_1 = require("mongoose");
exports.exportSchema = (0, utils_1.schemaWrapper)(new mongoose_1.Schema({
    _id: utils_1.mongooseStringRandomId,
    entityType: {
        type: String,
        required: true,
        label: 'Entity Type',
        index: true,
    },
    pluginName: { type: String, required: true, label: 'Plugin Name' },
    moduleName: { type: String, required: true, label: 'Module Name' },
    collectionName: {
        type: String,
        required: true,
        label: 'Collection Name',
    },
    fileName: { type: String, required: true, label: 'File Name' },
    status: {
        type: String,
        enum: [
            'pending',
            'validating',
            'processing',
            'completed',
            'failed',
            'cancelled',
        ],
        default: 'pending',
        label: 'Status',
        index: true,
    },
    totalRows: { type: Number, default: 0, label: 'Total Rows' },
    processedRows: { type: Number, default: 0, label: 'Processed Rows' },
    terminalError: {
        code: { type: String, optional: true },
        stage: { type: String, optional: true },
        retryable: { type: Boolean, optional: true },
    },
    fileFormat: {
        type: String,
        enum: ['csv', 'xlsx'],
        default: 'csv',
        label: 'File Format',
    },
    fileKey: { type: String, label: 'File Key' },
    filters: { type: mongoose_1.Schema.Types.Mixed, optional: true, label: 'Filters' },
    ids: { type: [String], default: [], label: 'Selected IDs' },
    selectedFields: {
        type: [String],
        default: [],
        label: 'Selected Fields',
    },
    startedAt: { type: Date, optional: true, label: 'Started At' },
    completedAt: { type: Date, optional: true, label: 'Completed At' },
    userId: { type: String, required: true, label: 'User ID', index: true },
    subdomain: {
        type: String,
        required: true,
        label: 'Subdomain',
        index: true,
    },
    jobId: {
        type: String,
        optional: true,
        label: 'Job ID',
        index: true,
    },
    errorMessage: { type: String, optional: true, label: 'Error Message' },
    lastCursor: {
        type: String,
        optional: true,
        label: 'Last Cursor',
    },
}, { timestamps: true }));
//# sourceMappingURL=export.js.map