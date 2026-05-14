import { Badge } from "#/components/ui/badge";
import { useNegociacaoComentarios } from "#/features/cs/negociacoes/negociacoes-hooks";
import { formatDatePtBR } from "#/lib/utils";
import { CommentCard } from "./negociacao-comentarios-card";
import { CommentList } from "./negociacao-comentarios-list";

export function NegociacaoComentariosTab({
	negociacaoId,
}: {
	negociacaoId: number;
}) {
	const {
		data: response,
		isLoading,
		error,
	} = useNegociacaoComentarios(negociacaoId);
	const comentarios = response?.data ?? [];

	return (
		<CommentList
			comments={comentarios}
			isLoading={isLoading}
			error={error as Error | null}
			emptyMessage="Nenhum comentário encontrado"
			renderComment={(comentario) => (
				<CommentCard
					authorName={comentario.createdBy?.nickname ?? "Usuário do Sistema"}
					avatarFallback={comentario.createdBy?.nickname?.[0] ?? "U"}
					timestamp={formatDatePtBR(comentario.createdAt)}
					badge={
						comentario.f_insere_atendimento_ixc === "1" ? (
							<Badge
								color="green"
								className="ring-1 ring-inset ring-green-600/20"
							>
								Enviado ao IXC
							</Badge>
						) : undefined
					}
				>
					{comentario.f_comentario || "—"}
				</CommentCard>
			)}
		/>
	);
}
