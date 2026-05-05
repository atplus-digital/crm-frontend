import {
	formatResultStage,
	loadConfigStage,
	resolveDatasourcesStage,
} from "../pipeline/orchestration/stages";
import type { GenerateTypesExecutionContext } from "../runtime/context";
import { runStage } from "./run-stage";

export async function runLoadConfigOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runStage(
		context,
		loadConfigStage({ overrideConfig: context.overrideConfig }),
	);
}

export async function runResolveDatasourcesOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runStage(context, resolveDatasourcesStage());
}

export async function runFormatResultOrchestrationStage(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await runStage(context, formatResultStage());
}
