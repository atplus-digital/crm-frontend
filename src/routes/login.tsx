import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { signIn, signOut } from "#/modules/auth/auth.functions";

const loginSearchSchema = {
	redirect: { type: "string" as const, optional: true as const },
};

export const Route = createFileRoute("/login")({
	validateSearch: loginSearchSchema,
	beforeLoad: async ({ search }) => {
		const { getCurrentUser } = await import("#/modules/auth/auth.functions");
		const user = await getCurrentUser();
		if (user) {
			const safeRedirect = getSafeRedirect(search.redirect);
			throw redirect({ to: safeRedirect });
		}
	},
	component: LoginPage,
});

function getSafeRedirect(redirect?: string): string {
	if (!redirect) {
		return "/authenticated";
	}
	if (redirect.toLowerCase().startsWith("javascript:")) {
		return "/authenticated";
	}
	try {
		const url = new URL(redirect, window.location.origin);
		if (url.origin !== window.location.origin) {
			return "/authenticated";
		}
		return url.pathname + url.search + url.hash;
	} catch {
		if (redirect.startsWith("/")) {
			return redirect;
		}
		return "/authenticated";
	}
}

function LoginPage() {
	const navigate = useNavigate();
	const search = Route.useSearch();
	const [error, setError] = useState<string | null>(null);

	const loginMutation = useMutation({
		mutationFn: async ({
			email,
			password,
		}: {
			email: string;
			password: string;
		}) => {
			return signIn({ data: { email, password } });
		},
		onSuccess: () => {
			const safeRedirect = getSafeRedirect(search.redirect);
			navigate({ to: safeRedirect });
		},
		onError: () => {
			setError("Email ou senha inválidos. Tente novamente.");
		},
	});

	const logoutMutation = useMutation({
		mutationFn: () => signOut(),
		onSuccess: () => {
			setError(null);
		},
	});

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		if (!email || !password) {
			setError("Email ou senha inválidos. Tente novamente.");
			return;
		}
		loginMutation.mutate({ email, password });
	}

	return (
		<div className="flex min-h-svh items-center justify-center p-4">
			<Card className="w-full max-w-sm">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Entrar</CardTitle>
					<CardDescription>
						Insira seu email e senha para acessar o CRM
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="seu@email.com"
								required
								autoComplete="email"
								disabled={loginMutation.isPending}
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Senha</Label>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="••••••••"
								required
								autoComplete="current-password"
								disabled={loginMutation.isPending}
							/>
						</div>
						{error && (
							<p className="text-sm text-destructive" role="alert">
								{error}
							</p>
						)}
						<Button
							type="submit"
							className="w-full"
							disabled={loginMutation.isPending}
						>
							{loginMutation.isPending ? "Entrando..." : "Entrar"}
						</Button>
					</form>
				</CardContent>
				<CardFooter className="justify-center">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => logoutMutation.mutate()}
						disabled={logoutMutation.isPending}
					>
						{logoutMutation.isPending ? "Saindo..." : "Limpar sessão"}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
