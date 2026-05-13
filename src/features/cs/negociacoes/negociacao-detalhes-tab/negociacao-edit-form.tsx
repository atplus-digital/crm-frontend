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
import { updateNegociacao } from "#/features/cs/negociacoes/negociacoes-service";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { FIDELIDADE_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

const EDITABLE_STATUSES = [1, 2, 3, 4];

const schema = z.object({
	f_cep: z.string().optional(),
	f_bairro: z.string().min(1, "Obrigatório"),
	f_endereco_cidade: z.string().min(1, "Obrigatório"),
	f_endereco_estado: z.string().min(1, "Obrigatório"),
	f_endereco: z.string().min(1, "Obrigatório"),
	f_endereco_numero: z.string().min(1, "Obrigatório"),
	f_endereco_complemento: z.string().min(1, "Obrigatório"),
	f_endereco_referencia: z.string().min(1, "Obrigatório"),
	f_assinatura_gov: z.string().optional(),
	f_fidelidade: z.string().optional(),
	f_email_cobranca: z.string().min(1, "Obrigatório"),
	f_data_vencimento: z.string().min(1, "Obrigatório"),
	f_telefone: z.string().min(1, "Obrigatório"),
	f_telefone_2: z.string().min(1, "Obrigatório"),
	f_responsavel_assinatura: z.string().min(1, "Obrigatório"),
	f_cpf_responsavel_assinatura: z.string().min(1, "Obrigatório"),
	f_confissao_divida: z.enum(["Sim", "Nao"]),
	f_valor_devedor: z.coerce.number().optional(),
	f_multa_juros: z.coerce.number().optional(),
	f_entrada_saldo_devedor: z.coerce.number().optional(),
	f_parcelas_mensais: z.coerce.number().optional(),
	f_valor_devedor_total: z.coerce.number().optional(),
	f_valor_da_parcela: z.coerce.number().optional(),
	f_periodo_final: z.string().optional(),
	f_permuta: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

/** Documentação: Campos disabled para Concluído(5)/Arquivado(6), editável para Novo(1)/Negociando(2)/Assinatura(3)/Auditoria(4) */

interface NegociacaoEditFormProps {
	negociacao: NegociacaoWithRelations;
}

function isFieldDisabled(negociacao: NegociacaoWithRelations): boolean {
	return !EDITABLE_STATUSES.includes(Number(negociacao.f_status));
}

export function NegociacaoEditForm({ negociacao }: NegociacaoEditFormProps) {
	const queryClient = useQueryClient();
	const disabled = isFieldDisabled(negociacao);
	const showConfissao = negociacao.f_confissao_divida === "Sim";

	const form = useForm<FormValues>({
		resolver: zodResolver(schema) as any,
		defaultValues: (() => {
			const n = negociacao as any;
			return {
				f_cep: n.f_cep ?? "",
				f_bairro: n.f_bairro ?? "",
				f_endereco_cidade: n.f_endereco_cidade ?? "",
				f_endereco_estado: n.f_endereco_estado ?? "",
				f_endereco: n.f_endereco ?? "",
				f_endereco_numero: n.f_endereco_numero ?? "",
				f_endereco_complemento: n.f_endereco_complemento ?? "",
				f_endereco_referencia: n.f_endereco_referencia ?? "",
				f_assinatura_gov: n.f_assinatura_gov ?? "",
				f_fidelidade: n.f_fidelidade ?? "",
				f_email_cobranca: n.f_email_cobranca ?? "",
				f_data_vencimento: n.f_data_vencimento ?? "",
				f_telefone: n.f_telefone ?? "",
				f_telefone_2: n.f_telefone_2 ?? "",
				f_responsavel_assinatura: n.f_responsavel_assinatura ?? "",
				f_cpf_responsavel_assinatura: n.f_cpf_responsavel_assinatura ?? "",
				f_confissao_divida:
					String(n.f_confissao_divida) === "Sim" ? "Sim" : "Nao",
				f_valor_devedor: n.f_valor_devedor ?? undefined,
				f_multa_juros: n.f_multa_juros ?? undefined,
				f_entrada_saldo_devedor: n.f_entrada_saldo_devedor ?? undefined,
				f_parcelas_mensais: n.f_parcelas_mensais ?? undefined,
				f_valor_devedor_total: n.f_valor_devedor_total ?? undefined,
				f_valor_da_parcela: n.f_valor_da_parcela ?? undefined,
				f_periodo_final: n.f_periodo_final ?? "",
				f_permuta: Boolean(n.f_permuta),
			};
		})(),
	});

	const mutation = useMutation({
		mutationFn: (values: FormValues) =>
			updateNegociacao(negociacao.id, values as any),
		onSuccess: () => {
			toast.success("Negociação atualizada");
			queryClient.invalidateQueries({
				queryKey: ["cs", "negociacoes", negociacao.id],
			});
		},
		onError: (error) => {
			toast.error(
				`Erro ao salvar: ${error instanceof Error ? error.message : "desconhecido"}`,
			);
		},
	});

	const onSubmit = (values: FormValues) => mutation.mutate(values);

	const field = (
		name: keyof FormValues,
		label: string,
		opts?: { type?: string; required?: boolean },
	) => (
		<div key={name}>
			<Label htmlFor={name}>
				{label}
				{opts?.required !== false ? " *" : ""}
			</Label>
			<Input
				id={name}
				type={opts?.type ?? "text"}
				disabled={disabled}
				{...form.register(name)}
			/>
		</div>
	);

	return (
		<form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Endereço
				</h3>
				<div className="grid grid-cols-2 gap-4">
					{field("f_cep", "CEP", { required: false })}
					{field("f_bairro", "Bairro")}
					{field("f_endereco_cidade", "Cidade")}
					{field("f_endereco_estado", "UF")}
				</div>
				<div className="grid grid-cols-[4fr_1fr] gap-4">
					{field("f_endereco", "Endereço")}
					{field("f_endereco_numero", "Número")}
				</div>
				<div className="grid grid-cols-2 gap-4">
					{field("f_endereco_complemento", "Complemento")}
					{field("f_endereco_referencia", "Ponto de Referência")}
				</div>
				{field("f_assinatura_gov", "Assinatura Gov", { required: false })}
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Pagamento e Contrato
				</h3>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<Label>Fidelidade</Label>
						<Select
							disabled={disabled}
							value={form.watch("f_fidelidade")}
							onValueChange={(v) => form.setValue("f_fidelidade", v)}
						>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{Object.entries(FIDELIDADE_LABELS).map(([v, l]) => (
									<SelectItem key={v} value={v}>
										{l}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					{field("f_email_cobranca", "E-mail de cobrança")}
				</div>
				<div className="grid grid-cols-2 gap-4">
					{field("f_data_vencimento", "Data de Vencimento")}
					{field("f_telefone", "Telefone (Whatsapp)")}
				</div>
				{field("f_telefone_2", "Telefone 2 (Outro)")}
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Assinatura
				</h3>
				{field("f_responsavel_assinatura", "Responsável pela assinatura")}
				{field(
					"f_cpf_responsavel_assinatura",
					"CPF Responsável pela assinatura",
				)}
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-sm text-muted-foreground">
					Confissão de Dívida?
				</h3>
				<div>
					<Label>Confissão de Dívida</Label>
					<Select
						disabled={disabled}
						value={form.watch("f_confissao_divida")}
						onValueChange={(v) => {
							form.setValue("f_confissao_divida", v as "Sim" | "Nao");
							if (v === "Nao") {
								form.setValue("f_valor_devedor", undefined);
								form.setValue("f_multa_juros", undefined);
								form.setValue("f_entrada_saldo_devedor", undefined);
								form.setValue("f_parcelas_mensais", undefined);
								form.setValue("f_valor_devedor_total", undefined);
								form.setValue("f_valor_da_parcela", undefined);
								form.setValue("f_periodo_final", "");
								form.setValue("f_permuta", false);
							}
						}}
					>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Nao">Não</SelectItem>
							<SelectItem value="Sim">Sim</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{showConfissao && (
					<>
						<div className="grid grid-cols-2 gap-4">
							{field("f_valor_devedor", "Valor Devedor", { type: "number" })}
							{field("f_multa_juros", "Multa e Juros", { type: "number" })}
						</div>
						<div className="grid grid-cols-2 gap-4">
							{field("f_entrada_saldo_devedor", "Entrada / Saldo Devedor", {
								type: "number",
							})}
							{field("f_parcelas_mensais", "Parcelas Mensais", {
								type: "number",
							})}
						</div>
						<div className="grid grid-cols-2 gap-4">
							{field("f_valor_devedor_total", "Valor Devedor Total", {
								type: "number",
							})}
							{field("f_valor_da_parcela", "Valor da Parcela", {
								type: "number",
							})}
						</div>
						{field("f_periodo_final", "Período Final", { required: false })}
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id="f_permuta"
								disabled={disabled}
								{...form.register("f_permuta")}
							/>
							<Label htmlFor="f_permuta">Permuta?</Label>
						</div>
					</>
				)}
			</div>

			<Button type="submit" disabled={disabled || mutation.isPending}>
				{mutation.isPending ? "Salvando..." : "Salvar"}
			</Button>
		</form>
	);
}
