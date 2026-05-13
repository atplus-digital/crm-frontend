import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import type { CrmTrocaTitularidadeWithRelations } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import {
	CRMTROCATITULARIDADE_COMPLEMENTO_LABELS,
	CRMTROCATITULARIDADE_ESTADO_LABELS,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import { nocobaseRepository } from "#/repositories";

function isSaveHidden(troca: CrmTrocaTitularidadeWithRelations): boolean {
	const s = String(troca.f_substatus);
	const st = String(troca.f_status);
	return ["3", "6", "7"].includes(s) && ["3", "2", "20"].includes(st);
}

const schema = z.object({
	f_cedente: z.string().min(1, "Obrigatório"),
	f_cedente_documento: z.string().min(1, "Obrigatório"),
	f_cedente_responsavel_legal: z.string().min(1, "Obrigatório"),
	f_cedente_doc_resp_legal: z
		.string()
		.regex(/^\d*$/, "Apenas números")
		.min(1, "Obrigatório"),
	f_cedente_telefone: z.string().min(1, "Obrigatório"),
	f_cedente_email: z.string().min(1, "Obrigatório"),
	f_cessionario: z.string().min(1, "Obrigatório"),
	f_cessionario_documento: z.string().min(1, "Obrigatório"),
	f_cessionario_responsavel: z.string().min(1, "Obrigatório"),
	f_cessionario_doc_resp_legal: z
		.string()
		.regex(/^\d*$/, "Apenas números")
		.min(1, "Obrigatório"),
	f_cessionario_telefone: z.string().min(1, "Obrigatório"),
	f_cessionario_email: z.string().min(1, "Obrigatório"),
	f_id_contrato: z.string().min(1, "Obrigatório"),
	f_cep: z.string().min(1, "Obrigatório"),
	f_endereco: z.string().min(1, "Obrigatório"),
	f_numero: z.string().min(1, "Obrigatório"),
	f_bairro: z.string().min(1, "Obrigatório"),
	f_cidade: z.string().min(1, "Obrigatório"),
	f_estado: z.string().min(1, "Obrigatório"),
	f_complemento: z.string().min(1, "Obrigatório"),
});

type FormValues = z.infer<typeof schema>;

interface TitularidadeEditFormProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function TitularidadeEditForm({
	trocaTitularidade,
}: TitularidadeEditFormProps) {
	const queryClient = useQueryClient();
	const hidden = isSaveHidden(trocaTitularidade);
	const n = trocaTitularidade as any;

	const form = useForm<FormValues>({
		resolver: zodResolver(schema) as any,
		defaultValues: {
			f_cedente: n.f_cedente ?? "",
			f_cedente_documento: n.f_cedente_documento ?? "",
			f_cedente_responsavel_legal: n.f_cedente_responsavel_legal ?? "",
			f_cedente_doc_resp_legal: n.f_cedente_doc_resp_legal ?? "",
			f_cedente_telefone: n.f_cedente_telefone ?? "",
			f_cedente_email: n.f_cedente_email ?? "",
			f_cessionario: n.f_cessionario ?? "",
			f_cessionario_documento: n.f_cessionario_documento ?? "",
			f_cessionario_responsavel: n.f_cessionario_responsavel ?? "",
			f_cessionario_doc_resp_legal: n.f_cessionario_doc_resp_legal ?? "",
			f_cessionario_telefone: n.f_cessionario_telefone ?? "",
			f_cessionario_email: n.f_cessionario_email ?? "",
			f_id_contrato: n.f_id_contrato ?? "",
			f_cep: n.f_cep ?? "",
			f_endereco: n.f_endereco ?? "",
			f_numero: n.f_numero ?? "",
			f_bairro: n.f_bairro ?? "",
			f_cidade: n.f_cidade ?? "",
			f_estado: n.f_estado ?? "",
			f_complemento: n.f_complemento ?? "",
		},
	});

	const mutation = useMutation({
		mutationFn: (values: FormValues) =>
			nocobaseRepository.update(
				"t_crm_troca_titularidade",
				trocaTitularidade.id,
				values as any,
			),
		onSuccess: () => {
			toast.success("Atualizado com sucesso");
			queryClient.invalidateQueries({
				queryKey: ["troca-titularidade", trocaTitularidade.id],
			});
		},
		onError: (error) => {
			toast.error(
				`Erro: ${error instanceof Error ? error.message : "desconhecido"}`,
			);
		},
	});

	if (hidden) return null;

	const field = (name: keyof FormValues, label: string) => (
		<div key={name}>
			<Label htmlFor={name}>{label} *</Label>
			<Input id={name} {...form.register(name)} />
		</div>
	);

	return (
		<form
			onSubmit={form.handleSubmit(() => mutation.mutate(form.getValues()))}
			className="space-y-6"
		>
			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Dados do Cedente
				</h3>
				<div className="grid grid-cols-2 gap-4">
					{field("f_cedente", "Nome")}
					{field("f_cedente_documento", "Documento")}
					{field("f_cedente_responsavel_legal", "Responsável Legal")}
					{field("f_cedente_doc_resp_legal", "Doc. Resp. Legal")}
					{field("f_cedente_telefone", "Telefone")}
					{field("f_cedente_email", "Email")}
				</div>
			</div>
			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Dados do Cessionário
				</h3>
				<div className="grid grid-cols-2 gap-4">
					{field("f_cessionario", "Nome")}
					{field("f_cessionario_documento", "Documento")}
					{field("f_cessionario_responsavel", "Responsável")}
					{field("f_cessionario_doc_resp_legal", "Doc. Resp. Legal")}
					{field("f_cessionario_telefone", "Telefone")}
					{field("f_cessionario_email", "Email")}
				</div>
			</div>
			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Dados do Contrato
				</h3>
				{field("f_id_contrato", "Contrato ID")}
				<div className="grid grid-cols-2 gap-4">
					{field("f_cep", "CEP")}
					{field("f_endereco", "Endereço")}
					{field("f_numero", "Número")}
					{field("f_bairro", "Bairro")}
					{field("f_cidade", "Cidade")}
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<Label>Estado *</Label>
						<Select
							value={form.watch("f_estado")}
							onValueChange={(v) => form.setValue("f_estado", v)}
						>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{(CRMTROCATITULARIDADE_ESTADO_LABELS as Record<
									string,
									string
								>) &&
									Object.entries(
										CRMTROCATITULARIDADE_ESTADO_LABELS as Record<
											string,
											string
										>,
									).map(([v, l]) => (
										<SelectItem key={v} value={v}>
											{l}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label>Complemento *</Label>
						<Select
							value={form.watch("f_complemento")}
							onValueChange={(v) => form.setValue("f_complemento", v)}
						>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS as Record<
									string,
									string
								>) &&
									Object.entries(
										CRMTROCATITULARIDADE_COMPLEMENTO_LABELS as Record<
											string,
											string
										>,
									).map(([v, l]) => (
										<SelectItem key={v} value={v}>
											{l}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
			<Button type="submit" disabled={mutation.isPending}>
				{mutation.isPending ? "Salvando..." : "Salvar"}
			</Button>
		</form>
	);
}
