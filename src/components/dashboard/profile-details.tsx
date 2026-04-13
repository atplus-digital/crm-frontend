import { Calendar, Mail, Phone, Shield, User } from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";
import { formatDateInPortuguese } from "#/lib/utils";
import type { AuthUser } from "#/modules/auth";

interface ProfileDetailsProps {
	user: AuthUser;
}

export function ProfileDetails({ user }: ProfileDetailsProps) {
	const displayName = user.nickname || user.username;
	const currentDate = formatDateInPortuguese(new Date());

	return (
		<>
			<header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col gap-1">
					<h1 className="font-heading text-2xl font-semibold tracking-tight">
						{displayName ? `Olá, ${displayName}!` : "Olá!"}
					</h1>
					<p className="flex items-center gap-2 text-sm text-muted-foreground">
						<Calendar className="size-4" />
						{currentDate}
					</p>
				</div>
			</header>

			<Separator />

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

interface DetailItemProps {
	label: string;
	value: string | React.ReactNode;
	icon: React.ReactNode;
}

function DetailItem({ label, value, icon }: DetailItemProps) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-xs font-medium text-muted-foreground uppercase">
				{label}
			</span>
			<div className="flex items-center gap-2">
				{icon}
				<span className="text-sm">{value}</span>
			</div>
		</div>
	);
}

interface InfoCardProps {
	title: string;
	value: string | React.ReactNode;
}

function InfoCard({ title, value }: InfoCardProps) {
	return (
		<div className="bg-card rounded-lg border p-4">
			<h3 className="text-sm font-medium text-muted-foreground mb-1">
				{title}
			</h3>
			<p className="font-heading text-2xl font-semibold">{value}</p>
		</div>
	);
}
