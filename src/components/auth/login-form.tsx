"use client";

import { Link, useNavigate } from "@tanstack/react-router";
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
import { signIn } from "#/modules/auth";

const loginSchema = z.object({
	email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
	password: z.string().min(1, "Senha é obrigatória"),
});

type LoginValues = z.input<typeof loginSchema>;

export function LoginForm() {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState<string | null>(null);

	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		} as LoginValues,
		validators: {
			onChange: loginSchema,
		},
		onSubmit: async ({ value }) => {
			setServerError(null);

			try {
				await signIn({ email: value.email, password: value.password });
				const search = new URLSearchParams(window.location.search);
				const returnTo = search.get("returnTo") || "/";
				await navigate({ to: returnTo });
			} catch (e) {
				console.log({ e });
				setServerError("E-mail ou senha inválidos");
			}
		},
	});

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
				<form.AppField name="password">
					{(field) => (
						<Field>
							<FieldLabel>Senha</FieldLabel>
							<FieldControl>
								<Input
									type="password"
									placeholder="••••••••"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									autoComplete="current-password"
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
					selector={(state) => [state.isSubmitting, state.canSubmit]}
				>
					{([isSubmitting, canSubmit]) => (
						<Button
							type="submit"
							className="w-full"
							disabled={!canSubmit || isSubmitting}
						>
							{isSubmitting ? "Entrando..." : "Entrar"}
						</Button>
					)}
				</form.Subscribe>
				<div className="text-center">
					<Link
						to="/reset-password"
						className="text-sm text-muted-foreground hover:text-primary underline"
					>
						Esqueceu sua senha?
					</Link>
				</div>
			</Form>
		</form.AppForm>
	);
}
