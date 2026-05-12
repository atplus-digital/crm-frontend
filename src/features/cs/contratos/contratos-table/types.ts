import type { ReactNode } from "react";
import type {
	ContratoFilters,
	ContratoWithCliente,
} from "#/features/cs/contratos/contratos-types";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

export interface ContratosTableProps {
	contratos: ContratoWithCliente[];
	isLoading?: boolean;
	hasInitialQueryData?: boolean;
	sort: string[];
	onSort: (field: string) => void;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
	onFilterChange: (filters: ContratoFilters) => void;
	onFilterProvider?: (filters: Record<string, unknown>) => void;
	children?: ReactNode;
}
