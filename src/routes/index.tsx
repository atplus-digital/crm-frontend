import { createFileRoute } from "@tanstack/react-router";
import { LogoutButton } from "#/components/auth/logout-button";
import { ThemeToggle } from "#/components/theme-toggle";
import { requireAuth } from "#/modules/auth";

export const Route = createFileRoute("/")({
	beforeLoad: ({ location }) => requireAuth(location.pathname),
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
