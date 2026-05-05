import type { OrchestrationTaskRunner } from "@scripts/generators/src/lib/cli";
import type { Logger } from "@scripts/generators/src/lib/logging";
import { createOrchestrationRunner } from "@scripts/generators/src/lib/pipeline-runner";
import { createReportsContext } from "@scripts/generators/src/lib/reports";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { GenerationContext } from "./@types/orchestration";
import type { ScriptConfig } from "./@types/script-config";
import { assertGenerateCustomRequestsResult } from "./assert";
import {
	createGenerateCustomRequestsExecutionContext,
	type GenerateCustomRequestsExecutionContext,
	getPipelineContext,
} from "./context";
import {
	fetchEntriesStage,
	loadConfigStage,
	loadSchemasStage,
	renderConsolidatedReportsStage,
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

const { runOrchestrationStage } = createOrchestrationRunner<GenerationContext>({
	createInitialContext: (logger) =>
		({
			logger,
			reports: createReportsContext(),
		}) as GenerationContext,
});

async function runStage(
	context: GenerateCustomRequestsExecutionContext,
	stage: Parameters<typeof runOrchestrationStage>[1],
): Promise<void> {
	await runOrchestrationStage(context, stage);
}

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

export async function runGenerateCustomRequests(
	overrideConfig: Partial<ScriptConfig> | undefined,
	injectedLogger: Logger,
): Promise<GenerationContext> {
	resetTypeScriptValidationCache();
	const context = createGenerateCustomRequestsExecutionContext(
		overrideConfig,
		injectedLogger,
	);

	lockGenerateCustomRequestsWorkspace();
	await runLoadConfigOrchestrationStage(context);
	await runFetchEntriesOrchestrationStage(context);
	await runLoadSchemasOrchestrationStage(context);
	await runWriteAnalysisReportOrchestrationStage(context);
	await runTransformAndMergeOrchestrationStage(context);
	await runWriteOutputOrchestrationStage(context);
	await runRenderConsolidatedReportsOrchestrationStage(context);

	return assertGenerateCustomRequestsResult(context);
}
