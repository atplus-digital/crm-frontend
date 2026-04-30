import { createWorkspaceLockerAdapter } from "@scripts/generators/src/lib/workspace-locker-adapter";
import { config } from "@scripts/generators/src/pipelines/generate-custom-requests/config";

const workspaceLocker = createWorkspaceLockerAdapter({
	getOutputDirs: () => [config.outputDir],
	isLockEnabled: () => config.lockWorkspaceFolder ?? false,
});

export function applyWorkspaceLockIfNeeded(): void {
	workspaceLocker.applyWorkspaceLockIfNeeded();
}
