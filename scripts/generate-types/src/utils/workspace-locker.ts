import { config } from "@scripts/generate-types/config";
import {
	applyWorkspaceLockIfNeeded as _applyWorkspaceLockIfNeeded,
	isWorkspaceLocked as _isWorkspaceLocked,
} from "@scripts/shared/lib/workspace-locker";

function getOutputDirs(): string[] {
	return [
		config.outputDir,
		...(config.datasources ?? [])
			.map((d) => d.outputDir)
			.filter((outputDir): outputDir is string => Boolean(outputDir?.trim())),
	];
}

/**
 * Verifica se o workspace está configurado para bloquear a edição dos arquivos gerados
 * @returns Verdadeiro se os arquivos gerados estiverem protegidos contra escrita
 */
export function isWorkspaceLocked(): boolean {
	return _isWorkspaceLocked(getOutputDirs());
}

/**
 * Aplica o bloqueio de workspace se a configuração estiver ativada
 */
export function applyWorkspaceLockIfNeeded(): void {
	_applyWorkspaceLockIfNeeded(
		getOutputDirs(),
		config.lockWorkspaceFolder ?? false,
	);
}
