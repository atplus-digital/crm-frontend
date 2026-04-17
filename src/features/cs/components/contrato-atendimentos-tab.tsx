import { Eye } from "lucide-react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import { useContratoAtendimentos } from "#/features/cs/contratos/contratos-hooks";
import type { AtendimentoIXC } from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";

interface ContratoAtendimentosTabProps {
	contratoId: number;
}

export function ContratoAtendimentosTab({
	contratoId,
}: ContratoAtendimentosTabProps) {
	const { data, isLoading, error } = useContratoAtendimentos(contratoId);

	const atendimentos = data?.data ?? [];

	if (isLoading) {
		return (
			<Card>
				<CardHeader>
					<Skeleton className="h-6 w-32" />
				</CardHeader>
				<CardContent>
					<Skeleton className="h-40 w-full" />
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar atendimentos: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (atendimentos.length === 0) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Atendimentos</CardTitle>
				</CardHeader>
				<CardContent>
					<EmptyTable
						columns={[
							"ID",
							"Status",
							"Assunto",
							"Descrição",
							"Criado em",
							"Última Alteração",
						]}
						message="Nenhum atendimento encontrado"
					/>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Atendimentos</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead className="bg-muted/50">
							<tr>
								<th className="px-4 py-3 text-left font-medium min-w-20">ID</th>
								<th className="px-4 py-3 text-left font-medium min-w-30">
									Ações
								</th>
								<th className="px-4 py-3 text-left font-medium min-w-25">
									Status
								</th>
								<th className="px-4 py-3 text-left font-medium min-w-30">
									Assunto
								</th>
								<th className="px-4 py-3 text-left font-medium min-w-37.5">
									Descrição
								</th>
								<th className="px-4 py-3 text-left font-medium min-w-30">
									Criado em
								</th>
								<th className="px-4 py-3 text-left font-medium min-w-35">
									Última Alteração
								</th>
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
			</CardContent>
		</Card>
	);
}
