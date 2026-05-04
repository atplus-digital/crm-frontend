import { createAtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import type { GenerateTypesExecutionContext } from "./context";

export function backupGenerateTypesOutputs(
	context: GenerateTypesExecutionContext,
): void {
	context.atomicSessions = context.outputDirs.map((outputDir) => {
		const session = createAtomicWriteSession({
			outputDir,
			label: `generate-types (${outputDir})`,
			validate: false,
			lint: false,
			backupBaseDir: "scripts/.cache",
		});
		session.backup();
		return session;
	});
}

export function restoreAllSessions(
	context: GenerateTypesExecutionContext,
): void {
	for (const session of context.atomicSessions) {
		try {
			session.restore();
		} catch (restoreError) {
			context.logger.warn(
				`Failed to restore backup for ${session.outputDir}: ${restoreError}`,
			);
		}
	}
}

export function cleanupGenerateTypesBackups(
	context: GenerateTypesExecutionContext,
): void {
	for (const session of context.atomicSessions) {
		session.cleanup();
	}
}
