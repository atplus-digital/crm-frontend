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

const schema = z.object({
	email: z.string().min(1, "Obrigatório").email("E-mail inválido"),
});

type ResetPasswordValues = z.infer<typeof schema>;

export default function ResetPasswordForm() {
	const [isSuccess, setIsSuccess] = useState(false);

	const form = useForm<ResetPasswordValues>({
		resolver: zodResolver(schema),
		defaultValues: { email: "" },
	});

	const { isSubmitting } = form.formState;

	async function onSubmit(values: ResetPasswordValues) {
		try {
			await requestPasswordReset(values.email);
			setIsSuccess(true);
		} catch {
			toast.error("Erro ao enviar. Tente novamente.");
		}
	}

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
		<Form form={form} onSubmit={onSubmit} className="space-y-4">
			<Field name="email">
				<FieldLabel>E-mail</FieldLabel>
				<FieldControl>
					<Input
						type="email"
						placeholder="seu@email.com"
						{...form.register("email")}
						autoComplete="email"
					/>
				</FieldControl>
				<FieldError />
			</Field>
			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting ? "Enviando..." : "Enviar"}
			</Button>
			<div className="text-center">
				<Link
					to="/login"
					className="text-sm text-muted-foreground hover:text-primary underline"
				>
					Voltar para o login
				</Link>
			</div>
		</Form>
	);
}
