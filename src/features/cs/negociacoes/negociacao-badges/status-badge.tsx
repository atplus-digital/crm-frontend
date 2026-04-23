import { StatusBadgeGroup } from "#/components/badges/status-badge";
import {
	NEGOCIACAO_STATUS_LABELS,
	NEGOCIACAO_STATUS_VARIANTS,
	NEGOCIACAO_SUBSTATUS_LABELS,
	NEGOCIACAO_SUBSTATUS_VARIANTS,
} from "#/features/cs/negociacoes/negociacoes-types";

export interface StatusBadgeProps {
	status: string;
	substatus?: string;
}

export function StatusBadge({ status, substatus }: StatusBadgeProps) {
	return (
		<StatusBadgeGroup
			status={status}
			substatus={substatus}
			statusLabels={NEGOCIACAO_STATUS_LABELS}
			substatusLabels={NEGOCIACAO_SUBSTATUS_LABELS}
			statusVariants={NEGOCIACAO_STATUS_VARIANTS}
			substatusVariants={NEGOCIACAO_SUBSTATUS_VARIANTS}
		/>
	);
}
