import type { ScriptConfig } from "./@types/script-config";
import {
	fetchEntriesStage,
	loadConfigStage,
	transformAndMergeStage,
	writeAnalysisReportStage,
	writeOutputStage,
} from "./pipeline/orchestration/stages";
import type {
	GenerationContext,
	GenerationStage,
} from "./pipeline/orchestration/types";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export interface GenerateCustomRequestsExecutionContext {
	overrideConfig?: Partial<ScriptConfig>;
	pipelineContext?: GenerationContext;
}

export function createGenerateCustomRequestsExecutionContext(
	overrideConfig?: Partial<ScriptConfig>,
): GenerateCustomRequestsExecutionContext {
	return { overrideConfig };
}

export function lockGenerateCustomRequestsWorkspace(): void {
	applyWorkspaceLockIfNeeded();
}

async function runOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
	stage: GenerationStage,
): Promise<void> {
	const current = (context.pipelineContext ?? {}) as GenerationContext;
	context.pipelineContext = await stage(current);
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

export async function runWriteOutputOrchestrationStage(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, writeOutputStage());
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

async function runGenerateCustomRequests(
	overrideConfig?: Partial<ScriptConfig>,
): Promise<GenerationContext> {
	const context = createGenerateCustomRequestsExecutionContext(overrideConfig);
	lockGenerateCustomRequestsWorkspace();
	await runLoadConfigOrchestrationStage(context);
	await runFetchEntriesOrchestrationStage(context);
	await runWriteAnalysisReportOrchestrationStage(context);
	await runTransformAndMergeOrchestrationStage(context);
	await runWriteOutputOrchestrationStage(context);
	return assertGenerateCustomRequestsResult(context);
}
