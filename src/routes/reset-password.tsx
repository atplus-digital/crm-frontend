import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "#/components/auth/auth-layout";
import ResetPasswordForm from "#/components/auth/reset-password-form";
import { requireGuest } from "#/modules/auth";

function ResetPasswordPage() {
	return (
		<AuthLayout
			title="Redefinir Senha"
			description="Informe seu e-mail para receber as instruções"
		>
			<ResetPasswordForm />
		</AuthLayout>
	);
}

export const Route = createFileRoute("/reset-password")({
	beforeLoad: () => requireGuest(),
	component: ResetPasswordPage,
});
