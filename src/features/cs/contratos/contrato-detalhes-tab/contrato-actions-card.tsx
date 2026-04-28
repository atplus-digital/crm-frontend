import {
	ArrowRightLeft,
	FileWarning,
	MapPin,
	Pause,
	TrendingUp,
	Unlock,
	UserPlus,
} from "lucide-react";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

const ACTIONS = [
	{
		icon: UserPlus,
		label: "Nova Contratação",
		variant: "default" as const,
		disabled: false,
	},
	{
		icon: ArrowRightLeft,
		label: "Transferir Titularidade",
		variant: "outline" as const,
		disabled: false,
	},
	{
		icon: TrendingUp,
		label: "Abrir Renegociação",
		variant: "outline" as const,
		disabled: false,
	},
	{
		icon: MapPin,
		label: "Troca de Endereço",
		variant: "outline" as const,
		disabled: false,
	},
	{
		icon: Pause,
		label: "Suspensão de Contrato",
		variant: "outline" as const,
		disabled: false,
	},
	{
		icon: FileWarning,
		label: "Retenção Contratual",
		variant: "outline" as const,
		disabled: false,
	},
	{
		icon: Unlock,
		label: "Desbloqueio em Confiança",
		variant: "secondary" as const,
		disabled: true,
	},
] as const;

export function ContratoActionsCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Ações</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					{ACTIONS.map((action) => (
						<Button
							key={action.label}
							variant={action.variant}
							size="sm"
							disabled={action.disabled}
						>
							<action.icon className="mr-2 size-4" />
							{action.label}
						</Button>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
