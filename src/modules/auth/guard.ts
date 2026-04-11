import { redirect } from "@tanstack/react-router";
import {
	resetPermissions,
	setPermissionsFromRoles,
} from "#/modules/permissions";
import { checkAuth } from "./service";
import { authStore, reset, setUser } from "./store";

/**
 * Require authentication — redirect to /login if not authenticated.
 * Includes returnTo parameter for post-login redirect.
 */
export function requireAuth(pathname: string): void {
	if (typeof window === "undefined") return;

	const state = authStore.state;
	if (!state.isAuthenticated || !state.token) {
		throw redirect({
			to: "/login",
			search: { returnTo: pathname },
		});
	}
}

/**
 * Require guest (not authenticated) — redirect to / if already authenticated.
 */
export function requireGuest(): void {
	if (typeof window === "undefined") return;

	const state = authStore.state;
	if (state.isAuthenticated && state.token) {
		throw redirect({
			to: "/",
		});
	}
}

/**
 * Classify an error as a network/transport error (vs an auth error).
 * Network errors should NOT log the user out — they're transient.
 */
export function isNetworkError(err: unknown): boolean {
	if (err instanceof TypeError) return true;
	if (
		err instanceof Error &&
		/fetch|network|ECONNREFUSED|timeout/i.test(err.message)
	)
		return true;
	return false;
}

/**
 * Validate stored token on app initialization.
 * Calls auth:check to verify token is still valid.
 * If invalid, clears the store.
 * Network errors preserve auth state to avoid logging out on transient failures.
 */
export async function validateTokenOnInit(): Promise<void> {
	if (typeof window === "undefined") return;

	const state = authStore.state;
	if (!state.token) return;

	try {
		const user = await checkAuth();
		setUser(user);
		setPermissionsFromRoles(user.roles);
	} catch (err) {
		if (isNetworkError(err)) {
			// Don't log out user on network errors — preserve auth state
			if (import.meta.env.DEV) {
				console.warn(
					"[auth] Network error during token validation, preserving auth state",
				);
			}
			return;
		}
		reset();
		resetPermissions();
	}
}
