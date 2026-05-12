import { StatusBadge } from "#/components/badges/status-badge";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoStatus,
} from "#/features/cs/contratos/contratos-types";

const contratoStatusClasses: Record<ContratoStatus, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	I: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	C: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	P: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	N: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export function ContratoStatusBadge({ status }: { status: ContratoStatus }) {
	return (
		<StatusBadge
			value={status}
			labels={CONTRATO_STATUS_LABELS}
			colorClasses={contratoStatusClasses}
			variant="badge"
			defaultVariant="outline"
		/>
	);
}
