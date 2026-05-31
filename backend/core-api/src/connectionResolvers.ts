import { IAppModel, loadAppClass, loadPrismaApps } from '@/apps/db/models/Apps';
import { IOAuthClientAppDocument } from '@/auth/db/definitions/oauthClientApps';
import {
  IOAuthClientAppModel,
  loadOAuthClientAppClass,
  loadPrismaOAuthClientApps,
} from '@/auth/db/models/OAuthClientApps';
import { IBundleConditionDocument, IBundleRuleDocument } from '@/bundle/@types';
import {
  IBundleConditionModel,
  loadPrismaBundleConditions,
} from '@/bundle/db/models/BundleConditions';
import {
  IBundleRuleModel,
  loadPrismaBundleRules,
} from '@/bundle/db/models/BundleRules';
import {
  IConformityModel,
  loadConformityClass,
  loadPrismaConformities,
} from '@/conformities/db/models/Conformities';
import {
  ICompanyModel,
  loadCompanyClass,
  loadPrismaCompanies,
} from '@/contacts/db/models/Companies';
import {
  ICustomerModel,
  loadCustomerClass,
  loadPrismaCustomers,
} from '@/contacts/db/models/Customers';
import {
  IInternalNoteModel,
  loadInternalNoteClass,
  loadPrismaInternalNotes,
} from '@/internalNote/db/models/InternalNote';
import { IInternalNoteDocument } from '@/internalNote/types';
import { ILogModel, loadPrismaLogs } from '@/logs/db/models/Logs';
import {
  IBrandModel,
  loadBrandClass,
  loadPrismaBrands,
} from '@/organization/brand/db/models/Brands';
import { IFavoritesDocument } from '@/organization/settings/db/definitions/favorites';
import {
  IFavoritesModel,
  loadFavoritesClass,
  loadPrismaFavorites,
} from '@/organization/settings/db/models/Favorites';
import {
  IBranchDocument,
  IDepartmentDocument,
  IPositionDocument,
  IStructureDocument,
  IUnitDocument,
} from '@/organization/structure/@types/structure';
import {
  IBranchModel,
  IDepartmentModel,
  IPositionModel,
  IStructureModel,
  IUnitModel,
  loadBranchClass,
  loadDepartmentClass,
  loadPositionClass,
  loadStructureClass,
  loadUnitClass,
  loadPrismaBranches,
  loadPrismaDepartments,
  loadPrismaPositions,
  loadPrismaStructures,
  loadPrismaUnits,
} from '@/organization/structure/db/models/Structure';
import {
  IUserModel,
  IUserMovemmentModel,
  loadPrismaUsers,
  loadPrismaUserMovements,
} from '@/organization/team-member/db/models/Users';
import { IProductRuleDocument } from '@/products/@types/rule';
import { IPackageDocument } from '@/products/@types/package';
import {
  IProductCategoryModel,
  loadProductCategoryClass,
  loadPrismaProductCategories,
} from '@/products/db/models/Categories';
import {
  IProductsConfigModel,
  loadProductsConfigClass,
  loadPrismaProductsConfigs,
} from '@/products/db/models/Configs';
import { IProductModel, loadProductClass, loadPrismaProducts } from '@/products/db/models/Products';
import {
  IPackageModel,
  loadPackageClass,
  loadPrismaPackages,
} from '@/products/db/models/Packages';
import {
  IProductRuleModel,
  loadProductRuleClass,
  loadPrismaProductRules,
} from '@/products/db/models/Rules';
import { IUomModel, loadUomClass, loadPrismaUoms } from '@/products/db/models/Uoms';
import {
  IRelationModel,
  loadRelationClass,
  loadPrismaRelations,
} from '@/relations/db/models/Relations';
import { ITagModel, loadTagClass, loadPrismaTags } from '@/tags/db/models/Tags';
import {
  AiAgentDocument,
  aiAgentSchema,
  IActivityLogDocument,
  IAutomationDocument,
  IAutomationExecutionDocument,
  IEmailDeliveryDocument,
  INotificationDocument,
  notificationSchema,
  NotificationSettings,
  notificationSettingsSchema,
} from 'erxes-api-shared/core-modules';
import {
  IAppDocument,
  IAutomationEmailTemplateDocument,
  IBrandDocument,
  ICompanyDocument,
  ICustomerDocument,
  ILogDocument,
  IMainContext,
  IPermissionGroupDocument,
  IProductCategoryDocument,
  IProductDocument,
  IProductsConfigDocument,
  IRelationDocument,
  ITagDocument,
  IUomDocument,
  IUserDocument,
  IUserMovementDocument,
} from 'erxes-api-shared/core-types';

