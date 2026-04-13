import { redirect } from "react-router";
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

	if (snippet.startsWith("!")) {
		throw redirect("/forbidden");
	}

	if (effectiveSnippets.includes(snippet)) return;

	const withDot = `${snippet}.`;
	if (effectiveSnippets.some((s) => s.startsWith(withDot))) return;

	throw redirect("/forbidden");
}

/**
 * Guard that requires the current user to have a specific action.
 * Throws a redirect to /forbidden if the action is not granted.
 */
export function requireAction(action: string): void {
	const { effectiveActions } = permissionsStore.state;

	if (effectiveActions.includes(action)) return;

	const colonIdx = action.indexOf(":");
	if (colonIdx > -1) {
		const base = action.slice(0, colonIdx);
		if (effectiveActions.includes(base)) return;
	}

	throw redirect("/forbidden");
}
