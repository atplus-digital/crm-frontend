import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
import { confirmPasswordReset } from "#/features/auth";
import { extractNocoBaseError } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";

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

export function ResetPasswordConfirmPage({
	token,
}: ResetPasswordConfirmFormProps) {
	const navigate = useNavigate();

	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: { password: "", confirmPassword: "" },
	});

	const onSubmit = async (values: FormValues) => {
		try {
			await confirmPasswordReset({
				token,
				password: values.password,
				confirmPassword: values.confirmPassword,
			});
			navigate(routePaths.login);
		} catch (err: unknown) {
			const msg = extractNocoBaseError(
				err,
				"Erro ao redefinir. Tente novamente.",
			);
			if (
				msg.toLowerCase().includes("expired") ||
				msg.toLowerCase().includes("expirad")
			) {
				toast.error("Link expirado. Solicite um novo.");
			} else {
				toast.error(msg);
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
