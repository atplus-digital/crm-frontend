import type { Logger } from "@scripts/generators/src/lib/logger";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { GenerateTypesResult, RuntimeConfig } from "../@types/script";
import { assertGenerateTypesResult } from "../runtime/assert";
import {
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
} from "../runtime/backup";
import { createGenerateTypesExecutionContext } from "../runtime/context";
import { runDatasourcesOrchestrationStage } from "./datasource-stage";
import { runPostPipelineOrchestrationStage } from "./post-pipeline-stage";
import {
	runFormatResultOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runResolveDatasourcesOrchestrationStage,
} from "./stage-runners";
import { lockGenerateTypesWorkspace } from "./workspace";

export async function runGenerateTypes(
	overrideConfig: Partial<RuntimeConfig> | undefined,
	injectedLogger: Logger,
): Promise<GenerateTypesResult> {
	resetTypeScriptValidationCache();
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
