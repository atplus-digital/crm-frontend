import { Button } from "#/components/ui/button";

export function SuspensaoContratoActions() {
	return (
		<div className="flex gap-4">
			<Button type="button" disabled>
				Enviar para Assinatura
			</Button>
			<Button type="button" disabled>
				Concluir
			</Button>
			<Button type="button" disabled variant="destructive">
				Arquivar
			</Button>
		</div>
	);
}
