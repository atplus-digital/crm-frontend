import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import {
	Field,
	FieldControl,
	FieldError,
	FieldLabel,
	Form,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { requestPasswordReset } from "#/features/auth";
import { routePaths } from "#/routes/route-paths";

const schema = z.object({
	account: z.string().min(1, "Obrigatório"),
});

type ResetPasswordValues = z.infer<typeof schema>;

export function ResetPasswordPage() {
	const [isSuccess, setIsSuccess] = useState(false);

	const form = useForm<ResetPasswordValues>({
		resolver: zodResolver(schema),
		defaultValues: { account: "" },
	});

	const { isSubmitting } = form.formState;

	async function onSubmit(values: ResetPasswordValues) {
		try {
			await requestPasswordReset(values.account);
			setIsSuccess(true);
		} catch {
			toast.error("Erro ao enviar. Tente novamente.");
		}
	}

	if (isSuccess) {
		return (
			<div className="space-y-4 text-center">
				<p className="text-sm text-muted-foreground">
					Se a conta estiver cadastrada, você receberá as instruções para
					redefinir sua senha.
				</p>
				<Link
					to={routePaths.login}
					className="text-sm text-primary hover:underline"
				>
					Voltar para o login
				</Link>
			</div>
		);
	}

	return (
		<Form form={form} onSubmit={onSubmit} className="space-y-4">
			<Field name="account">
				<FieldLabel>E-mail ou usuário</FieldLabel>
				<FieldControl>
					<Input
						type="text"
						placeholder="seu@email.com ou nome de usuário"
						{...form.register("account")}
						autoComplete="username"
					/>
				</FieldControl>
				<FieldError />
			</Field>
			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting ? "Enviando..." : "Enviar"}
			</Button>
			<div className="text-center">
				<Link
					to={routePaths.login}
					className="text-sm text-muted-foreground hover:text-primary underline"
				>
					Voltar para o login
				</Link>
			</div>
		</Form>
	);
}
