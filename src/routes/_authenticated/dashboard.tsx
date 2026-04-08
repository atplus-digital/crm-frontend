import { createFileRoute } from "@tanstack/react-router";

/**
 * Placeholder route required for the _authenticated pathless layout to
 * register in the route tree. TanStack Router's file-based generator
 * needs at least one child route under a pathless layout to avoid a
 * fullPath uniqueness conflict with the root index route.
 *
 * This file should be replaced or removed when actual authenticated
 * routes are added (e.g., US-009).
 */
export const Route = createFileRoute("/_authenticated/dashboard")({
	component: DashboardPage,
});

function DashboardPage() {
	return <div>Dashboard</div>;
}
