import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

function NotFoundPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">
						404 - Página Não Encontrada
					</CardTitle>
					<CardDescription>
						A página que você está procurando não existe ou foi movida.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center">
					<Button onClick={() => window.history.back()}>Voltar</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export { NotFoundPage };
