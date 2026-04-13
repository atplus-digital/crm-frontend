import { redirect, useLoaderData } from "react-router";
import { GuestLayout } from "#/components/auth/auth-layout";
import ResetPasswordConfirmForm from "#/components/auth/reset-password-confirm-form";
import { requireGuest } from "#/modules/auth";

export function loader({ request }: { request: Request }) {
	requireGuest();
	const url = new URL(request.url);
	const token = url.searchParams.get("token");
	if (!token) {
		throw redirect("/reset-password");
	}
	return { token };
}

export function Component() {
	const { token } = useLoaderData<typeof loader>();
	return (
		<GuestLayout title="Nova Senha" description="Defina sua nova senha">
			<ResetPasswordConfirmForm token={token} />
		</GuestLayout>
	);
}