import { createGenerateModels } from 'erxes-api-shared/utils';
import mongoose, { Document, Model } from 'mongoose';
import {
  IDocumentModel,
  loadDocumentClass,
  loadPrismaDocuments,
} from '~/modules/documents/db/models/Documents';
import { IDocumentDocument } from '~/modules/documents/types';
import {
  IExportDocument,
  IExportModel,
  loadExportClass,
  loadPrismaExports,
} from '~/modules/import-export/db/models/Exports';
import {
  IImportDocument,
  IImportModel,
  loadImportClass,
  loadPrismaImports,
} from '~/modules/import-export/db/models/Imports';
import { IConfigDocument } from '~/modules/organization/settings/db/definitions/configs';
import {
  IConfigModel,
  loadConfigClass,
  loadPrismaConfigs,
} from '~/modules/organization/settings/db/models/Configs';
import {
  IOAuthDeviceCodeDocument,
  oauthDeviceCodeSchema,
  loadPrismaOAuthDeviceCodes,
} from '~/modules/auth/db/definitions/oauthDeviceCodes';
import {
  IOAuthRefreshTokenDocument,
  oauthRefreshTokenSchema,
  loadPrismaOAuthRefreshTokens,
} from '~/modules/auth/db/definitions/oauthRefreshTokens';

import {
  IAutomationEmailTemplateModel,
  loadPrismaAutomationEmailTemplates,
} from './modules/automations/db/models/AutomationEmailTemplates';
import {
  IAutomationModel,
  loadPrismaAutomations,
} from './modules/automations/db/models/Automations';
import {
  IExecutionModel,
  loadPrismaAutomationExecutions,
} from './modules/automations/db/models/Executions';
import {
  IDeliveryReportsDocument,
  IEngageMessageDocument,
  ISmsRequestDocument,
  IStatsDocument,
} from './modules/broadcast/@types';
import {
  IBroadcastTraceDocument,
  IBroadcastTraceModel,
  loadPrismaBroadcastTraces,
} from './modules/broadcast/db/models/BroadcastTraces';
import {
  IDeliveryReportModel,
  IStatsModel,
  loadPrismaStats,
  loadPrismaDeliveryReports,
} from './modules/broadcast/db/models/DeliveryReports';
import {
  IEngageMessageModel,
  loadPrismaEngageMessages,
} from './modules/broadcast/db/models/Engages';
import {
  ISmsRequestModel,
  loadPrismaSmsRequests,
} from './modules/broadcast/db/models/SmsRequests';
import {
  ICPNotificationModel,
  loadPrismaCPNotifications,
} from './modules/clientportal/db/models/CPNotification';
import {
  ICPUserModel,
  loadPrismaCPUsers,
} from './modules/clientportal/db/models/CPUser';
import {
  IClientPortalModel,
  loadPrismaClientPortals,
} from './modules/clientportal/db/models/ClientPortal';
import {
  ICPCommentsModel,
  loadPrismaCPComments,
} from './modules/clientportal/db/models/Comment';
import { IClientPortalDocument } from './modules/clientportal/types/clientPortal';
import { ICPCommentDocument } from './modules/clientportal/types/comment';
import { ICPUserDocument } from './modules/clientportal/types/cpUser';
import { IConformityDocument } from './modules/conformities/db/definitions/conformities';
import {
  IForm,
  IFormSubmissionDocument,
} from './modules/forms/db/definitions/forms';
import {
  IFormModel,
  IFormSubmissionModel,
  loadFormClass,
  loadFormSubmissionClass,
  loadPrismaForms,
  loadPrismaFormSubmissions,
} from './modules/forms/db/models/Forms';
import {
  IEmailDeliveryModel,
  loadEmailDeliveryClass,
  loadPrismaEmailDeliveries,
} from './modules/organization/team-member/db/models/EmailDeliveries';
import { loadPrismaNotifications } from './modules/notifications/db/models/Notifications';
import { loadPrismaNotificationSettings } from './modules/notifications/db/models/NotificationSettings';
import { IOrgWhiteLabelDocument } from './modules/organization/whitelabel/@types/orgWhiteLabel';
import {
  IOrgWhiteLabelModel,
  loadOrgWhiteLabelClass,
  loadPrismaOrgWhiteLabel,
} from './modules/organization/whitelabel/db/models/OrgWhiteLabel';
import {
  IFieldDocument,
  IFieldGroupDocument,
} from './modules/properties/@types';
import {
  IFieldModel,
  loadFieldClass,
  loadPrismaFields,
} from './modules/properties/db/models/Field';
import {
  IFieldGroupModel,
  loadFieldGroupClass,
  loadPrismaFieldGroups,
} from './modules/properties/db/models/Group';
import { ISegmentDocument } from './modules/segments/db/definitions/segments';
import {
  ISegmentModel,
  loadSegmentClass,
  loadPrismaSegments,
} from './modules/segments/db/models/Segments';

