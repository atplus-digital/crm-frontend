import type { AuthenticatedUser } from "./auth.schemas";

// ── Re-export schema types for convenience ──────────────────────────

export type {
	AuthenticatedUser,
	LoginInput,
	NocoBaseAuthResponse,
	NocoBaseCheckResponse,
	Session,
} from "./auth.schemas";

// ── Role helpers ────────────────────────────────────────────────────

/**
 * Checks whether the authenticated user has a specific role.
 * Comparison is case-sensitive exact match.
 */
export function hasRole(user: AuthenticatedUser, role: string): boolean {
	return user.roles.includes(role);
}

/**
 * Checks whether the authenticated user has a role that contains the
 * given snippet (case-insensitive substring match).
 */
export function hasSnippet(user: AuthenticatedUser, snippet: string): boolean {
	const lower = snippet.toLowerCase();
	return user.roles.some((role) => role.toLowerCase().includes(lower));
}
