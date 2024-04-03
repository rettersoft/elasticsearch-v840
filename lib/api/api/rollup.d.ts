import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Rollup {
    transport: Transport;
    constructor(transport: Transport);
    deleteJob(this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupDeleteJobResponse>;
    deleteJob(this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupDeleteJobResponse, unknown>>;
    deleteJob(this: That, params: T.RollupDeleteJobRequest | TB.RollupDeleteJobRequest, options?: TransportRequestOptions): Promise<T.RollupDeleteJobResponse>;
    getJobs(this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupGetJobsResponse>;
    getJobs(this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupGetJobsResponse, unknown>>;
    getJobs(this: That, params?: T.RollupGetJobsRequest | TB.RollupGetJobsRequest, options?: TransportRequestOptions): Promise<T.RollupGetJobsResponse>;
    getRollupCaps(this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupGetRollupCapsResponse>;
    getRollupCaps(this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupGetRollupCapsResponse, unknown>>;
    getRollupCaps(this: That, params?: T.RollupGetRollupCapsRequest | TB.RollupGetRollupCapsRequest, options?: TransportRequestOptions): Promise<T.RollupGetRollupCapsResponse>;
    getRollupIndexCaps(this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupGetRollupIndexCapsResponse>;
    getRollupIndexCaps(this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupGetRollupIndexCapsResponse, unknown>>;
    getRollupIndexCaps(this: That, params: T.RollupGetRollupIndexCapsRequest | TB.RollupGetRollupIndexCapsRequest, options?: TransportRequestOptions): Promise<T.RollupGetRollupIndexCapsResponse>;
    putJob(this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupPutJobResponse>;
    putJob(this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupPutJobResponse, unknown>>;
    putJob(this: That, params: T.RollupPutJobRequest | TB.RollupPutJobRequest, options?: TransportRequestOptions): Promise<T.RollupPutJobResponse>;
    rollup(this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupRollupResponse>;
    rollup(this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupRollupResponse, unknown>>;
    rollup(this: That, params: T.RollupRollupRequest | TB.RollupRollupRequest, options?: TransportRequestOptions): Promise<T.RollupRollupResponse>;
    rollupSearch<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupRollupSearchResponse<TDocument, TAggregations>>;
    rollupSearch<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupRollupSearchResponse<TDocument, TAggregations>, unknown>>;
    rollupSearch<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>>(this: That, params: T.RollupRollupSearchRequest | TB.RollupRollupSearchRequest, options?: TransportRequestOptions): Promise<T.RollupRollupSearchResponse<TDocument, TAggregations>>;
    startJob(this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupStartJobResponse>;
    startJob(this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupStartJobResponse, unknown>>;
    startJob(this: That, params: T.RollupStartJobRequest | TB.RollupStartJobRequest, options?: TransportRequestOptions): Promise<T.RollupStartJobResponse>;
    stopJob(this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RollupStopJobResponse>;
    stopJob(this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RollupStopJobResponse, unknown>>;
    stopJob(this: That, params: T.RollupStopJobRequest | TB.RollupStopJobRequest, options?: TransportRequestOptions): Promise<T.RollupStopJobResponse>;
}
export {};
