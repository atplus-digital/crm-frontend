import { createWorkspaceLockerAdapter } from "@scripts/generators/src/lib/io/workspace-locker-adapter";
import { config } from "@scripts/generators/src/pipelines/generate-types/config";

function getOutputDirs(): string[] {
	return [
		config.outputDir,
		...(config.datasources ?? [])
			.map((d) => d.outputDir)
			.filter((outputDir): outputDir is string => Boolean(outputDir?.trim())),
	];
}

const workspaceLocker = createWorkspaceLockerAdapter({
	getOutputDirs,
	isLockEnabled: () => config.lockWorkspaceFolder ?? false,
});

/**
 * Verifica se o workspace está configurado para bloquear a edição dos arquivos gerados
 * @returns Verdadeiro se os arquivos gerados estiverem protegidos contra escrita
 */
export function isWorkspaceLocked(): boolean {
	return workspaceLocker.isWorkspaceLocked();
}

/**
 * Aplica o bloqueio de workspace se a configuração estiver ativada
 */
export function applyWorkspaceLockIfNeeded(): void {
	workspaceLocker.applyWorkspaceLockIfNeeded();
}
