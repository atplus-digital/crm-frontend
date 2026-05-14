import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import { nocobaseRepository } from "#/repositories";

const schema = z.object({
	f_origem_cliente: z.string().optional(),
	f_perfil_de_uso: z.string().optional(),
	f_forma_de_pagamento: z.string().optional(),
	f_pessoas_na_residencia: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface InformacoesAdicionaisFormProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	defaultValues?: Record<string, unknown>;
	contratoId: number;
	recordId?: number;
	onSuccess: () => void;
}

export function InformacoesAdicionaisForm({
	open,
	onOpenChange,
	defaultValues,
	contratoId,
	recordId,
	onSuccess,
}: InformacoesAdicionaisFormProps) {
	const isEdit = !!recordId;
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		values: {
			f_origem_cliente:
				(defaultValues?.f_origem_cliente as string | undefined) ?? "",
			f_perfil_de_uso:
				(defaultValues?.f_perfil_de_uso as string | undefined) ?? "",
			f_forma_de_pagamento:
				(defaultValues?.f_forma_de_pagamento as string | undefined) ?? "",
			f_pessoas_na_residencia:
				defaultValues?.f_pessoas_na_residencia != null
					? String(defaultValues.f_pessoas_na_residencia)
					: "",
		},
	});

	const onSubmit: SubmitHandler<FormValues> = async (values) => {
		const payload = {
			...values,
			f_id_cliente_contrato: contratoId,
		} as Record<string, unknown>;
		if (isEdit) {
			await nocobaseRepository.update(
				"t_dados_adicionais_cliente_contrato",
				recordId,
				payload,
			);
		} else {
			await nocobaseRepository.create(
				"t_dados_adicionais_cliente_contrato",
				payload,
			);
		}
		onSuccess();
		onOpenChange(false);
	};

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						{isEdit ? "Editar" : "Adicionar"} Informações Adicionais
					</SheetTitle>
					<SheetDescription>
						{isEdit
							? "Atualize as informações"
							: "Preencha as informações adicionais deste contrato"}
					</SheetDescription>
				</SheetHeader>
				<form
					onSubmit={form.handleSubmit((values) => {
						void onSubmit(values);
					})}
					className="space-y-4 mt-4"
				>
					<div>
						<Label htmlFor="f_origem_cliente">Origem Cliente</Label>
						<Input
							id="f_origem_cliente"
							{...form.register("f_origem_cliente")}
						/>
					</div>
					<div>
						<Label htmlFor="f_perfil_de_uso">Perfil de Uso</Label>
						<Input id="f_perfil_de_uso" {...form.register("f_perfil_de_uso")} />
					</div>
					<div>
						<Label htmlFor="f_forma_de_pagamento">Forma de Pagamento</Label>
						<Input
							id="f_forma_de_pagamento"
							{...form.register("f_forma_de_pagamento")}
						/>
					</div>
					<div>
						<Label htmlFor="f_pessoas_na_residencia">
							Pessoas na Residência
						</Label>
						<Input
							id="f_pessoas_na_residencia"
							type="number"
							{...form.register("f_pessoas_na_residencia")}
						/>
					</div>
					<SheetFooter>
						<Button type="submit" disabled={form.formState.isSubmitting}>
							{form.formState.isSubmitting ? "Salvando..." : "Salvar"}
						</Button>
					</SheetFooter>
				</form>
			</SheetContent>
		</Sheet>
	);
}
