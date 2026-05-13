import { Link2 } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface ContratoCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function ContratoCard({ suspensaoContrato }: ContratoCardProps) {
	return (
		<DetailSection
			title="Contrato e Link para Assinatura"
			description="Documentos e links"
			icon={<Link2 className="size-4" />}
		>
			<div className="space-y-4">
				<DetailField label="Contratos">
					{suspensaoContrato.f_contratos &&
					suspensaoContrato.f_contratos.length > 0 ? (
						<div className="space-y-2">
							{suspensaoContrato.f_contratos.map((contrato) => (
								<div key={contrato.id}>
									<a
										href={contrato.url || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										{contrato.title || `Contrato ${contrato.id}`}
									</a>
								</div>
							))}
						</div>
					) : (
						"Após assinado o contrato irá aparecer aqui."
					)}
				</DetailField>
				<DetailField label="Link para Assinatura">
					{suspensaoContrato.f_link_assinatura ? (
						<a
							href={suspensaoContrato.f_link_assinatura}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							Abrir link
						</a>
					) : (
						"—"
					)}
				</DetailField>
			</div>
		</DetailSection>
	);
}
