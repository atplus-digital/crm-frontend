import { useNavigate } from "@tanstack/react-router";
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
import { confirmPasswordReset } from "#/modules/auth";

const schema = z
	.object({
		password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

interface ResetPasswordConfirmFormProps {
	token: string;
}

export default function ResetPasswordConfirmForm({
	token,
}: ResetPasswordConfirmFormProps) {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState<string | null>(null);

	const form = useAppForm({
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
		validators: {
			onChange: schema,
		},
		onSubmit: async ({ value }) => {
			setServerError(null);
			try {
				await confirmPasswordReset({
					token,
					password: value.password,
					confirmPassword: value.confirmPassword,
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
					setServerError("Link expirado. Solicite um novo.");
				} else {
					setServerError("Erro ao redefinir. Tente novamente.");
				}
			}
		},
	});

	return (
		<form.AppForm>
			<Form className="space-y-4">
				<form.AppField name="password">
					{(field) => (
						<Field>
							<FieldLabel htmlFor="new-password">Nova Senha</FieldLabel>
							<FieldControl>
								<Input
									id="new-password"
									type="password"
									placeholder="••••••••"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									autoComplete="new-password"
								/>
							</FieldControl>
							<FieldError />
						</Field>
					)}
				</form.AppField>
				<form.AppField name="confirmPassword">
					{(field) => (
						<Field>
							<FieldLabel htmlFor="confirm-password">
								Confirmar Senha
							</FieldLabel>
							<FieldControl>
								<Input
									id="confirm-password"
									type="password"
									placeholder="••••••••"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									autoComplete="new-password"
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
							{isSubmitting ? "Redefinindo..." : "Redefinir Senha"}
						</Button>
					)}
				</form.Subscribe>
			</Form>
		</form.AppForm>
	);
}
