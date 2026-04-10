import { redirect } from "@tanstack/react-router";
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
 * Validate stored token on app initialization.
 * Calls auth:check to verify token is still valid.
 * If invalid, clears the store.
 */
export async function validateTokenOnInit(): Promise<void> {
	if (typeof window === "undefined") return;

	const state = authStore.state;
	if (!state.token) return;

	try {
		const user = await checkAuth();
		setUser(user);
	} catch {
		reset();
	}
}
