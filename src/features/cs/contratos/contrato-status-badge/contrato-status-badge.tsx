import { StatusBadge } from "#/components/badges/status-badge";
import type { BadgeColor } from "#/components/ui/badge";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoStatus,
} from "#/features/cs/contratos/contratos-types";

const contratoStatusColorMap: Record<ContratoStatus, BadgeColor> = {
	A: "emerald",
	I: "gray",
	D: "red",
	C: "amber",
	P: "blue",
	N: "red",
};

export function ContratoStatusBadge({ status }: { status: ContratoStatus }) {
	return (
		<StatusBadge
			value={status}
			labels={CONTRATO_STATUS_LABELS}
			colorMap={contratoStatusColorMap}
			variant="badge"
			defaultVariant="outline"
		/>
	);
}
