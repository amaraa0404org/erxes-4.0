import { Resolver } from 'erxes-api-shared/core-types';
import { prisma } from 'erxes-api-shared/utils';
import { IContext } from '~/connectionResolvers';

export const translationQueries: Record<string, Resolver<any, any, IContext>> = {
  /**
   * Get translation entries with filtering, search, and pagination
   */
  async translationEntries(
    _parent: undefined,
    {
      clientPortalId,
      namespace,
      language,
      searchValue,
      page,
      perPage,
    }: {
      clientPortalId?: string;
      namespace?: string;
      language?: string;
      searchValue?: string;
      page?: number;
      perPage?: number;
    },
    { models }: IContext,
  ) {
    const where: any = {};

    if (clientPortalId) {
      where.clientPortalId = clientPortalId;
    }

    if (namespace) {
      where.namespace = namespace;
    }

    if (language) {
      where.language = language;
    }

    if (searchValue) {
      where.OR = [
        { key: { contains: searchValue, mode: 'insensitive' } },
        { value: { contains: searchValue, mode: 'insensitive' } },
      ];
    }

    const totalCount = await prisma.translation.count({ where });

    const _page = Math.max(1, page || 1);
    const _perPage = Math.min(100, Math.max(1, perPage || 20));
    const skip = (_page - 1) * _perPage;

    const items = await prisma.translation.findMany({
      where,
      orderBy: [{ namespace: 'asc' }, { key: 'asc' }],
      skip,
      take: _perPage,
    });

    const list = items.map((item) => ({
      ...item,
      _id: item.id,
    }));

    return { list, totalCount };
  },

  /**
   * Get languages, optionally filtered by isActive
   */
  async languages(
    _parent: undefined,
    { isActive }: { isActive?: boolean },
    { models }: IContext,
  ) {
    if (isActive !== undefined && isActive !== null) {
      return models.Languages.getActiveLanguages();
    }

    return models.Languages.getLanguages();
  },
};
