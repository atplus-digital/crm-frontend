// Registry (canonical)

// Hooks (React Query wrappers)
export {
	useAllCustomRequests,
	useCollectionRequests,
	useCustomRequests,
	useSendCustomRequest,
} from "./hooks/hooks";
export type {
	CustomRequestEntry,
	CustomRequestKey,
	CustomRequestOptions,
} from "./registry";
export { customRequestsRegistry } from "./registry";
export type {
	CustomRequestPayload,
	CustomRequestPayloads,
} from "./schemas";
// Schemas (registry-bound)
export {
	criarContratoIxcSchema,
	n8nComprasSchema,
	qualirunInfoSchema,
} from "./schemas";
// Types (shared contracts)
export type {
	CollectionFor,
	CollectionMap,
	CollectionToRequestsMap,
	CustomRequestConfig,
	CustomRequestState,
	PayloadFor,
	RequestsForCollection,
	SendCustomRequestOptions,
	SendCustomRequestResult,
} from "./types";
export {
	COLLECTION_TO_REQUESTS,
	CustomRequestValidationError as LegacyCustomRequestValidationError,
} from "./types";
// Utils (errors, service)
export {
	CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestValidationError,
	mapZodErrorToPortuguese,
} from "./utils/errors";
export type { SendCustomRequestOptions as ServiceSendOptions } from "./utils/service";
export {
	getCustomRequestConfig,
	getRequestsByCollection,
	sendCustomRequest,
} from "./utils/service";
