import { UserDashboard } from "#/components/dashboard/user-dashboard";
import { authStore, requireAuth, validateTokenOnInit } from "#/modules/auth";

export async function loader() {
	const state = authStore.state;
	if (state.token && !state.user) {
		await validateTokenOnInit();
	}
	requireAuth("/");
}

export function Component() {
	return <UserDashboard />;
}
