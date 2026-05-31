import { TAutomationFindObjectTargetDefinition, TAutomationFindObjectType, TAutomationFindObjectResult } from 'erxes-api-shared/core-modules';
import { IModels } from '~/connectionResolvers';
type TFindObjectTarget = {
    label: string;
    lookupFields: TAutomationFindObjectTargetDefinition['lookupFields'];
    getCollection: (models: IModels) => {
        findOne: (filter: Record<string, unknown>) => {
            lean: () => Promise<Record<string, unknown> | null>;
        };
    };
    generateFilter: (field: string, value: string) => Record<string, unknown> | null;
    output: TAutomationFindObjectTargetDefinition['output'];
};
export declare const CORE_FIND_OBJECT_TARGETS: Record<TAutomationFindObjectType, TFindObjectTarget>;
export declare const CORE_FIND_OBJECT_TARGETS_CONST: TAutomationFindObjectTargetDefinition[];
export declare const buildFindObjectResult: ({ objectType, field, value, doc, }: {
    objectType: TAutomationFindObjectType;
    field: string;
    value: string;
    doc?: Record<string, unknown> | null;
}) => TAutomationFindObjectResult;
export {};
