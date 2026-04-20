import { Link } from "react-router";
import { Button } from "#/components/ui/button";

export function Component() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6">
			<h1 className="text-6xl font-bold text-destructive">403</h1>
			<h2 className="text-2xl font-semibold">Acesso Negado</h2>
			<p className="text-muted-foreground">
				Você não tem permissão para acessar esta página.
			</p>
			<Button asChild>
				<Link to="/">Voltar ao início</Link>
			</Button>
		</div>
	);
}
