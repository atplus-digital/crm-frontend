import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "@tanstack/react-store";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Field,
	FieldControl,
	FieldError,
	FieldLabel,
	Form,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { authStore, updateProfile } from "#/features/auth";
import { extractNocoBaseError } from "#/lib/api-errors";

const profileSchema = z.object({
	email: z.email("E-mail inválido"),
	nickname: z
		.string()
		.trim()
		.max(120, "Nome deve ter no máximo 120 caracteres")
		.refine((value) => value.length === 0 || value.length >= 2, {
			message: "Nome deve ter no mínimo 2 caracteres",
		}),
	phone: z
		.string()
		.trim()
		.max(20, "Telefone deve ter no máximo 20 caracteres")
		.refine((value) => value.length === 0 || value.length >= 8, {
			message: "Telefone deve ter no mínimo 8 caracteres",
		}),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileSettings() {
	const user = useStore(authStore, (state) => state.user);

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			email: "",
			nickname: "",
			phone: "",
		},
	});

	useEffect(() => {
		if (!user) return;

		form.reset({
			email: user.email,
			nickname: user.nickname,
			phone: user.phone,
		});
	}, [form, user]);

	const onSubmit: SubmitHandler<ProfileFormValues> = async (values) => {
		try {
			await updateProfile(values);
			toast.success("Dados atualizados com sucesso.");
		} catch (err: unknown) {
			toast.error(extractNocoBaseError(err));
		}
	};

	if (!user) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-6">
				<Card className="w-full max-w-md">
					<CardContent className="flex flex-col items-center justify-center gap-4 py-8">
						<p className="text-muted-foreground">Carregando perfil...</p>
					</CardContent>
				</Card>
			</main>
		);
	}

	return (
		<main className="flex min-h-screen flex-col gap-6 bg-background p-6">
			<section className="mx-auto w-full max-w-2xl">
				<Card>
					<CardHeader>
						<CardTitle>Perfil</CardTitle>
						<CardDescription>
							Atualize seus dados de contato e identificação.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="mb-4 space-y-1">
							<p className="text-xs font-medium text-muted-foreground uppercase">
								Usuário
							</p>
							<Input value={user.username} readOnly disabled />
						</div>

						<Form form={form} onSubmit={onSubmit} className="space-y-4">
							<Field name="nickname">
								<FieldLabel>Nome</FieldLabel>
								<FieldControl>
									<Input
										placeholder="Seu nome"
										{...form.register("nickname")}
									/>
								</FieldControl>
								<FieldError />
							</Field>

							<Field name="email">
								<FieldLabel>E-mail</FieldLabel>
								<FieldControl>
									<Input
										type="email"
										placeholder="seu@email.com"
										{...form.register("email")}
									/>
								</FieldControl>
								<FieldError />
							</Field>

							<Field name="phone">
								<FieldLabel>Telefone</FieldLabel>
								<FieldControl>
									<Input
										placeholder="(00) 00000-0000"
										{...form.register("phone")}
									/>
								</FieldControl>
								<FieldError />
							</Field>

							<Button
								type="submit"
								className="w-full sm:w-auto"
								disabled={form.formState.isSubmitting}
							>
								{form.formState.isSubmitting
									? "Salvando..."
									: "Salvar alterações"}
							</Button>
						</Form>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
