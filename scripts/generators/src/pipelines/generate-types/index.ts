import "./config";
import {
	createOrchestrationTasks,
	type GeneratorCliTask,
	type GeneratorExecutionHooks,
	type GeneratorOrchestrationStep,
	type RunGeneratorCliOptions,
	runGeneratorCli,
} from "@scripts/generators/run-generator";
import type { RuntimeConfig } from "./@types/script";
import {
	assertGenerateTypesResult,
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
	createGenerateTypesExecutionContext,
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

const ORCHESTRATION_STEPS: GeneratorOrchestrationStep<GenerateTypesExecutionContext>[] =
	[
		{
			name: "load-config",
			run: runLoadConfigOrchestrationStage,
		},
		{
			name: "resolve-datasources",
			run: runResolveDatasourcesOrchestrationStage,
		},
		{
			name: "run-datasources",
			run: runDatasourcesOrchestrationStage,
		},
		{
			name: "run-post-pipeline",
			run: runPostPipelineOrchestrationStage,
		},
		{
			name: "format-result",
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

function createGeneratorTasks(): GeneratorCliTask<GenerateTypesGeneratorContext>[] {
	return [
		{
			name: "prepare-context",
			run: (context) => {
				context.executionContext = createGenerateTypesExecutionContext(
					context.overrideConfig,
					context.logger,
				);
			},
		},
		{
			name: "lock-workspace",
			run: () => {
				lockGenerateTypesWorkspace();
			},
		},
		{
			name: "backup-outputs",
			run: (context) => {
				backupGenerateTypesOutputs(getExecutionContext(context));
			},
		},
		...createOrchestrationTasks({
			stages: ORCHESTRATION_STEPS,
			getExecutionContext,
		}),
		{
			name: "assert-result",
			run: (context) => {
				assertGenerateTypesResult(getExecutionContext(context));
			},
		},
		{
			name: "cleanup-backups",
			run: (context) => {
				cleanupGenerateTypesBackups(getExecutionContext(context));
			},
		},
	];
}

export function createGenerateTypesGenerator(
	hooks?: GeneratorExecutionHooks,
): RunGeneratorCliOptions<GenerateTypesGeneratorContext> {
	return {
		name: "generate-types",
		context: {},
		tasks: createGeneratorTasks(),
		hooks,
	};
}

const generateTypes = createGenerateTypesGenerator();

void runGeneratorCli(generateTypes);
