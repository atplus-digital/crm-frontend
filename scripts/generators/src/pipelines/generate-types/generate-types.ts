import type { AtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import { createAtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import type { OrchestrationTaskRunner } from "@scripts/generators/src/lib/generator-cli";
import { runLinterFix } from "@scripts/generators/src/lib/linter-runner";
import type { Logger } from "@scripts/generators/src/lib/logger";
import { validateTypeScriptDirectory } from "@scripts/generators/src/lib/tsc-validator";
import { config } from "@scripts/generators/src/pipelines/generate-types/config";
import type { ListrTask } from "listr2";
import type { GenerateTypesResult, RuntimeConfig } from "./@types/script";
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

function getOutputDirs(runtimeConfig: RuntimeConfig): string[] {
	return [
		runtimeConfig.outputDir,
		...(runtimeConfig.datasources ?? [])
			.map((d) => d.outputDir)
			.filter((dir): dir is string => Boolean(dir?.trim())),
	];
}

export interface GenerateTypesExecutionContext {
	logger: Logger;
	overrideConfig?: Partial<RuntimeConfig>;
	runtimeConfig: RuntimeConfig;
	outputDirs: string[];
	atomicSessions: AtomicWriteSession[];
	pipelineContext?: GenerationContext;
	finalResult?: GenerateTypesResult;
}

export function createGenerateTypesExecutionContext(
	overrideConfig: Partial<RuntimeConfig> | undefined,
	injectedLogger: Logger,
): GenerateTypesExecutionContext {
	const runtimeConfig: RuntimeConfig = overrideConfig
		? { ...config, ...overrideConfig }
		: config;
	return {
		logger: injectedLogger,
		overrideConfig,
		runtimeConfig,
		outputDirs: getOutputDirs(runtimeConfig),
		atomicSessions: [],
	};
}

export function lockGenerateTypesWorkspace(): void {
	applyWorkspaceLockIfNeeded();
}

export function backupGenerateTypesOutputs(
	context: GenerateTypesExecutionContext,
): void {
	context.atomicSessions = context.outputDirs.map((outputDir) => {
		const session = createAtomicWriteSession({
			outputDir,
			label: `generate-types (${outputDir})`,
			validate: false, // pipeline already runs tsc + lint in runPostPipeline
			lint: false,
		});
		session.backup();
		return session;
	});
}

function restoreAllSessions(context: GenerateTypesExecutionContext): void {
	for (const session of context.atomicSessions) {
		try {
			session.restore();
		} catch (restoreError) {
			context.logger.warn(
				`Failed to restore backup for ${session.outputDir}: ${restoreError}`,
			);
		}
	}
}

function getPipelineContext(
	context: GenerateTypesExecutionContext,
): GenerationContext {
	if (!context.pipelineContext) {
		throw new Error("Pipeline de geração não foi inicializado");
	}
	return context.pipelineContext;
}

async function runOrchestrationStage(
	context: GenerateTypesExecutionContext,
	stage: (ctx: Readonly<GenerationContext>) => Promise<GenerationContext>,
): Promise<void> {
	try {
		const current = (context.pipelineContext ?? {
			logger: context.logger,
		}) as GenerationContext;
		context.pipelineContext = await stage(current);
	} catch (error) {
		restoreAllSessions(context);
		throw error;
	}
}

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

export async function runDatasourcesOrchestrationStage(
	context: GenerateTypesExecutionContext,
	task?: OrchestrationTaskRunner,
): Promise<void> {
	if (!task) {
		await runOrchestrationStage(context, runDatasourcesStage());
		return;
	}

	const pipelineContext = getPipelineContext(context);
	const datasourceResults: DatasourceRunResult[] = new Array(
		pipelineContext.dataSourceConfigs.length,
	);

	const datasourceTasks: ListrTask[] = pipelineContext.dataSourceConfigs.map(
		(dataSource, index) => ({
			title: dataSource.name,
			task: async () => {
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

	try {
		await task
			.newListr(datasourceTasks, {
				concurrent: true,
				exitOnError: false,
				rendererOptions: {
					collapseSubtasks: true,
				},
			})
			.run();
		context.pipelineContext = {
			...pipelineContext,
			datasourceResults,
		};
	} catch (error) {
		restoreAllSessions(context);
		throw error;
	}
}

async function runPostPipelineTask(
	outputDirs: string[],
	writeFilesCount: number,
	task: OrchestrationTaskRunner,
	logger: Logger,
): Promise<void> {
	logger.info("Iniciando pós-processamento...", {
		stage: "run-post-pipeline",
		outputDirs: String(outputDirs.length),
		writeFiles: String(writeFilesCount),
	});

	await task
		.newListr(
			[
				{
					title: "validate-typescript",
					task: async () => {
						await Promise.all(
							outputDirs.map((outputDir) =>
								validateTypeScriptDirectory(outputDir),
							),
						);
					},
				},
				{
					title: "run-linter-fix",
					task: async () => {
						await runLinterFix(outputDirs);
					},
				},
			],
			{
				concurrent: true,
				rendererOptions: {
					collapseSubtasks: true,
				},
			},
		)
		.run();
}

export async function runPostPipelineOrchestrationStage(
	context: GenerateTypesExecutionContext,
	task?: OrchestrationTaskRunner,
): Promise<void> {
	if (!task) {
		await runOrchestrationStage(context, runPostPipelineStage());
		return;
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

	if (postPipelineInputs.writeFiles.length > 0) {
		try {
			await runPostPipelineTask(
				postPipelineInputs.outputDirs,
				postPipelineInputs.writeFiles.length,
				task,
				pipelineContext.logger,
			);
		} catch (error) {
			restoreAllSessions(context);
			throw error;
		}
	}

	context.pipelineContext = {
		...pipelineContext,
		postPipelineCompleted: true,
	};
}

export async function runFormatResultOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, formatResultStage());
}

export function assertGenerateTypesResult(
	context: GenerateTypesExecutionContext,
): GenerateTypesResult {
	const pipelineContext = context.pipelineContext;

	if (!pipelineContext) {
		restoreAllSessions(context);
		throw new Error("Pipeline de geração não foi executado");
	}

	if (
		!pipelineContext.dataSourceConfigs ||
		pipelineContext.dataSourceConfigs.length === 0
	) {
		restoreAllSessions(context);
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	const successfulCount = pipelineContext.datasourceResults?.filter(
		(r) => r.status === "fulfilled",
	).length;

	if (!successfulCount || successfulCount === 0) {
		restoreAllSessions(context);
		const failedNames =
			pipelineContext.datasourceResults
				?.filter((r) => r.status === "rejected")
				.map((r) => r.name)
				.join(", ") ?? "unknown";
		throw new Error(`Todos os datasources falharam: ${failedNames}`);
	}

	if (!pipelineContext.finalResult) {
		restoreAllSessions(context);
		throw new Error("Pipeline não produziu resultado final");
	}

	context.finalResult = pipelineContext.finalResult;
	return pipelineContext.finalResult;
}

export function cleanupGenerateTypesBackups(
	context: GenerateTypesExecutionContext,
): void {
	for (const session of context.atomicSessions) {
		session.cleanup();
	}
}

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
