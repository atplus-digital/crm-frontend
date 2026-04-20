import { CommentCard, CommentList } from "#/components/comments";
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
	return (
		<CommentList
			comments={comments}
			isLoading={false}
			error={null}
			emptyMessage="Nenhum comentário"
			renderComment={(comment) => {
				const author = comment.createdBy;
				const authorName = author?.nickname || author?.email || "Anônimo";
				return (
					<CommentCard
						authorName={authorName}
						avatarFallback={getInitials(authorName)}
						timestamp={formatDatePtBR(comment.createdAt)}
					>
						{comment.f_comentario}
					</CommentCard>
				);
			}}
		/>
	);
}
