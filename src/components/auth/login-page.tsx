import { GuestLayout } from "./auth-layout";
import { LoginForm } from "./login-form";

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
