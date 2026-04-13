import { createFileRoute } from "@tanstack/react-router";
import { UserDashboard } from "#/components/dashboard/user-dashboard";
import { authStore, requireAuth, validateTokenOnInit } from "#/modules/auth";
// import { requireSnippet } from "#/modules/permissions";

export const Route = createFileRoute("/")({
	beforeLoad: async ({ location }) => {
		const state = authStore.state;
		if (state.token && !state.user) {
			await validateTokenOnInit();
		}

		requireAuth(location.pathname);
		//requireSnippet("app");
	},
	component: App,
});

function App() {
	return <UserDashboard />;
}
