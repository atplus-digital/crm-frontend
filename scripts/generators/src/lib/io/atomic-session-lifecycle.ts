import {
	type AtomicWriteSession,
	createAtomicWriteSession,
} from "@scripts/generators/src/lib/io/atomic-writer";
import type { Logger } from "@scripts/generators/src/lib/logging";

interface AtomicSessionState {
	atomicSessions: AtomicWriteSession[];
	outputDirs: string[];
	logger: Logger;
}

interface CreateAtomicSessionOptions {
	context: AtomicSessionState;
	labelPrefix: string;
	tempBaseDir?: string;
	backupBaseDir: string;
	validate?: boolean;
	lint?: boolean;
	enablePermanentBackup?: boolean;
}

interface CleanupAtomicSessionOptions<TContext extends AtomicSessionState> {
	context: TContext;
	shouldValidate?: boolean | ((context: TContext) => boolean);
	mode?: "wrap" | "staged";
}

function resolveShouldValidate<TContext extends AtomicSessionState>(
	options: CleanupAtomicSessionOptions<TContext>,
): boolean {
	if (typeof options.shouldValidate === "function") {
		return options.shouldValidate(options.context);
	}

	return options.shouldValidate ?? true;
}

export function backupAtomicSessions(
	options: CreateAtomicSessionOptions,
): void {
	options.context.atomicSessions = options.context.outputDirs.map(
		(outputDir) => {
			const session = createAtomicWriteSession({
				outputDir,
				label: `${options.labelPrefix} (${outputDir})`,
				tempBaseDir: options.tempBaseDir,
				backupBaseDir: options.backupBaseDir,
				permanentBackupBaseDir: options.enablePermanentBackup
					? options.backupBaseDir
					: undefined,
				validate: options.validate,
				lint: options.lint,
			});

			session.backup();
			return session;
		},
	);
}

export function restoreAtomicSessions(context: AtomicSessionState): void {
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

export async function cleanupAtomicSessions<
	TContext extends AtomicSessionState,
>(options: CleanupAtomicSessionOptions<TContext>): Promise<void> {
	const shouldValidate = resolveShouldValidate(options);
	const mode = options.mode ?? "wrap";

	for (const session of options.context.atomicSessions) {
		if (!shouldValidate) {
			session.cleanup();
			continue;
		}

		if (mode === "staged") {
			const result = await session.finalizeStagedWrite();
			if (!result.committed) {
				throw new Error(
					`Validação falhou para ${session.outputDir}. Alterações restauradas a partir do backup.`,
				);
			}
			continue;
		}

		const validated = await session.validateAndFinalize();
		if (validated) {
			continue;
		}

		throw new Error(
			`Validação falhou para ${session.outputDir}. Alterações restauradas a partir do backup.`,
		);
	}
}
