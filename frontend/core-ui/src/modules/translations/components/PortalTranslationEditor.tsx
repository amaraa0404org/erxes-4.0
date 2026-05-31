import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useLanguages } from '../hooks/useLanguages';
import { useTranslationEntries } from '../hooks/useTranslationEntries';
import { useClientPortals } from '@/client-portal/hooks/useClientPortals';
import { TRANSLATION_UPSERT, TRANSLATION_REMOVE } from '../graphql/mutations';
import {
  Table,
  Button,
  Input,
  Dialog,
  Select,
  toast,
} from 'erxes-ui';
import {
  IconPlus,
  IconTrash,
  IconSearch,
  IconCheck,
  IconX,
  IconEdit,
  IconLoader2,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface ITranslationEntry {
  _id: string;
  clientPortalId?: string;
  namespace: string;
  language: string;
  key: string;
  value: string;
  updatedAt?: string;
  updatedBy?: string;
}

export const PortalTranslationEditor = () => {
  const { t } = useTranslation('settings');
  
  // Filters
  const { languages, loading: loadingLanguages } = useLanguages(true);
  const { clientPortals = [], loading: loadingPortals } = useClientPortals();

  const [selectedPortal, setSelectedPortal] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [namespace, setNamespace] = useState('portal');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 15;

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [search]);

  // Set default language once languages are loaded
  useEffect(() => {
    if (languages.length > 0 && !selectedLanguage) {
      const defaultLang = languages.find((l: any) => l.isDefault) || languages[0];
      setSelectedLanguage(defaultLang.code);
    }
  }, [languages, selectedLanguage]);

  const queryVariables = {
    clientPortalId: selectedPortal === 'all' ? undefined : selectedPortal,
    namespace,
    language: selectedLanguage || undefined,
    searchValue: debouncedSearch || undefined,
    page,
    perPage,
  };

  const { entries, totalCount, loading: loadingEntries, refetch } = useTranslationEntries(queryVariables);

  // Mutations
  const [upsertTranslation, { loading: savingTranslation }] = useMutation(TRANSLATION_UPSERT);
  const [removeTranslation] = useMutation(TRANSLATION_REMOVE);

  // Dialog State for adding a key
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [newPortal, setNewPortal] = useState('all');
  const [newNamespace, setNewNamespace] = useState('portal');
  const [newLanguage, setNewLanguage] = useState('');

  // Inline editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState('');

  // Open add dialog and pre-fill with filters
  const handleOpenAdd = () => {
    setNewKey('');
    setNewValue('');
    setNewPortal(selectedPortal);
    setNewNamespace(namespace);
    setNewLanguage(selectedLanguage);
    setIsAddOpen(true);
  };

  const handleAddTranslation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey || !newValue || !newLanguage || !newNamespace) {
      toast({ title: t('translations.value-placeholder'), variant: 'destructive' });
      return;
    }

    try {
      await upsertTranslation({
        variables: {
          input: {
            clientPortalId: newPortal === 'all' ? null : newPortal,
            namespace: newNamespace,
            language: newLanguage,
            key: newKey,
            value: newValue,
          },
        },
      });
      toast({ title: t('translations.add-translation-key') + ' successfully', variant: 'success' });
      setIsAddOpen(false);
      refetch();
    } catch (err: any) {
      toast({ title: err.message, variant: 'destructive' });
    }
  };

  const handleStartEdit = (entry: ITranslationEntry) => {
    setEditingId(entry._id);
    setEditingValue(entry.value);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingValue('');
  };

  const handleSaveEdit = async (entry: ITranslationEntry) => {
    if (!editingValue.trim()) {
      toast({ title: t('translations.value-empty-error'), variant: 'destructive' });
      return;
    }

    try {
      await upsertTranslation({
        variables: {
          input: {
            clientPortalId: entry.clientPortalId || null,
            namespace: entry.namespace,
            language: entry.language,
            key: entry.key,
            value: editingValue,
          },
        },
      });
      toast({ title: t('translations.edit-translation') + ' successfully', variant: 'success' });
      setEditingId(null);
      refetch();
    } catch (err: any) {
      toast({ title: err.message, variant: 'destructive' });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('translations.delete-translation') + '?')) {
      return;
    }

    try {
      await removeTranslation({
        variables: { _id: id },
      });
      toast({ title: t('translations.delete-translation') + ' successfully', variant: 'success' });
      refetch();
    } catch (err: any) {
      toast({ title: err.message, variant: 'destructive' });
    }
  };

  const getPortalName = (portalId?: string) => {
    if (!portalId) return t('translations.global-default');
    const cp = clientPortals.find((p: any) => p._id === portalId);
    return cp ? cp.name : t('translations.unknown-portal');
  };

  const totalPages = Math.ceil(totalCount / perPage) || 1;

  if (loadingLanguages || loadingPortals) {
    return (
      <div className="flex h-64 items-center justify-center">
        <IconLoader2 className="animate-spin size-8 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-muted/40 p-4 rounded-lg border">
        {/* Portal Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase text-accent-foreground">
            {t('translations.client-portal')}
          </label>
          <Select value={selectedPortal} onValueChange={setSelectedPortal}>
            <Select.Trigger className="w-full bg-background border">
              <Select.Value placeholder={t('translations.select-portal')} />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="all">{t('translations.all-portals')}</Select.Item>
              {clientPortals.map((portal: any) => (
                <Select.Item key={portal._id} value={portal._id}>
                  {portal.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>

        {/* Language Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase text-accent-foreground">
            {t('translations.language')}
          </label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <Select.Trigger className="w-full bg-background border">
              <Select.Value placeholder={t('translations.select-language')} />
            </Select.Trigger>
            <Select.Content>
              {languages.map((lang: any) => (
                <Select.Item key={lang.code} value={lang.code}>
                  {lang.name} ({lang.code})
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>

        {/* Namespace Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase text-accent-foreground">
            {t('translations.namespace')}
          </label>
          <Input
            value={namespace}
            onChange={(e) => {
              setNamespace(e.target.value.toLowerCase());
              setPage(1);
            }}
            placeholder={t('translations.namespace-placeholder')}
            className="w-full border"
          />
        </div>

        {/* Search Query */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-xs font-semibold uppercase text-accent-foreground">
            {t('translations.search-keys-values')}
          </label>
          <div className="relative">
            <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-accent-foreground/50" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('translations.search-placeholder')}
              className="pl-9 w-full border"
            />
          </div>
        </div>
      </div>

      {/* Editor Grid */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm text-accent-foreground">
          {t('translations.found')} <strong>{totalCount}</strong> {t('translations.keys-for-namespace')}{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono font-bold text-foreground">
            {namespace}
          </code>
        </div>
        <Button onClick={handleOpenAdd} className="flex gap-2 items-center">
          <IconPlus className="size-4" />
          {t('translations.add-translation-key')}
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden bg-background relative min-h-[300px]">
        {loadingEntries ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-xs z-10">
            <IconLoader2 className="animate-spin size-8 text-primary" />
          </div>
        ) : null}

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-1/3">{t('translations.key')}</Table.Head>
              <Table.Head className="w-5/12">{t('translations.translation-value')}</Table.Head>
              <Table.Head className="w-1/6">{t('translations.portal-scope')}</Table.Head>
              <Table.Head className="w-24 text-right">{t('translations.actions')}</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {entries.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={4} className="text-center py-16 text-accent-foreground">
                  {debouncedSearch ? t('translations.no-search-results') : t('translations.no-entries-db')}
                </Table.Cell>
              </Table.Row>
            ) : (
              entries.map((entry: ITranslationEntry) => (
                <Table.Row key={entry._id} className="group/row">
                  <Table.Cell className="font-mono text-xs select-all text-accent-foreground font-semibold break-all py-3">
                    {entry.key}
                  </Table.Cell>
                  <Table.Cell className="py-2">
                    {editingId === entry._id ? (
                      <div className="flex items-center gap-2 pr-4">
                        <Input
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          className="flex-1 h-9 border focus-visible:shadow-focus"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveEdit(entry);
                            if (e.key === 'Escape') handleCancelEdit();
                          }}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleSaveEdit(entry)}
                          disabled={savingTranslation}
                          className="text-success hover:text-success hover:bg-success/10 size-8 shrink-0"
                        >
                          <IconCheck className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleCancelEdit}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 size-8 shrink-0"
                        >
                          <IconX className="size-4" />
                        </Button>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleStartEdit(entry)}
                        className="flex justify-between items-center gap-2 group-hover/row:bg-muted/40 p-2 rounded cursor-pointer transition-colors"
                        title={t('translations.click-to-edit')}
                      >
                        <span className="text-sm font-medium text-foreground whitespace-normal break-all">
                          {entry.value || <em className="text-accent-foreground/55 font-normal text-xs">{t('translations.empty-value')}</em>}
                        </span>
                        <IconEdit className="size-3.5 text-accent-foreground/50 opacity-0 group-hover/row:opacity-100 transition-opacity shrink-0" />
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell className="py-3">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        entry.clientPortalId ? 'bg-primary/10 text-primary' : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {getPortalName(entry.clientPortalId)}
                    </span>
                  </Table.Cell>
                  <Table.Cell className="text-right py-3 pr-4">
                    <div className="flex justify-end gap-1 opacity-0 group-hover/row:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleStartEdit(entry)}
                        title={t('translations.edit-translation')}
                        className="size-8"
                      >
                        <IconEdit className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(entry._id)}
                        className="text-destructive hover:text-destructive size-8 hover:bg-destructive/10"
                        title={t('translations.delete-translation')}
                      >
                        <IconTrash className="size-4" />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 ? (
        <div className="flex items-center justify-between mt-2 border-t pt-4">
          <div className="text-xs text-accent-foreground">
            {t('translations.showing-page')} <strong>{page}</strong> {t('translations.of')} <strong>{totalPages}</strong> (<strong>{totalCount}</strong> {t('translations.total-items')})
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex items-center gap-1.5 h-8"
            >
              <IconChevronLeft className="size-3.5" />
              {t('translations.previous')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="flex items-center gap-1.5 h-8"
            >
              {t('translations.next')}
              <IconChevronRight className="size-3.5" />
            </Button>
          </div>
        </div>
      ) : null}

      {/* Add Key Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <Dialog.Content>
          <Dialog.HeaderCombined
            title={t('translations.add-translation-key')}
            description={t('translations.create-key-desc')}
          />
          <form onSubmit={handleAddTranslation} className="flex flex-col gap-4 mt-2">
            {/* Scope selectors */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-accent-foreground">
                  {t('translations.portal-scope')}
                </label>
                <Select value={newPortal} onValueChange={setNewPortal}>
                  <Select.Trigger className="w-full bg-background border">
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="all">{t('translations.global-default')}</Select.Item>
                    {clientPortals.map((portal: any) => (
                      <Select.Item key={portal._id} value={portal._id}>
                        {portal.name}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-accent-foreground">
                  {t('translations.language')}
                </label>
                <Select value={newLanguage} onValueChange={setNewLanguage}>
                  <Select.Trigger className="w-full bg-background border">
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    {languages.map((lang: any) => (
                      <Select.Item key={lang.code} value={lang.code}>
                        {lang.name}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase text-accent-foreground">
                {t('translations.namespace')}
              </label>
              <Input
                value={newNamespace}
                onChange={(e) => setNewNamespace(e.target.value.toLowerCase())}
                placeholder={t('translations.namespace-placeholder')}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase text-accent-foreground">
                {t('translations.key')}
              </label>
              <Input
                value={newKey}
                onChange={(e) => setNewKey(e.target.value.trim())}
                placeholder={t('translations.key-placeholder')}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase text-accent-foreground">
                {t('translations.translation-value')}
              </label>
              <Input
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder={t('translations.value-placeholder')}
                required
              />
            </div>

            <Dialog.Footer className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)}>
                {t('translations.cancel')}
              </Button>
              <Button type="submit" disabled={savingTranslation}>
                {savingTranslation ? t('translations.saving') : t('translations.add-translation-key')}
              </Button>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog>
    </div>
  );
};
