import {
	createStandardFinalizationTasks,
	createStandardPreparationTasks,
	type GeneratorContextState,
	type GeneratorOrchestrationStage,
	type GeneratorTask,
	getRequiredExecutionContext,
} from "@scripts/generators/src/lib/cli";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { ScriptConfig } from "../@types/script-config";
import {
	runFetchEntriesOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runLoadSchemasOrchestrationStage,
	runRenderConsolidatedReportsOrchestrationStage,
	runTransformAndMergeOrchestrationStage,
	runWriteAnalysisReportOrchestrationStage,
	runWriteOutputOrchestrationStage,
} from "../orchestration/stage-runners";
import { assertGenerateCustomRequestsResult } from "../runtime/assert";
import {
	backupGenerateCustomRequestsOutputs,
	cleanupGenerateCustomRequestsBackups,
} from "../runtime/backup";
import {
	createGenerateCustomRequestsExecutionContext,
	type GenerateCustomRequestsExecutionContext,
} from "../runtime/context";
import { applyWorkspaceLockIfNeeded as lockGenerateCustomRequestsWorkspace } from "../utils/workspace-locker";

export type GenerateCustomRequestsGeneratorContext = GeneratorContextState<
	Partial<ScriptConfig>,
	GenerateCustomRequestsExecutionContext
>;

export const ORCHESTRATION_STEPS: GeneratorOrchestrationStage<GenerateCustomRequestsExecutionContext>[] =
	[
		{
			title: "load-config",
			run: runLoadConfigOrchestrationStage,
		},
		{
			title: "fetch-entries",
			run: runFetchEntriesOrchestrationStage,
		},
		{
			title: "load-schemas",
			run: runLoadSchemasOrchestrationStage,
		},
		{
			title: "write-analysis-report",
			run: runWriteAnalysisReportOrchestrationStage,
		},
		{
			title: "transform-and-merge",
			run: runTransformAndMergeOrchestrationStage,
		},
		{
			title: "write-output",
			run: runWriteOutputOrchestrationStage,
		},
		{
			title: "render-consolidated-reports",
			run: runRenderConsolidatedReportsOrchestrationStage,
		},
	];

export function getExecutionContext(
	context: GenerateCustomRequestsGeneratorContext,
): GenerateCustomRequestsExecutionContext {
	return getRequiredExecutionContext(context, "generate-custom-requests");
}

export function createPreparationTasks(): GeneratorTask<GenerateCustomRequestsGeneratorContext>[] {
	return createStandardPreparationTasks({
		onBeforePrepare: resetTypeScriptValidationCache,
		createExecutionContext: createGenerateCustomRequestsExecutionContext,
		getExecutionContext,
		lockWorkspace: lockGenerateCustomRequestsWorkspace,
		backupOutputs: backupGenerateCustomRequestsOutputs,
	});
}

export function createFinalizationTasks(): GeneratorTask<GenerateCustomRequestsGeneratorContext>[] {
	return createStandardFinalizationTasks({
		getExecutionContext,
		assertResult: assertGenerateCustomRequestsResult,
		cleanupBackups: cleanupGenerateCustomRequestsBackups,
	});
}

export function createGeneratorTasks(
	orchestrationTask: GeneratorTask<GenerateCustomRequestsGeneratorContext>,
): GeneratorTask<GenerateCustomRequestsGeneratorContext>[] {
	return [
		...createPreparationTasks(),
		orchestrationTask,
		...createFinalizationTasks(),
	];
}
