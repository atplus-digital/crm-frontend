import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
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
import { useContratoMovel } from "#/features/cs/contratos-hooks";

interface ContratoMovelTabProps {
	contratoId: number;
}

function MovelTableSkeleton() {
	return (
		<div className="space-y-2">
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
		</div>
	);
}

export function ContratoMovelTab({ contratoId }: ContratoMovelTabProps) {
	const { data, isLoading, error } = useContratoMovel(contratoId);

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar linhas móveis: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	const linhas = data?.data ?? [];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Móvel</CardTitle>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<MovelTableSkeleton />
				) : linhas.length === 0 ? (
					<EmptyTable
						columns={[
							"DDD",
							"Número",
							"ID Contrato",
							"Dia Recorrência",
							"Portabilidade",
							"SIMCARD",
						]}
						message="Nenhuma linha móvel encontrada"
					/>
				) : (
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>DDD</TableHead>
									<TableHead>Número</TableHead>
									<TableHead>ID Contrato</TableHead>
									<TableHead>Dia Recorrência</TableHead>
									<TableHead>Portabilidade</TableHead>
									<TableHead>SIMCARD</TableHead>
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
				)}
			</CardContent>
		</Card>
	);
}
