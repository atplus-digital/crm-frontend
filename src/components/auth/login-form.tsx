import { Link, useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { signIn } from "#/modules/auth/service";
import { authStore, setError, setLoading } from "#/modules/auth/store";

export function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setErrorLocal] = useState<string | null>(null);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setIsLoading(true);
		setErrorLocal(null);
		setLoading(true);
		setError(null);

		try {
			await signIn({ email, password });
			const search = new URLSearchParams(window.location.search);
			const returnTo = search.get("returnTo") || "/";
			await navigate({ to: returnTo });
		} catch {
			setErrorLocal("E-mail ou senha inválidos");
			setError("E-mail ou senha inválidos");
		} finally {
			setIsLoading(false);
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email">E-mail</Label>
				<Input
					id="email"
					type="email"
					placeholder="seu@email.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					autoComplete="email"
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Senha</Label>
				<Input
					id="password"
					type="password"
					placeholder="••••••••"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					autoComplete="current-password"
				/>
			</div>
			{error && <p className="text-sm text-destructive">{error}</p>}
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Entrando..." : "Entrar"}
			</Button>
			<div className="text-center">
				<Link
					to="/reset-password"
					className="text-sm text-muted-foreground hover:text-primary underline"
				>
					Esqueceu sua senha?
				</Link>
			</div>
		</form>
	);
}
