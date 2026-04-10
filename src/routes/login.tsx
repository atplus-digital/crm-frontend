import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "#/components/auth/login-page";
import { requireGuest } from "#/modules/auth";

export const Route = createFileRoute("/login")({
	beforeLoad: () => requireGuest(),
	component: LoginPage,
});
