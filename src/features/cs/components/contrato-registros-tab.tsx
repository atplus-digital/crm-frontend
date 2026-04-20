import { StatusBadge } from "#/components/badges/status-badge";
import { ContractTabWrapper } from "#/components/contract/contract-tab-wrapper";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { useContratoRegistros } from "#/features/cs/contratos/contratos-hooks";
import { formatDatePtBR } from "#/lib/utils";

const REGISTROS_COLUMNS = [
	"Categoria",
	"Motivo do Contato",
	"Nota Vendas",
	"Nota Técnico",
	"Há Pendência?",
	"Criado em",
	"Criado por",
];

const BOOLEAN_LABELS: Record<string, string> = { true: "Sim", false: "Não" };
const BOOLEAN_COLOR_CLASSES: Record<string, string> = {
	true: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
	false: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
};

interface ContratoRegistrosTabProps {
	contratoId: number;
}

export function ContratoRegistrosTab({
	contratoId,
}: ContratoRegistrosTabProps) {
	const { data, isLoading, error } = useContratoRegistros(contratoId);
	const registros = data?.data ?? [];

	return (
		<ContractTabWrapper
			title="Registros de Contato"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar registros de contato"
			isEmpty={registros.length === 0}
			emptyMessage="Nenhum registro encontrado"
			emptyColumns={REGISTROS_COLUMNS}
		>
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Categoria</TableHead>
							<TableHead>Motivo do Contato</TableHead>
							<TableHead>Nota Vendas</TableHead>
							<TableHead>Nota Técnico</TableHead>
							<TableHead>Há Pendência?</TableHead>
							<TableHead>Criado em</TableHead>
							<TableHead>Criado por</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{registros.map((registro) => (
							<TableRow key={registro.id}>
								<TableCell>{registro.categoria || "—"}</TableCell>
								<TableCell>{registro.motivo_contato || "—"}</TableCell>
								<TableCell>{registro.nota_vendas || "—"}</TableCell>
								<TableCell>{registro.nota_tecnico || "—"}</TableCell>
								<TableCell>
									<StatusBadge
										value={registro.pendencia ? "true" : "false"}
										labels={BOOLEAN_LABELS}
										colorClasses={BOOLEAN_COLOR_CLASSES}
										variant="inline"
									/>
								</TableCell>
								<TableCell>{formatDatePtBR(registro.data_criacao)}</TableCell>
								<TableCell>{registro.criado_por || "—"}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</ContractTabWrapper>
	);
}
