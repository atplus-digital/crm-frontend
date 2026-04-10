import { useNavigate } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { signOut } from "#/modules/auth";

export function LogoutButton() {
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await signOut();
		} catch {
			// Best-effort — API call may fail
		}
		await navigate({ to: "/login" });
	}

	return (
		<Button variant="outline" onClick={handleLogout}>
			Sair
		</Button>
	);
}
