import { CommentCard } from "#/components/comments";
import type { TrocasdetitularidadeComentarios } from "#/generated/nocobase/index";
import type { Users } from "#/generated/nocobase/users";
import { formatDatePtBR, getInitials } from "#/lib/utils";

interface TrocaTitularidadeComment extends TrocasdetitularidadeComentarios {
	createdBy?: Users | null;
}

interface TrocaTitularidadeCommentsProps {
	comments: TrocaTitularidadeComment[];
}

export function TrocaTitularidadeComments({
	comments,
}: TrocaTitularidadeCommentsProps) {
	if (!comments || comments.length === 0) {
		return (
			<div className="flex items-center justify-center py-8 text-muted-foreground">
				<p>Nenhum comentário</p>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			{comments.map((comment) => {
				const author = comment.createdBy;
				const authorName = author?.nickname || author?.email || "Anônimo";
				return (
					<CommentCard
						key={comment.id}
						authorName={authorName}
						avatarFallback={getInitials(authorName)}
						timestamp={formatDatePtBR(comment.createdAt)}
					>
						{comment.f_comentario}
					</CommentCard>
				);
			})}
		</div>
	);
}
