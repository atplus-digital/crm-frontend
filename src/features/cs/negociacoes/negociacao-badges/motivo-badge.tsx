import { StatusBadge } from "#/components/badges/status-badge";
import { MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

const MOTIVO_COLOR_CLASSES: Record<keyof typeof MOTIVO_LABELS, string> = {
	I: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
	M: "bg-amber-500/10 text-amber-600 border-amber-500/20",
	D: "bg-red-500/10 text-red-600 border-red-500/20",
	U: "bg-blue-500/10 text-blue-600 border-blue-500/20",
	N: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
	R: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
	T: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
	L: "bg-teal-500/10 text-teal-600 border-teal-500/20",
	S: "bg-pink-500/10 text-pink-600 border-pink-500/20",
	P: "bg-gray-500/10 text-gray-600 border-gray-500/20",
};

interface MotivoBadgeProps {
	value: keyof typeof MOTIVO_LABELS;
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
