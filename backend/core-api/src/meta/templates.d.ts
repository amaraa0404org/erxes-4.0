export declare const templates: {
    plugin: string;
    modules: {
        product: {
            productCategory: {
                moduleName: string;
                collectionName: string;
                label: string;
                description: string;
                icon: string;
                getContent: ({ template, models, }: {
                    template: any;
                    models: import("~/connectionResolvers").IModels;
                }) => Promise<Record<string, import("node_modules/erxes-api-shared/core-types/dist/erxes-api-shared-core-types.cjs").IProductCategoryDocument>>;
                setContent: ({ template, models, user }: {
                    template: any;
                    models: import("~/connectionResolvers").IModels;
                    user: import("node_modules/erxes-api-shared/core-types/dist/erxes-api-shared-core-types.cjs").IUserDocument;
                }) => Promise<string>;
            };
        };
    };
};
