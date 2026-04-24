import {
	Database,
	FilePlus,
	FolderOpen,
	Phone,
	Smartphone,
} from "lucide-react";
import { Outlet, useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/page-layout/page-layout";
import { Skeleton } from "#/components/ui/skeleton";
import { BackButton } from "#/features/cs/components/back-button";
import { useContratoById } from "#/features/cs/contratos/contratos-hooks";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { routePaths } from "#/routes/route-paths";

export interface ContratoDetailOutletContext {
	contrato: ContratoWithCliente | null;
	isLoading: boolean;
}

export function ContratoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const contratoId = Number(id);
	const { data: contrato, isLoading, error } = useContratoById(contratoId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar contrato: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<PageLayout
			prefixElement={<BackButton fallbackTo={routePaths.cs_contratos} />}
			title={
				isLoading ? (
					<Skeleton className="h-7 w-48" />
				) : (
					`Contrato #${contrato?.id ?? id}`
				)
			}
			subtitle={
				!isLoading && contrato?.contrato ? contrato.contrato : undefined
			}
			tabs={[
				{
					value: "detalhes",
					label: "Detalhes",
					icon: <Database className="size-4" />,
				},
				{ value: "movel", label: "Móvel", icon: <Phone className="size-4" /> },
				{
					value: "negociacoes",
					label: "Negociações",
					icon: <FolderOpen className="size-4" />,
				},
				{
					value: "atendimentos",
					label: "Atendimentos IXC",
					icon: <Smartphone className="size-4" />,
				},
				{
					value: "registros",
					label: "Registros",
					icon: <FilePlus className="size-4" />,
				},
			]}
			defaultTab="detalhes"
		>
			<div className="mx-auto max-w-400">
				<Outlet
					context={
						{
							contrato: contrato ?? null,
							isLoading,
						} satisfies ContratoDetailOutletContext
					}
				/>
			</div>
		</PageLayout>
	);
}
