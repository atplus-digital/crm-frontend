import { createFileRoute } from "@tanstack/react-router";
import { UserDashboard } from "#/components/dashboard/user-dashboard";
import { requireAuth } from "#/modules/auth";
import { requireSnippet } from "#/modules/permissions";

export const Route = createFileRoute("/")({
	beforeLoad: ({ location }) => {
		requireAuth(location.pathname);
		requireSnippet("app");
	},
	component: App,
});

function App() {
	return <UserDashboard />;
}
