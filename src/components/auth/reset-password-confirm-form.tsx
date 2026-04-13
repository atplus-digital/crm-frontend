import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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

type FormValues = z.infer<typeof schema>;

interface ResetPasswordConfirmFormProps {
	token: string;
}

export default function ResetPasswordConfirmForm({
	token,
}: ResetPasswordConfirmFormProps) {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState<string | null>(null);

	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: { password: "", confirmPassword: "" },
	});

	const onSubmit = async (values: FormValues) => {
		setServerError(null);
		try {
			await confirmPasswordReset({
				token,
				password: values.password,
				confirmPassword: values.confirmPassword,
			});
			navigate("/login");
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
	};

	return (
		<Form form={form} onSubmit={onSubmit} className="space-y-4">
			<Field name="password">
				<FieldLabel>Nova Senha</FieldLabel>
				<FieldControl>
					<Input
						type="password"
						placeholder="••••••••"
						autoComplete="new-password"
						{...form.register("password")}
					/>
				</FieldControl>
				<FieldError />
			</Field>
			<Field name="confirmPassword">
				<FieldLabel>Confirmar Senha</FieldLabel>
				<FieldControl>
					<Input
						type="password"
						placeholder="••••••••"
						autoComplete="new-password"
						{...form.register("confirmPassword")}
					/>
				</FieldControl>
				<FieldError />
			</Field>
			{serverError && <p className="text-sm text-destructive">{serverError}</p>}
			<Button
				type="submit"
				className="w-full"
				disabled={form.formState.isSubmitting}
			>
				{form.formState.isSubmitting ? "Redefinindo..." : "Redefinir Senha"}
			</Button>
		</Form>
	);
}
