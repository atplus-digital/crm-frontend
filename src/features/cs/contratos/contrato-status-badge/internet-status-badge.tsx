import { StatusBadge } from "#/components/badges/status-badge";
import type { BadgeColor } from "#/components/ui/badge";
import {
	INTERNET_STATUS_LABELS,
	type InternetStatus,
} from "#/features/cs/contratos/contratos-types";

const internetStatusColorMap: Record<InternetStatus, BadgeColor> = {
	A: "emerald",
	D: "red",
	FA: "amber",
	CM: "orange",
	CA: "orange",
	CE: "purple",
	AA: "blue",
};

export function InternetStatusBadge({ status }: { status: InternetStatus }) {
	return (
		<StatusBadge
			value={status}
			labels={INTERNET_STATUS_LABELS}
			colorMap={internetStatusColorMap}
			variant="badge"
			defaultVariant="outline"
		/>
	);
}
