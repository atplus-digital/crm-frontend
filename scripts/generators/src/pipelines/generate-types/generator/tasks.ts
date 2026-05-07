import {
	type GeneratorContextState,
	type GeneratorOrchestrationStage,
	type GeneratorTask,
	getRequiredExecutionContext,
} from "@scripts/generators/src/lib/cli";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { RuntimeConfig } from "../@types/script";
import { runDatasourcesOrchestrationStage } from "../orchestration/datasource-stage";
import { runPostPipelineOrchestrationStage } from "../orchestration/post-pipeline-stage";
import {
	runFormatResultOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runRenderConsolidatedReportsOrchestrationStage,
	runResolveDatasourcesOrchestrationStage,
} from "../orchestration/stage-runners";
import { assertGenerateTypesResult } from "../runtime/assert";
import {
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
} from "../runtime/backup";
import {
	createGenerateTypesExecutionContext,
	type GenerateTypesExecutionContext,
} from "../runtime/context";
import { applyWorkspaceLockIfNeeded as lockGenerateTypesWorkspace } from "../utils/workspace-locker";

export type GenerateTypesGeneratorContext = GeneratorContextState<
	Partial<RuntimeConfig>,
	GenerateTypesExecutionContext
>;

export const ORCHESTRATION_STEPS: GeneratorOrchestrationStage<GenerateTypesExecutionContext>[] =
	[
		{
			title: "load-config",
			run: runLoadConfigOrchestrationStage,
		},
		{
			title: "resolve-datasources",
			run: runResolveDatasourcesOrchestrationStage,
		},
		{
			title: "run-datasources",
			run: runDatasourcesOrchestrationStage,
		},
		{
			title: "run-post-pipeline",
			run: runPostPipelineOrchestrationStage,
		},
		{
			title: "format-result",
			run: runFormatResultOrchestrationStage,
		},
		{
			title: "render-consolidated-reports",
			run: runRenderConsolidatedReportsOrchestrationStage,
		},
	];

export function getExecutionContext(
	context: GenerateTypesGeneratorContext,
): GenerateTypesExecutionContext {
	return getRequiredExecutionContext(context, "generate-types");
}

export function createPreparationTasks(): GeneratorTask<GenerateTypesGeneratorContext>[] {
	return [
		{
			title: "prepare-context",
			run: (context) => {
				resetTypeScriptValidationCache();
				context.executionContext = createGenerateTypesExecutionContext(
					context.overrideConfig,
					context.logger,
				);
			},
		},
		{
			title: "lock-workspace",
			run: () => {
				lockGenerateTypesWorkspace();
			},
		},
		{
			title: "backup-outputs",
			run: (context) => {
				backupGenerateTypesOutputs(getExecutionContext(context));
			},
		},
	];
}

export function createFinalizationTasks(): GeneratorTask<GenerateTypesGeneratorContext>[] {
	return [
		{
			title: "assert-result",
			run: (context) => {
				assertGenerateTypesResult(getExecutionContext(context));
			},
		},
		{
			title: "cleanup-backups",
			run: async (context) => {
				await cleanupGenerateTypesBackups(getExecutionContext(context));
			},
		},
	];
}

export function createGeneratorTasks(
	orchestrationTask: GeneratorTask<GenerateTypesGeneratorContext>,
): GeneratorTask<GenerateTypesGeneratorContext>[] {
	return [
		...createPreparationTasks(),
		orchestrationTask,
		...createFinalizationTasks(),
	];
}
