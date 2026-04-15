import { useStore } from "@tanstack/react-store";
import { ProfileDetails } from "#/components/dashboard/profile-details";
import { Card, CardContent } from "#/components/ui/card";
import { authStore } from "#/modules/auth";

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
		<div className="flex flex-1 flex-col overflow-auto">
			<main className="flex-1 space-y-6 p-6">
				<ProfileDetails user={user} />
			</main>
		</div>
	);
}
