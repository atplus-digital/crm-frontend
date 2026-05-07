import { createWorkspaceLockerAdapter } from "@scripts/generators/src/lib/io/workspace-locker-adapter";
import { config } from "@scripts/generators/src/pipelines/generate-custom-requests/config";

function getOutputDirs(): string[] {
	return [config.outputDir];
}

const workspaceLocker = createWorkspaceLockerAdapter({
	getOutputDirs,
	isLockEnabled: () => config.lockWorkspaceFolder ?? false,
});

export function isWorkspaceLocked(): boolean {
	return workspaceLocker.isWorkspaceLocked();
}

export function applyWorkspaceLockIfNeeded(): void {
	workspaceLocker.applyWorkspaceLockIfNeeded();
}
