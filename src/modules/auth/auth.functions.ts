import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { env } from "#/env";
import type { AuthenticatedUser } from "#/modules/auth/auth.schemas";
import { loginSchema } from "#/modules/auth/auth.schemas";
import * as authApi from "#/modules/auth/auth-api.server";
import {
	createSession,
	getSession,
	removeSession,
} from "#/modules/auth/auth-session.server";

// ── Constants ────────────────────────────────────────────────────────

/**
 * Generic error message returned to the UI for login failures.
 * Never reveals whether email exists or password is wrong.
 */
const GENERIC_LOGIN_ERROR = "Email ou senha inválidos. Tente novamente.";

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Validates Origin and Host headers for state-changing (POST) server
 * functions to prevent CSRF attacks. Conforms to TanStack Start best
 * practices for mutations.
 *
 * The request must provide either:
 * - An `Origin` header matching the configured SERVER_URL, or
 * - A `Host` header matching the configured SERVER_URL
 *
 * If SERVER_URL is not configured (e.g., development), validation is
 * relaxed for localhost origins.
 */
function validateRequestOrigin(): boolean {
	const origin = getRequestHeader("Origin");
	const host = getRequestHeader("Host");

	if (!origin && !host) {
		return false;
	}

	const serverUrl = env.SERVER_URL;
	if (!serverUrl) {
		// No server URL configured — allow localhost in development
		const allowed = origin || host || "";
		return (
			allowed.includes("localhost") ||
			allowed.includes("127.0.0.1") ||
			allowed.includes("[::1]")
		);
	}

	const parsed = new URL(serverUrl);
	const serverHost = parsed.host; // includes port

	if (origin) {
		try {
			const originUrl = new URL(origin);
			if (originUrl.host === serverHost) {
				return true;
			}
		} catch {
			return false;
		}
	}

	if (host === serverHost) {
		return true;
	}

	return false;
}

// ── Public Server Functions ──────────────────────────────────────────

/**
 * Server function: signIn
 *
 * Authenticates a user against NocoBase with email + password.
 * On success, creates an encrypted crm_session cookie and returns
 * the normalized user. On failure, returns a generic error message
 * to avoid leaking information about valid accounts.
 *
 * Validates Origin/Host headers to prevent CSRF.
 */
export const signIn = createServerFn({ method: "POST" })
	.inputValidator((input: { email: string; password: string }) => {
		return loginSchema.parse(input);
	})
	.handler(
		async ({
			data,
		}): Promise<{
			user?: AuthenticatedUser;
			error?: string;
		}> => {
			if (!validateRequestOrigin()) {
				return { error: GENERIC_LOGIN_ERROR };
			}

			try {
				const result = await authApi.signIn(data.email, data.password);

				createSession(result.token);

				return { user: result.user };
			} catch {
				// Return only a generic error to the UI
				return { error: GENERIC_LOGIN_ERROR };
			}
		},
	);

/**
 * Server function: signOut
 *
 * Attempts to sign out from NocoBase (best-effort) and always
 * clears the local crm_session cookie. Returns success: true
 * regardless of NocoBase response so the UI can reliably
 * update its state.
 *
 * Validates Origin/Host headers to prevent CSRF.
 */
export const signOut = createServerFn({ method: "POST" }).handler(
	async (): Promise<{ success: boolean }> => {
		if (!validateRequestOrigin()) {
			return { success: false };
		}

		const token = getSession();

		if (token) {
			// Best-effort sign-out from NocoBase — swallow errors
			await authApi.signOut(token);
		}

		// Always clear the local cookie regardless of NocoBase result
		removeSession();

		return { success: true };
	},
);

/**
 * Server function: getCurrentUser
 *
 * Reads the crm_session cookie, validates the token with NocoBase's
 * auth:check endpoint, and returns the normalized user.
 *
 * If the cookie is missing, invalid, or auth:check returns 401
 * (expired/revoked token), the cookie is removed and undefined
 * is returned — indicating no active session.
 */
export const getCurrentUser = createServerFn({ method: "GET" }).handler(
	async (): Promise<AuthenticatedUser | undefined> => {
		const token = getSession();

		if (!token) {
			return undefined;
		}

		try {
			const result = await authApi.checkSession(token);
			return result.user;
		} catch {
			// Token is invalid or expired — remove cookie
			removeSession();
			return undefined;
		}
	},
);
