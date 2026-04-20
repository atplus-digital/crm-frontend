import { requireGuest } from "#/features/auth";
import { createLogger } from "#/lib/logger";
import { LoginPage } from "#/pages/auth/login";

const log = createLogger("auth");

export function loader() {
	log.debug("Login page loaded, checking guest status");
	requireGuest();
}

export function Component() {
	return <LoginPage />;
}
