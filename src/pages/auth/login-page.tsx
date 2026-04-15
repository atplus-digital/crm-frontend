import { GuestLayout } from "#/features/auth/components/auth-layout";
import { LoginForm } from "#/features/auth/components/login-form";

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
