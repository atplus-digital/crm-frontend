import { authStore, requireAuth, validateTokenOnInit } from "#/features/auth";
import { createLogger } from "#/lib/logger";
import { ProfileSettings } from "#/pages/dashboard/profile-settings-page";

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
