import { useQuery, useMutation } from '@apollo/client';
import {
  Button,
  Card,
  PageContainer,
  Skeleton,
  Breadcrumb,
} from 'erxes-ui';
import { PageHeader, PageHeaderStart, PageHeaderEnd } from 'ui-modules';
import { IconPuzzle, IconCheck, IconDownload, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { GET_ENABLED_SERVICES } from '../graphql/queries';
import { MANAGE_PLUGIN_INSTALL } from '../graphql/mutations';
import { useTranslation } from 'react-i18next';

interface Plugin {
  name: string;
  description: string;
  icon: string;
  category: string;
  isInstalled: boolean;
  isEnabled: boolean;
}

export function MarketplaceSettings() {
  const { t } = useTranslation('common');
  const { data, loading, refetch } = useQuery(GET_ENABLED_SERVICES);
  const [managePluginInstall, { loading: mutationLoading }] = useMutation(
    MANAGE_PLUGIN_INSTALL,
  );

  const plugins: Plugin[] = data?.enabledServices || [];

  const handleInstall = async (name: string, type: string) => {
    try {
      await managePluginInstall({
        variables: { type, name },
      });
      refetch();
    } catch (error) {
      console.error('Failed to manage plugin:', error);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      communication: 'bg-blue-100 text-blue-800',
      sales: 'bg-green-100 text-green-800',
      operations: 'bg-orange-100 text-orange-800',
      marketing: 'bg-purple-100 text-purple-800',
      support: 'bg-red-100 text-red-800',
      analytics: 'bg-yellow-100 text-yellow-800',
      integration: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderStart>
          <Breadcrumb>
            <Breadcrumb.List className="gap-1">
              <Breadcrumb.Item>
                <Button variant="ghost" asChild>
                  <Link to="/settings/marketplace">
                    <IconPuzzle />
                    {t('marketplace')}
                  </Link>
                </Button>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </PageHeaderStart>
        <PageHeaderEnd>
          <></>
        </PageHeaderEnd>
      </PageHeader>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-6">
          {t('marketplace_description') || 'Browse and install plugins to extend your erxes experience. Newly installed plugins may require a system restart to take full effect.'}
        </p>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="p-4">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-3 w-full mb-2" />
                <Skeleton className="h-3 w-2/3" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {plugins.map((plugin: Plugin) => (
              <Card key={plugin.name} className="p-4 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-base capitalize">
                      {plugin.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium mt-1 ${getCategoryColor(plugin.category)}`}
                    >
                      {plugin.category}
                    </span>
                  </div>
                  {plugin.isInstalled && (
                    <div className="flex items-center text-green-600 text-sm">
                      <IconCheck size={16} className="mr-1" />
                      <span>{plugin.isEnabled ? t('active') : t('installed')}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {plugin.description}
                </p>

                <Button
                  variant={plugin.isInstalled ? 'destructive' : 'default'}
                  size="sm"
                  className="w-full"
                  disabled={mutationLoading}
                  onClick={() =>
                    handleInstall(
                      plugin.name,
                      plugin.isInstalled ? 'uninstall' : 'install',
                    )
                  }
                >
                  {plugin.isInstalled ? (
                    <>
                      <IconTrash size={16} className="mr-2" />
                      {t('uninstall')}
                    </>
                  ) : (
                    <>
                      <IconDownload size={16} className="mr-2" />
                      {t('install')}
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
}
