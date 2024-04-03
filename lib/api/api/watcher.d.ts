import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Watcher {
    transport: Transport;
    constructor(transport: Transport);
    ackWatch(this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherAckWatchResponse>;
    ackWatch(this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherAckWatchResponse, unknown>>;
    ackWatch(this: That, params: T.WatcherAckWatchRequest | TB.WatcherAckWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherAckWatchResponse>;
    activateWatch(this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherActivateWatchResponse>;
    activateWatch(this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherActivateWatchResponse, unknown>>;
    activateWatch(this: That, params: T.WatcherActivateWatchRequest | TB.WatcherActivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherActivateWatchResponse>;
    deactivateWatch(this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeactivateWatchResponse>;
    deactivateWatch(this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeactivateWatchResponse, unknown>>;
    deactivateWatch(this: That, params: T.WatcherDeactivateWatchRequest | TB.WatcherDeactivateWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeactivateWatchResponse>;
    deleteWatch(this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherDeleteWatchResponse>;
    deleteWatch(this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherDeleteWatchResponse, unknown>>;
    deleteWatch(this: That, params: T.WatcherDeleteWatchRequest | TB.WatcherDeleteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherDeleteWatchResponse>;
    executeWatch(this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherExecuteWatchResponse>;
    executeWatch(this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherExecuteWatchResponse, unknown>>;
    executeWatch(this: That, params?: T.WatcherExecuteWatchRequest | TB.WatcherExecuteWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherExecuteWatchResponse>;
    getWatch(this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherGetWatchResponse>;
    getWatch(this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherGetWatchResponse, unknown>>;
    getWatch(this: That, params: T.WatcherGetWatchRequest | TB.WatcherGetWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherGetWatchResponse>;
    putWatch(this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherPutWatchResponse>;
    putWatch(this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherPutWatchResponse, unknown>>;
    putWatch(this: That, params: T.WatcherPutWatchRequest | TB.WatcherPutWatchRequest, options?: TransportRequestOptions): Promise<T.WatcherPutWatchResponse>;
    queryWatches(this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherQueryWatchesResponse>;
    queryWatches(this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherQueryWatchesResponse, unknown>>;
    queryWatches(this: That, params?: T.WatcherQueryWatchesRequest | TB.WatcherQueryWatchesRequest, options?: TransportRequestOptions): Promise<T.WatcherQueryWatchesResponse>;
    start(this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStartResponse>;
    start(this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStartResponse, unknown>>;
    start(this: That, params?: T.WatcherStartRequest | TB.WatcherStartRequest, options?: TransportRequestOptions): Promise<T.WatcherStartResponse>;
    stats(this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStatsResponse>;
    stats(this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStatsResponse, unknown>>;
    stats(this: That, params?: T.WatcherStatsRequest | TB.WatcherStatsRequest, options?: TransportRequestOptions): Promise<T.WatcherStatsResponse>;
    stop(this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.WatcherStopResponse>;
    stop(this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.WatcherStopResponse, unknown>>;
    stop(this: That, params?: T.WatcherStopRequest | TB.WatcherStopRequest, options?: TransportRequestOptions): Promise<T.WatcherStopResponse>;
}
export {};
