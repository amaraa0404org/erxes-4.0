"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCoreLogin = exports.assertSaasEnvironment = exports.magiclinkCallback = exports.ssocallback = void 0;
const tslib_1 = require("tslib");
const node_1 = require("@workos-inc/node");
const utils_1 = require("erxes-api-shared/utils");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const connectionResolvers_1 = require("~/connectionResolvers");
const utils_2 = require("~/modules/auth/utils");
const utils_3 = require("~/modules/notifications/utils");
const setCookie = async (res, user, subdomain, token) => {
    await (0, utils_2.saveValidatedToken)(token, user);
    const organization = await (0, utils_1.getSaasOrganizationDetail)({ subdomain });
    const cookieOptions = (0, utils_1.authCookieOptions)();
    if (organization.domain && organization.dnsStatus === 'active') {
        cookieOptions.secure = true;
        cookieOptions.sameSite = 'none';
    }
    res.cookie('auth-token', token, cookieOptions);
};
const ssocallback = async (req, res) => {
    const { code = '', subdomain = '' } = req.query;
    const workosClient = new node_1.WorkOS((0, utils_1.getEnv)({ name: 'WORKOS_API_KEY' }));
    try {
        const sub = subdomain || (0, utils_1.getSubdomain)(req);
        const models = await (0, connectionResolvers_1.generateModels)(sub);
        const DOMAIN = (0, utils_1.getEnv)({ name: 'DOMAIN', subdomain });
        const { profile } = await workosClient.sso.getProfileAndToken({
            code: code.toString(),
            clientId: (0, utils_1.getEnv)({ name: 'WORKOS_PROJECT_ID' }),
        });
        if (!profile) {
            throw new Error('Google profile not found');
        }
        const { email = '' } = profile;
        const user = await models.Users.findOne({
            email,
            isActive: true,
            role: { $ne: utils_1.USER_ROLES.SYSTEM },
        });
        if (!user) {
            return res.redirect(DOMAIN);
        }
        const [token] = await models.Users.createTokens(user, models.Users.getSecret());
        await setCookie(res, user, subdomain, token.toString());
        await (0, utils_3.sendOnboardNotification)(subdomain, models, user._id);
        return res.redirect(DOMAIN);
    }
    catch (e) {
        console.error(`Error occurred when logging in via google: "${e.message}"`);
        throw new Error(e);
    }
};
exports.ssocallback = ssocallback;
const magiclinkCallback = async (req, res) => {
    const { error, error_description, state } = req.query;
    if (req.user) {
        return res.redirect('/');
    }
    const hasError = error && !(error === 'undefined' || error === 'null');
    const hasErrorDescription = error_description &&
        !(error_description === 'undefined' || error_description === 'null');
    if (hasError || hasErrorDescription) {
        return res.redirect('/login');
    }
    try {
        const subdomain = (await utils_1.redis.get('subdomain')) || '';
        await utils_1.redis.set('subdomain', '');
        const models = await (0, connectionResolvers_1.generateModels)(subdomain);
        const stateStr = typeof state === 'string' ? state : '';
        if (!stateStr) {
            return res.redirect('/login');
        }
        const { user } = jsonwebtoken_1.default.verify(stateStr, models.Users.getSecret());
        await setCookie(res, user, subdomain, stateStr);
        const DOMAIN = (0, utils_1.getEnv)({ name: 'DOMAIN', subdomain });
        const NODE_ENV = (0, utils_1.getEnv)({ name: 'NODE_ENV', subdomain });
        const isProduction = NODE_ENV === 'production';
        await (0, utils_3.sendOnboardNotification)(subdomain, models, user._id);
        return res.redirect(isProduction ? DOMAIN : 'http://localhost:3001');
    }
    catch (e) {
        console.error(e.message);
        return res.end(e.message);
    }
};
exports.magiclinkCallback = magiclinkCallback;
const assertSaasEnvironment = () => {
    const VERSION = (0, utils_1.getEnv)({ name: 'VERSION' });
    if (VERSION !== 'saas') {
        throw new Error('This operation is only allowed in saas version.');
    }
};
exports.assertSaasEnvironment = assertSaasEnvironment;
const handleCoreLogin = async (req, res) => {
    const { token } = req.query;
    const subdomain = (0, utils_1.getSubdomain)(req);
    if (req.user) {
        return res.redirect('/');
    }
    if (!token) {
        return res.redirect('/');
    }
    const models = await (0, connectionResolvers_1.generateModels)(subdomain);
    try {
        const { user } = jsonwebtoken_1.default.verify(token, models.Users.getSecret());
        const systemUser = await models.Users.findOne({
            email: user.email,
            isActive: true,
            isOwner: true,
        });
        if (systemUser) {
            const [createToken] = await models.Users.createTokens(systemUser, models.Users.getSecret());
            await (0, utils_3.sendOnboardNotification)(subdomain, models, systemUser._id);
            await setCookie(res, systemUser, subdomain, createToken.toString());
        }
        return res.redirect(`https://${subdomain}.next.erxes.io`);
    }
    catch (e) {
        console.error(e.message);
        return res.redirect(`https://${subdomain}.next.erxes.io`);
    }
};
exports.handleCoreLogin = handleCoreLogin;
//# sourceMappingURL=index.js.map