import { useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { confirmPasswordReset } from "#/modules/auth/service";

interface ResetPasswordConfirmFormProps {
	token: string;
}

export default function ResetPasswordConfirmForm({
	token,
}: ResetPasswordConfirmFormProps) {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (password.length < 8) {
			setError("A senha deve ter no mínimo 8 caracteres");
			return;
		}

		if (password !== confirmPwd) {
			setError("As senhas não coincidem");
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			await confirmPasswordReset({
				token,
				password,
				confirmPassword: confirmPwd,
			});
			await navigate({ to: "/login" });
		} catch (err: unknown) {
			const errData = (
				err as {
					response?: { data?: { errors?: Array<{ message?: string }> } };
				}
			)?.response?.data;
			const msg = errData?.errors?.[0]?.message || "";
			if (msg.includes("expired") || msg.includes("expirad")) {
				setError("Link expirado. Solicite um novo.");
			} else {
				setError("Erro ao redefinir. Tente novamente.");
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="new-password">Nova Senha</Label>
				<Input
					id="new-password"
					type="password"
					placeholder="••••••••"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					minLength={8}
					autoComplete="new-password"
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="confirm-password">Confirmar Senha</Label>
				<Input
					id="confirm-password"
					type="password"
					placeholder="••••••••"
					value={confirmPwd}
					onChange={(e) => setConfirmPwd(e.target.value)}
					required
					minLength={8}
					autoComplete="new-password"
				/>
			</div>
			{error && <p className="text-sm text-destructive">{error}</p>}
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Redefinindo..." : "Redefinir Senha"}
			</Button>
		</form>
	);
}
