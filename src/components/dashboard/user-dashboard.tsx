import { useStore } from "@tanstack/react-store";
import { Card, CardContent } from "#/components/ui/card";
import { authStore } from "#/modules/auth";
import { ProfileDetails } from "./profile-details";

export function UserDashboard() {
	const user = useStore(authStore, (state) => state.user);

	if (!user) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-6">
				<Card className="w-full max-w-md">
					<CardContent className="flex flex-col items-center justify-center gap-4 py-8">
						<p className="text-muted-foreground">Carregando perfil...</p>
					</CardContent>
				</Card>
			</main>
		);
	}

	return (
		<main className="flex min-h-screen flex-col gap-6 bg-background p-6">
			<ProfileDetails user={user} />
		</main>
	);
}
