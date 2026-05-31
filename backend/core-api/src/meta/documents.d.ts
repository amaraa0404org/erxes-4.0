import { IModels } from '~/connectionResolvers';
export declare const documents: {
    types: {
        label: string;
        contentType: string;
    }[];
    editorAttributes: (models: IModels, subdomain: string, contentType: string) => Promise<any>;
    replaceContent: ({ subdomain, data: { replacerIds, content, config, contentType }, }: {
        subdomain: any;
        data: {
            replacerIds: any;
            content: any;
            config: any;
            contentType: any;
        };
    }) => Promise<any[]>;
};
