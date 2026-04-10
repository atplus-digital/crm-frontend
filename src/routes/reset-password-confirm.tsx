import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthLayout } from "#/components/auth/auth-layout";
import ResetPasswordConfirmForm from "#/components/auth/reset-password-confirm-form";
import { requireGuest } from "#/modules/auth";

function ResetPasswordConfirmPage() {
	const { token } = Route.useSearch();
	return (
		<AuthLayout title="Nova Senha" description="Defina sua nova senha">
			<ResetPasswordConfirmForm token={token} />
		</AuthLayout>
	);
}

export const Route = createFileRoute("/reset-password-confirm")({
	validateSearch: (search: Record<string, string>): { token: string } => {
		return { token: (search.token as string) || "" };
	},
	beforeLoad: ({ search }) => {
		if (typeof window === "undefined") return;
		requireGuest();
		if (!search.token) {
			throw redirect({ to: "/reset-password" });
		}
	},
	component: ResetPasswordConfirmPage,
});
