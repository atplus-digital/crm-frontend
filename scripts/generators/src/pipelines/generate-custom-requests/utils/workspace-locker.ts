import { config } from "@scripts/generators/src/pipelines/generate-custom-requests/config";
import { createWorkspaceLockerAdapter } from "@scripts/generators/src/utils/workspace-locker-adapter";

const workspaceLocker = createWorkspaceLockerAdapter({
	getOutputDirs: () => [config.outputDir],
	isLockEnabled: () => config.lockWorkspaceFolder ?? false,
});

function isWorkspaceLocked(): boolean {
	return workspaceLocker.isWorkspaceLocked();
}

export function applyWorkspaceLockIfNeeded(): void {
	workspaceLocker.applyWorkspaceLockIfNeeded();
}
