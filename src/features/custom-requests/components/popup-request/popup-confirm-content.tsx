interface PopupConfirmContentProps {
	confirmMessage?: string;
}

export function PopupConfirmContent({
	confirmMessage,
}: PopupConfirmContentProps) {
	return (
		<p className="text-sm text-muted-foreground">
			{confirmMessage ??
				"Deseja realmente executar esta requisição?\nEsta ação não pode ser desfeita."}
		</p>
	);
}
