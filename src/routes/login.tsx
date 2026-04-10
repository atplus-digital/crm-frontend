import { createFileRoute, redirect } from "@tanstack/react-router";

import { authStore } from "#/modules/auth";
import { LoginPage } from "#/components/auth/login-page";

export const Route = createFileRoute("/login")({
	beforeLoad: () => {
		if (typeof window === "undefined") return;
		if (authStore.state.isAuthenticated && authStore.state.token) {
			throw redirect({ to: "/" });
		}
	},
	component: LoginPage,
});
