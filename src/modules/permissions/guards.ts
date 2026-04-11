import { redirect } from "@tanstack/react-router";
import { permissionsStore } from "./store";

/**
 * Guard that requires the current user to have a specific snippet.
 * Throws a redirect to /forbidden if the snippet is not granted.
 * Handles:
 * - `!X` prefix → denial, always throws (redirects)
 * - `X.*` wildcard → matches any snippet starting with "X."
 */
export function requireSnippet(snippet: string): void {
	if (typeof window === "undefined") return;

	const { effectiveSnippets } = permissionsStore.state;

	// Denial strings (starting with !) are never in effectiveSnippets
	// because mergeSnippets removes them — always throw
	if (snippet.startsWith("!")) {
		throw redirect({ to: "/forbidden" });
	}

	// Exact match
	if (effectiveSnippets.includes(snippet)) return;

	// Wildcard match (e.g. "ui" matches "ui.menu")
	const withDot = `${snippet}.`;
	if (effectiveSnippets.some((s) => s.startsWith(withDot))) return;

	// Not found → forbidden
	throw redirect({ to: "/forbidden" });
}

/**
 * Guard that requires the current user to have a specific action.
 * Throws a redirect to /forbidden if the action is not granted.
 */
export function requireAction(action: string): void {
	if (typeof window === "undefined") return;

	const { effectiveActions } = permissionsStore.state;

	// Direct match
	if (effectiveActions.includes(action)) return;

	// :own suffix: check if the base action exists
	// e.g. "update:own" → check if "update" is in the list
	const colonIdx = action.indexOf(":");
	if (colonIdx > -1) {
		const base = action.slice(0, colonIdx);
		if (effectiveActions.includes(base)) return;
	}

	// Not found → forbidden
	throw redirect({ to: "/forbidden" });
}
