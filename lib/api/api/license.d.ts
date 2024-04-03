import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class License {
    transport: Transport;
    constructor(transport: Transport);
    delete(this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseDeleteResponse>;
    delete(this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseDeleteResponse, unknown>>;
    delete(this: That, params?: T.LicenseDeleteRequest | TB.LicenseDeleteRequest, options?: TransportRequestOptions): Promise<T.LicenseDeleteResponse>;
    get(this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetResponse>;
    get(this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetResponse, unknown>>;
    get(this: That, params?: T.LicenseGetRequest | TB.LicenseGetRequest, options?: TransportRequestOptions): Promise<T.LicenseGetResponse>;
    getBasicStatus(this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetBasicStatusResponse>;
    getBasicStatus(this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetBasicStatusResponse, unknown>>;
    getBasicStatus(this: That, params?: T.LicenseGetBasicStatusRequest | TB.LicenseGetBasicStatusRequest, options?: TransportRequestOptions): Promise<T.LicenseGetBasicStatusResponse>;
    getTrialStatus(this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicenseGetTrialStatusResponse>;
    getTrialStatus(this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicenseGetTrialStatusResponse, unknown>>;
    getTrialStatus(this: That, params?: T.LicenseGetTrialStatusRequest | TB.LicenseGetTrialStatusRequest, options?: TransportRequestOptions): Promise<T.LicenseGetTrialStatusResponse>;
    post(this: That, params: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostResponse>;
    post(this: That, params: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostResponse, unknown>>;
    post(this: That, params: T.LicensePostRequest | TB.LicensePostRequest, options?: TransportRequestOptions): Promise<T.LicensePostResponse>;
    postStartBasic(this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostStartBasicResponse>;
    postStartBasic(this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostStartBasicResponse, unknown>>;
    postStartBasic(this: That, params?: T.LicensePostStartBasicRequest | TB.LicensePostStartBasicRequest, options?: TransportRequestOptions): Promise<T.LicensePostStartBasicResponse>;
    postStartTrial(this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.LicensePostStartTrialResponse>;
    postStartTrial(this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.LicensePostStartTrialResponse, unknown>>;
    postStartTrial(this: That, params?: T.LicensePostStartTrialRequest | TB.LicensePostStartTrialRequest, options?: TransportRequestOptions): Promise<T.LicensePostStartTrialResponse>;
}
export {};