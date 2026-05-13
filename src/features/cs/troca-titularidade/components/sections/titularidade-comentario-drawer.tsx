import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "#/components/ui/button";
import { Label } from "#/components/ui/label";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "#/components/ui/sheet";
import { Textarea } from "#/components/ui/textarea";
import { nocobaseRepository } from "#/repositories";

interface TitularidadeComentarioDrawerProps {
	trocaTitularidadeId: number;
}

export function TitularidadeComentarioDrawer({
	trocaTitularidadeId,
}: TitularidadeComentarioDrawerProps) {
	const [open, setOpen] = useState(false);
	const [comentario, setComentario] = useState("");
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (data: {
			f_comentario: string;
			f_comentario_troca_de_titularidade: number;
		}) =>
			nocobaseRepository.create(
				"t_trocasdetitularidade_comentarios" as any,
				data,
			),
		onSuccess: () => {
			toast.success("Comentário adicionado");
			queryClient.invalidateQueries({
				queryKey: ["troca-titularidade", trocaTitularidadeId],
			});
			setComentario("");
			setOpen(false);
		},
		onError: (error) =>
			toast.error(
				`Erro: ${error instanceof Error ? error.message : "desconhecido"}`,
			),
	});

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" size="sm" className="w-full">
					<Plus className="size-4 mr-2" />
					Adicionar Comentário
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Adicionar Comentário</SheetTitle>
					<SheetDescription>Registre uma observação</SheetDescription>
				</SheetHeader>
				<div className="mt-4">
					<Label htmlFor="comentario">Comentário</Label>
					<Textarea
						id="comentario"
						value={comentario}
						onChange={(e) => setComentario(e.target.value)}
						rows={5}
					/>
				</div>
				<SheetFooter className="mt-4">
					<Button
						onClick={() =>
							mutation.mutate({
								f_comentario: comentario,
								f_comentario_troca_de_titularidade: trocaTitularidadeId,
							})
						}
						disabled={mutation.isPending || !comentario.trim()}
					>
						Salvar
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
