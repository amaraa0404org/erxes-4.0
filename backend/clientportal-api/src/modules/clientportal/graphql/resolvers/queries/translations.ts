import { Resolver } from 'erxes-api-shared/core-types';
import { prisma } from 'erxes-api-shared/utils';
import { IContext } from '~/connectionResolvers';

export const translationQueries: Record<
  string,
  Resolver<any, any, IContext>
> = {
  /**
   * Fetch translations for the current Client Portal context.
   * Implements the resolution chain:
   *   1. Portal-specific (clientPortalId = portal.id)
   *   2. Global portal defaults (clientPortalId = null)
   */
  async cpTranslations(
    _root: unknown,
    { language, namespace }: { language: string; namespace: string },
    { clientPortal }: IContext,
  ) {
    const clientPortalId = clientPortal?._id || clientPortal?.id || null;

    // Fetch both layers in parallel
    const [portalSpecific, portalDefaults] = await Promise.all([
      clientPortalId
        ? prisma.translation.findMany({
            where: {
              clientPortalId,
              namespace,
              language,
            },
            select: { key: true, value: true },
          })
        : [],
      prisma.translation.findMany({
        where: {
          clientPortalId: null,
          namespace,
          language,
        },
        select: { key: true, value: true },
      }),
    ]);

    // Merge: portal-specific overrides defaults
    const result: Record<string, string> = {};
    for (const entry of portalDefaults) {
      result[entry.key] = entry.value;
    }
    for (const entry of portalSpecific) {
      result[entry.key] = entry.value;
    }

    return result;
  },

  /**
   * Fetch available languages for Client Portal consumers.
   */
  async cpLanguages(
    _root: unknown,
    _args: unknown,
    _context: IContext,
  ) {
    const languages = await prisma.language.findMany({
      where: { isActive: true },
      select: { code: true, name: true },
      orderBy: { code: 'asc' },
    });

    return languages;
  },
};

// These queries should be accessible from Client Portal context
translationQueries.cpTranslations.wrapperConfig = {
  forClientPortal: true,
  skipPermission: true,
};

translationQueries.cpLanguages.wrapperConfig = {
  forClientPortal: true,
  skipPermission: true,
};
