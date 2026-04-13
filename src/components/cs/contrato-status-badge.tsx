import { Badge } from "#/components/ui/badge";
import {
	CONTRATO_STATUS_LABELS,
	INTERNET_STATUS_LABELS,
} from "#/modules/cs/contratos-types";

const contratoStatusClasses: Record<string, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	I: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	C: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

const internetStatusClasses: Record<string, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	FA: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

export function ContratoStatusBadge({ status }: { status: string }) {
	const label =
		CONTRATO_STATUS_LABELS[status as keyof typeof CONTRATO_STATUS_LABELS] ??
		status;
	const className =
		contratoStatusClasses[status] ??
		"bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400";

	return (
		<Badge variant="outline" className={className}>
			{label}
		</Badge>
	);
}

export function InternetStatusBadge({ status }: { status: string }) {
	const label =
		INTERNET_STATUS_LABELS[status as keyof typeof INTERNET_STATUS_LABELS] ??
		status;
	const className =
		internetStatusClasses[status] ??
		"bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400";

	return (
		<Badge variant="outline" className={className}>
			{label}
		</Badge>
	);
}
