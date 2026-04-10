import { createFileRoute } from "@tanstack/react-router";
import { UserDashboard } from "#/components/dashboard/user-dashboard";
import { requireAuth } from "#/modules/auth";

export const Route = createFileRoute("/")({
	beforeLoad: ({ location }) => requireAuth(location.pathname),
	component: App,
});

function App() {
	return <UserDashboard />;
}
