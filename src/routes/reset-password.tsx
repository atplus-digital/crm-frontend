import { GuestLayout } from "#/components/auth/auth-layout";
import ResetPasswordForm from "#/components/auth/reset-password-form";
import { requireGuest } from "#/modules/auth";

export function loader() {
	requireGuest();
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
