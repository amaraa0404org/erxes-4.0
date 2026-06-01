import { getCoreDomain, getPlugins } from 'erxes-api-shared/utils';

import * as dotenv from 'dotenv';
import { IContext } from '~/connectionResolvers';
import fetch from 'node-fetch';

dotenv.config();

const AVAILABLE_PLUGINS = [
  { name: 'inbox', description: 'Messaging and communication hub', icon: 'message', category: 'communication' },
  { name: 'sales', description: 'Sales pipeline and deal management', icon: 'chart-line', category: 'sales' },
  { name: 'operation', description: 'Operations and task management', icon: 'checklist', category: 'operations' },
  { name: 'frontline', description: 'Frontline team management', icon: 'users', category: 'operations' },
  { name: 'inventory', description: 'Inventory and stock management', icon: 'box', category: 'operations' },
  { name: 'knowledgebase', description: 'Knowledge base and articles', icon: 'book', category: 'communication' },
  { name: 'forms', description: 'Forms and lead capture', icon: 'form', category: 'marketing' },
  { name: 'engage', description: 'Email campaigns and engagement', icon: 'mail', category: 'marketing' },
  { name: 'tasks', description: 'Task and project management', icon: 'task', category: 'operations' },
  { name: 'tickets', description: 'Support ticket management', icon: 'ticket', category: 'support' },
  { name: 'meetings', description: 'Meeting scheduling and management', icon: 'calendar', category: 'communication' },
  { name: 'growthhacks', description: 'Growth hacking and experiments', icon: 'rocket', category: 'marketing' },
  { name: 'dashboard', description: 'Analytics dashboards and reports', icon: 'dashboard', category: 'analytics' },
  { name: 'chats', description: 'Real-time chat and messaging', icon: 'chat', category: 'communication' },
  { name: 'purchases', description: 'Purchase order management', icon: 'shopping-cart', category: 'operations' },
  { name: 'msdynamic', description: 'Microsoft Dynamics integration', icon: 'integration', category: 'integration' },
  { name: 'imap', description: 'IMAP email integration', icon: 'email', category: 'integration' },
  { name: 'calls', description: 'Call center and phone integration', icon: 'phone', category: 'communication' },
  { name: 'facebook', description: 'Facebook integration', icon: 'facebook', category: 'integration' },
  { name: 'instagram', description: 'Instagram integration', icon: 'instagram', category: 'integration' },
  { name: 'zalo', description: 'Zalo messaging integration', icon: 'message', category: 'integration' },
];

export const organizationConfigQueries = {
  /**
   * Config object
   */
  async configs(_parent: undefined, _args: undefined, { models }: IContext) {
    return models.Configs.find({});
  },

  async configsByCode(
    _parent: undefined,
    { codes, pattern }: { codes: string[]; pattern: string },
    { models }: IContext,
  ) {
    const query: any = {
      $or: [],
    };

    if (codes?.length) {
      query.$or.push({ code: { $in: codes } });
    }

    if (pattern) {
      query.$or.push({ code: { $regex: pattern, $options: 'i' } });
    }

    return models.Configs.find(query);
  },

  async configsGetEnv() {
    return {
      USE_BRAND_RESTRICTIONS: process.env.USE_BRAND_RESTRICTIONS,
      RELEASE: process.env.RELEASE,
    };
  },

  async configsCheckActivateInstallation(
    _parent: undefined,
    args: { hostname: string },
  ) {
    try {
      return await fetch(`${getCoreDomain()}/check-activate-installation`, {
        method: 'POST',
        body: JSON.stringify(args),
        headers: { 'Content-Type': 'application/json' },
      }).then((r) => r.json());
    } catch (e: any) {
      throw new Error(e.message);
    }
  },

  async configsGetValue(
    _parent: undefined,
    { code }: { code: string },
    { models }: IContext,
  ) {
    return models.Configs.findOne({ code });
  },

  async enabledServices(_parent: undefined, _args: undefined, { models }: IContext) {
    const enabledPluginsConfig = await models.Configs.findOne({ code: 'enabled_plugins' });
    const enabledPlugins = enabledPluginsConfig?.value || [];

    const allPlugins = await getPlugins();

    return AVAILABLE_PLUGINS.map((plugin) => ({
      ...plugin,
      isInstalled: enabledPlugins.includes(plugin.name) || allPlugins.includes(plugin.name),
      isEnabled: allPlugins.includes(plugin.name),
    }));
  },
};
