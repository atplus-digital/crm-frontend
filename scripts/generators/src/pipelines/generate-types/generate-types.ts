import type { AtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import { createAtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import { logger } from "@scripts/generators/src/lib/logger";
import { config } from "@scripts/generators/src/pipelines/generate-types/config";
import type { GenerateTypesResult, RuntimeConfig } from "./@types/script";
import {
	formatResultStage,
	loadConfigStage,
	resolveDatasourcesStage,
	runDatasourcesStage,
	runPostPipelineStage,
} from "./pipeline/orchestration/stages";
import type { GenerationContext } from "./pipeline/orchestration/types";
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
	overrideConfig?: Partial<RuntimeConfig>;
	runtimeConfig: RuntimeConfig;
	outputDirs: string[];
	atomicSessions: AtomicWriteSession[];
	pipelineContext?: GenerationContext;
	finalResult?: GenerateTypesResult;
}

export function createGenerateTypesExecutionContext(
	overrideConfig?: Partial<RuntimeConfig>,
): GenerateTypesExecutionContext {
	const runtimeConfig: RuntimeConfig = overrideConfig
		? { ...config, ...overrideConfig }
		: config;
	return {
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
			logger.warn(
				`Failed to restore backup for ${session.outputDir}: ${restoreError}`,
			);
		}
	}
}

async function runOrchestrationStage(
	context: GenerateTypesExecutionContext,
	stage: (ctx: Readonly<GenerationContext>) => Promise<GenerationContext>,
): Promise<void> {
	try {
		const current = (context.pipelineContext ?? {}) as GenerationContext;
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
): Promise<void> {
	await runOrchestrationStage(context, runDatasourcesStage());
}

export async function runPostPipelineOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, runPostPipelineStage());
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
	overrideConfig?: Partial<RuntimeConfig>,
): Promise<GenerateTypesResult> {
	const context = createGenerateTypesExecutionContext(overrideConfig);
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
