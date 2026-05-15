import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
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
import { env } from "#/env";
import { signIn } from "#/features/auth";
import { extractNocoBaseError } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";

const loginSchema = z.object({
	account: z.string().min(1, "Obrigatório"),
	password: z.string().min(1, "Senha é obrigatória"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
	const navigate = useNavigate();

	const form = useForm<LoginValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: { account: "", password: "" },
	});

	const onSubmit: SubmitHandler<LoginValues> = async (values) => {
		try {
			await signIn({ account: values.account, password: values.password });
			const search = new URLSearchParams(window.location.search);
			const returnTo = search.get("returnTo") || routePaths.home;
			await navigate(returnTo);
		} catch (err: unknown) {
			toast.error(
				extractNocoBaseError(err, "E-mail, usuário ou senha inválidos"),
			);
		}
	};

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
			<Field name="password">
				<FieldLabel>Senha</FieldLabel>
				<FieldControl>
					<Input
						type="password"
						placeholder="••••••••"
						{...form.register("password")}
						autoComplete="current-password"
					/>
				</FieldControl>
				<FieldError />
			</Field>
			<Button
				type="submit"
				className="w-full"
				disabled={form.formState.isSubmitting}
			>
				{form.formState.isSubmitting ? "Entrando..." : "Entrar"}
			</Button>
			{!env.VITE_DISABLE_FORGOT_PASSWORD && (
				<div className="text-center">
					<Link
						to={routePaths.reset_password}
						className="text-sm text-muted-foreground hover:text-primary underline"
					>
						Esqueceu sua senha?
					</Link>
				</div>
			)}
		</Form>
	);
}
