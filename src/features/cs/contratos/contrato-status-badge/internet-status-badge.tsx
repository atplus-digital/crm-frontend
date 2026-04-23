import { StatusBadge } from "#/components/badges/status-badge";
import { INTERNET_STATUS_LABELS } from "#/features/cs/contratos/contratos-types";

export const internetStatusClasses: Record<string, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	FA: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

export function InternetStatusBadge({ status }: { status: string }) {
	return (
		<StatusBadge
			value={status}
			labels={INTERNET_STATUS_LABELS}
			colorClasses={internetStatusClasses}
			variant="badge"
			defaultVariant="outline"
		/>
	);
}
