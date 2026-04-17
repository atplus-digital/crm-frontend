import { redirect } from "react-router";
import { hasGrantedAction, hasGrantedSnippet } from "./matchers";
import { permissionsStore } from "./store";

/**
 * Guard that requires the current user to have a specific snippet.
 * Throws a redirect to /forbidden if the snippet is not granted.
 * Handles:
 * - `!X` prefix → denial, always throws (redirects)
 * - `X.*` wildcard → matches any snippet starting with "X."
 */
export function requireSnippet(snippet: string): void {
	const { effectiveSnippets } = permissionsStore.state;

	if (hasGrantedSnippet(effectiveSnippets, snippet)) return;

	throw redirect("/forbidden");
}

/**
 * Guard that requires the current user to have a specific action.
 * Throws a redirect to /forbidden if the action is not granted.
 */
export function requireAction(action: string): void {
	const { effectiveActions } = permissionsStore.state;

	if (hasGrantedAction(effectiveActions, action)) return;

	throw redirect("/forbidden");
}
