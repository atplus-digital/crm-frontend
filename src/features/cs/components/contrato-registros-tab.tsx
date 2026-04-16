import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { useContratoRegistros } from "#/features/cs/contratos-hooks";
import { formatDatePtBR } from "#/lib/utils";

interface ContratoRegistrosTabProps {
	contratoId: number;
}

function RegistrosTableSkeleton() {
	return (
		<div className="space-y-2">
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
		</div>
	);
}

export function ContratoRegistrosTab({
	contratoId,
}: ContratoRegistrosTabProps) {
	const { data, isLoading, error, refetch } = useContratoRegistros(contratoId);

	if (error) {
		return (
			<div className="space-y-2">
				<InlineErrorAlert>
					Erro ao carregar registros de contato: {(error as Error).message}
				</InlineErrorAlert>
				<Button variant="outline" size="sm" onClick={() => refetch()}>
					Tentar novamente
				</Button>
			</div>
		);
	}

	const registros = data?.data ?? [];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Registros de Contato</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<RegistrosTableSkeleton />
				) : registros.length === 0 ? (
					<EmptyTable
						columns={[
							"Categoria",
							"Motivo do Contato",
							"Nota Vendas",
							"Nota Técnico",
							"Há Pendência?",
							"Criado em",
							"Criado por",
						]}
						message="Nenhum registro encontrado"
					/>
				) : (
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
											{registro.pendencia ? (
												<span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
													Sim
												</span>
											) : (
												<span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
													Não
												</span>
											)}
										</TableCell>
										<TableCell>
											{formatDatePtBR(registro.data_criacao)}
										</TableCell>
										<TableCell>{registro.criado_por || "—"}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
