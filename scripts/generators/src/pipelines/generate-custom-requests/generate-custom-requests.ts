import type { OrchestrationTaskRunner } from "@scripts/generators/src/lib/generator-cli";
import type { Logger } from "@scripts/generators/src/lib/logger";
import { runExecutionStage } from "@scripts/generators/src/lib/pipeline-runner";
import type { ScriptConfig } from "./@types/script-config";
import { assertGenerateCustomRequestsResult } from "./assert";
import {
	createGenerateCustomRequestsExecutionContext,
	type GenerateCustomRequestsExecutionContext,
	getPipelineContext,
} from "./context";
import type {
	GenerationContext,
	GenerationStage,
} from "./pipeline/orchestration/types";
import {
	fetchEntriesStage,
	loadConfigStage,
	transformAndMergeStage,
	writeAnalysisReportStage,
} from "./pipeline/stages";
import {
	runWriteOutputOrchestration,
	writeOutputStage,
} from "./pipeline/stages/write-output";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export { createGenerateCustomRequestsExecutionContext } from "./context";

export function lockGenerateCustomRequestsWorkspace(): void {
	applyWorkspaceLockIfNeeded();
}

async function runOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
	stage: GenerationStage,
): Promise<void> {
	await runExecutionStage({
		runtimeContext: context,
		stage,
		createInitialContext: (injectedLogger) =>
			({
				logger: injectedLogger,
			}) as GenerationContext,
	});
}

export async function runLoadConfigOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(
		context,
		loadConfigStage({ overrideConfig: context.overrideConfig }),
	);
}

export async function runFetchEntriesOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, fetchEntriesStage());
}

export async function runWriteAnalysisReportOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, writeAnalysisReportStage());
}

export async function runTransformAndMergeOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, transformAndMergeStage());
}

export function runWriteOutputOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runOrchestrationStage(context, writeOutputStage());
	}

	return runWriteOutputOrchestration(getPipelineContext(context), task);
}

export async function runGenerateCustomRequests(
	overrideConfig: Partial<ScriptConfig> | undefined,
	injectedLogger: Logger,
): Promise<GenerationContext> {
	const context = createGenerateCustomRequestsExecutionContext(
		overrideConfig,
		injectedLogger,
	);

	lockGenerateCustomRequestsWorkspace();
	await runLoadConfigOrchestrationStage(context);
	await runFetchEntriesOrchestrationStage(context);
	await runWriteAnalysisReportOrchestrationStage(context);
	await runTransformAndMergeOrchestrationStage(context);
	await runWriteOutputOrchestrationStage(context);

	return assertGenerateCustomRequestsResult(context);
}
