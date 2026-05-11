import { StatusBadge } from "#/components/badges/status-badge";
import {
	INTERNET_STATUS_LABELS,
	type InternetStatus,
} from "#/features/cs/contratos/contratos-types";

export const internetStatusClasses: Record<InternetStatus, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	FA: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	CM: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	CA: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	CE: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
	AA: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};

export function InternetStatusBadge({ status }: { status: InternetStatus }) {
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
