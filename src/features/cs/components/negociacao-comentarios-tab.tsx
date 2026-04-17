import { MessageCircle } from "lucide-react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import { useNegociacaoComentarios } from "#/features/cs/negociacoes/negociacoes-hooks";
import { formatCommentDate } from "#/lib/utils";

function CommentSkeleton() {
	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row items-start gap-3 space-y-0">
				<Skeleton className="size-10 rounded-full" />
				<div className="flex flex-col gap-1 flex-1">
					<Skeleton className="h-4 w-32" />
					<Skeleton className="h-3 w-24" />
				</div>
			</CardHeader>
			<CardContent className="space-y-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-3/4" />
			</CardContent>
		</Card>
	);
}

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

	if (isLoading) {
		return (
			<div className="flex flex-col gap-4">
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

	if (comentarios.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<MessageCircle className="size-12 text-muted-foreground/50 mb-4" />
				<h3 className="text-lg font-medium">Nenhum comentário encontrado</h3>
				<p className="text-muted-foreground text-sm mt-1">
					Seja o primeiro a adicionar um comentário nesta negociação
				</p>
			</div>
		);
	}

	const sortedComentarios = [...comentarios].sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
	);

	return (
		<div className="flex flex-col gap-4">
			{sortedComentarios.map((comentario) => (
				<Card key={comentario.id} className="w-full">
					<CardHeader className="flex flex-row items-start gap-3 space-y-0">
						<Avatar size="default">
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
						<div className="flex flex-col gap-0.5 flex-1">
							<div className="flex items-center gap-2">
								<span className="font-medium text-sm">Usuario do Sistema</span>
								<span className="text-xs text-muted-foreground">
									{formatCommentDate(comentario.createdAt)}
								</span>
							</div>
							{comentario.f_insere_atendimento_ixc === "1" && (
								<span className="inline-flex items-center rounded-md bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
									Enviado ao IXC
								</span>
							)}
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-card-foreground whitespace-pre-wrap">
							{comentario.f_comentario || "—"}
						</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
