import { redirect, useLoaderData } from "react-router";
import { env } from "#/env";
import { requireGuest } from "#/features/auth";
import { GuestLayout } from "#/features/auth/components/auth-layout";
import { createLogger } from "#/lib/logger";
import { ResetPasswordConfirmPage } from "#/pages/auth/reset-password-confirm";
import { routePaths } from "#/routes/route-paths";

const log = createLogger("auth");

export function loader({ request }: { request: Request }) {
	log.debug("Reset password confirm page loaded");
	requireGuest();
	if (env.VITE_DISABLE_FORGOT_PASSWORD) {
		log.info("Password reset disabled, redirecting to login");
		throw redirect(routePaths.login);
	}
	const url = new URL(request.url);
	const token = url.searchParams.get("token");
	if (!token) {
		log.warn("No token in URL, redirecting to reset-password");
		throw redirect(routePaths.reset_password);
	}
	log.debug("Token found, rendering password reset form");
	return { token };
}

export function Component() {
	const { token } = useLoaderData<typeof loader>();
	return (
		<GuestLayout title="Nova Senha" description="Defina sua nova senha">
			<ResetPasswordConfirmPage token={token} />
		</GuestLayout>
	);
}
