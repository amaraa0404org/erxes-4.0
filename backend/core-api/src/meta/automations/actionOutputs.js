"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI_AGENT_ACTION_OUTPUT = exports.OUTGOING_WEBHOOK_ACTION_OUTPUT = exports.SEND_EMAIL_ACTION_OUTPUT = exports.FIND_OBJECT_ACTION_OUTPUT = void 0;
const core_modules_1 = require("erxes-api-shared/core-modules");
const findObjectTargets_1 = require("./findObjectTargets");
exports.FIND_OBJECT_ACTION_OUTPUT = {
    variables: [
        { key: 'found', label: 'Found' },
        { key: 'objectType', label: 'Object Type' },
        { key: 'objectId', label: 'Object ID' },
        { key: 'object', label: 'Object' },
        { key: 'matchedBy.field', label: 'Matched Field' },
        { key: 'matchedBy.value', label: 'Matched Value' },
    ],
    resolvers: {
        'object.*': async ({ subdomain, source, path, defaultValue }) => {
            const objectType = source === null || source === void 0 ? void 0 : source.objectType;
            const target = objectType ? findObjectTargets_1.CORE_FIND_OBJECT_TARGETS[objectType] : null;
            const objectPath = path.replace(/^object\./, '');
            if (!(target === null || target === void 0 ? void 0 : target.output) || !(source === null || source === void 0 ? void 0 : source.object) || !objectPath) {
                return defaultValue;
            }
            const resolved = await (0, core_modules_1.resolveOutputValues)({
                definition: target.output,
                subdomain,
                source: source.object,
                paths: [objectPath],
                defaultValue,
            });
            return resolved[objectPath];
        },
    },
};
exports.SEND_EMAIL_ACTION_OUTPUT = {
    variables: [
        { key: 'title', label: 'Title' },
        { key: 'fromEmail', label: 'From Email' },
        { key: 'toEmails', label: 'To Emails' },
        { key: 'ccEmails', label: 'CC Emails' },
        { key: 'customHtml', label: 'Content' },
        { key: 'response', label: 'Response' },
    ],
};
exports.OUTGOING_WEBHOOK_ACTION_OUTPUT = {
    variables: [
        { key: 'request.method', label: 'Request Method' },
        { key: 'request.url', label: 'Request URL' },
        { key: 'request.headers', label: 'Request Headers' },
        { key: 'request.bodyText', label: 'Request Body' },
        { key: 'response.status', label: 'Response Status' },
        { key: 'response.statusText', label: 'Response Status Text' },
        { key: 'response.ok', label: 'Response Success' },
        { key: 'response.headers', label: 'Response Headers' },
        { key: 'response.contentType', label: 'Response Content Type' },
        { key: 'response.bodyText', label: 'Response Body Text' },
        { key: 'response.bodyJson', label: 'Response Body JSON' },
        { key: 'meta.attemptCount', label: 'Attempt Count' },
        { key: 'error.phase', label: 'Error Phase' },
        { key: 'error.message', label: 'Error Message' },
    ],
};
exports.AI_AGENT_ACTION_OUTPUT = {
    variables: [
        { key: 'type', label: 'Result Type' },
        { key: 'text', label: 'Generated Text' },
        { key: 'topicId', label: 'Topic ID', exposure: 'reference' },
        { key: 'matched', label: 'Matched' },
        { key: 'attributes', label: 'Attributes' },
        { key: 'usage.inputTokens', label: 'Input Tokens' },
        { key: 'usage.outputTokens', label: 'Output Tokens' },
        { key: 'usage.totalTokens', label: 'Total Tokens' },
    ],
};
//# sourceMappingURL=actionOutputs.js.map