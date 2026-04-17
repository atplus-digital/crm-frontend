import {
	Download,
	FileArchive,
	FileAudio,
	FileImage,
	FileText,
	FileVideo,
} from "lucide-react";
import { Card, CardContent } from "#/components/ui/card";
import type { AnexosTrocaTitularidade } from "#/generated/nocobase/index";
import { formatDatePtBR, formatFileSize } from "#/lib/utils";

interface TrocaTitularidadeAttachmentsProps {
	attachments: AnexosTrocaTitularidade[];
}

function getFileIcon(mimeType: string) {
	if (mimeType.startsWith("image/")) {
		return FileImage;
	}

	if (mimeType.startsWith("video/")) {
		return FileVideo;
	}

	if (mimeType.startsWith("audio/")) {
		return FileAudio;
	}

	if (mimeType.includes("pdf")) {
		return FileText;
	}

	if (mimeType.includes("zip") || mimeType.includes("compressed")) {
		return FileArchive;
	}

	return FileText;
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
			{attachments.map((attachment) => {
				const Icon = getFileIcon(attachment.mimetype);
				const fileSize = formatFileSize(attachment.size);
				const uploadDate = formatDatePtBR(attachment.createdAt);

				return (
					<Card key={attachment.id} className="overflow-hidden">
						<CardContent className="p-4">
							<div className="flex items-center gap-3">
								<div className="flex-shrink-0">
									<Icon className="h-8 w-8 text-primary" />
								</div>

								<div className="flex-1 min-w-0">
									<a
										href={attachment.url}
										target="_blank"
										rel="noopener noreferrer"
										className="block text-sm font-medium text-foreground hover:underline truncate"
									>
										{attachment.filename}
									</a>

									<div className="mt-1 flex items-center justify-between">
										<span className="text-xs text-muted-foreground">
											{fileSize}
										</span>

										<div className="flex items-center gap-1 text-xs text-muted-foreground">
											<Download className="h-3 w-3" />
											<span>{uploadDate}</span>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
