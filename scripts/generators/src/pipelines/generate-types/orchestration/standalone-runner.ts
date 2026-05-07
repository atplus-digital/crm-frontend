import type { Logger } from "@scripts/generators/src/lib/logging";
import { runStandardStandalonePipeline } from "@scripts/generators/src/lib/pipeline-lifecycle";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { GenerateTypesResult, RuntimeConfig } from "../@types/script";
import { ORCHESTRATION_STEPS } from "../generator/tasks";
import { assertGenerateTypesResult } from "../runtime/assert";
import {
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
} from "../runtime/backup";
import { createGenerateTypesExecutionContext } from "../runtime/context";
import { applyWorkspaceLockIfNeeded as lockGenerateTypesWorkspace } from "../utils/workspace-locker";

export async function runGenerateTypes(
	overrideConfig: Partial<RuntimeConfig> | undefined,
	injectedLogger: Logger,
): Promise<GenerateTypesResult> {
	return runStandardStandalonePipeline({
		overrideConfig,
		logger: injectedLogger,
		onBeforeRun: resetTypeScriptValidationCache,
		createExecutionContext: createGenerateTypesExecutionContext,
		lockWorkspace: lockGenerateTypesWorkspace,
		backupOutputs: backupGenerateTypesOutputs,
		orchestrationStages: ORCHESTRATION_STEPS,
		assertResult: assertGenerateTypesResult,
		cleanupBackups: cleanupGenerateTypesBackups,
	});
}
