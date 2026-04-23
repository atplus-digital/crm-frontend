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
					authorName="Usuario do Sistema"
					avatarFallback="U"
					timestamp={formatDatePtBR(comentario.createdAt)}
					badge={
						comentario.f_insere_atendimento_ixc === "1" ? (
							<span className="inline-flex items-center rounded-md bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
								Enviado ao IXC
							</span>
						) : undefined
					}
				>
					{comentario.f_comentario || "—"}
				</CommentCard>
			)}
		/>
	);
}
