/**
 * Types for the update-field-names pipeline.
 */

import type { TaskRunner } from "@generators/lib/types";

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

/** Pipeline context carried through all Listr2 tasks */
export interface PipelineContext {
	credentials: NocoBaseCredentials;
	updates: FieldUpdateRequest[];
	results: FieldUpdateResult[];
}

/** A stage function signature matching the Listr2 task pattern */
export type PipelineStage = (
	ctx: PipelineContext,
	task: TaskRunner,
) => Promise<void> | ReturnType<TaskRunner["newListr"]> | void;