import { ICPNotificationDocument } from './modules/clientportal/types/cpNotification';

import {
  IPermissionGroupModel,
  loadPrismaPermissionGroups,
} from '@/permissions/db/models/Permissions';
import {
  ITemplateCategoryModal,
  loadPrismaTemplateCategories,
} from '@/template/db/models/Category';
import {
  ITemplateModal,
  loadPrismaTemplates,
} from '@/template/db/models/Template';
import {
  ITemplateCategoryDocument,
  ITemplateDocument,
} from '@/template/@types';
import { loadPrismaAiAgents } from '@/automations/db/models/AiAgents';
import {
  IActivityLogsModel,
  loadActivityLogsClass,
  loadPrismaActivityLogs,
} from '@/logs/db/models/ActivityLogs';

export interface IModels {
  Brands: IBrandModel;
  Customers: ICustomerModel;
  Companies: ICompanyModel;
  Users: IUserModel;
  UserMovements: IUserMovemmentModel;
  Configs: IConfigModel;
  Tags: ITagModel;
  InternalNotes: IInternalNoteModel;
  Products: IProductModel;
  Packages: IPackageModel;
  ProductCategories: IProductCategoryModel;
  ProductsConfigs: IProductsConfigModel;
  Uoms: IUomModel;
  Structures: IStructureModel;
  Departments: IDepartmentModel;
  Units: IUnitModel;
  Branches: IBranchModel;
  Positions: IPositionModel;
  Apps: IAppModel;
  OAuthClientApps: IOAuthClientAppModel;
  Fields: IFieldModel;
  FieldsGroups: IFieldGroupModel;
  Forms: IFormModel;
  FormSubmissions: IFormSubmissionModel;
  Segments: ISegmentModel;
  Conformities: IConformityModel;
  Relations: IRelationModel;
  Favorites: IFavoritesModel;
  Documents: IDocumentModel;
  Automations: IAutomationModel;
  AutomationExecutions: IExecutionModel;
  AutomationEmailTemplates: IAutomationEmailTemplateModel;
  Logs: ILogModel;
  Imports: IImportModel;
  Exports: IExportModel;
  Notifications: Model<INotificationDocument>;
  EmailDeliveries: IEmailDeliveryModel;
  ClientPortal: IClientPortalModel;
  CPUser: ICPUserModel;
  CPComments: ICPCommentsModel;
  CPNotifications: ICPNotificationModel;

  AiAgents: Model<AiAgentDocument>;
  ActivityLogs: IActivityLogsModel;
  EngageMessages: IEngageMessageModel;
  Stats: IStatsModel;
  BroadcastTraces: IBroadcastTraceModel;
  SmsRequests: ISmsRequestModel;
  DeliveryReports: IDeliveryReportModel;
  OrgWhiteLabel: IOrgWhiteLabelModel;

  BundleCondition: IBundleConditionModel;
  BundleRule: IBundleRuleModel;
  ProductRules: IProductRuleModel;
  PermissionGroups: IPermissionGroupModel;

  NotificationSettings: Model<NotificationSettings>;

  Template: ITemplateModal;
  TemplateCategory: ITemplateCategoryModal;
  OAuthDeviceCodes: Model<IOAuthDeviceCodeDocument>;
  OAuthRefreshTokens: Model<IOAuthRefreshTokenDocument>;
}

export interface IContext extends IMainContext {
  models: IModels;
  commonQuerySelector: any;
  subdomain: string;
}

