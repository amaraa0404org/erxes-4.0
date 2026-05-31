export declare const resolveUserLabelByIdField: (sourceField: string) => ({ subdomain, source, path, defaultValue, }: {
    subdomain: string;
    source: {
        [x: string]: unknown;
    };
    path: string;
    defaultValue?: unknown;
}) => Promise<unknown>;
