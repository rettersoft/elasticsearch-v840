import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default class Snapshot {
    transport: Transport;
    constructor(transport: Transport);
    cleanupRepository(this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCleanupRepositoryResponse>;
    cleanupRepository(this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCleanupRepositoryResponse, unknown>>;
    cleanupRepository(this: That, params: T.SnapshotCleanupRepositoryRequest | TB.SnapshotCleanupRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotCleanupRepositoryResponse>;
    clone(this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCloneResponse>;
    clone(this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCloneResponse, unknown>>;
    clone(this: That, params: T.SnapshotCloneRequest | TB.SnapshotCloneRequest, options?: TransportRequestOptions): Promise<T.SnapshotCloneResponse>;
    create(this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCreateResponse>;
    create(this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCreateResponse, unknown>>;
    create(this: That, params: T.SnapshotCreateRequest | TB.SnapshotCreateRequest, options?: TransportRequestOptions): Promise<T.SnapshotCreateResponse>;
    createRepository(this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotCreateRepositoryResponse>;
    createRepository(this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotCreateRepositoryResponse, unknown>>;
    createRepository(this: That, params: T.SnapshotCreateRepositoryRequest | TB.SnapshotCreateRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotCreateRepositoryResponse>;
    delete(this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotDeleteResponse>;
    delete(this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotDeleteResponse, unknown>>;
    delete(this: That, params: T.SnapshotDeleteRequest | TB.SnapshotDeleteRequest, options?: TransportRequestOptions): Promise<T.SnapshotDeleteResponse>;
    deleteRepository(this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotDeleteRepositoryResponse>;
    deleteRepository(this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotDeleteRepositoryResponse, unknown>>;
    deleteRepository(this: That, params: T.SnapshotDeleteRepositoryRequest | TB.SnapshotDeleteRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotDeleteRepositoryResponse>;
    get(this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotGetResponse>;
    get(this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotGetResponse, unknown>>;
    get(this: That, params: T.SnapshotGetRequest | TB.SnapshotGetRequest, options?: TransportRequestOptions): Promise<T.SnapshotGetResponse>;
    getRepository(this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotGetRepositoryResponse>;
    getRepository(this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotGetRepositoryResponse, unknown>>;
    getRepository(this: That, params?: T.SnapshotGetRepositoryRequest | TB.SnapshotGetRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotGetRepositoryResponse>;
    repositoryAnalyze(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>;
    repositoryAnalyze(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>;
    repositoryAnalyze(this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>;
    restore(this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotRestoreResponse>;
    restore(this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotRestoreResponse, unknown>>;
    restore(this: That, params: T.SnapshotRestoreRequest | TB.SnapshotRestoreRequest, options?: TransportRequestOptions): Promise<T.SnapshotRestoreResponse>;
    status(this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotStatusResponse>;
    status(this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotStatusResponse, unknown>>;
    status(this: That, params?: T.SnapshotStatusRequest | TB.SnapshotStatusRequest, options?: TransportRequestOptions): Promise<T.SnapshotStatusResponse>;
    verifyRepository(this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SnapshotVerifyRepositoryResponse>;
    verifyRepository(this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SnapshotVerifyRepositoryResponse, unknown>>;
    verifyRepository(this: That, params: T.SnapshotVerifyRepositoryRequest | TB.SnapshotVerifyRepositoryRequest, options?: TransportRequestOptions): Promise<T.SnapshotVerifyRepositoryResponse>;
}
export {};
