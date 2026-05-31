export declare function translateQuery(query: any, arrayFields?: Set<string>, modelName?: string): any;
export declare function translateSort(sort: any): any;
export declare function translateUpdate(update: any, toPrismaUpdate: (u: any) => any, arrayFields?: Set<string>): any;
export declare function translateSelect(select: any): any;
export declare class CentralPrismaQuery {
    private query;
    private prismaModel;
    private sortOrder;
    private limitVal;
    private skipVal;
    private selectFields;
    private mapper;
    private arrayFields;
    constructor(query: any, prismaModel: any, mapper: (item: any) => any, arrayFields: Set<string>);
    sort(sortOrder: any): this;
    limit(limit: number): this;
    skip(skip: number): this;
    lean(): this;
    select(fields: any): this;
    distinct(field: string): Promise<unknown[]>;
    exec(): Promise<any>;
    cursor(): Promise<{
        next: () => {
            value: any;
            done: boolean;
        };
        [Symbol.asyncIterator](): any;
    }>;
    then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any): Promise<any>;
}
export declare class CentralPrismaFindOneQuery {
    private query;
    private prismaModel;
    private mapper;
    private sortOrder;
    private selectFields;
    private arrayFields;
    constructor(query: any, prismaModel: any, mapper: (item: any) => any, arrayFields: Set<string>);
    sort(sortOrder: any): this;
    lean(): this;
    select(fields: any): this;
    exec(): Promise<any>;
    then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any): Promise<any>;
}
export declare function executeAggregate(prismaModel: any, pipeline: any[], mapper: (item: any) => any, arrayFields?: Set<string>, tableName?: string): Promise<any[]>;
export declare function filterPrismaInput(modelName: string, data: any): any;
export declare function createPrismaAdapter(prismaModel: any, mapper: (item: any) => any, toPrismaData: (doc: any) => any, toPrismaUpdate: (update: any) => any, arrayFields?: Set<string>, tableName?: string): {
    find(query?: any, projection?: any): CentralPrismaQuery;
    findOne(query?: any, projection?: any): CentralPrismaFindOneQuery;
    findById(id: string): Promise<any>;
    countDocuments(query?: any): Promise<any>;
    estimatedDocumentCount(): Promise<any>;
    updateOne(query: any, update: any): Promise<{
        matchedCount: number;
        modifiedCount: number;
        acknowledged: boolean;
    }>;
    updateMany(query: any, update: any): Promise<{
        matchedCount: any;
        modifiedCount: any;
        acknowledged: boolean;
    }>;
    findByIdAndUpdate(idOrObj: any, update: any, options?: any): Promise<any>;
    findOneAndUpdate(query: any, update: any, options?: any): Promise<any>;
    findOneAndDelete(query: any): Promise<any>;
    create(docOrDocs: any): Promise<any>;
    insertMany(docs: any[], options?: any): Promise<any[]>;
    deleteOne(query: any): Promise<{
        deletedCount: number;
        acknowledged: boolean;
    }>;
    deleteMany(query?: any): Promise<{
        deletedCount: any;
        acknowledged: boolean;
    }>;
    findByIdAndDelete(id: string): Promise<any>;
    exists(query: any): Promise<{
        _id: any;
    } | null>;
    distinct(field: string, query?: any): Promise<unknown[]>;
    aggregate(pipeline: any[]): Promise<any[]>;
    bulkWrite(operations: any[]): Promise<{
        matchedCount: number;
        modifiedCount: number;
        insertedCount: number;
        acknowledged: boolean;
        ok: number;
        result: {
            ok: number;
        };
    }>;
};
