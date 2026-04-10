import { createFileRoute, redirect } from "@tanstack/react-router";

import { authStore } from "#/modules/auth";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import ResetPasswordForm from "#/components/auth/reset-password-form";

function ResetPasswordPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl font-bold">Redefinir Senha</CardTitle>
					<CardDescription>
						Informe seu e-mail para receber as instruções
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ResetPasswordForm />
				</CardContent>
			</Card>
		</div>
	);
}

export const Route = createFileRoute("/reset-password")({
	beforeLoad: () => {
		if (typeof window === "undefined") return;
		if (authStore.state.isAuthenticated && authStore.state.token) {
			throw redirect({ to: "/" });
		}
	},
	component: ResetPasswordPage,
});
