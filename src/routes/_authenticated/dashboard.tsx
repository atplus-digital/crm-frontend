import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { ThemeToggle } from "#/components/theme-toggle";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { signOut } from "#/modules/auth/auth.functions";

export const Route = createFileRoute("/_authenticated/dashboard")({
	component: DashboardPage,
});

function DashboardPage() {
	const { user } = Route.useRouteContext();
	const navigate = useNavigate();

	const logoutMutation = useMutation({
		mutationFn: () => signOut(),
		onSuccess: () => {
			navigate({ to: "/login" });
		},
	});

	const displayName =
		user.nickname || user.username || user.email.split("@")[0];

	return (
		<div className="flex min-h-svh flex-col bg-background">
			<header className="flex items-center justify-between border-b px-6 py-4">
				<h1 className="text-lg font-semibold">CRM ATPlus</h1>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<Button
						variant="ghost"
						size="icon"
						onClick={() => logoutMutation.mutate()}
						disabled={logoutMutation.isPending}
						aria-label="Sair"
						title="Sair"
					>
						<LogOut />
					</Button>
				</div>
			</header>

			<main className="flex flex-1 items-start justify-center p-6">
				<div className="w-full max-w-2xl space-y-6">
					<section>
						<h2 className="text-2xl font-bold">Olá, {displayName}!</h2>
						<p className="text-muted-foreground">
							Bem-vindo ao CRM ATPlus. Sua sessão está ativa.
						</p>
					</section>

					<div className="grid gap-4 sm:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Perfil</CardTitle>
								<CardDescription>Informações da sua conta</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2 text-sm">
								<div>
									<span className="font-medium text-muted-foreground">
										Email:
									</span>{" "}
									{user.email}
								</div>
								<div>
									<span className="font-medium text-muted-foreground">
										Username:
									</span>{" "}
									{user.username ?? "—"}
								</div>
								<div>
									<span className="font-medium text-muted-foreground">
										Nickname:
									</span>{" "}
									{user.nickname ?? "—"}
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Funções</CardTitle>
								<CardDescription>
									Permissões disponíveis na sua sessão
								</CardDescription>
							</CardHeader>
							<CardContent>
								{user.roles.length > 0 ? (
									<ul className="flex flex-wrap gap-2">
										{user.roles.map((role) => (
											<li
												key={role}
												className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
											>
												{role}
											</li>
										))}
									</ul>
								) : (
									<p className="text-sm text-muted-foreground">
										Nenhuma função atribuída.
									</p>
								)}
							</CardContent>
						</Card>
					</div>

					<p className="text-xs text-muted-foreground">
						ID do usuário: {user.id}
					</p>
				</div>
			</main>
		</div>
	);
}
