import { StatusBadge } from "#/components/badges/status-badge";
import { MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

const MOTIVO_COLOR_CLASSES: Record<string, string> = {
	M: "bg-amber-500/10 text-amber-600 border-amber-500/20",
	D: "bg-red-500/10 text-red-600 border-red-500/20",
	U: "bg-blue-500/10 text-blue-600 border-blue-500/20",
	N: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
	R: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
	T: "bg-lime-500/10 text-lime-600 border-lime-500/20",
	L: "bg-lime-500/10 text-lime-600 border-lime-500/20",
};

export interface MotivoBadgeProps {
	value: string;
}

export function MotivoBadge({ value }: MotivoBadgeProps) {
	return (
		<StatusBadge
			value={value}
			labels={MOTIVO_LABELS}
			colorClasses={MOTIVO_COLOR_CLASSES}
			defaultVariant="outline"
			defaultClass={MOTIVO_COLOR_CLASSES.N}
		/>
	);
}
