import { LoginPage } from "#/components/auth/login-page";
import { createLogger } from "#/lib/logger";
import { requireGuest } from "#/modules/auth";

const log = createLogger("auth");

export function loader() {
	log.debug("Login page loaded, checking guest status");
	requireGuest();
}

export function Component() {
	return <LoginPage />;
}
