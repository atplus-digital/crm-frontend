import { AttachmentGrid } from "#/components/attachments";
import type { AnexosTrocaTitularidade } from "#/generated/nocobase/index";

interface TrocaTitularidadeAttachmentsProps {
	attachments: AnexosTrocaTitularidade[];
}

export function TrocaTitularidadeAttachments({
	attachments,
}: TrocaTitularidadeAttachmentsProps) {
	return (
		<AttachmentGrid
			attachments={attachments}
			isLoading={false}
			error={null}
			emptyMessage="Nenhum anexo"
			columns={{ sm: 2, lg: 3 }}
			showActions={false}
		/>
	);
}
