import {
	createGeneratorOptions,
	createOrchestrationTask,
	type GeneratorOrchestrationStage,
	type GeneratorTask,
	type RunGeneratorCliOptions,
} from "@scripts/generators/src/lib/cli";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { ScriptConfig } from "../@types/script-config";
import { assertGenerateCustomRequestsResult } from "../assert";
import { createGenerateCustomRequestsExecutionContext } from "../context";
import {
	lockGenerateCustomRequestsWorkspace,
	runFetchEntriesOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runLoadSchemasOrchestrationStage,
	runTransformAndMergeOrchestrationStage,
	runWriteAnalysisReportOrchestrationStage,
	runWriteOutputOrchestrationStage,
} from "../generate-custom-requests";

export interface GenerateCustomRequestsGeneratorContext {
	overrideConfig?: Partial<ScriptConfig>;
	executionContext?: ReturnType<
		typeof createGenerateCustomRequestsExecutionContext
	>;
}

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
	];

function getExecutionContext(
	context: GenerateCustomRequestsGeneratorContext,
): GenerateCustomRequestsExecutionContext {
	if (!context.executionContext) {
		throw new Error("Contexto de execução não inicializado");
	}

	return context.executionContext;
}

function createGeneratorTasks(): GeneratorTask<GenerateCustomRequestsGeneratorContext>[] {
	return [
		{
			title: "prepare-context",
			run: (context) => {
				resetTypeScriptValidationCache();
				context.executionContext = createGenerateCustomRequestsExecutionContext(
					context.overrideConfig,
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
	];
}

export function createGenerateCustomRequestsGenerator(): RunGeneratorCliOptions<GenerateCustomRequestsGeneratorContext> {
	return createGeneratorOptions({
		name: "generate-custom-requests",
		tasks: createGeneratorTasks(),
	});
}
