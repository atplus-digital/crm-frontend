import { authStore, requireAuth, validateTokenOnInit } from "#/features/auth";
import { createLogger } from "#/lib/logger";
import { UserDashboard } from "#/pages/dashboard/dashboard";

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
