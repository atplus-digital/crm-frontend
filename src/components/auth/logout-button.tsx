import { useNavigate } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { isDev } from "#/env";
import { signOut } from "#/modules/auth";

export function LogoutButton() {
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await signOut();
		} catch (err) {
			if (isDev) {
				console.warn(
					"[auth] logout API call failed:",
					err instanceof Error ? err.message : String(err),
				);
			}
		}
		await navigate({ to: "/login" });
	}

	return (
		<Button variant="outline" onClick={handleLogout}>
			Sair
		</Button>
	);
}
