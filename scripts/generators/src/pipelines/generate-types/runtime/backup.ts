import {
	backupAtomicSessions,
	cleanupAtomicSessions,
	restoreAtomicSessions,
} from "@scripts/generators/src/lib/io/atomic-session-lifecycle";
import {
	alwaysValidatePolicy,
	evaluateValidationPolicy,
} from "@scripts/generators/src/lib/pipeline-policy";
import type { GenerateTypesExecutionContext } from "./context";

const GENERATE_TYPES_BACKUP_BASE_DIR =
	"scripts/generators/.backup/generate-types";
const GENERATORS_TEMP_BASE_DIR = "scripts/generators/.temp";

export function backupGenerateTypesOutputs(
	context: GenerateTypesExecutionContext,
): void {
	backupAtomicSessions({
		context,
		labelPrefix: "generate-types",
		tempBaseDir: GENERATORS_TEMP_BASE_DIR,
		backupBaseDir: GENERATE_TYPES_BACKUP_BASE_DIR,
		validate: false,
		lint: false,
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
	context: GenerateTypesExecutionContext,
): void {
	restoreAtomicSessions(context);
}

export async function cleanupGenerateTypesBackups(
	context: GenerateTypesExecutionContext,
): Promise<void> {
	await cleanupAtomicSessions({
		context,
		shouldValidate: evaluateValidationPolicy(context, alwaysValidatePolicy),
		mode: "staged",
	});
}
