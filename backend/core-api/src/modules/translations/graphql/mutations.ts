import { Resolver } from 'erxes-api-shared/core-types';
import { IContext } from '~/connectionResolvers';

export const translationMutations: Record<string, Resolver<any, any, IContext>> = {
  /**
   * Upsert a single translation
   */
  async translationUpsert(
    _parent: undefined,
    { input }: {
      input: {
        clientPortalId?: string;
        namespace: string;
        language: string;
        key: string;
        value: string;
      };
    },
    { models, user }: IContext,
  ) {
    return models.Translations.upsertTranslation({
      ...input,
      updatedBy: user?._id,
    });
  },

  /**
   * Bulk upsert translations
   */
  async translationBulkUpsert(
    _parent: undefined,
    { input }: {
      input: {
        clientPortalId?: string;
        namespace: string;
        language: string;
        entries: Array<{ key: string; value: string }>;
      };
    },
    { models, user }: IContext,
  ) {
    return models.Translations.upsertTranslationsBulk({
      ...input,
      updatedBy: user?._id,
    });
  },

  /**
   * Remove a translation
   */
  async translationRemove(
    _parent: undefined,
    { _id }: { _id: string },
    { models }: IContext,
  ) {
    await models.Translations.removeTranslation(_id);
    return 'deleted';
  },

  /**
   * Add a language
   */
  async languageAdd(
    _parent: undefined,
    { input }: {
      input: {
        code: string;
        name: string;
        isActive?: boolean;
        isDefault?: boolean;
      };
    },
    { models }: IContext,
  ) {
    return models.Languages.createLanguage(input);
  },

  /**
   * Edit a language
   */
  async languageEdit(
    _parent: undefined,
    { _id, input }: {
      _id: string;
      input: {
        code?: string;
        name?: string;
        isActive?: boolean;
        isDefault?: boolean;
      };
    },
    { models }: IContext,
  ) {
    return models.Languages.updateLanguage(_id, input);
  },

  /**
   * Remove a language
   */
  async languageRemove(
    _parent: undefined,
    { _id }: { _id: string },
    { models }: IContext,
  ) {
    await models.Languages.removeLanguage(_id);
    return 'deleted';
  },
};
