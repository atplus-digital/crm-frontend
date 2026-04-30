import "./config";
import {
	createGeneratorOptions,
	createOrchestrationTask,
	type GeneratorOrchestrationStage,
	type GeneratorTask,
	type RunGeneratorCliOptions,
	runGeneratorCli,
} from "@scripts/generators/src/lib/generator-cli";
import { defaultLogger } from "@scripts/generators/src/lib/logger";
import type { RuntimeConfig } from "./@types/script";
import { assertGenerateTypesResult } from "./assert";
import {
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
} from "./backup";
import { createGenerateTypesExecutionContext } from "./context";
import {
	lockGenerateTypesWorkspace,
	runDatasourcesOrchestrationStage,
	runFormatResultOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runPostPipelineOrchestrationStage,
	runResolveDatasourcesOrchestrationStage,
} from "./generate-types";

export { config } from "./config";

interface GenerateTypesGeneratorContext {
	overrideConfig?: Partial<RuntimeConfig>;
	executionContext?: ReturnType<typeof createGenerateTypesExecutionContext>;
}

type GenerateTypesExecutionContext = ReturnType<
	typeof createGenerateTypesExecutionContext
>;

const ORCHESTRATION_STEPS: GeneratorOrchestrationStage<GenerateTypesExecutionContext>[] =
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

function getExecutionContext(
	context: GenerateTypesGeneratorContext,
): GenerateTypesExecutionContext {
	if (!context.executionContext) {
		throw new Error("Contexto de execução não inicializado");
	}

	return context.executionContext;
}

function createGeneratorTasks(): GeneratorTask<GenerateTypesGeneratorContext>[] {
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
		createOrchestrationTask({
			title: "orchestration",
			stages: ORCHESTRATION_STEPS,
			getExecutionContext,
		}),
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

export function createGenerateTypesGenerator(): RunGeneratorCliOptions<GenerateTypesGeneratorContext> {
	return createGeneratorOptions({
		name: "generate-types",
		tasks: createGeneratorTasks(),
	});
}

const generateTypes = createGenerateTypesGenerator();

async function main(): Promise<void> {
	await runGeneratorCli(generateTypes);
}

void main().catch((error) => {
	const message = error instanceof Error ? error.message : String(error);
	defaultLogger.error(message);
	process.exitCode = 1;
});
