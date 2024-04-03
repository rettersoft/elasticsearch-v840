import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default function KnnSearchApi<TDocument = unknown>(this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.KnnSearchResponse<TDocument>>;
export default function KnnSearchApi<TDocument = unknown>(this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.KnnSearchResponse<TDocument>, unknown>>;
export default function KnnSearchApi<TDocument = unknown>(this: That, params: T.KnnSearchRequest | TB.KnnSearchRequest, options?: TransportRequestOptions): Promise<T.KnnSearchResponse<TDocument>>;
export {};