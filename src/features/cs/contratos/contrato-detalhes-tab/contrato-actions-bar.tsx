import {
	ArrowRightLeft,
	FileWarning,
	MapPin,
	Pause,
	Plus,
	RefreshCw,
} from "lucide-react";
import { Button } from "#/components/ui/button";
import { Separator } from "#/components/ui/separator";
import { cn } from "#/lib/utils";

const ACTIONS = [
	{
		icon: Plus,
		label: "Nova Contratação",
		variant: "default" as const,
	},
	{
		icon: ArrowRightLeft,
		label: "Transferir",
		variant: "outline" as const,
	},
	{
		icon: RefreshCw,
		label: "Renegociar",
		variant: "outline" as const,
	},
	{
		icon: MapPin,
		label: "Trocar Endereço",
		variant: "outline" as const,
	},
	{
		icon: Pause,
		label: "Suspender",
		variant: "outline" as const,
	},
	{
		icon: FileWarning,
		label: "Reter",
		variant: "outline" as const,
	},
] as const;

interface ContratoActionsBarProps {
	className?: string;
}

export function ContratoActionsBar({ className }: ContratoActionsBarProps) {
	return (
		<div
			className={cn(
				"flex flex-wrap items-center gap-2 rounded-lg border bg-card px-4 py-3",
				className,
			)}
		>
			<span className="text-sm font-medium text-muted-foreground">
				Ações rápidas:
			</span>
			<Separator orientation="vertical" className="h-6" />
			{ACTIONS.map((action) => (
				<Button
					key={action.label}
					variant={action.variant}
					size="sm"
					className="gap-1.5"
				>
					<action.icon className="size-4" />
					<span className="hidden sm:inline">{action.label}</span>
				</Button>
			))}
		</div>
	);
}
