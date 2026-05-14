import { FileText, Link2 } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface SuspensaoContratoContratoLinkCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function SuspensaoContratoContratoLinkCard({
	suspensaoContrato,
}: SuspensaoContratoContratoLinkCardProps) {
	const linkAssinatura = suspensaoContrato.f_link_assinatura as
		| string
		| undefined;
	const contratos = suspensaoContrato.f_contratos as unknown[] | undefined;

	return (
		<DetailSection
			title="Contrato e Link para Assinatura"
			description="Documento do contrato e link de verificação ZapSign"
			icon={<FileText className="size-4" />}
		>
			<div className="grid grid-cols-2 gap-4">
				<DetailField label="Contrato">
					{contratos && contratos.length > 0
						? "Contrato disponível"
						: "Nenhum contrato"}
				</DetailField>
				<DetailField label="Link">
					{linkAssinatura ? (
						<a
							href={linkAssinatura}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-primary underline"
						>
							<Link2 className="size-3" />
							Verificar assinatura
						</a>
					) : (
						"—"
					)}
				</DetailField>
			</div>
		</DetailSection>
	);
}
