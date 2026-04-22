import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { ContractTabWrapper } from "#/features/cs/contract-tab-wrapper";
import { useContratoMovel } from "#/features/cs/contratos/contratos-hooks";

const MOVEL_COLUMNS = [
	"DDD",
	"Número",
	"ID Contrato",
	"Dia Recorrência",
	"Portabilidade",
	"SIMCARD",
];

interface ContratoMovelTabProps {
	contratoId: number;
}

export function ContratoMovelTab({ contratoId }: ContratoMovelTabProps) {
	const { data, isLoading, error } = useContratoMovel(contratoId);
	const linhas = data?.data ?? [];

	return (
		<ContractTabWrapper
			title="Móvel"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar linhas móveis"
			isEmpty={linhas.length === 0}
			emptyMessage="Nenhuma linha móvel encontrada"
			emptyColumns={MOVEL_COLUMNS}
		>
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							{MOVEL_COLUMNS.map((col) => (
								<TableHead key={col}>{col}</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{linhas.map((linha) => (
							<TableRow key={linha.id}>
								<TableCell>{linha.ddd_telefone}</TableCell>
								<TableCell>{linha.numero_telefone}</TableCell>
								<TableCell>{linha.id_contrato}</TableCell>
								<TableCell>{linha.dia_recorrencia}</TableCell>
								<TableCell>{linha.portabilidade}</TableCell>
								<TableCell>{linha.simcard}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</ContractTabWrapper>
	);
}
