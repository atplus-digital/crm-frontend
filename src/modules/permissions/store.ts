import { createStore } from "@tanstack/store";

import { mergeActions, mergeSnippets } from "./compute";
import type { PermissionRole, PermissionState } from "./types";

export const permissionsStore = createStore<PermissionState>({
	effectiveActions: [],
	effectiveSnippets: [],
	roleNames: [],
	allowConfigure: false,
	isInitialized: false,
});

export function setPermissionsFromRoles(roles: PermissionRole[]): void {
	const actionsArrays = roles.map((r) => r.strategy?.actions ?? []);
	const snippetsArrays = roles.map((r) => r.snippets ?? []);

	permissionsStore.setState(() => ({
		effectiveActions: mergeActions(actionsArrays),
		effectiveSnippets: mergeSnippets(snippetsArrays),
		roleNames: roles.map((r) => r.name),
		allowConfigure: roles.some((r) => r.allowConfigure === true),
		isInitialized: true,
	}));
}

export function resetPermissions(): void {
	permissionsStore.setState(() => ({
		effectiveActions: [],
		effectiveSnippets: [],
		roleNames: [],
		allowConfigure: false,
		isInitialized: false,
	}));
}
