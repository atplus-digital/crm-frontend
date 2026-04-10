import { useNavigate } from "@tanstack/react-router";
import { signOut } from "#/modules/auth/service";
import { reset } from "#/modules/auth/store";
import { Button } from "#/components/ui/button";

export function LogoutButton() {
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await signOut();
		} catch {
			// Best-effort — API call may fail
		}
		reset();
		await navigate({ to: "/login" });
	}

	return (
		<Button variant="outline" onClick={handleLogout}>
			Sair
		</Button>
	);
}
