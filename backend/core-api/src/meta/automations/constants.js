"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreAutomationConstants = void 0;
const core_modules_1 = require("erxes-api-shared/core-modules");
const actionOutputs_1 = require("./actionOutputs");
const findObjectTargets_1 = require("./findObjectTargets");
const triggerOutputs_1 = require("./triggerOutputs");
exports.coreAutomationConstants = {
    findObjectTargets: findObjectTargets_1.CORE_FIND_OBJECT_TARGETS_CONST,
    triggers: [
        {
            type: core_modules_1.AUTOMATION_CORE_TRIGGER_TYPES.INCOMING_WEBHOOK,
            moduleName: 'webhooks',
            collectionName: 'incoming',
            icon: 'IconWebhook',
            label: 'Incoming Webhook',
            description: 'Trigger automation workflows when external systems send HTTP requests to your webhook endpoint',
            isCustom: true,
            output: triggerOutputs_1.WEBHOOK_TRIGGER_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_TRIGGER_TYPES.USER,
            moduleName: 'organization',
            collectionName: 'users',
            icon: 'IconUsers',
            label: 'Team member',
            description: 'Start with a blank workflow that enrolls and is triggered off team members',
            output: triggerOutputs_1.TEAM_MEMBER_TRIGGER_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_TRIGGER_TYPES.CUSTOMER,
            moduleName: 'contacts',
            collectionName: 'customers',
            icon: 'IconUsersGroup',
            label: 'Customer',
            description: 'Start with a blank workflow that enrolls and is triggered off Customers',
            output: triggerOutputs_1.CUSTOMER_TRIGGER_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_TRIGGER_TYPES.LEAD,
            moduleName: 'contacts',
            collectionName: 'leads',
            icon: 'IconUsersGroup',
            label: 'Lead',
            description: 'Start with a blank workflow that enrolls and is triggered off Leads',
            output: triggerOutputs_1.LEAD_TRIGGER_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_TRIGGER_TYPES.COMPANY,
            moduleName: 'contacts',
            collectionName: 'companies',
            icon: 'IconBuilding',
            label: 'Company',
            description: 'Start with a blank workflow that enrolls and is triggered off company',
            output: triggerOutputs_1.COMPANY_TRIGGER_OUTPUT,
        },
    ],
    actions: [
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.IF,
            icon: 'IconSitemap',
            label: 'Branches',
            description: 'Create simple or if/then branches',
            folks: [
                { key: 'yes', label: 'Yes', type: core_modules_1.TAutomationActionFolks.SUCCESS },
                { key: 'no', label: 'No', type: core_modules_1.TAutomationActionFolks.ERROR },
            ],
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.SPLIT,
            icon: 'IconArrowsSplit',
            label: 'Split',
            description: 'Create conditional branches to route workflows based on criteria',
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.FIND_OBJECT,
            icon: 'IconSearch',
            label: 'Find object',
            description: 'Find object',
            folks: [
                {
                    key: 'isExists',
                    label: 'Found',
                    type: core_modules_1.TAutomationActionFolks.SUCCESS,
                },
                {
                    key: 'notExists',
                    label: 'Not Found',
                    type: core_modules_1.TAutomationActionFolks.ERROR,
                },
            ],
            isTargetSource: true,
            output: actionOutputs_1.FIND_OBJECT_ACTION_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.SET_PROPERTY,
            icon: 'IconFlask',
            label: 'Manage properties',
            description: 'Update record properties.',
            allowTargetFromActions: true,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.SEND_EMAIL,
            icon: 'IconMailFast',
            label: 'Send Email',
            description: 'Send Email',
            emailRecipientsConst: core_modules_1.AUTOMATION_EMAIL_RECIPIENTS_TYPES,
            allowTargetFromActions: true,
            output: actionOutputs_1.SEND_EMAIL_ACTION_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.OUTGOING_WEBHOOK,
            icon: 'IconWebhook',
            label: 'Outgoing webhook',
            description: 'Outgoing webhook',
            allowTargetFromActions: true,
            output: actionOutputs_1.OUTGOING_WEBHOOK_ACTION_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.AI_AGENT,
            icon: 'IconBrain',
            label: 'AI Agent',
            description: 'Use a configured AI agent to generate text, route topics, or classify structured data.',
            output: actionOutputs_1.AI_AGENT_ACTION_OUTPUT,
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.DELAY,
            moduleName: 'automation',
            collectionName: 'delay',
            icon: 'IconHourglass',
            label: 'Delay',
            description: 'Delay the next action.',
        },
        {
            type: core_modules_1.AUTOMATION_CORE_ACTIONS.WAIT_EVENT,
            moduleName: 'automation',
            collectionName: 'waitEvent',
            icon: 'IconClockPlay',
            label: 'Wait event',
            description: 'Delay until event is triggered',
        },
    ],
};
//# sourceMappingURL=constants.js.map