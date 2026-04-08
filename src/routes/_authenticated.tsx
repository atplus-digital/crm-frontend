import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getCurrentUser } from "#/modules/auth/auth.functions";
import type { AuthenticatedUser } from "#/modules/auth/auth.types";

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Validates a redirect URL to prevent open redirect attacks.
 *
 * Only allows relative paths starting with "/" but not "//"
 * (protocol-relative URLs like //evil.com).
 *
 * Returns "/" (home) for any invalid input.
 */
function sanitizeRedirect(url: unknown): string {
	if (typeof url !== "string" || !url.startsWith("/") || url.startsWith("//")) {
		return "/";
	}
	return url;
}

// ── Authenticated Layout ────────────────────────────────────────────

/**
 * Pathless layout route that protects all child routes.
 *
 * - Calls `getCurrentUser` server function in `beforeLoad`
 * - If no valid session exists, redirects to `/login` with a safe
 *   redirect parameter so the user can return after authentication
 * - On success, the authenticated user is injected into the route
 *   context for child routes to consume via `Route.useRouteContext()`
 */
export const Route = createFileRoute("/_authenticated")({
	beforeLoad: async ({ location }): Promise<{ user: AuthenticatedUser }> => {
		const user = await getCurrentUser();

		if (!user) {
			const redirectPath = sanitizeRedirect(
				location.pathname + location.search + location.hash,
			);

			throw redirect({
				to: "/login",
				search: { redirect: redirectPath },
			});
		}

		return { user };
	},
	component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
	return <Outlet />;
}
