import type {
	GeneratorOrchestrationStage,
	GeneratorTask,
} from "@scripts/generators/src/lib/cli";
import type { RuntimeConfig } from "../@types/script";
import { runDatasourcesOrchestrationStage } from "../orchestration/datasource-stage";
import { runPostPipelineOrchestrationStage } from "../orchestration/post-pipeline-stage";
import {
	runFormatResultOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runResolveDatasourcesOrchestrationStage,
} from "../orchestration/stage-runners";
import { lockGenerateTypesWorkspace } from "../orchestration/workspace";
import { assertGenerateTypesResult } from "../runtime/assert";
import {
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
} from "../runtime/backup";
import {
	createGenerateTypesExecutionContext,
	type GenerateTypesExecutionContext,
} from "../runtime/context";

export interface GenerateTypesGeneratorContext {
	overrideConfig?: Partial<RuntimeConfig>;
	executionContext?: GenerateTypesExecutionContext;
}

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
	];

export function getExecutionContext(
	context: GenerateTypesGeneratorContext,
): GenerateTypesExecutionContext {
	if (!context.executionContext) {
		throw new Error("Contexto de execução não inicializado");
	}

	return context.executionContext;
}

export function createPreparationTasks(): GeneratorTask<GenerateTypesGeneratorContext>[] {
	return [
		{
			title: "prepare-context",
			run: (context) => {
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
			run: (context) => {
				cleanupGenerateTypesBackups(getExecutionContext(context));
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
