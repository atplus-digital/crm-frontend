import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MapPin } from "lucide-react";
import { useEffect, useMemo } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { useCreateTrocaEndereco } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import type { TrocaEnderecoTaxaInstalacao } from "#/generated/types/nocobase/troca-endereco";
import { TROCAENDERECO_TAXAINSTALACAO_LABELS } from "#/generated/types/nocobase/troca-endereco";

// ============================================================================
// Types
// ============================================================================

interface TrocaEnderecoSheetProps {
	contrato: ContratoWithCliente;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

// ============================================================================
// Schema
// ============================================================================

const trocaEnderecoSchema = z.object({
	f_cep: z.string().min(1, "CEP é obrigatório"),
	f_bairro: z.string().min(1, "Bairro é obrigatório"),
	f_endereco_cidade: z.string().min(1, "Cidade é obrigatória"),
	f_endereco_estado: z.string().min(1, "UF é obrigatória"),
	f_endereco: z.string().min(1, "Endereço é obrigatório"),
	f_endereco_numero: z.string().min(1, "Número é obrigatório"),
	f_endereco_complemento: z.string().min(1, "Complemento é obrigatório"),
	f_endereco_referencia: z.string().optional(),
	f_obs: z.string().optional(),
	f_telefone_contato: z.string().optional(),
	f_taxa_instalacao: z.string().min(1, "Taxa de instalação é obrigatória"),
});

type TrocaEnderecoFormValues = z.infer<typeof trocaEnderecoSchema>;

// ============================================================================
// Main Component
// ============================================================================

export function TrocaEnderecoSheet({
	contrato,
	open,
	onOpenChange,
}: TrocaEnderecoSheetProps) {
	// Hidden auto-filled fields
	const contratoId = String(contrato.id);
	const clienteNome = contrato.f_nc_cliente?.razao ?? "";

	const form = useForm<TrocaEnderecoFormValues>({
		resolver: zodResolver(trocaEnderecoSchema),
		defaultValues: {
			f_cep: "",
			f_bairro: "",
			f_endereco_cidade: "",
			f_endereco_estado: "",
			f_endereco: "",
			f_endereco_numero: "",
			f_endereco_complemento: "",
			f_endereco_referencia: "",
			f_obs: "",
			f_telefone_contato: "",
			f_taxa_instalacao: "",
		},
	});

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors, isValid },
	} = form;

	// Taxa options from generated labels
	const taxaOptions = useMemo(
		() =>
			Object.entries(TROCAENDERECO_TAXAINSTALACAO_LABELS) as [string, string][],
		[],
	);

	// Mutation
	const mutation = useCreateTrocaEndereco();

	// -----------------------------------------------------------------------
	// Submit
	// -----------------------------------------------------------------------

	const onSubmit: SubmitHandler<TrocaEnderecoFormValues> = (values) => {
		mutation.mutate(
			{
				f_cep: values.f_cep.replace(/\D/g, ""),
				f_bairro: values.f_bairro,
				f_endereco_cidade: values.f_endereco_cidade,
				f_endereco_estado: values.f_endereco_estado.toUpperCase(),
				f_endereco: values.f_endereco,
				f_endereco_numero: values.f_endereco_numero.trim(),
				f_endereco_complemento: values.f_endereco_complemento,
				f_endereco_referencia: values.f_endereco_referencia ?? "",
				f_obs: values.f_obs ?? "",
				f_telefone_contato: values.f_telefone_contato ?? "",
				f_taxa_instalacao:
					values.f_taxa_instalacao as TrocaEnderecoTaxaInstalacao,
				f_id_contrato: contratoId,
				f_cliente: clienteNome,
			},
			{
				onSuccess: () => {
					onOpenChange(false);
					reset();
				},
			},
		);
	};

	// Reset form when sheet closes
	useEffect(() => {
		if (!open) {
			reset();
			mutation.reset();
		}
	}, [open, reset, mutation]);

	// -----------------------------------------------------------------------
	// Render
	// -----------------------------------------------------------------------

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent
				side="right"
				className="flex flex-col data-[side=right]:sm:max-w-2xl"
			>
				<SheetHeader>
					<SheetTitle className="flex items-center gap-2">
						<MapPin className="size-5" />
						Troca de Endereço
					</SheetTitle>
				</SheetHeader>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-1 flex-col overflow-hidden"
				>
					<div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
						{/* Section: Preencha abaixo o novo endereço */}
						<fieldset>
							<div className="mb-4 flex items-center gap-3">
								<div className="h-px flex-1 bg-border" />
								<span className="text-xs font-medium text-muted-foreground">
									PREENCHA ABAIXO O NOVO ENDEREÇO
								</span>
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="mb-4 space-y-3">
								<div className="grid grid-cols-4 gap-3">
									<div className="space-y-1.5">
										<label htmlFor="f_cep" className="text-sm font-medium">
											CEP <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cep"
											placeholder="Somente números"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_cep")}
										/>
										{errors.f_cep && (
											<p className="text-xs text-destructive">
												{errors.f_cep.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label htmlFor="f_bairro" className="text-sm font-medium">
											Bairro <span className="text-destructive">*</span>
										</label>
										<input
											id="f_bairro"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_bairro")}
										/>
										{errors.f_bairro && (
											<p className="text-xs text-destructive">
												{errors.f_bairro.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_endereco_cidade"
											className="text-sm font-medium"
										>
											Cidade <span className="text-destructive">*</span>
										</label>
										<input
											id="f_endereco_cidade"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_endereco_cidade")}
										/>
										{errors.f_endereco_cidade && (
											<p className="text-xs text-destructive">
												{errors.f_endereco_cidade.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_endereco_estado"
											className="text-sm font-medium"
										>
											UF <span className="text-destructive">*</span>
										</label>
										<input
											id="f_endereco_estado"
											placeholder="Ex: SC"
											maxLength={2}
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm uppercase"
											{...register("f_endereco_estado")}
										/>
										{errors.f_endereco_estado && (
											<p className="text-xs text-destructive">
												{errors.f_endereco_estado.message}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-[4fr_1fr] gap-3">
									<div className="space-y-1.5">
										<label htmlFor="f_endereco" className="text-sm font-medium">
											Endereço <span className="text-destructive">*</span>
										</label>
										<input
											id="f_endereco"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_endereco")}
										/>
										{errors.f_endereco && (
											<p className="text-xs text-destructive">
												{errors.f_endereco.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_endereco_numero"
											className="text-sm font-medium"
										>
											Número <span className="text-destructive">*</span>
										</label>
										<input
											id="f_endereco_numero"
											placeholder="SN para sem número"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_endereco_numero")}
										/>
										{errors.f_endereco_numero && (
											<p className="text-xs text-destructive">
												{errors.f_endereco_numero.message}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<label
											htmlFor="f_endereco_complemento"
											className="text-sm font-medium"
										>
											Complemento <span className="text-destructive">*</span>
										</label>
										<input
											id="f_endereco_complemento"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_endereco_complemento")}
										/>
										{errors.f_endereco_complemento && (
											<p className="text-xs text-destructive">
												{errors.f_endereco_complemento.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_endereco_referencia"
											className="text-sm font-medium"
										>
											Ponto de Referência
										</label>
										<input
											id="f_endereco_referencia"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_endereco_referencia")}
										/>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<label htmlFor="f_obs" className="text-sm font-medium">
											Observações
										</label>
										<input
											id="f_obs"
											placeholder="Observações para a troca de endereço"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_obs")}
										/>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_telefone_contato"
											className="text-sm font-medium"
										>
											Telefone para Contato
										</label>
										<input
											id="f_telefone_contato"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_telefone_contato")}
										/>
									</div>
								</div>
							</div>
						</fieldset>

						{/* Section: Cobrança */}
						<fieldset>
							<div className="mb-4 flex items-center gap-3">
								<div className="h-px flex-1 bg-border" />
								<span className="text-xs font-medium text-muted-foreground">
									COBRANÇA
								</span>
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="mb-4 space-y-3">
								<div className="space-y-1.5">
									<label
										htmlFor="f_taxa_instalacao"
										className="text-sm font-medium"
									>
										Taxa de Instalação{" "}
										<span className="text-destructive">*</span>
									</label>
									<select
										id="f_taxa_instalacao"
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										{...register("f_taxa_instalacao")}
									>
										<option value="">Selecionar...</option>
										{taxaOptions.map(([value, label]) => (
											<option key={value} value={value}>
												{label}
											</option>
										))}
									</select>
									{errors.f_taxa_instalacao && (
										<p className="text-xs text-destructive">
											{errors.f_taxa_instalacao.message}
										</p>
									)}
								</div>
							</div>
						</fieldset>

						{/* Error display */}
						{mutation.isError && (
							<div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
								{mutation.error?.message ?? "Erro ao criar troca de endereço"}
							</div>
						)}
					</div>

					<SheetFooter className="border-t px-4 py-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
							disabled={mutation.isPending}
						>
							Cancelar
						</Button>
						<Button type="submit" disabled={!isValid || mutation.isPending}>
							{mutation.isPending && (
								<Loader2 className="mr-2 size-4 animate-spin" />
							)}
							Salvar
						</Button>
					</SheetFooter>
				</form>
			</SheetContent>
		</Sheet>
	);
}
