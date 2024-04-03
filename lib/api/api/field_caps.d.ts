import { Transport, TransportRequestOptions, TransportRequestOptionsWithMeta, TransportRequestOptionsWithOutMeta, TransportResult } from '@elastic/transport';
import * as T from '../types';
import * as TB from '../typesWithBodyKey';
interface That {
    transport: Transport;
}
export default function FieldCapsApi(this: That, params: T.FieldCapsRequest | TB.FieldCapsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.FieldCapsResponse>;
export default function FieldCapsApi(this: That, params: T.FieldCapsRequest | TB.FieldCapsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.FieldCapsResponse, unknown>>;
export default function FieldCapsApi(this: That, params: T.FieldCapsRequest | TB.FieldCapsRequest, options?: TransportRequestOptions): Promise<T.FieldCapsResponse>;
export {};
