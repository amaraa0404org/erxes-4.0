import { Tabs } from 'erxes-ui';
import { LanguageSettings } from './LanguageSettings';
import { PortalTranslationEditor } from './PortalTranslationEditor';
import { useTranslation } from 'react-i18next';

export const TranslationsView = () => {
  const { t } = useTranslation('settings');

  return (
    <div className="flex flex-col h-full p-6 bg-background rounded-lg border shadow-xs">
      <Tabs defaultValue="languages" className="flex flex-col h-full gap-4">
        <Tabs.List className="w-fit">
          <Tabs.Trigger value="languages" className="text-sm font-semibold">
            {t('translations.languages')}
          </Tabs.Trigger>
          <Tabs.Trigger value="portal" className="text-sm font-semibold">
            {t('translations.portal-translations')}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="languages" className="flex-1 overflow-auto mt-2 focus-visible:ring-0 focus-visible:outline-hidden">
          <LanguageSettings />
        </Tabs.Content>
        <Tabs.Content value="portal" className="flex-1 overflow-auto mt-2 focus-visible:ring-0 focus-visible:outline-hidden">
          <PortalTranslationEditor />
        </Tabs.Content>
      </Tabs>
    </div>
  );
};
