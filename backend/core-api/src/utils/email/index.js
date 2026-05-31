"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.createTransporter = void 0;
const tslib_1 = require("tslib");
const configs_1 = require("@/organization/settings/utils/configs");
const AWS = tslib_1.__importStar(require("aws-sdk"));
const utils_1 = require("erxes-api-shared/utils");
const Handlebars = tslib_1.__importStar(require("handlebars"));
const nodemailer = tslib_1.__importStar(require("nodemailer"));
const common_1 = require("~/utils/common");
const createTransporter = async ({ ses }, models) => {
    if (ses) {
        const AWS_SES_ACCESS_KEY_ID = await (0, configs_1.getConfig)('AWS_SES_ACCESS_KEY_ID', '', models);
        const AWS_SES_SECRET_ACCESS_KEY = await (0, configs_1.getConfig)('AWS_SES_SECRET_ACCESS_KEY', '', models);
        const AWS_REGION = await (0, configs_1.getConfig)('AWS_REGION', '', models);
        AWS.config.update({
            region: AWS_REGION,
            accessKeyId: AWS_SES_ACCESS_KEY_ID,
            secretAccessKey: AWS_SES_SECRET_ACCESS_KEY,
        });
        return nodemailer.createTransport({
            SES: new AWS.SES({ apiVersion: '2010-12-01' }),
        });
    }
    const MAIL_SERVICE = await (0, configs_1.getConfig)('MAIL_SERVICE', '', models);
    const MAIL_PORT = await (0, configs_1.getConfig)('MAIL_PORT', '', models);
    const MAIL_USER = await (0, configs_1.getConfig)('MAIL_USER', '', models);
    const MAIL_PASS = await (0, configs_1.getConfig)('MAIL_PASS', '', models);
    const MAIL_HOST = await (0, configs_1.getConfig)('MAIL_HOST', '', models);
    let auth;
    if (MAIL_USER && MAIL_PASS) {
        auth = {
            user: MAIL_USER,
            pass: MAIL_PASS,
        };
    }
    return nodemailer.createTransport({
        service: MAIL_SERVICE,
        host: MAIL_HOST,
        port: MAIL_PORT,
        auth,
    });
};
exports.createTransporter = createTransporter;
const sendEmail = async (subdomain, params, models) => {
    const { toEmails = [], fromEmail, title, customHtml, customHtmlData, template = {}, modifier, attachments, getOrganizationDetail, transportMethod, userId, } = params;
    const NODE_ENV = (0, utils_1.getEnv)({ name: 'NODE_ENV' });
    const DEFAULT_EMAIL_SERVICE = await (0, configs_1.getConfig)('DEFAULT_EMAIL_SERVICE', 'SES', models);
    const defaultTemplate = await (0, configs_1.getConfig)('COMPANY_EMAIL_TEMPLATE', '', models);
    const defaultTemplateType = await (0, configs_1.getConfig)('COMPANY_EMAIL_TEMPLATE_TYPE', '', models);
    const COMPANY_EMAIL_FROM = await (0, configs_1.getConfig)('COMPANY_EMAIL_FROM', '', models);
    const AWS_SES_CONFIG_SET = await (0, configs_1.getConfig)('AWS_SES_CONFIG_SET', '', models);
    const AWS_SES_ACCESS_KEY_ID = await (0, configs_1.getConfig)('AWS_SES_ACCESS_KEY_ID', '', models);
    const AWS_SES_SECRET_ACCESS_KEY = await (0, configs_1.getConfig)('AWS_SES_SECRET_ACCESS_KEY', '', models);
    const DOMAIN = (0, utils_1.getEnv)({ name: 'DOMAIN', subdomain });
    const VERSION = (0, utils_1.getEnv)({ name: 'VERSION' });
    if (NODE_ENV === 'test') {
        return;
    }
    let transporter;
    let sendgridMail;
    try {
        transporter = await (0, exports.createTransporter)({ ses: DEFAULT_EMAIL_SERVICE === 'SES' }, models);
        if (transportMethod === 'sendgrid' || (VERSION && VERSION === 'saas')) {
            sendgridMail = require('@sendgrid/mail');
            const SENDGRID_API_KEY = (0, utils_1.getEnv)({ name: 'SENDGRID_API_KEY', subdomain });
            sendgridMail.setApiKey(SENDGRID_API_KEY);
        }
    }
    catch (e) {
        console.log(e);
        return;
    }
    const { data = {}, name } = template;
    data.domain = DOMAIN;
    let hasCompanyFromEmail = COMPANY_EMAIL_FROM && COMPANY_EMAIL_FROM.length > 0;
    if (models && subdomain && getOrganizationDetail) {
        const organization = await getOrganizationDetail({ subdomain });
        if (organization.isWhiteLabel) {
            data.whiteLabel = true;
            data.organizationName = organization.name || '';
            data.organizationDomain = organization.domain || '';
            hasCompanyFromEmail = true;
        }
        else {
            hasCompanyFromEmail = false;
        }
    }
    for (const toEmail of toEmails) {
        if (modifier) {
            await modifier(data, toEmail);
        }
        let html;
        if (name) {
            html = await (0, common_1.applyTemplate)(data, name);
        }
        else if (!defaultTemplate ||
            !defaultTemplateType ||
            (defaultTemplateType === null || defaultTemplateType === void 0 ? void 0 : defaultTemplateType.toString()) === 'simple') {
            html = await (0, common_1.applyTemplate)(data, 'base');
        }
        else if (defaultTemplate) {
            html = Handlebars.compile(defaultTemplate.toString())(data || {});
        }
        if (customHtml) {
            html = Handlebars.compile(customHtml)(customHtmlData || {});
        }
        const mailOptions = {
            from: fromEmail ||
                (hasCompanyFromEmail
                    ? `Noreply <${COMPANY_EMAIL_FROM}>`
                    : 'noreply@erxes.io'),
            to: toEmail,
            subject: title,
            html,
            attachments,
        };
        if (!mailOptions.from) {
            throw new Error(`"From" email address is missing: ${mailOptions.from}`);
        }
        let headers = {};
        if (models && subdomain) {
            const emailDelivery = await models.EmailDeliveries.createEmailDelivery({
                kind: 'transaction',
                to: [toEmail],
                from: mailOptions.from,
                subject: title || '',
                content: html,
                status: 'pending',
                provider: sendgridMail ? 'sendgrid' : transporter ? 'ses' : 'smtp',
                userId,
                email: toEmail,
            });
            headers = {
                'X-SES-CONFIGURATION-SET': AWS_SES_CONFIG_SET || 'erxes',
                EmailDeliveryId: emailDelivery === null || emailDelivery === void 0 ? void 0 : emailDelivery._id,
            };
        }
        if (AWS_SES_ACCESS_KEY_ID && AWS_SES_SECRET_ACCESS_KEY) {
            headers['X-SES-CONFIGURATION-SET'] = AWS_SES_CONFIG_SET || 'erxes-saas';
        }
        mailOptions.headers = headers;
        try {
            if (sendgridMail) {
                await sendgridMail.send(mailOptions).catch((error) => {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response.body);
                    }
                });
            }
            else {
                await transporter.sendMail(mailOptions);
            }
            console.log(`Email sent successfully: ${toEmail} from ${mailOptions.from}`);
        }
        catch (e) {
            console.log(`Error sending email: ${e.message}`);
        }
    }
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=index.js.map