import { applyWorkspaceLockIfNeeded } from "../utils/workspace-locker";

export function lockGenerateTypesWorkspace(): void {
	applyWorkspaceLockIfNeeded();
}
