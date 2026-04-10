import { AuthLayout } from "./auth-layout";
import { LoginForm } from "./login-form";

export function LoginPage() {
	return (
		<AuthLayout
			title="CRM ATPlus"
			description="Entre com suas credenciais para acessar o sistema"
		>
			<LoginForm />
		</AuthLayout>
	);
}
