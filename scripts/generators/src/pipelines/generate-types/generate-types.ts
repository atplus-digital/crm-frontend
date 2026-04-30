import {
	createLoggedSubtask,
	getSubtaskOptions,
	type OrchestrationListrTask,
	type OrchestrationTaskRunner,
} from "@scripts/generators/src/lib/generator-cli";
import { runLinterFix } from "@scripts/generators/src/lib/linter-runner";
import type { Logger } from "@scripts/generators/src/lib/logger";
import { runExecutionStage } from "@scripts/generators/src/lib/pipeline-runner";
import { validateTypeScriptDirectory } from "@scripts/generators/src/lib/tsc-validator";
import type { GenerateTypesResult, RuntimeConfig } from "./@types/script";
import { assertGenerateTypesResult } from "./assert";
import {
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
	restoreAllSessions,
} from "./backup";
import type { GenerateTypesExecutionContext } from "./context";
import {
	createGenerateTypesExecutionContext,
	getPipelineContext,
} from "./context";
import {
	createFulfilledDatasourceResult,
	createRejectedDatasourceResult,
	formatResultStage,
	loadConfigStage,
	resolveDatasourcesStage,
	resolvePostPipelineInputs,
	runDatasourcesStage,
	runPostPipelineStage,
	runSingleDatasource,
} from "./pipeline/orchestration/stages";
import type {
	DatasourceRunResult,
	GenerationContext,
} from "./pipeline/orchestration/types";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export { normalizeCollectionNames } from "./utils/naming";

// ── Orchestration bridge ──

async function runOrchestrationStage(
	context: GenerateTypesExecutionContext,
	stage: (ctx: Readonly<GenerationContext>) => Promise<GenerationContext>,
): Promise<void> {
	await runExecutionStage({
		runtimeContext: context,
		stage,
		createInitialContext: (logger) =>
			({
				logger,
			}) as GenerationContext,
		onError: () => {
			restoreAllSessions(context);
		},
	});
}

// ── Stage runners ──

export async function runLoadConfigOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runOrchestrationStage(
		context,
		loadConfigStage({ overrideConfig: context.overrideConfig }),
	);
}

export async function runResolveDatasourcesOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, resolveDatasourcesStage());
}

export function runDatasourcesOrchestrationStage(
	context: GenerateTypesExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runOrchestrationStage(context, runDatasourcesStage());
	}

	const pipelineContext = getPipelineContext(context);
	const datasourceResults: DatasourceRunResult[] = new Array(
		pipelineContext.dataSourceConfigs.length,
	);

	const datasourceTasks: OrchestrationListrTask[] =
		pipelineContext.dataSourceConfigs.map((dataSource, index) =>
			createLoggedSubtask({
				title: dataSource.name,
				logger: pipelineContext.logger,
				run: async () => {
					try {
						const result = await runSingleDatasource(
							pipelineContext.logger,
							pipelineContext.config,
							dataSource,
						);
						datasourceResults[index] = createFulfilledDatasourceResult(
							dataSource.name,
							result,
						);
					} catch (error) {
						datasourceResults[index] = createRejectedDatasourceResult(
							pipelineContext.logger,
							dataSource.name,
							error,
						);
					}
				},
			}),
		);

	context.pipelineContext = {
		...pipelineContext,
		datasourceResults,
	};

	return task.newListr(datasourceTasks, {
		...getSubtaskOptions("parallel"),
		exitOnError: false,
	});
}

// ── Post-pipeline task ──

function runPostPipelineTask(
	outputDirs: string[],
	writeFilesCount: number,
	task: OrchestrationTaskRunner,
	logger: Logger,
) {
	logger.info("Iniciando pós-processamento...", {
		stage: "run-post-pipeline",
		outputDirs: String(outputDirs.length),
		writeFiles: String(writeFilesCount),
	});

	return task.newListr(
		[
			createLoggedSubtask({
				title: "validate-typescript",
				logger,
				run: async () => {
					await Promise.all(
						outputDirs.map((outputDir) =>
							validateTypeScriptDirectory(outputDir),
						),
					);
				},
			}),
			createLoggedSubtask({
				title: "run-linter-fix",
				logger,
				run: async () => {
					await runLinterFix(outputDirs, logger);
				},
			}),
		],
		{
			...getSubtaskOptions("parallel"),
		},
	);
}

export function runPostPipelineOrchestrationStage(
	context: GenerateTypesExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runOrchestrationStage(context, runPostPipelineStage());
	}

	const pipelineContext = getPipelineContext(context);
	const postPipelineInputs = resolvePostPipelineInputs(pipelineContext);

	if (!postPipelineInputs.hasSuccessfulResults) {
		context.pipelineContext = {
			...pipelineContext,
			postPipelineCompleted: false,
		};
		return;
	}

	const nextPipelineContext = {
		...pipelineContext,
		postPipelineCompleted: true,
	};
	context.pipelineContext = nextPipelineContext;

	if (postPipelineInputs.writeFiles.length > 0) {
		return runPostPipelineTask(
			postPipelineInputs.outputDirs,
			postPipelineInputs.writeFiles.length,
			task,
			pipelineContext.logger,
		);
	}
}

// ── Format result ──

export async function runFormatResultOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, formatResultStage());
}

// ── Workspace lock ──

export function lockGenerateTypesWorkspace(): void {
	applyWorkspaceLockIfNeeded();
}

// ── Standalone runner ──

export async function runGenerateTypes(
	overrideConfig: Partial<RuntimeConfig> | undefined,
	injectedLogger: Logger,
): Promise<GenerateTypesResult> {
	const context = createGenerateTypesExecutionContext(
		overrideConfig,
		injectedLogger,
	);
	lockGenerateTypesWorkspace();
	backupGenerateTypesOutputs(context);
	await runLoadConfigOrchestrationStage(context);
	await runResolveDatasourcesOrchestrationStage(context);
	await runDatasourcesOrchestrationStage(context);
	await runPostPipelineOrchestrationStage(context);
	await runFormatResultOrchestrationStage(context);
	const result = assertGenerateTypesResult(context);
	cleanupGenerateTypesBackups(context);
	return result;
}
