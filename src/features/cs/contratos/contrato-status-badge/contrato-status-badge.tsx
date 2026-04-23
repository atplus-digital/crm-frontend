import { StatusBadge } from "#/components/badges/status-badge";
import { CONTRATO_STATUS_LABELS } from "#/features/cs/contratos/contratos-types";

export const contratoStatusClasses: Record<string, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	I: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	C: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

export function ContratoStatusBadge({ status }: { status: string }) {
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
