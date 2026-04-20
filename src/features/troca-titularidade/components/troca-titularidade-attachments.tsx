import { AttachmentCard } from "#/components/attachments";
import type { AnexosTrocaTitularidade } from "#/generated/nocobase/index";

interface TrocaTitularidadeAttachmentsProps {
	attachments: AnexosTrocaTitularidade[];
}

export function TrocaTitularidadeAttachments({
	attachments,
}: TrocaTitularidadeAttachmentsProps) {
	if (!attachments || attachments.length === 0) {
		return (
			<div className="flex items-center justify-center py-8 text-muted-foreground">
				<p>Nenhum anexo</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{attachments.map((attachment) => (
				<AttachmentCard
					key={attachment.id}
					filename={attachment.filename}
					url={attachment.url}
					size={attachment.size}
					createdAt={attachment.createdAt}
					mimetype={attachment.mimetype}
					extname={attachment.extname}
					showActions={false}
				/>
			))}
		</div>
	);
}
