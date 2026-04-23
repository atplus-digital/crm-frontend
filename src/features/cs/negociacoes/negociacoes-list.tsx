import { Download, RefreshCw } from "lucide-react";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import {
	columns,
	type NegociacaoItem,
} from "#/features/cs/negociacoes/negociacoes-list-columns";

interface NegociacoesListProps {
	negociacoes?: NegociacaoItem[];
	totalCount?: number;
	onRefresh?: () => void;
	onExport?: () => void;
}

export function NegociacoesList({
	negociacoes = [],
	totalCount = 0,
	onRefresh,
	onExport,
}: NegociacoesListProps) {
	return (
		<DataTableContainer
			columns={columns}
			data={negociacoes}
			total={totalCount}
			emptyMessage="Nenhuma negociação encontrada"
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
