import {
	applyWorkspaceLockIfNeeded as _applyWorkspaceLockIfNeeded,
	isWorkspaceLocked as _isWorkspaceLocked,
} from "@scripts/generators/src/lib/workspace-locker";

export function createWorkspaceLockerAdapter(options: {
	getOutputDirs: () => string[];
	isLockEnabled: () => boolean;
}) {
	return {
		isWorkspaceLocked(): boolean {
			return _isWorkspaceLocked(options.getOutputDirs());
		},
		applyWorkspaceLockIfNeeded(): void {
			_applyWorkspaceLockIfNeeded(
				options.getOutputDirs(),
				options.isLockEnabled(),
			);
		},
	};
}
