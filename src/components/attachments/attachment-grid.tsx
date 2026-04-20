import { Paperclip } from "lucide-react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { AttachmentCard } from "./attachment-card";
import { AttachmentSkeleton } from "./attachment-skeleton";

interface Attachment {
	id: number | string;
	filename: string;
	title?: string;
	url: string;
	size: number;
	createdAt: string;
	mimetype: string;
	extname?: string;
}

interface AttachmentGridProps {
	attachments: Attachment[];
	isLoading?: boolean;
	error?: Error | null;
	emptyMessage?: string;
	columns?: { sm: number; lg: number };
	className?: string;
}

export function AttachmentGrid({
	attachments = [],
	isLoading = false,
	error = null,
	emptyMessage = "Nenhum anexo encontrado",
	columns = { sm: 2, lg: 3 },
	className = "",
}: AttachmentGridProps) {
	const gridClasses = getGridClasses(columns);

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar anexos: {error.message}
			</InlineErrorAlert>
		);
	}

	if (isLoading) {
		return (
			<div className={`${gridClasses} gap-4 ${className}`}>
				{Array.from({ length: 6 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Only used for skeleton loading state
					<AttachmentSkeleton key={i} />
				))}
			</div>
		);
	}

	if (attachments.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<Paperclip className="size-12 text-muted-foreground/50 mb-4" />
				<p className="text-lg font-medium text-muted-foreground">
					{emptyMessage}
				</p>
			</div>
		);
	}

	return (
		<div className={`${gridClasses} gap-4 ${className}`}>
			{attachments.map((attachment) => (
				<AttachmentCard
					key={`${attachment.id}-${attachment.filename}`}
					filename={attachment.filename}
					title={attachment.title}
					url={attachment.url}
					size={attachment.size}
					createdAt={attachment.createdAt}
					mimetype={attachment.mimetype}
					extname={attachment.extname}
				/>
			))}
		</div>
	);
}

const getGridClasses = (columns: { sm: number; lg: number }): string => {
	const smCols = `sm:grid-cols-${columns.sm}`;
	const lgCols = `lg:grid-cols-${columns.lg}`;
	return `grid grid-cols-1 ${smCols} ${lgCols}`;
};
