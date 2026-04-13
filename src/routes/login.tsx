import { LoginPage } from "#/components/auth/login-page";
import { requireGuest } from "#/modules/auth";

export function loader() {
	requireGuest();
}

export function Component() {
	return <LoginPage />;
}
