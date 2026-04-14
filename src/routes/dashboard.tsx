import { UserDashboard } from "#/components/dashboard/user-dashboard";
import { createLogger } from "#/lib/logger";
import { authStore, requireAuth, validateTokenOnInit } from "#/modules/auth";

const log = createLogger("auth");

export async function loader() {
	log.debug("Dashboard loader, validating auth");

	const state = authStore.state;

	if (state.token && !state.user) {
		log.debug("Token exists but no user, validating token");
		await validateTokenOnInit();
	}
	requireAuth("/");
}

export function Component() {
	return <UserDashboard />;
}
