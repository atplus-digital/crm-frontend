import { createFileRoute, redirect } from "@tanstack/react-router";

import { authStore } from "#/modules/auth";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import ResetPasswordConfirmForm from "#/components/auth/reset-password-confirm-form";

function ResetPasswordConfirmPage() {
	const { token } = Route.useSearch();
	return (
		<div className="min-h-screen flex items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl font-bold">Nova Senha</CardTitle>
					<CardDescription>Defina sua nova senha</CardDescription>
				</CardHeader>
				<CardContent>
					<ResetPasswordConfirmForm token={token} />
				</CardContent>
			</Card>
		</div>
	)
}

export const Route = createFileRoute("/reset-password-confirm")({
	validateSearch: (search: Record<string, string>): { token: string } => {
		return { token: (search.token as string) || "" };
	},
	beforeLoad: ({ search }) => {
		if (typeof window === "undefined") return;
		if (authStore.state.isAuthenticated && authStore.state.token) {
			throw redirect({ to: "/" });
		}
		if (!search.token) {
			throw redirect({ to: "/reset-password" });
		}
	},
	component: ResetPasswordConfirmPage,
});
