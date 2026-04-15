import { GuestLayout } from "#/components/auth/auth-layout";
import { LoginForm } from "#/components/auth/login-form";

export function LoginPage() {
	return (
		<GuestLayout
			title="CRM ATPlus"
			description="Entre com suas credenciais para acessar o sistema"
		>
			<LoginForm />
		</GuestLayout>
	);
}