export const loadClasses = (
  db: mongoose.Connection,
  subdomain: string,
  eventHandlers: <TDocument extends Document = any>(
    pluginName: string,
  ) => (moduleName: string, collectionName: string) => any,
): IModels => {
  const models = {} as IModels;

  const coreEventHandlers = eventHandlers('core');

  models.Users = loadPrismaUsers(models, subdomain, coreEventHandlers);

  models.Brands = loadPrismaBrands(subdomain, models, coreEventHandlers);

  models.Conformities = loadPrismaConformities(models, subdomain);

  models.Customers = loadPrismaCustomers(models, subdomain, coreEventHandlers);

  models.Companies = loadPrismaCompanies(subdomain, models, coreEventHandlers);

  models.UserMovements = loadPrismaUserMovements(models, subdomain, coreEventHandlers);

  models.Configs = loadPrismaConfigs(subdomain, models, coreEventHandlers);

  models.Tags = loadPrismaTags(models, subdomain, coreEventHandlers);

  models.InternalNotes = loadPrismaInternalNotes(models, subdomain, coreEventHandlers);

  models.Products = loadPrismaProducts(models, subdomain, coreEventHandlers);
  models.Packages = loadPrismaPackages(models);
  models.Uoms = loadPrismaUoms(models, subdomain, coreEventHandlers);
  models.ProductsConfigs = loadPrismaProductsConfigs(models, subdomain, coreEventHandlers);
  models.ProductCategories = loadPrismaProductCategories(models, subdomain, coreEventHandlers);

  models.Structures = loadPrismaStructures(models);
  models.Departments = loadPrismaDepartments(models, coreEventHandlers);
  models.Units = loadPrismaUnits(models);
  models.Branches = loadPrismaBranches(models, coreEventHandlers);
  models.Positions = loadPrismaPositions(models, coreEventHandlers);
  models.Apps = loadPrismaApps(
    models,
    coreEventHandlers('app_tokens', 'app_tokens'),
    subdomain,
  );

  models.OAuthClientApps = loadPrismaOAuthClientApps(
    models,
    coreEventHandlers('oauth_client_apps', 'oauth_client_apps'),
  );

  models.Fields = loadPrismaFields(models);

  models.FieldsGroups = loadPrismaFieldGroups(models);

  models.Forms = loadPrismaForms(models);
  models.FormSubmissions = loadPrismaFormSubmissions(models);

  models.Segments = loadPrismaSegments(models);

  models.Relations = loadPrismaRelations(models);

  models.Favorites = loadPrismaFavorites(models);

  models.Documents = loadPrismaDocuments(models, subdomain);

  models.Automations = loadPrismaAutomations(models);

  models.AutomationExecutions = loadPrismaAutomationExecutions(models);

  models.AutomationEmailTemplates = loadPrismaAutomationEmailTemplates(models);

  models.Notifications = loadPrismaNotifications();

  models.NotificationSettings = loadPrismaNotificationSettings();

  models.EmailDeliveries = loadPrismaEmailDeliveries(models);

  models.AiAgents = loadPrismaAiAgents();

  models.ActivityLogs = loadPrismaActivityLogs(models);

  models.EngageMessages = loadPrismaEngageMessages(models, subdomain);

  models.DeliveryReports = loadPrismaDeliveryReports();

  models.Stats = loadPrismaStats(models);

  models.BroadcastTraces = loadPrismaBroadcastTraces(models);

  models.SmsRequests = loadPrismaSmsRequests(models);

  models.Imports = loadPrismaImports(
    models,
    coreEventHandlers('import-export', 'imports'),
  );

  models.Exports = loadPrismaExports(
    models,
    coreEventHandlers('import-export', 'exports'),
  );
  models.OrgWhiteLabel = loadPrismaOrgWhiteLabel(models);
  models.ClientPortal = loadPrismaClientPortals(models);

  models.CPUser = loadPrismaCPUsers(
    models,
    subdomain,
    coreEventHandlers('clientportal', 'cpUser'),
  );
  models.CPComments = loadPrismaCPComments(models, subdomain);

  models.CPNotifications = loadPrismaCPNotifications(models);

  models.BundleCondition = loadPrismaBundleConditions(models, subdomain);

  models.BundleRule = loadPrismaBundleRules(models, subdomain);

  models.ProductRules = loadPrismaProductRules(models, subdomain);
  models.PermissionGroups = loadPrismaPermissionGroups(models);

  models.Template = loadPrismaTemplates(models, subdomain);

  models.TemplateCategory = loadPrismaTemplateCategories(models);

  models.OAuthDeviceCodes = loadPrismaOAuthDeviceCodes();
  models.OAuthRefreshTokens = loadPrismaOAuthRefreshTokens();

  const db_name = db.name;

  const logDb = db.useDb(`${db_name}_logs`);

  models.Logs = loadPrismaLogs(models);

  return models;
};

export const generateModels = createGenerateModels<IModels>(loadClasses);
