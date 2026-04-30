import "./config";
import {
	createOrchestrationTasks,
	type GeneratorCliTask,
	type GeneratorExecutionHooks,
	type GeneratorOrchestrationStep,
	type RunGeneratorCliOptions,
	runGeneratorCli,
} from "@scripts/generators/run-generator";
import type { ScriptConfig } from "./@types/script-config";
import {
	assertGenerateCustomRequestsResult,
	createGenerateCustomRequestsExecutionContext,
	lockGenerateCustomRequestsWorkspace,
	runFetchEntriesOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runTransformAndMergeOrchestrationStage,
	runWriteAnalysisReportOrchestrationStage,
	runWriteOutputOrchestrationStage,
} from "./generate-custom-requests";

export { config } from "./config";

interface GenerateCustomRequestsGeneratorContext {
	overrideConfig?: Partial<ScriptConfig>;
	executionContext?: ReturnType<
		typeof createGenerateCustomRequestsExecutionContext
	>;
}

type GenerateCustomRequestsExecutionContext = ReturnType<
	typeof createGenerateCustomRequestsExecutionContext
>;

const ORCHESTRATION_STEPS: GeneratorOrchestrationStep<GenerateCustomRequestsExecutionContext>[] =
	[
		{
			name: "load-config",
			run: runLoadConfigOrchestrationStage,
		},
		{
			name: "fetch-entries",
			run: runFetchEntriesOrchestrationStage,
		},
		{
			name: "write-analysis-report",
			run: runWriteAnalysisReportOrchestrationStage,
		},
		{
			name: "transform-and-merge",
			run: runTransformAndMergeOrchestrationStage,
		},
		{
			name: "write-output",
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

function createGeneratorTasks(): GeneratorCliTask<GenerateCustomRequestsGeneratorContext>[] {
	return [
		{
			name: "prepare-context",
			run: (context) => {
				context.executionContext = createGenerateCustomRequestsExecutionContext(
					context.overrideConfig,
					context.logger,
				);
			},
		},
		{
			name: "lock-workspace",
			run: () => {
				lockGenerateCustomRequestsWorkspace();
			},
		},
		...createOrchestrationTasks({
			stages: ORCHESTRATION_STEPS,
			getExecutionContext,
		}),
		{
			name: "assert-result",
			run: (context) => {
				assertGenerateCustomRequestsResult(getExecutionContext(context));
			},
		},
	];
}

export function createGenerateCustomRequestsGenerator(
	hooks?: GeneratorExecutionHooks,
): RunGeneratorCliOptions<GenerateCustomRequestsGeneratorContext> {
	return {
		name: "generate-custom-requests",
		context: {},
		tasks: createGeneratorTasks(),
		hooks,
	};
}

const generateCustomRequests = createGenerateCustomRequestsGenerator();

void runGeneratorCli(generateCustomRequests);
