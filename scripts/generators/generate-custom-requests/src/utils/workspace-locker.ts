import { config } from "@scripts/generators/generate-custom-requests/config";
import {
	applyWorkspaceLockIfNeeded as _applyWorkspaceLockIfNeeded,
	isWorkspaceLocked as _isWorkspaceLocked,
} from "@scripts/generators/shared/lib/workspace-locker";

const outputDirs = [config.outputDir];
const lockWorkspaceFolder = config.lockWorkspaceFolder ?? false;

export function isWorkspaceLocked(): boolean {
	return _isWorkspaceLocked(outputDirs);
}

export function applyWorkspaceLockIfNeeded(): void {
	_applyWorkspaceLockIfNeeded(outputDirs, lockWorkspaceFolder);
}
