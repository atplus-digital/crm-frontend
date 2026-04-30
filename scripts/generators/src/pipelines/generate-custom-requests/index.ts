import "./config";
import {
	createGeneratorOptions,
	createOrchestrationTask,
	type GeneratorOrchestrationStage,
	type GeneratorTask,
	runGeneratorCli,
} from "@scripts/generators/src/lib/generator-cli";
import { defaultLogger } from "@scripts/generators/src/lib/logger";
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

interface GenerateCustomRequestsGeneratorContext {
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

const generateCustomRequests = createGeneratorOptions({
	name: "generate-custom-requests",
	tasks: createGeneratorTasks(),
});

async function main(): Promise<void> {
	await runGeneratorCli(generateCustomRequests);
}

void main().catch((error) => {
	const message = error instanceof Error ? error.message : String(error);
	defaultLogger.error(message);
	process.exitCode = 1;
});
