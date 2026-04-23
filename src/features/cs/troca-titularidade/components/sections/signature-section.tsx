import { Link2 } from "lucide-react";
import { DetailField } from "#/features/cs/detail-field";
import { DetailSection } from "#/features/cs/detail-section";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface SignatureSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function SignatureSection({
	trocaTitularidade: data,
}: SignatureSectionProps) {
	return (
		<DetailSection
			title="Assinaturas"
			description="Links de assinatura digital (ZapSign)"
			icon={<Link2 className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<DetailField label="Assinatura Cedente">
					{data.f_link_assinatura_cedente ? (
						<a
							href={data.f_link_assinatura_cedente}
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
				<DetailField label="Assinatura Cessionário">
					{data.f_link_assinatura_cessionario ? (
						<a
							href={data.f_link_assinatura_cessionario}
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
