import {
	createGeneratorOptions,
	createOrchestrationTask,
	type GeneratorContextState,
	type GeneratorOrchestrationStage,
	type GeneratorTask,
	getRequiredExecutionContext,
	type RunGeneratorCliOptions,
} from "@scripts/generators/src/lib/cli";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { ScriptConfig } from "../@types/script-config";
import { assertGenerateCustomRequestsResult } from "../assert";
import { config } from "../config";
import { createGenerateCustomRequestsExecutionContext } from "../context";
import {
	lockGenerateCustomRequestsWorkspace,
	runFetchEntriesOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runLoadSchemasOrchestrationStage,
	runRenderConsolidatedReportsOrchestrationStage,
	runTransformAndMergeOrchestrationStage,
	runWriteAnalysisReportOrchestrationStage,
	runWriteOutputOrchestrationStage,
} from "../generate-custom-requests";
import {
	backupGenerateCustomRequestsOutputs,
	cleanupGenerateCustomRequestsBackups,
} from "../runtime/backup";

export type GenerateCustomRequestsGeneratorContext = GeneratorContextState<
	Partial<ScriptConfig>,
	ReturnType<typeof createGenerateCustomRequestsExecutionContext>
>;

type GenerateCustomRequestsExecutionContext = ReturnType<
	typeof createGenerateCustomRequestsExecutionContext
>;

const ORCHESTRATION_STEPS: GeneratorOrchestrationStage<GenerateCustomRequestsExecutionContext>[] =
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

function getExecutionContext(
	context: GenerateCustomRequestsGeneratorContext,
): GenerateCustomRequestsExecutionContext {
	return getRequiredExecutionContext(context, "generate-custom-requests");
}

function createGeneratorTasks(): GeneratorTask<GenerateCustomRequestsGeneratorContext>[] {
	return [
		{
			title: "prepare-context",
			run: (context) => {
				resetTypeScriptValidationCache();
				context.executionContext = createGenerateCustomRequestsExecutionContext(
					context.overrideConfig ?? config,
					context.logger,
				);
			},
		},
		{
			title: "lock-workspace",
			run: () => {
				lockGenerateCustomRequestsWorkspace();
			},
		},
		{
			title: "backup-outputs",
			run: (context) => {
				backupGenerateCustomRequestsOutputs(getExecutionContext(context));
			},
		},
		createOrchestrationTask({
			title: "orchestration",
			stages: ORCHESTRATION_STEPS,
			getExecutionContext,
		}),
		{
			title: "assert-result",
			run: (context) => {
				assertGenerateCustomRequestsResult(getExecutionContext(context));
			},
		},
		{
			title: "cleanup-backups",
			run: async (context) => {
				await cleanupGenerateCustomRequestsBackups(
					getExecutionContext(context),
				);
			},
		},
	];
}

export function createGenerateCustomRequestsGenerator(): RunGeneratorCliOptions<GenerateCustomRequestsGeneratorContext> {
	return createGeneratorOptions({
		name: "generate-custom-requests",
		context: {
			executionContext: undefined,
			overrideConfig: config,
		},
		tasks: createGeneratorTasks(),
	});
}
