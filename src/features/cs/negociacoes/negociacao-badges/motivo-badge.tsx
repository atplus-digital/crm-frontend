import { StatusBadge } from "#/components/badges/status-badge";
import type { BadgeColor } from "#/components/ui/badge";
import { MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

const MOTIVO_COLOR_MAP: Record<keyof typeof MOTIVO_LABELS, BadgeColor> = {
	I: "emerald",
	M: "amber",
	D: "red",
	U: "blue",
	N: "yellow",
	R: "cyan",
	T: "indigo",
	L: "teal",
	S: "pink",
	P: "gray",
};

interface MotivoBadgeProps {
	value: keyof typeof MOTIVO_LABELS;
}

export function MotivoBadge({ value }: MotivoBadgeProps) {
	return (
		<StatusBadge
			value={value}
			labels={MOTIVO_LABELS}
			colorMap={MOTIVO_COLOR_MAP}
			defaultVariant="soft"
			defaultColor="gray"
		/>
	);
}
