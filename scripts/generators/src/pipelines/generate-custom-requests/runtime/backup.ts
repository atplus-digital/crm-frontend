import {
	backupAtomicSessions,
	cleanupAtomicSessions,
	restoreAtomicSessions,
} from "@scripts/generators/src/lib/io/atomic-session-lifecycle";
import {
	evaluateValidationPolicy,
	type ValidationPolicy,
} from "@scripts/generators/src/lib/pipeline-policy";
import type { GenerateCustomRequestsExecutionContext } from "./context";

const CUSTOM_REQUESTS_BACKUP_BASE_DIR =
	"scripts/generators/.backup/generate-custom-requests";
const shouldValidateGeneratedOutputs: ValidationPolicy<
	GenerateCustomRequestsExecutionContext
> = (context) => Boolean(context.pipelineContext?.mergedEntries?.length);

export function backupGenerateCustomRequestsOutputs(
	context: GenerateCustomRequestsExecutionContext,
): void {
	backupAtomicSessions({
		context,
		labelPrefix: "generate-custom-requests",
		backupBaseDir: CUSTOM_REQUESTS_BACKUP_BASE_DIR,
	});
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
		shouldValidate: evaluateValidationPolicy(
			context,
			shouldValidateGeneratedOutputs,
		),
	});
}
