import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Autoscaling {
    transport: Transport;
    constructor(transport: Transport);
    deleteAutoscalingPolicy(this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingDeleteAutoscalingPolicyResponse>;
    deleteAutoscalingPolicy(this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingDeleteAutoscalingPolicyResponse, unknown>>;
    deleteAutoscalingPolicy(this: That, params: T.AutoscalingDeleteAutoscalingPolicyRequest | TB.AutoscalingDeleteAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingDeleteAutoscalingPolicyResponse>;
    getAutoscalingCapacity(this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingGetAutoscalingCapacityResponse>;
    getAutoscalingCapacity(this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingGetAutoscalingCapacityResponse, unknown>>;
    getAutoscalingCapacity(this: That, params?: T.AutoscalingGetAutoscalingCapacityRequest | TB.AutoscalingGetAutoscalingCapacityRequest, options?: TransportRequestOptions): Promise<T.AutoscalingGetAutoscalingCapacityResponse>;
    getAutoscalingPolicy(this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingGetAutoscalingPolicyResponse>;
    getAutoscalingPolicy(this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingGetAutoscalingPolicyResponse, unknown>>;
    getAutoscalingPolicy(this: That, params: T.AutoscalingGetAutoscalingPolicyRequest | TB.AutoscalingGetAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingGetAutoscalingPolicyResponse>;
    putAutoscalingPolicy(this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.AutoscalingPutAutoscalingPolicyResponse>;
    putAutoscalingPolicy(this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.AutoscalingPutAutoscalingPolicyResponse, unknown>>;
    putAutoscalingPolicy(this: That, params: T.AutoscalingPutAutoscalingPolicyRequest | TB.AutoscalingPutAutoscalingPolicyRequest, options?: TransportRequestOptions): Promise<T.AutoscalingPutAutoscalingPolicyResponse>;
}
export {};
