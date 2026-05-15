import { Download, RefreshCw } from "lucide-react";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import {
	columns,
	type NegociacaoItem,
} from "#/features/cs/negociacoes/negociacoes-list-columns";

interface NegociacoesListProps {
	negociacoes?: NegociacaoItem[];
	isLoading?: boolean;
	hasInitialQueryData?: boolean;
	page?: number;
	totalCount?: number;
	totalPages?: number;
	pageSize?: number;
	onRefresh?: () => void;
	onExport?: () => void;
	onPageChange?: (page: number) => void;
	onPageSizeChange?: (pageSize: number) => void;
}

export function NegociacoesList({
	negociacoes = [],
	isLoading,
	hasInitialQueryData,
	page = 1,
	totalCount = 0,
	totalPages = 1,
	pageSize = 15,
	onRefresh,
	onExport,
	onPageChange,
	onPageSizeChange,
}: NegociacoesListProps) {
	return (
		<DataTableContainer
			columns={columns}
			data={negociacoes}
			isLoading={isLoading}
			hasInitialQueryData={hasInitialQueryData}
			total={totalCount}
			totalPages={totalPages}
			initialPage={page}
			initialPageSize={pageSize}
			emptyMessage="Nenhuma negociação encontrada"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={onRefresh}
						title="Atualizar"
					>
						<RefreshCw className="size-4" />
						<span className="hidden sm:inline">Atualizar</span>
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={onExport}
						title="Exportar"
					>
						<Download className="size-4" />
						<span className="hidden sm:inline">Exportar</span>
					</Button>
				</div>
				<span className="text-sm text-muted-foreground">
					Total de {totalCount} itens
				</span>
			</div>
		</DataTableContainer>
	);
}
