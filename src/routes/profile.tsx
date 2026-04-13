import { ProfileSettings } from "#/components/dashboard/profile-settings";
import { createLogger } from "#/lib/logger";
import { authStore, requireAuth, validateTokenOnInit } from "#/modules/auth";

const log = createLogger("auth");

export async function loader() {
	log.debug("Profile loader, validating auth");
	const state = authStore.state;
	if (state.token && !state.user) {
		log.debug("Token exists but no user, validating token");
		await validateTokenOnInit();
	}
	requireAuth("/profile");
}

export function Component() {
	return <ProfileSettings />;
}
