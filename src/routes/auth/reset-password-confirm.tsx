import { redirect, useLoaderData } from "react-router";
import { GuestLayout } from "#/components/auth/auth-layout";
import { env } from "#/env";
import { requireGuest } from "#/features/auth";
import { createLogger } from "#/lib/logger";
import ResetPasswordConfirmForm from "#/pages/auth/reset-password-confirm-page";

const log = createLogger("auth");

export function loader({ request }: { request: Request }) {
	log.debug("Reset password confirm page loaded");
	requireGuest();
	if (env.VITE_DISABLE_FORGOT_PASSWORD) {
		log.info("Password reset disabled, redirecting to login");
		throw redirect("/login");
	}
	const url = new URL(request.url);
	const token = url.searchParams.get("token");
	if (!token) {
		log.warn("No token in URL, redirecting to reset-password");
		throw redirect("/reset-password");
	}
	log.debug("Token found, rendering password reset form");
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
