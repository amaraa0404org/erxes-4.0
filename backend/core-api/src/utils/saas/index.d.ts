import { Request, Response } from 'express';
export declare const ssocallback: (req: any, res: any) => Promise<any>;
interface RequestWithUser extends Request {
    user?: any;
}
export declare const magiclinkCallback: (req: RequestWithUser, res: Response) => Promise<void | Response<any, Record<string, any>>>;
export declare const assertSaasEnvironment: () => void;
export declare const handleCoreLogin: (req: any, res: any) => Promise<any>;
export {};
