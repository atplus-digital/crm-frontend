import type { AtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import {
	createLoggedSubtask,
	getSubtaskOptions,
	type OrchestrationTaskRunner,
} from "@scripts/generators/src/lib/generator-cli";
import { type Logger, logger } from "@scripts/generators/src/lib/logger";
import { runExecutionStage } from "@scripts/generators/src/lib/pipeline-runner";
import type { ScriptConfig } from "./@types/script-config";
import type {
	GenerationContext,
	GenerationStage,
} from "./pipeline/orchestration/types";
import {
	fetchEntriesStage,
	loadConfigStage,
	transformAndMergeStage,
	writeAnalysisReportStage,
} from "./pipeline/stages";
import {
	createWriteOutputSession,
	finalizeWriteOutput,
	hasEntriesToWrite,
	writeGeneratedRegistryOutput,
	writeOutputStage,
	writeSplitFilesOutput,
} from "./pipeline/stages/write-output";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export interface GenerateCustomRequestsExecutionContext {
	logger: Logger;
	overrideConfig?: Partial<ScriptConfig>;
	pipelineContext?: GenerationContext;
}

export function createGenerateCustomRequestsExecutionContext(
	overrideConfig?: Partial<ScriptConfig>,
	injectedLogger: Logger = logger,
): GenerateCustomRequestsExecutionContext {
	return { logger: injectedLogger, overrideConfig };
}

export function lockGenerateCustomRequestsWorkspace(): void {
	applyWorkspaceLockIfNeeded();
}

async function runOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
	stage: GenerationStage,
): Promise<void> {
	await runExecutionStage({
		runtimeContext: context,
		stage,
		createInitialContext: (injectedLogger) =>
			({
				logger: injectedLogger,
			}) as GenerationContext,
	});
}

export async function runLoadConfigOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(
		context,
		loadConfigStage({ overrideConfig: context.overrideConfig }),
	);
}

export async function runFetchEntriesOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, fetchEntriesStage());
}

export async function runWriteAnalysisReportOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, writeAnalysisReportStage());
}

export async function runTransformAndMergeOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, transformAndMergeStage());
}

export function runWriteOutputOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
	task?: OrchestrationTaskRunner,
) {
	if (!task) {
		return runOrchestrationStage(context, writeOutputStage());
	}

	const pipelineContext = context.pipelineContext;
	if (!pipelineContext) {
		throw new Error("Pipeline de geração não foi executado");
	}

	if (!hasEntriesToWrite(pipelineContext)) {
		pipelineContext.logger.warn(
			"Nenhuma entrada válida para escrever. Pulando escrita.",
		);
		return;
	}

	let atomicSession: AtomicWriteSession | undefined;
	const rollbackAtomicSession = async (): Promise<void> => {
		if (!atomicSession) {
			return;
		}

		atomicSession.restore();
		atomicSession.cleanup();
		atomicSession = undefined;
	};

	return task.newListr(
		[
			createLoggedSubtask({
				title: "backup-output",
				logger: pipelineContext.logger,
				run: async () => {
					atomicSession = createWriteOutputSession(pipelineContext);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "write-generated-registry",
				logger: pipelineContext.logger,
				run: async () => {
					await writeGeneratedRegistryOutput(pipelineContext);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "write-split-files",
				logger: pipelineContext.logger,
				run: async () => {
					writeSplitFilesOutput(pipelineContext);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "validate-output",
				logger: pipelineContext.logger,
				run: async () => {
					if (!atomicSession) {
						throw new Error("Sessão atômica não inicializada para validação");
					}
					await finalizeWriteOutput(atomicSession);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "cleanup-output",
				logger: pipelineContext.logger,
				run: () => {
					atomicSession?.cleanup();
					atomicSession = undefined;
				},
			}),
		],
		{
			...getSubtaskOptions("nested"),
		},
	);
}

export function assertGenerateCustomRequestsResult(
	context: GenerateCustomRequestsExecutionContext,
): GenerationContext {
	if (!context.pipelineContext) {
		throw new Error("Pipeline de geração não foi executado");
	}

	if (!context.pipelineContext.config) {
		throw new Error("Configuração de runtime não foi carregada");
	}

	if (!context.pipelineContext.mergedEntries) {
		throw new Error("Pipeline não produziu entradas finais");
	}

	return context.pipelineContext;
}
