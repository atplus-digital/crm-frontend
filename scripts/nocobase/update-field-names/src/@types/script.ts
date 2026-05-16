/**
 * Types for the update-field-names pipeline.
 */

/** Credentials for the NocoBase API */
interface NocoBaseCredentials {
	baseUrl: string;
	token: string;
	timeoutMs: number;
}

/** A single field update request */
interface FieldUpdateRequest {
	datasourceKey: string;
	collectionName: string;
	fieldName: string;
	newLabel: string;
}

/** Result of a single field update */
interface FieldUpdateResult {
	request: FieldUpdateRequest;
	success: boolean;
	statusCode?: number;
	errorMessage?: string;
}

/**
 * NocoBase uiSchema — opaque record.
 * Uses index signature because NocoBase can add arbitrary keys
 * (x-component, x-component-designer, x-read-pretty, x-use-component-props, etc.).
 * We only override `title`; everything else passes through unchanged.
 */
export type UiSchema = Record<string, unknown>;

/** Lookup map: `${datasourceKey}.${collectionName}.${fieldName}` → uiSchema */
type FieldUiSchemaLookup = Map<string, UiSchema | undefined>;

/** Pipeline context carried through all Listr2 tasks */
export interface PipelineContext {
	credentials: NocoBaseCredentials;
	updates: FieldUpdateRequest[];
	fieldLookup: FieldUiSchemaLookup;
	results: FieldUpdateResult[];
}
