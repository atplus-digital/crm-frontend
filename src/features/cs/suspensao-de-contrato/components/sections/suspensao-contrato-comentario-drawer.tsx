import { Plus } from "lucide-react";
import { useState } from "react";
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
import { useCreateSuspensaoComentario } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";

interface SuspensaoContratoComentarioDrawerProps {
	suspensaoId: number;
}

export function SuspensaoContratoComentarioDrawer({
	suspensaoId,
}: SuspensaoContratoComentarioDrawerProps) {
	const [open, setOpen] = useState(false);
	const [comentario, setComentario] = useState("");
	const mutation = useCreateSuspensaoComentario(suspensaoId);

	const handleSubmit = () => {
		if (!comentario.trim()) return;
		mutation.mutate(
			{ f_comentario: comentario.trim() },
			{
				onSuccess: () => {
					setComentario("");
					setOpen(false);
				},
			},
		);
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" size="sm">
					<Plus className="size-4 mr-2" />
					Adicionar Comentário
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Adicionar Comentário</SheetTitle>
					<SheetDescription>
						Registre uma observação para esta suspensão de contrato
					</SheetDescription>
				</SheetHeader>
				<div className="mt-4">
					<Label htmlFor="comentario">Comentário</Label>
					<Textarea
						id="comentario"
						value={comentario}
						onChange={(e) => setComentario(e.target.value)}
						rows={5}
						placeholder="Digite seu comentário..."
					/>
				</div>
				<SheetFooter className="mt-4">
					<Button
						onClick={handleSubmit}
						disabled={mutation.isPending || !comentario.trim()}
					>
						{mutation.isPending ? "Salvando..." : "Salvar"}
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
