import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { CommentSkeleton } from "./negociacao-comentarios-skeleton";

interface CommentItem {
	id: number;
	createdAt: string;
	createdBy?: {
		nickname?: string;
		email?: string;
	} | null;
}

interface CommentListProps<T extends CommentItem = CommentItem> {
	comments: T[] | null | undefined;
	isLoading: boolean;
	error: Error | null;
	emptyMessage?: string;
	renderComment: (comment: T) => ReactNode;
	className?: string;
}

export function CommentList<T extends CommentItem>({
	comments = [],
	isLoading,
	error,
	emptyMessage = "Nenhum comentário encontrado",
	renderComment,
	className = "",
}: CommentListProps<T>) {
	if (isLoading) {
		return (
			<div className={`flex flex-col gap-4 ${className}`}>
				<CommentSkeleton />
				<CommentSkeleton />
				<CommentSkeleton />
			</div>
		);
	}

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar comentários: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (!comments || comments.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<MessageCircle className="size-12 text-muted-foreground/50 mb-4" />
				<h3 className="text-lg font-medium">{emptyMessage}</h3>
			</div>
		);
	}

	// Sort comments by date (most recent first)
	const sortedComments = [...comments].sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
	);

	return (
		<div className={`flex flex-col gap-4 ${className}`}>
			{sortedComments.map((comment) => (
				<div key={comment.id}>{renderComment(comment)}</div>
			))}
		</div>
	);
}
