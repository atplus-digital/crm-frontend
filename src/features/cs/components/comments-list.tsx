import { MessageSquare } from "lucide-react";
import { DetailSection } from "#/features/cs/components/detail-section";
import { formatDatePtBR } from "#/lib/utils";

/** Common shape for all NocoBase comment types */
export interface CommentBase {
	id: number;
	f_comentario: string;
	createdAt: string;
}

interface CommentsListProps<T extends CommentBase> {
	comments: T[] | undefined;
	title?: string;
	description?: string;
}

export function CommentsList<T extends CommentBase>({
	comments,
	title = "Comentários",
	description = "Observações registradas",
}: CommentsListProps<T>) {
	if (!comments || comments.length === 0) {
		return null;
	}

	return (
		<DetailSection
			title={title}
			description={description}
			icon={<MessageSquare className="size-4" />}
		>
			<div className="space-y-4">
				{comments.map((comentario) => (
					<div key={comentario.id} className="border-b pb-3 last:border-b-0">
						<div className="flex justify-between items-start gap-2">
							<p className="text-sm">{comentario.f_comentario}</p>
							<span className="text-xs text-muted-foreground shrink-0">
								{formatDatePtBR(comentario.createdAt)}
							</span>
						</div>
					</div>
				))}
			</div>
		</DetailSection>
	);
}
