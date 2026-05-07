import {
	backupAtomicSessions,
	cleanupAtomicSessions,
	restoreAtomicSessions,
} from "@scripts/generators/src/lib/io/atomic-session-lifecycle";
import type { GenerateTypesExecutionContext } from "./context";

const GENERATE_TYPES_BACKUP_BASE_DIR =
	"scripts/generators/.backup/generate-types";

export function backupGenerateTypesOutputs(
	context: GenerateTypesExecutionContext,
): void {
	backupAtomicSessions({
		context,
		labelPrefix: "generate-types",
		backupBaseDir: GENERATE_TYPES_BACKUP_BASE_DIR,
		validate: false,
		lint: false,
	});
}

export function restoreAllSessions(
	context: GenerateTypesExecutionContext,
): void {
	restoreAtomicSessions(context);
}

export async function cleanupGenerateTypesBackups(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await cleanupAtomicSessions({
		context,
	});
}
