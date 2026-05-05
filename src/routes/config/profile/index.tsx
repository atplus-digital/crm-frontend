import { requireAuth, validateTokenOnInit } from "#/features/auth";
import { createLogger } from "#/lib/logger";
import { ProfileSettings } from "#/pages/profile/profile";

const log = createLogger("auth");

export async function loader({ request }: { request: Request }) {
	log.debug("Profile loader, validating auth");
	await validateTokenOnInit();
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <ProfileSettings />;
}
