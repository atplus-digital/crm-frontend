import { redirect } from "react-router";
import { GuestLayout } from "#/components/auth/auth-layout";
import ResetPasswordForm from "#/components/auth/reset-password-form";
import { env } from "#/env";
import { requireGuest } from "#/modules/auth";

export function loader() {
	requireGuest();
	if (env.VITE_DISABLE_FORGOT_PASSWORD) {
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
