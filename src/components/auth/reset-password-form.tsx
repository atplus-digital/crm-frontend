import { Link } from "@tanstack/react-router";
import { useState } from "react";
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
import { useAppForm } from "#/hooks/use-app-form";
import { requestPasswordReset } from "#/modules/auth";

const schema = z.object({
	email: z.string().min(1, "Obrigatório").email("E-mail inválido"),
});

export default function ResetPasswordForm() {
	const [isSuccess, setIsSuccess] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);

	const form = useAppForm({
		defaultValues: { email: "" },
		validators: { onChange: schema },
		onSubmit: async ({ value }) => {
			setServerError(null);
			try {
				await requestPasswordReset(value.email);
				setIsSuccess(true);
			} catch {
				setServerError("Erro ao enviar. Tente novamente.");
			}
		},
	});

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
		<form.AppForm>
			<Form className="space-y-4">
				<form.AppField name="email">
					{(field) => (
						<Field>
							<FieldLabel>E-mail</FieldLabel>
							<FieldControl>
								<Input
									type="email"
									placeholder="seu@email.com"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									autoComplete="email"
								/>
							</FieldControl>
							<FieldError />
						</Field>
					)}
				</form.AppField>
				{serverError && (
					<p className="text-sm text-destructive">{serverError}</p>
				)}
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => (
						<Button type="submit" className="w-full" disabled={!canSubmit}>
							{isSubmitting ? "Enviando..." : "Enviar"}
						</Button>
					)}
				</form.Subscribe>
				<div className="text-center">
					<Link
						to="/login"
						className="text-sm text-muted-foreground hover:text-primary underline"
					>
						Voltar para o login
					</Link>
				</div>
			</Form>
		</form.AppForm>
	);
}
