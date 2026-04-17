import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import { useContratoTrocasTitularidade } from "#/features/cs/contratos/contratos-hooks";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

interface ContratoNegociacoesTabProps {
	contratoId: number;
}

export function ContratoNegociacoesTab({
	contratoId,
}: ContratoNegociacoesTabProps) {
	const {
		data: trocasTitularidadeData,
		isLoading: isLoadingTrocas,
		isError: isErrorTrocas,
		refetch: refetchTrocas,
	} = useContratoTrocasTitularidade(contratoId);
	const {
		data: negociacoesData,
		isLoading: isLoadingNegociacoes,
		isError: isErrorNegociacoes,
		refetch: refetchNegociacoes,
	} = useNegociacoes({
		page: 1,
		pageSize: 50,
		filters: { contratoId },
	});

	const trocas = trocasTitularidadeData?.data ?? [];
	const negociacoes = negociacoesData?.data ?? [];

	const isLoading = isLoadingTrocas || isLoadingNegociacoes;
	const isError = isErrorTrocas || isErrorNegociacoes;

	if (isError) {
		return (
			<InlineErrorAlert>
				<div className="flex flex-col gap-2">
					<span>Erro ao carregar negociações.</span>
					<Button
						variant="outline"
						size="sm"
						onClick={() => {
							refetchTrocas();
							refetchNegociacoes();
						}}
					>
						Tentar novamente
					</Button>
				</div>
			</InlineErrorAlert>
		);
	}

	if (isLoading) {
		return <NegociacoesSkeleton />;
	}

	return (
		<div className="flex flex-col gap-6">
			<Card>
				<CardHeader>
					<CardTitle>Troca de Titularidade</CardTitle>
					<CardDescription>
						Trocas de titularidade para este contrato
					</CardDescription>
				</CardHeader>
				<CardContent>
					{isLoadingTrocas ? (
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
						</div>
					) : trocas.length === 0 ? (
						<EmptyTable
							columns={[
								"Cedente",
								"Documento Cedente",
								"Cessionário",
								"Documento Cessionário",
								"Status",
								"Contrato",
							]}
							message="Nenhuma troca de titularidade encontrada"
						/>
					) : (
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead className="bg-muted">
									<tr>
										<th className="px-4 py-2 text-left">Cedente</th>
										<th className="px-4 py-2 text-left">Documento</th>
										<th className="px-4 py-2 text-left">Cessionário</th>
										<th className="px-4 py-2 text-left">Documento</th>
										<th className="px-4 py-2 text-left">Status</th>
										<th className="px-4 py-2 text-left">Contrato</th>
									</tr>
								</thead>
								<tbody>
									{trocas.map((troca) => (
										<tr key={troca.id} className="border-b">
											<td className="px-4 py-2">{troca.cedente || "—"}</td>
											<td className="px-4 py-2">
												{troca.documento_cedente || "—"}
											</td>
											<td className="px-4 py-2">{troca.cessionario || "—"}</td>
											<td className="px-4 py-2">
												{troca.documento_cessionario || "—"}
											</td>
											<td className="px-4 py-2">{troca.status || "—"}</td>
											<td className="px-4 py-2">{troca.id_contrato || "—"}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Renovações</CardTitle>
					<CardDescription>Renovações para este contrato</CardDescription>
				</CardHeader>
				<CardContent>
					{negociacoes && negociacoes.length > 0 ? (
						<div className="overflow-x-auto">
							<table className="w-full text-sm">
								<thead className="bg-muted">
									<tr>
										<th className="px-4 py-2 text-left font-medium">Título</th>
										<th className="px-4 py-2 text-left font-medium">
											Valor Mensal
										</th>
										<th className="px-4 py-2 text-left font-medium">
											Criado em
										</th>
										<th className="px-4 py-2 text-left font-medium">
											Vendedor
										</th>
										<th className="px-4 py-2 text-left font-medium">Status</th>
										<th className="px-4 py-2 text-left font-medium">
											Contrato
										</th>
										<th className="px-4 py-2 text-left font-medium">
											Itens Negociação
										</th>
									</tr>
								</thead>
								<tbody>
									{negociacoes.map((neg) => (
										<tr key={neg.id} className="border-t">
											<td className="px-4 py-2">{neg.f_titulo ?? "—"}</td>
											<td className="px-4 py-2">
												{neg.f_valor_mensal
													? formatCurrency(neg.f_valor_mensal)
													: "—"}
											</td>
											<td className="px-4 py-2">
												{formatDatePtBR(neg.createdAt)}
											</td>
											<td className="px-4 py-2">
												{neg.f_vendedor?.nickname ?? "—"}
											</td>
											<td className="px-4 py-2">{neg.f_status ?? "—"}</td>
											<td className="px-4 py-2">{neg.f_contrato_ixc ?? "—"}</td>
											<td className="px-4 py-2">—</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<EmptyTable
							columns={[
								"Título",
								"Valor Mensal",
								"Criado em",
								"Vendedor",
								"Status",
								"Contrato",
								"Itens Negociação",
							]}
							message="Nenhuma renovação encontrada"
						/>
					)}
				</CardContent>
			</Card>
		</div>
	);
}

function NegociacoesSkeleton() {
	return (
		<div className="flex flex-col gap-6">
			<Card>
				<CardHeader>
					<Skeleton className="h-6 w-48" />
					<Skeleton className="h-4 w-64" />
				</CardHeader>
				<CardContent>
					<Skeleton className="h-32 w-full" />
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<Skeleton className="h-6 w-48" />
					<Skeleton className="h-4 w-64" />
				</CardHeader>
				<CardContent>
					<Skeleton className="h-32 w-full" />
				</CardContent>
			</Card>
		</div>
	);
}
