import { createAtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import type { GenerateCustomRequestsExecutionContext } from "../context";

const CUSTOM_REQUESTS_BACKUP_BASE_DIR =
	"scripts/generators/.backup/generate-custom-requests";

export function backupGenerateCustomRequestsOutputs(
	context: GenerateCustomRequestsExecutionContext,
): void {
	context.atomicSessions = context.outputDirs.map((outputDir) => {
		const session = createAtomicWriteSession({
			outputDir,
			label: `generate-custom-requests (${outputDir})`,
			backupBaseDir: CUSTOM_REQUESTS_BACKUP_BASE_DIR,
			permanentBackupBaseDir: CUSTOM_REQUESTS_BACKUP_BASE_DIR,
		});
		session.backup();
		return session;
	});
}

export function restoreAllSessions(
	context: GenerateCustomRequestsExecutionContext,
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

export async function cleanupGenerateCustomRequestsBackups(
	context: GenerateCustomRequestsExecutionContext,
): Promise<void> {
	const shouldValidate = Boolean(
		context.pipelineContext?.mergedEntries?.length,
	);

	for (const session of context.atomicSessions) {
		if (!shouldValidate) {
			session.cleanup();
			continue;
		}

		const validated = await session.validateAndFinalize();
		if (!validated) {
			throw new Error(
				`Validação falhou para ${session.outputDir}. Alterações restauradas a partir do backup.`,
			);
		}
		session.cleanup();
	}
}
