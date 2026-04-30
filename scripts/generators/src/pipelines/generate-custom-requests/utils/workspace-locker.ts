import {
	applyWorkspaceLockIfNeeded as _applyWorkspaceLockIfNeeded,
	isWorkspaceLocked as _isWorkspaceLocked,
} from "@scripts/generators/src/lib/workspace-locker";
import { config } from "@scripts/generators/src/pipelines/generate-custom-requests/config";

const outputDirs = [config.outputDir];
const lockWorkspaceFolder = config.lockWorkspaceFolder ?? false;

export function isWorkspaceLocked(): boolean {
	return _isWorkspaceLocked(outputDirs);
}

export function applyWorkspaceLockIfNeeded(): void {
	_applyWorkspaceLockIfNeeded(outputDirs, lockWorkspaceFolder);
}
