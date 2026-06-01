import fetch from 'node-fetch';
import { getCoreDomain, resetConfigsCache, setActivePlugins } from 'erxes-api-shared/utils';
import { IContext } from '~/connectionResolvers';

export const organizationConfigMutations = {
  /**
   * Create or update config object
   */
  async configsUpdate(
    _parent: undefined,
    { configsMap }: { configsMap: Record<string, string> },
    { models }: IContext,
  ) {
    const codes = Object.keys(configsMap);

    for (const code of codes) {
      if (!code) {
        continue;
      }

      const value = configsMap[code];
      const doc = { code, value };

      await models.Configs.createOrUpdateConfig(doc);

      await resetConfigsCache();
    }
  },

  async configsActivateInstallation(
    _parent: undefined,
    args: { token: string; hostname: string },
  ) {
    try {
      return await fetch(`${getCoreDomain()}/activate-installation`, {
        method: 'POST',
        body: JSON.stringify(args),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json());
    } catch (e) {
      throw new Error(e.message);
    }
  },

  async configsManagePluginInstall(
    _parent: undefined,
    { type, name }: { type: string; name: string },
    { models }: IContext,
  ) {
    const enabledPluginsConfig = await models.Configs.findOne({ code: 'enabled_plugins' });
    let enabledPlugins: string[] = enabledPluginsConfig?.value || [];

    if (type === 'install') {
      if (!enabledPlugins.includes(name)) {
        enabledPlugins.push(name);
      }
    } else if (type === 'uninstall') {
      enabledPlugins = enabledPlugins.filter((plugin) => plugin !== name);
    }

    await models.Configs.createOrUpdateConfig({
      code: 'enabled_plugins',
      value: enabledPlugins,
    });

    await resetConfigsCache();

    // Update Redis active plugins so gateway picks it up
    const allPlugins = ['core', ...enabledPlugins];
    await setActivePlugins(allPlugins);

    return {
      status: 'success',
      message: `Plugin ${name} ${type === 'install' ? 'installed' : 'uninstalled'} successfully`,
      plugins: enabledPlugins,
    };
  },
};
