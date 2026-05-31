import { TranslationsBreadcrumb } from '@/translations/components/TranslationsBreadcrumb';
import { TranslationsView } from '@/translations/components/TranslationsView';
import { PageContainer } from 'erxes-ui';
import { SettingsHeader } from 'ui-modules';

export const TranslationsPage = () => {
  return (
    <PageContainer>
      <SettingsHeader breadcrumbs={<TranslationsBreadcrumb />} />
      <div className="p-6 flex-1 overflow-auto h-full">
        <TranslationsView />
      </div>
    </PageContainer>
  );
};
