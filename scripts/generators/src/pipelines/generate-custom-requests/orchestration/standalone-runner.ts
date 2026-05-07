import type { Logger } from "@scripts/generators/src/lib/logging";
import { runStandardStandalonePipeline } from "@scripts/generators/src/lib/pipeline-lifecycle";
import { resetTypeScriptValidationCache } from "@scripts/generators/src/lib/validation/tsc-validator";
import type { ScriptConfig } from "../@types/script-config";
import { ORCHESTRATION_STEPS } from "../generator/tasks";
import { assertGenerateCustomRequestsResult } from "../runtime/assert";
import {
	backupGenerateCustomRequestsOutputs,
	cleanupGenerateCustomRequestsBackups,
} from "../runtime/backup";
import { createGenerateCustomRequestsExecutionContext } from "../runtime/context";
import { applyWorkspaceLockIfNeeded as lockGenerateCustomRequestsWorkspace } from "../utils/workspace-locker";

export async function runGenerateCustomRequests(
	overrideConfig: Partial<ScriptConfig> | undefined,
	injectedLogger: Logger,
) {
	return runStandardStandalonePipeline({
		overrideConfig,
		logger: injectedLogger,
		onBeforeRun: resetTypeScriptValidationCache,
		createExecutionContext: createGenerateCustomRequestsExecutionContext,
		lockWorkspace: lockGenerateCustomRequestsWorkspace,
		backupOutputs: backupGenerateCustomRequestsOutputs,
		orchestrationStages: ORCHESTRATION_STEPS,
		assertResult: assertGenerateCustomRequestsResult,
		cleanupBackups: cleanupGenerateCustomRequestsBackups,
	});
}
