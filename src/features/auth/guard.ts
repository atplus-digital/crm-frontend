import { redirect } from "react-router";
import {
	resetPermissions,
	setPermissionsFromRoles,
} from "#/features/auth/permissions";
import { createLogger } from "#/lib/logger";
import { checkAuth } from "./service";
import { authStore, reset, setUser } from "./store";

const log = createLogger("auth");

/**
 * Require authentication — redirect to /login if not authenticated.
 * Includes returnTo parameter for post-login redirect.
 */
export function requireAuth(pathname: string): Response {
	log.debug("Route requires auth, checking state");
	const state = authStore.state;
	if (!state.isAuthenticated || !state.token) {
		log.info("Redirecting unauthenticated user to login", { pathname });
		throw redirect(`/login?returnTo=${encodeURIComponent(pathname)}`);
	}
	return new Response(null);
}

/**
 * Require guest (not authenticated) — redirect to / if already authenticated.
 */
export function requireGuest(): Response {
	log.debug("Route requires guest, checking state");
	const state = authStore.state;
	if (state.isAuthenticated && state.token) {
		log.info("Redirecting authenticated user to home");
		throw redirect("/");
	}
	return new Response(null);
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
	const state = authStore.state;
	if (!state.token) return;

	log.debug("Validating stored token on init");
	try {
		const user = await checkAuth();
		setUser(user);
		setPermissionsFromRoles(user.roles);
		log.info("Token validated, user restored");
	} catch (err) {
		if (isNetworkError(err)) {
			log.warn("Network error during token validation, preserving auth state");
			return;
		}
		log.error("Token invalid, clearing auth state", err);
		reset();
		resetPermissions();
	}
}
