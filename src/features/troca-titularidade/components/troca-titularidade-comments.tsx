import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import { Card, CardContent } from "#/components/ui/card";
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
					<Card key={comment.id}>
						<CardContent className="p-4">
							<div className="flex items-start gap-4">
								<Avatar className="h-10 w-10 flex-shrink-0">
									<AvatarFallback>{getInitials(authorName)}</AvatarFallback>
								</Avatar>

								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-2">
										<span className="font-medium text-sm">{authorName}</span>
										<div className="flex items-center gap-1 text-xs text-muted-foreground">
											<CalendarIcon className="h-3 w-3" />
											<span>{formatDatePtBR(comment.createdAt)}</span>
										</div>
									</div>

									<p className="text-sm text-muted-foreground whitespace-pre-wrap">
										{comment.f_comentario}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
