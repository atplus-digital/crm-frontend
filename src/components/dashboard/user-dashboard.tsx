import { useStore } from "@tanstack/react-store";
import { Calendar } from "lucide-react";
import { LogoutButton } from "#/components/auth/logout-button";
import { ThemeToggle } from "#/components/theme-toggle";
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
			<header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col gap-1">
					<h1 className="font-heading text-2xl font-semibold tracking-tight">
						{user.nickname || user.username
							? `Olá, ${user.nickname || user.username}!`
							: "Olá!"}
					</h1>
					<p className="flex items-center gap-2 text-sm text-muted-foreground">
						<Calendar className="size-4" />
					</p>
				</div>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<LogoutButton />
				</div>
			</header>

			<ProfileDetails user={user} />
		</main>
	);
}
