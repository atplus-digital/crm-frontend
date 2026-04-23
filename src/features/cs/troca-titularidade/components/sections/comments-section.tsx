import { CommentsList } from "#/features/cs/comments-list";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface CommentsSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function CommentsSection({ trocaTitularidade }: CommentsSectionProps) {
	return (
		<CommentsList
			comments={trocaTitularidade.f_comentarios}
			title="Comentários"
			description="Observações registradas sobre a transferência"
		/>
	);
}
