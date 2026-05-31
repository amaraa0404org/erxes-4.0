import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useLanguages } from '../hooks/useLanguages';
import { LANGUAGE_ADD, LANGUAGE_EDIT, LANGUAGE_REMOVE } from '../graphql/mutations';
import {
  Table,
  Button,
  Input,
  Switch,
  Badge,
  Dialog,
  toast,
} from 'erxes-ui';
import { IconPlus, IconTrash, IconEdit, IconLoader2 } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface ILanguage {
  _id: string;
  code: string;
  name: string;
  isActive: boolean;
  isDefault: boolean;
}

export const LanguageSettings = () => {
  const { t } = useTranslation('settings');
  const { languages, loading, refetch } = useLanguages();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState<ILanguage | null>(null);

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [isDefault, setIsDefault] = useState(false);

  const [addLanguage, { loading: adding }] = useMutation(LANGUAGE_ADD);
  const [editLanguage, { loading: editing }] = useMutation(LANGUAGE_EDIT);
  const [removeLanguage] = useMutation(LANGUAGE_REMOVE);

  const handleOpenAdd = () => {
    setEditingLanguage(null);
    setCode('');
    setName('');
    setIsActive(true);
    setIsDefault(false);
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (lang: ILanguage) => {
    setEditingLanguage(lang);
    setCode(lang.code);
    setName(lang.name);
    setIsActive(lang.isActive);
    setIsDefault(lang.isDefault);
    setIsDialogOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || !name) {
      toast({ title: t('translations.code-placeholder'), variant: 'destructive' });
      return;
    }

    try {
      if (editingLanguage) {
        await editLanguage({
          variables: {
            _id: editingLanguage._id,
            input: { code, name, isActive, isDefault },
          },
        });
        toast({ title: t('translations.edit-language') + ' ' + t('translations.save').toLowerCase(), variant: 'success' });
      } else {
        await addLanguage({
          variables: {
            input: { code, name, isActive, isDefault },
          },
        });
        toast({ title: t('translations.add-language') + ' ' + t('translations.save').toLowerCase(), variant: 'success' });
      }
      setIsDialogOpen(false);
      refetch();
    } catch (err: any) {
      toast({ title: err.message || t('translations.operation-failed'), variant: 'destructive' });
    }
  };

  const handleToggleActive = async (lang: ILanguage, checked: boolean) => {
    try {
      await editLanguage({
        variables: {
          _id: lang._id,
          input: {
            code: lang.code,
            name: lang.name,
            isActive: checked,
            isDefault: lang.isDefault,
          },
        },
      });
      toast({
        title: `${t('translations.language')} ${checked ? 'activated' : 'deactivated'}`,
        variant: 'success',
      });
      refetch();
    } catch (err: any) {
      toast({ title: err.message, variant: 'destructive' });
    }
  };

  const handleRemove = async (id: string) => {
    if (!confirm(t('translations.delete-translation') + '?')) {
      return;
    }

    try {
      await removeLanguage({
        variables: { _id: id },
      });
      toast({ title: t('translations.remove-language') + ' successfully', variant: 'success' });
      refetch();
    } catch (err: any) {
      toast({ title: err.message, variant: 'destructive' });
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <IconLoader2 className="animate-spin size-8 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          {t('translations.languages')} ({languages.length})
        </h3>
        <Button onClick={handleOpenAdd} className="flex gap-2 items-center">
          <IconPlus className="size-4" />
          {t('translations.add-language')}
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden bg-background">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-24">{t('translations.code')}</Table.Head>
              <Table.Head>{t('translations.name')}</Table.Head>
              <Table.Head className="w-32">{t('translations.status')}</Table.Head>
              <Table.Head className="w-32">{t('translations.default')}</Table.Head>
              <Table.Head className="w-28 text-right">{t('translations.actions')}</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {languages.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={5} className="text-center py-8 text-accent-foreground">
                  {t('translations.no-languages')}
                </Table.Cell>
              </Table.Row>
            ) : (
              languages.map((lang: ILanguage) => (
                <Table.Row key={lang._id}>
                  <Table.Cell className="font-mono">{lang.code}</Table.Cell>
                  <Table.Cell className="font-medium">{lang.name}</Table.Cell>
                  <Table.Cell>
                    <Switch
                      checked={lang.isActive}
                      onCheckedChange={(checked) => handleToggleActive(lang, checked)}
                      disabled={lang.isDefault}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    {lang.isDefault ? (
                      <Badge variant="success">{t('translations.default')}</Badge>
                    ) : (
                      <span className="text-accent-foreground text-xs font-normal">-</span>
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenEdit(lang)}
                        title={t('translations.edit-language')}
                      >
                        <IconEdit className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(lang._id)}
                        disabled={lang.isDefault}
                        title={t('translations.remove-language')}
                        className="text-destructive hover:text-destructive"
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Content>
          <Dialog.HeaderCombined
            title={editingLanguage ? t('translations.edit-language') : t('translations.add-language')}
            description={
              editingLanguage
                ? t('translations.edit-language')
                : t('translations.create-key-desc')
            }
          />
          <form onSubmit={handleSave} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase text-accent-foreground">
                {t('translations.code-iso')}
              </label>
              <Input
                placeholder={t('translations.code-placeholder')}
                value={code}
                onChange={(e) => setCode(e.target.value.toLowerCase())}
                disabled={!!editingLanguage}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase text-accent-foreground">
                {t('translations.name')}
              </label>
              <Input
                placeholder={t('translations.name-placeholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">{t('translations.active-status')}</span>
                <span className="text-xs text-accent-foreground">
                  {t('translations.allow-language-desc')}
                </span>
              </div>
              <Switch
                checked={isActive}
                onCheckedChange={setIsActive}
                disabled={isDefault}
              />
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">{t('translations.set-system-default')}</span>
                <span className="text-xs text-accent-foreground">
                  {t('translations.default-language-desc')}
                </span>
              </div>
              <Switch
                checked={isDefault}
                onCheckedChange={setIsDefault}
                disabled={editingLanguage?.isDefault}
              />
            </div>
            <Dialog.Footer className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                {t('translations.cancel')}
              </Button>
              <Button type="submit" disabled={adding || editing}>
                {adding || editing ? t('translations.saving') : t('translations.save')}
              </Button>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog>
    </div>
  );
};
