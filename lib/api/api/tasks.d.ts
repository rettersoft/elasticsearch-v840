import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Tasks {
    transport: Transport;
    constructor(transport: Transport);
    cancel(this: That, params?: T.TasksCancelRequest | TB.TasksCancelRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TasksCancelResponse>;
    cancel(this: That, params?: T.TasksCancelRequest | TB.TasksCancelRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TasksCancelResponse, unknown>>;
    cancel(this: That, params?: T.TasksCancelRequest | TB.TasksCancelRequest, options?: TransportRequestOptions): Promise<T.TasksCancelResponse>;
    get(this: That, params: T.TasksGetRequest | TB.TasksGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TasksGetResponse>;
    get(this: That, params: T.TasksGetRequest | TB.TasksGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TasksGetResponse, unknown>>;
    get(this: That, params: T.TasksGetRequest | TB.TasksGetRequest, options?: TransportRequestOptions): Promise<T.TasksGetResponse>;
    list(this: That, params?: T.TasksListRequest | TB.TasksListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.TasksListResponse>;
    list(this: That, params?: T.TasksListRequest | TB.TasksListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TasksListResponse, unknown>>;
    list(this: That, params?: T.TasksListRequest | TB.TasksListRequest, options?: TransportRequestOptions): Promise<T.TasksListResponse>;
}
export {};