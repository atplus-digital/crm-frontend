import { useStore } from "@tanstack/react-store";
import { Calendar, Globe, Mail, Phone, Shield, User } from "lucide-react";
import { LogoutButton } from "#/components/auth/logout-button";
import { ThemeToggle } from "#/components/theme-toggle";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import { Badge } from "#/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";
import { formatDateInPortuguese, getInitials } from "#/lib/utils";
import { authStore } from "#/modules/auth";

export function UserDashboard() {
	const user = useStore(authStore, (state) => state.user);
	const currentDate = formatDateInPortuguese(new Date());

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

	const displayName = user.nickname || user.username;
	const welcomeName = user.nickname || user.username || "";

	return (
		<main className="flex min-h-screen flex-col gap-6 bg-background p-6">
			<header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col gap-1">
					<h1 className="font-heading text-2xl font-semibold tracking-tight">
						{welcomeName ? `Olá, ${welcomeName}!` : "Olá!"}
					</h1>
					<p className="flex items-center gap-2 text-sm text-muted-foreground">
						<Calendar className="size-4" />
						{currentDate}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<LogoutButton />
				</div>
			</header>

			<Separator />

			{/* Profile Card */}
			<section className="mx-auto w-full max-w-2xl">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<User className="size-5" />
							Meu Perfil
						</CardTitle>
						<CardDescription>
							Visualize e gerencie suas informações de perfil
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-6">
						{/* Avatar and Basic Info */}
						<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
							<Avatar size="lg">
								<AvatarFallback>
									{getInitials(user.nickname || user.username || "U")}
								</AvatarFallback>
							</Avatar>
							<div className="flex flex-col items-center gap-1 sm:items-start">
								<p className="font-heading text-lg font-medium">
									{displayName}
								</p>
								<p className="text-sm text-muted-foreground">{user.email}</p>
							</div>
						</div>

						<Separator />

						{/* User Details Grid */}
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="flex flex-col gap-1">
								<span className="text-xs font-medium text-muted-foreground uppercase">
									Nome
								</span>
								<div className="flex items-center gap-2">
									<User className="size-4 text-muted-foreground" />
									<span className="text-sm">
										{user.nickname || "Não informado"}
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<span className="text-xs font-medium text-muted-foreground uppercase">
									Usuário
								</span>
								<div className="flex items-center gap-2">
									<Shield className="size-4 text-muted-foreground" />
									<span className="text-sm">{user.username}</span>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<span className="text-xs font-medium text-muted-foreground uppercase">
									Email
								</span>
								<div className="flex items-center gap-2">
									<Mail className="size-4 text-muted-foreground" />
									<span className="text-sm">{user.email}</span>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<span className="text-xs font-medium text-muted-foreground uppercase">
									Telefone
								</span>
								<div className="flex items-center gap-2">
									<Phone className="size-4 text-muted-foreground" />
									<span className="text-sm">
										{user.phone || "Não informado"}
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<span className="text-xs font-medium text-muted-foreground uppercase">
									Idioma
								</span>
								<div className="flex items-center gap-2">
									<Globe className="size-4 text-muted-foreground" />
									<Badge variant="secondary">
										{user.appLang?.toUpperCase() || "Não informado"}
									</Badge>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Quick Info Cards */}
			<section className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-4">
				<Card size="sm">
					<CardHeader>
						<CardTitle className="text-sm font-medium text-muted-foreground">
							ID
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="font-heading text-2xl font-semibold">{user.id}</p>
					</CardContent>
				</Card>

				<Card size="sm">
					<CardHeader>
						<CardTitle className="text-sm font-medium text-muted-foreground">
							Status
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Badge
							variant="default"
							className="bg-green-500/10 text-green-600 hover:bg-green-500/20"
						>
							Ativo
						</Badge>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
