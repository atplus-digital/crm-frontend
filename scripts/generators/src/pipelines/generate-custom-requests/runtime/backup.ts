import {
	backupAtomicSessions,
	cleanupAtomicSessions,
	restoreAtomicSessions,
} from "@scripts/generators/src/lib/io/atomic-session-lifecycle";
import {
	alwaysValidatePolicy,
	evaluateValidationPolicy,
} from "@scripts/generators/src/lib/pipeline-policy";
import type { GenerateCustomRequestsExecutionContext } from "./context";

const CUSTOM_REQUESTS_BACKUP_BASE_DIR =
	"scripts/generators/.backup/generate-custom-requests";
const GENERATORS_TEMP_BASE_DIR = "scripts/generators/.temp";

export function backupGenerateCustomRequestsOutputs(
	context: GenerateCustomRequestsExecutionContext,
): void {
	backupAtomicSessions({
		context,
		labelPrefix: "generate-custom-requests",
		tempBaseDir: GENERATORS_TEMP_BASE_DIR,
		backupBaseDir: CUSTOM_REQUESTS_BACKUP_BASE_DIR,
		validate: true,
		lint: true,
	});

	const session = context.atomicSessions[0];
	if (!session) {
		return;
	}

	context.overrideConfig = {
		...context.runtimeConfig,
		...context.overrideConfig,
		outputDir: session.tempDir,
	};
}

export function restoreAllSessions(
	context: GenerateCustomRequestsExecutionContext,
): void {
	restoreAtomicSessions(context);
}

export async function cleanupGenerateCustomRequestsBackups(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	await cleanupAtomicSessions({
		context,
		shouldValidate: evaluateValidationPolicy(context, alwaysValidatePolicy),
		mode: "staged",
	});
}
