import { Mail, Phone, Shield, User } from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";
import type { AuthUser } from "#/features/auth";
import { DetailItem } from "./detail-item";
import { InfoCard } from "./info-card";

interface ProfileDetailsProps {
	user: AuthUser;
}

export function ProfileDetails({ user }: ProfileDetailsProps) {
	const displayName = user.nickname || user.username;

	return (
		<>
			{/* Profile Card */}
			<section className="mx-auto w-full max-w-2xl">
				<div className="flex flex-col gap-6">
					{/* Avatar and Basic Info */}
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
						<div className="flex flex-col items-center gap-1 sm:items-start">
							<p className="font-heading text-lg font-medium">{displayName}</p>
							<p className="text-sm text-muted-foreground">{user.email}</p>
						</div>
					</div>

					<Separator />

					{/* User Details Grid */}
					<div className="grid gap-4 sm:grid-cols-2">
						<DetailItem
							label="Nome"
							value={user.nickname || "Não informado"}
							icon={<User className="size-4 text-muted-foreground" />}
						/>

						<DetailItem
							label="Usuário"
							value={user.username}
							icon={<Shield className="size-4 text-muted-foreground" />}
						/>

						<DetailItem
							label="Email"
							value={user.email}
							icon={<Mail className="size-4 text-muted-foreground" />}
						/>

						<DetailItem
							label="Telefone"
							value={user.phone || "Não informado"}
							icon={<Phone className="size-4 text-muted-foreground" />}
						/>
					</div>
				</div>
			</section>

			{/* Quick Info Cards */}
			<section className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-4">
				<InfoCard title="ID" value={user.id.toString()} />

				<InfoCard
					title="Status"
					value={
						<Badge
							variant="default"
							className="bg-green-500/10 text-green-600 hover:bg-green-500/20"
						>
							Ativo
						</Badge>
					}
				/>
			</section>
		</>
	);
}
