import { initTRPC } from '@trpc/server';
import { ITRPCContext } from 'erxes-api-shared/utils';
import { IModels } from './connectionResolvers';
import { clientPortalNotificationTrpcRouter } from '@/clientportal/trpc';

export type CoreTRPCContext = ITRPCContext<{
  models: IModels;
  subdomain: string;
}>;

const t = initTRPC.context<CoreTRPCContext>().create({});

export const appRouter = clientPortalNotificationTrpcRouter;

export type AppRouter = typeof appRouter;
