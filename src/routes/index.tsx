import { createFileRoute, redirect } from "@tanstack/react-router";
import { LogoutButton } from "#/components/auth/logout-button";
import { ThemeToggle } from "#/components/theme-toggle";
import { authStore } from "#/modules/auth";

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		if (typeof window === "undefined") return;
		if (!authStore.state.isAuthenticated || !authStore.state.token) {
			throw redirect({
				to: "/login",
				search: { returnTo: "/" },
			});
		}
	},
	component: App,
});

function App() {
	return (
		<main className="">
			<ThemeToggle />
			<LogoutButton />
		</main>
	);
}
