/**
 * Types for the update-field-names pipeline.
 */

import type { TaskRunner } from "@shared/types";

/** Credentials for the NocoBase API */
export interface NocoBaseCredentials {
	baseUrl: string;
	token: string;
	timeoutMs: number;
}

/** A single field update request */
export interface FieldUpdateRequest {
	datasourceKey: string;
	collectionName: string;
	fieldName: string;
	newLabel: string;
}

/** Result of a single field update */
export interface FieldUpdateResult {
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
export type FieldUiSchemaLookup = Map<string, UiSchema | undefined>;

/** Pipeline context carried through all Listr2 tasks */
export interface PipelineContext {
	credentials: NocoBaseCredentials;
	updates: FieldUpdateRequest[];
	fieldLookup: FieldUiSchemaLookup;
	results: FieldUpdateResult[];
}

/** A stage function signature matching the Listr2 task pattern */
export type PipelineStage = (
	ctx: PipelineContext,
	task: TaskRunner,
) => Promise<void> | ReturnType<TaskRunner["newListr"]> | void;
