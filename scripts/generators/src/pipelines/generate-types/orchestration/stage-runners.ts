import {
	formatResultStage,
	loadConfigStage,
	resolveDatasourcesStage,
} from "../pipeline/orchestration/stages";
import type { GenerateTypesExecutionContext } from "../runtime/context";
import { runOrchestrationStage } from "./stage-executor";

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

export async function runFormatResultOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runOrchestrationStage(context, formatResultStage());
}
