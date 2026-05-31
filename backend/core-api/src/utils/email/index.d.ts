import { IEmailParams } from '@/organization/types';
import { IModels } from '~/connectionResolvers';
export declare const createTransporter: ({ ses }: {
    ses: any;
}, models?: IModels) => Promise<any>;
export declare const sendEmail: (subdomain: string, params: IEmailParams, models?: IModels) => Promise<void>;
