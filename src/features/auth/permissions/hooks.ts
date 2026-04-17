import { useStore } from "@tanstack/react-store";
import { hasGrantedAction, hasGrantedSnippet } from "./matchers";
import { permissionsStore } from "./store";

/**
 * Returns true if the given action (or its :own variant) is in effectiveActions.
 * If effectiveActions contains "update:own", useCan("update") returns true.
 * If effectiveActions contains "update", useCan("update:own") returns true.
 */
export function useCan(action: string): boolean {
	const effectiveActions = useStore(
		permissionsStore,
		(state) => state.effectiveActions,
	);

	return hasGrantedAction(effectiveActions, action);
}

/**
 * Returns true if the snippet is granted, false if denied or absent.
 * Handles:
 * - `!X` prefix → denial, always returns false
 * - `X.*` wildcard → matches any snippet starting with "X."
 * - `!X.*` wildcard denial → returns false (denied snippets are removed by mergeSnippets)
 */
export function useHasSnippet(snippet: string): boolean {
	const effectiveSnippets = useStore(
		permissionsStore,
		(state) => state.effectiveSnippets,
	);

	return hasGrantedSnippet(effectiveSnippets, snippet);
}

/**
 * Returns true if the user can edit (has "update" action or "update:own").
 * When called without an action argument, always checks "update".
 * When called with an action argument, checks that specific action.
 */
export function useCanEdit(action: string = "update"): boolean {
	return useCan(action);
}

/**
 * Returns the list of role names assigned to the current user.
 */
export function useRoleNames(): string[] {
	return useStore(permissionsStore, (state) => state.roleNames);
}

/**
 * Returns true if the user has the "allowConfigure" flag set.
 * This is typically granted to admin-like roles.
 */
export function useIsAdmin(): boolean {
	return useStore(permissionsStore, (state) => state.allowConfigure);
}
