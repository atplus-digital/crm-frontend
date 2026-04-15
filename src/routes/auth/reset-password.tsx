import { redirect } from "react-router";
import { GuestLayout } from "#/components/auth/auth-layout";
import { env } from "#/env";
import { createLogger } from "#/lib/logger";
import { requireGuest } from "#/modules/auth";
import ResetPasswordForm from "#/pages/auth/reset-password-page";

const log = createLogger("auth");

export function loader() {
	log.debug("Reset password page loaded");
	requireGuest();
	if (env.VITE_DISABLE_FORGOT_PASSWORD) {
		log.info("Password reset disabled, redirecting to login");
		throw redirect("/login");
	}
}

export function Component() {
	return (
		<GuestLayout
			title="Redefinir Senha"
			description="Informe seu e-mail para receber as instruções"
		>
			<ResetPasswordForm />
		</GuestLayout>
	);
}
