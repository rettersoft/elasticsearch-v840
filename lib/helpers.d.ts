/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
import { TransportResult, TransportRequestOptions } from '@elastic/transport';
import Client from './client';
import * as T from './api/types';
export interface HelpersOptions {
    client: Client;
    metaHeader: string | null;
    maxRetries: number;
}
export interface ScrollSearchOptions extends TransportRequestOptions {
    wait?: number;
}
export interface ScrollSearchResponse<TDocument, TAggregations> extends TransportResult<T.SearchResponse<TDocument, TAggregations>, unknown> {
    clear: () => Promise<void>;
    documents: TDocument[];
}
export interface MsearchHelperOptions extends T.MsearchRequest {
    operations?: number;
    flushInterval?: number;
    concurrency?: number;
    retries?: number;
    wait?: number;
}
export interface MsearchHelper extends Promise<void> {
    stop: (error?: Error | null) => void;
    search: <TDocument = unknown>(header: T.MsearchMultisearchHeader, body: T.MsearchMultisearchBody) => Promise<MsearchHelperResponse<TDocument>>;
}
export interface MsearchHelperResponse<TDocument> {
    body: T.SearchResponse<TDocument>;
    documents: TDocument[];
    status: number;
    responses: T.MsearchResponse;
}
export interface BulkStats {
    total: number;
    failed: number;
    retry: number;
    successful: number;
    noop: number;
    time: number;
    bytes: number;
    aborted: boolean;
}
interface IndexAction {
    index: T.BulkIndexOperation;
}
interface CreateAction {
    create: T.BulkCreateOperation;
}
interface UpdateActionOperation {
    update: T.BulkUpdateOperation;
}
interface DeleteAction {
    delete: T.BulkDeleteOperation;
}
type UpdateAction = [UpdateActionOperation, Record<string, any>];
type Action = IndexAction | CreateAction | UpdateAction | DeleteAction;
export interface OnDropDocument<TDocument = unknown> {
    status: number;
    operation: Action;
    error: T.ErrorCause | null;
    document: TDocument;
    retried: boolean;
}
export interface BulkHelperOptions<TDocument = unknown> extends T.BulkRequest {
    datasource: TDocument[] | Buffer | Readable | AsyncIterator<TDocument>;
    onDocument: (doc: TDocument) => Action;
    flushBytes?: number;
    flushInterval?: number;
    concurrency?: number;
    retries?: number;
    wait?: number;
    onDrop?: (doc: OnDropDocument<TDocument>) => void;
    refreshOnCompletion?: boolean | string;
}
export interface BulkHelper<T> extends Promise<BulkStats> {
    abort: () => BulkHelper<T>;
    readonly stats: BulkStats;
}
declare const kClient: unique symbol;
declare const kMetaHeader: unique symbol;
declare const kMaxRetries: unique symbol;
export default class Helpers {
    [kClient]: Client;
    [kMetaHeader]: string | null;
    [kMaxRetries]: number;
    constructor(opts: HelpersOptions);
    /**
     * Runs a search operation. The only difference between client.search and this utility,
     * is that we are only returning the hits to the user and not the full ES response.
     * This helper automatically adds `filter_path=hits.hits._source` to the querystring,
     * as it will only need the documents source.
     * @param {object} params - The Elasticsearch's search parameters.
     * @param {object} options - The client optional configuration for this request.
     * @return {array} The documents that matched the request.
     */
    search<TDocument = unknown>(params: T.SearchRequest, options?: TransportRequestOptions): Promise<TDocument[]>;
    /**
     * Runs a scroll search operation. This function returns an async iterator, allowing
     * the user to use a for await loop to get all the results of a given search.
     * ```js
     * for await (const result of client.helpers.scrollSearch({ params })) {
     *   console.log(result)
     * }
     * ```
     * Each result represents the entire body of a single scroll search request,
     * if you just need to scroll the results, use scrollDocuments.
     * This function handles automatically retries on 429 status code.
     * @param {object} params - The Elasticsearch's search parameters.
     * @param {object} options - The client optional configuration for this request.
     * @return {iterator} the async iterator
     */
    scrollSearch<TDocument = unknown, TAggregations = unknown>(params: T.SearchRequest, options?: ScrollSearchOptions): AsyncIterable<ScrollSearchResponse<TDocument, TAggregations>>;
    /**
     * Runs a scroll search operation. This function returns an async iterator, allowing
     * the user to use a for await loop to get all the documents of a given search.
     * ```js
     * for await (const document of client.helpers.scrollSearch({ params })) {
     *   console.log(document)
     * }
     * ```
     * Each document is what you will find by running a scrollSearch and iterating on the hits array.
     * This helper automatically adds `filter_path=hits.hits._source` to the querystring,
     * as it will only need the documents source.
     * @param {object} params - The Elasticsearch's search parameters.
     * @param {object} options - The client optional configuration for this request.
     * @return {iterator} the async iterator
     */
    scrollDocuments<TDocument = unknown>(params: T.SearchRequest, options?: ScrollSearchOptions): AsyncIterable<TDocument>;
    /**
     * Creates a msearch helper instance. Once you configure it, you can use the provided
     * `search` method to add new searches in the queue.
     * @param {object} options - The configuration of the msearch operations.
     * @param {object} reqOptions - The client optional configuration for this request.
     * @return {object} The possible operations to run.
     */
    msearch(options?: MsearchHelperOptions, reqOptions?: TransportRequestOptions): MsearchHelper;
    /**
     * Creates a bulk helper instance. Once you configure it, you can pick which operation
     * to execute with the given dataset, index, create, update, and delete.
     * @param {object} options - The configuration of the bulk operation.
     * @param {object} reqOptions - The client optional configuration for this request.
     * @return {object} The possible operations to run with the datasource.
     */
    bulk<TDocument = unknown>(options: BulkHelperOptions<TDocument>, reqOptions?: TransportRequestOptions): BulkHelper<TDocument>;
}
export {};