import { FileText } from "lucide-react";
import { DetailSection } from "#/features/cs/detail-section";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface AttachmentsSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function AttachmentsSection({
	trocaTitularidade,
}: AttachmentsSectionProps) {
	if (!trocaTitularidade.f_anexos || trocaTitularidade.f_anexos.length === 0) {
		return null;
	}

	return (
		<DetailSection
			title="Anexos"
			description="Documentos anexados à transferência"
			icon={<FileText className="size-4" />}
		>
			<div className="space-y-2">
				{trocaTitularidade.f_anexos.map((anexo) => (
					<div key={anexo.id} className="flex items-center gap-2">
						<FileText className="size-4 text-muted-foreground" />
						<a
							href={anexo.url || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							{anexo.title || `Anexo ${anexo.id}`}
						</a>
					</div>
				))}
			</div>
		</DetailSection>
	);
}
