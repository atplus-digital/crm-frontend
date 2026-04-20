import { redirect } from "react-router";
import { env } from "#/env";
import { requireGuest } from "#/features/auth";
import { GuestLayout } from "#/features/auth/components/auth-layout";
import { createLogger } from "#/lib/logger";
import { ResetPasswordPage } from "#/pages/auth/reset-password";

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
			<ResetPasswordPage />
		</GuestLayout>
	);
}
