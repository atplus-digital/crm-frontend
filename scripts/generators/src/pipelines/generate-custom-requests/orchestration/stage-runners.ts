import type { OrchestrationTaskRunner } from "@scripts/generators/src/lib/cli";
import {
	fetchEntriesStage,
	loadConfigStage,
	loadSchemasStage,
	renderConsolidatedReportsStage,
	transformAndMergeStage,
	writeAnalysisReportStage,
} from "../pipeline/stages";
import {
	runWriteOutputOrchestration,
	writeOutputStage,
} from "../pipeline/stages/write-output";
import {
	type GenerateCustomRequestsExecutionContext,
	getPipelineContext,
} from "../runtime/context";
import { runStage } from "./run-stage";

export async function runLoadConfigOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runStage(
		context,
		loadConfigStage({ overrideConfig: context.overrideConfig }),
	);
}

export async function runFetchEntriesOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runStage(context, fetchEntriesStage());
}

export async function runWriteAnalysisReportOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runStage(context, writeAnalysisReportStage());
}

export async function runLoadSchemasOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runStage(context, loadSchemasStage());
}

export async function runTransformAndMergeOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runStage(context, transformAndMergeStage());
}

export async function runRenderConsolidatedReportsOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runStage(context, renderConsolidatedReportsStage());
}

export function runWriteOutputOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runStage(context, writeOutputStage());
	}

	return runWriteOutputOrchestration(getPipelineContext(context), task);
}
