import { useState, type FormEvent } from "react";

import { Link } from "@tanstack/react-router";
import { requestPasswordReset } from "#/modules/auth/service";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";

export default function ResetPasswordForm() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setIsLoading(true);
		setError(null);

		try {
			await requestPasswordReset(email);
			setIsSuccess(true);
		} catch {
			setError("Erro ao enviar. Tente novamente.");
		} finally {
			setIsLoading(false);
		}
	}

	if (isSuccess) {
		return (
			<div className="space-y-4 text-center">
				<p className="text-sm text-muted-foreground">
					Se o e-mail estiver cadastrado, você receberá as instruções para
					redefinir sua senha.
				</p>
				<Link to="/login" className="text-sm text-primary hover:underline">
					Voltar para o login
				</Link>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="reset-email">E-mail</Label>
				<Input
					id="reset-email"
					type="email"
					placeholder="seu@email.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					autoComplete="email"
				/>
			</div>
			{error && <p className="text-sm text-destructive">{error}</p>}
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Enviando..." : "Enviar"}
			</Button>
			<div className="text-center">
				<Link
					to="/login"
					className="text-sm text-muted-foreground hover:text-primary underline"
				>
					Voltar para o login
				</Link>
			</div>
		</form>
	);
}
