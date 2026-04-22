import { Eye } from "lucide-react";
import { Button } from "#/components/ui/button";
import { ContractTabWrapper } from "#/features/cs/contract-tab-wrapper";
import { useContratoAtendimentos } from "#/features/cs/contratos/contratos-hooks";
import type { AtendimentoIXC } from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";

const ATENDIMENTO_COLUMNS = [
	"ID",
	"Ações",
	"Status",
	"Assunto",
	"Descrição",
	"Criado em",
	"Última Alteração",
];

interface ContratoAtendimentosTabProps {
	contratoId: number;
}

export function ContratoAtendimentosTab({
	contratoId,
}: ContratoAtendimentosTabProps) {
	const { data, isLoading, error } = useContratoAtendimentos(contratoId);
	const atendimentos = data?.data ?? [];

	return (
		<ContractTabWrapper
			title="Atendimentos"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar atendimentos"
			isEmpty={atendimentos.length === 0}
			emptyMessage="Nenhum atendimento encontrado"
			emptyColumns={ATENDIMENTO_COLUMNS}
		>
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead className="bg-muted/50">
						<tr>
							{ATENDIMENTO_COLUMNS.map((col) => (
								<th
									key={col}
									className="px-4 py-3 text-left font-medium min-w-20"
								>
									{col}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="divide-y divide-border">
						{atendimentos.map((atendimento: AtendimentoIXC) => (
							<tr key={atendimento.id}>
								<td className="px-4 py-3 font-medium">{atendimento.id}</td>
								<td className="px-4 py-3">
									<Button
										variant="ghost"
										size="sm"
										className="min-h-10 min-w-10 px-2 py-1"
									>
										<Eye className="size-4 mr-1" />
										Visualizar O.S.
									</Button>
								</td>
								<td className="px-4 py-3">{atendimento.status}</td>
								<td className="px-4 py-3">{atendimento.assunto}</td>
								<td className="px-4 py-3 max-w-xs truncate">
									{atendimento.descricao}
								</td>
								<td className="px-4 py-3">
									{formatDatePtBR(atendimento.data_criacao)}
								</td>
								<td className="px-4 py-3">
									{formatDatePtBR(atendimento.data_ultima_alteracao)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ContractTabWrapper>
	);
}
