import { Users } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface RelationshipsSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function RelationshipsSection({
	trocaTitularidade: data,
}: RelationshipsSectionProps) {
	return (
		<DetailSection
			title="Relacionamentos"
			description="Vendedor e pessoas associadas"
			icon={<Users className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Vendedor">
					{data.f_vendedor?.nickname ?? "—"}
				</DetailField>
				<DetailField label="Pessoa (PF)">
					{data.f_pessoa_pf?.f_nome ?? "—"}
				</DetailField>
				<DetailField label="Pessoa (PJ)">
					{data.f_pessoa_pj?.f_razao_social ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
