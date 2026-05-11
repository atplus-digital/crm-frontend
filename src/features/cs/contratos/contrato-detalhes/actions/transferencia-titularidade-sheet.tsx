import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightLeft, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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
import {
	CRMTROCATITULARIDADE_COMPLEMENTO_LABELS,
	CRMTROCATITULARIDADE_ESTADO_LABELS,
	CRMTROCATITULARIDADE_TIPOPESSOA_LABELS,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { PESSOAS_CREDITO_LABELS } from "#/generated/types/nocobase/pessoas";
import { cn } from "#/lib/utils";
import { useCreateTrocaTitularidade } from "@/features/cs/troca-titularidade/troca-titularidade-hooks";
import type { CreateTrocaTitularidadeInput } from "@/features/cs/troca-titularidade/troca-titularidade-service";
import {
	searchPessoasFisicas,
	searchPessoasJuridicas,
} from "@/features/cs/troca-titularidade/troca-titularidade-service";

// ============================================================================
// Types
// ============================================================================

interface TransferenciaTitularidadeSheetProps {
	contrato: ContratoWithCliente;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

type TipoPessoa = "PF" | "PJ";
type SelectedPF = Pick<Pessoas, "id" | "f_nome" | "f_cpf" | "f_credito"> | null;
type SelectedPJ = Pick<Empresas, "id" | "f_razao_social" | "f_cnpj"> | null;

// ============================================================================
// Schema
// ============================================================================

const transferenciaTitularidadeSchema = z.object({
	// Cedente
	f_cedente_responsavel_legal: z
		.string()
		.min(1, "Responsável legal é obrigatório"),
	f_cedente_telefone: z.string().min(1, "Telefone é obrigatório"),
	f_cedente_email: z.string().email("E-mail inválido"),

	// Cessionário
	f_cessionario: z.string().min(1, "Nome é obrigatório"),
	f_cessionario_documento: z.string().min(1, "Documento é obrigatório"),
	f_cessionario_responsavel: z.string().optional(),
	f_cessionario_telefone: z.string().min(1, "Telefone é obrigatório"),
	f_cessionario_email: z.string().email("E-mail inválido"),

	// Endereço
	f_cep: z.string().min(1, "CEP é obrigatório"),
	f_endereco: z.string().min(1, "Endereço é obrigatório"),
	f_numero: z.string().min(1, "Número é obrigatório"),
	f_bairro: z.string().min(1, "Bairro é obrigatório"),
	f_complemento: z.string().min(1, "Complemento é obrigatório"),
	f_cidade: z.string().min(1, "Cidade é obrigatória"),
	f_estado: z.string().min(1, "Estado é obrigatório"),
});

type TransferenciaTitularidadeFormValues = z.infer<
	typeof transferenciaTitularidadeSchema
>;

// ============================================================================
// Credit Badge Helper
// ============================================================================

const CREDITO_COLORS: Record<keyof typeof PESSOAS_CREDITO_LABELS, string> = {
	1: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	2: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	9: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

// ============================================================================
// Main Component
// ============================================================================

export function TransferenciaTitularidadeSheet({
	contrato,
	open,
	onOpenChange,
}: TransferenciaTitularidadeSheetProps) {
	const cedente = contrato.f_nc_cliente;

	// Pre-filled read-only fields
	const cedenteNome = cedente?.razao ?? "";
	const cedenteDoc = cedente?.cnpj_cpf ?? "";
	const contratoId = String(contrato.id);

	// Form
	const form = useForm<TransferenciaTitularidadeFormValues>({
		resolver: zodResolver(transferenciaTitularidadeSchema),
		defaultValues: {
			f_cedente_responsavel_legal: "",
			f_cedente_telefone: "",
			f_cedente_email: "",
			f_cessionario: "",
			f_cessionario_documento: "",
			f_cessionario_responsavel: "",
			f_cessionario_telefone: "",
			f_cessionario_email: "",
			f_cep: "",
			f_endereco: "",
			f_numero: "",
			f_bairro: "",
			f_complemento: "",
			f_cidade: "",
			f_estado: "",
		},
	});

	const {
		handleSubmit,
		reset,
		register,
		setValue,
		formState: { errors },
	} = form;

	// UI state (not form state - lookup search)
	const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>("PF");

	// Cessionário editable fields (kept in sync with form)
	const [cessionarioNome, setCessionarioNome] = useState("");
	const [cessionarioDoc, setCessionarioDoc] = useState("");
	const [cessionarioResponsavel, setCessionarioResponsavel] = useState("");
	const [cessionarioTelefone, setCessionarioTelefone] = useState("");
	const [cessionarioEmail, setCessionarioEmail] = useState("");

	// PF lookup
	const [selectedPF, setSelectedPF] = useState<SelectedPF>(null);
	const [pfSearch, setPfSearch] = useState("");
	const [pfResults, setPfResults] = useState<SelectedPF[]>([]);
	const [pfLoading, setPfLoading] = useState(false);

	// PJ lookup
	const [selectedPJ, setSelectedPJ] = useState<SelectedPJ>(null);
	const [pjSearch, setPjSearch] = useState("");
	const [pjResults, setPjResults] = useState<SelectedPJ[]>([]);
	const [pjLoading, setPjLoading] = useState(false);

	// -----------------------------------------------------------------------
	// PF Search debounce
	// -----------------------------------------------------------------------

	useEffect(() => {
		if (pfSearch.length < 2) {
			setPfResults([]);
			return;
		}

		const timer = setTimeout(async () => {
			setPfLoading(true);
			const results = await searchPessoasFisicas(pfSearch);
			setPfResults(results);
			setPfLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [pfSearch]);

	// -----------------------------------------------------------------------
	// PJ Search debounce
	// -----------------------------------------------------------------------

	useEffect(() => {
		if (pjSearch.length < 2) {
			setPjResults([]);
			return;
		}

		const timer = setTimeout(async () => {
			setPjLoading(true);
			const results = await searchPessoasJuridicas(pjSearch);
			setPjResults(results);
			setPjLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [pjSearch]);

	// -----------------------------------------------------------------------
	// Credit status display
	// -----------------------------------------------------------------------

	const creditLabel = selectedPF?.f_credito
		? PESSOAS_CREDITO_LABELS[
				Number(selectedPF.f_credito) as keyof typeof PESSOAS_CREDITO_LABELS
			]
		: null;

	const creditoColor = selectedPF?.f_credito
		? (CREDITO_COLORS[selectedPF.f_credito] ?? "")
		: "";

	// -----------------------------------------------------------------------
	// Submit
	// -----------------------------------------------------------------------

	const mutation = useCreateTrocaTitularidade();

	const submitDisabled = useMemo(() => {
		if (tipoPessoa === "PF" && selectedPF?.f_credito === "9") return true;
		return false;
	}, [tipoPessoa, selectedPF?.f_credito]);

	const onSubmit: SubmitHandler<TransferenciaTitularidadeFormValues> = (
		values,
	) => {
		const payload: CreateTrocaTitularidadeInput = {
			f_cedente: cedenteNome,
			f_cedente_documento: cedenteDoc,
			f_cedente_responsavel_legal: values.f_cedente_responsavel_legal,
			f_cedente_telefone: values.f_cedente_telefone,
			f_cedente_email: values.f_cedente_email,
			f_tipo_pessoa: tipoPessoa,
			f_pessoa_pf: tipoPessoa === "PF" ? (selectedPF?.id ?? null) : null,
			f_pessoa_pj: tipoPessoa === "PJ" ? (selectedPJ?.id ?? null) : null,
			f_cessionario: values.f_cessionario,
			f_cessionario_documento: values.f_cessionario_documento,
			f_cessionario_responsavel: values.f_cessionario_responsavel ?? "",
			f_cessionario_telefone: values.f_cessionario_telefone,
			f_cessionario_email: values.f_cessionario_email,
			f_id_contrato: contratoId,
			f_cep: values.f_cep,
			f_endereco: values.f_endereco,
			f_numero: values.f_numero.trim(),
			f_bairro: values.f_bairro,
			// biome-ignore lint/suspicious/noExplicitAny: enum type from NocoBase generated schema
			f_complemento: values.f_complemento as any,
			f_cidade: values.f_cidade,
			// biome-ignore lint/suspicious/noExplicitAny: enum type from NocoBase generated schema
			f_estado: values.f_estado as any,
		};

		mutation.mutate(payload, {
			onSuccess: () => {
				onOpenChange(false);
			},
		});
	};

	// -----------------------------------------------------------------------
	// Reset form on close
	// -----------------------------------------------------------------------

	// biome-ignore lint/correctness/useExhaustiveDependencies: reset/mutation are stable but including them in deps causes infinite loop
	useEffect(() => {
		if (!open) {
			setTipoPessoa("PF");
			setCessionarioNome("");
			setCessionarioDoc("");
			setCessionarioResponsavel("");
			setCessionarioTelefone("");
			setCessionarioEmail("");
			setSelectedPF(null);
			setPfSearch("");
			setSelectedPJ(null);
			setPjSearch("");
			reset();
			mutation.reset();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	// -----------------------------------------------------------------------
	// Complemento / Estado options
	// -----------------------------------------------------------------------

	const complementoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS),
		[],
	);

	const estadoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS),
		[],
	);

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
						<ArrowRightLeft className="size-5" />
						Transferência de Titularidade
					</SheetTitle>
				</SheetHeader>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-1 flex-col overflow-hidden"
				>
					<div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
						{/* ================================================================ */}
						{/* Section: DADOS DO CEDENTE                                    */}
						{/* ================================================================ */}
						<fieldset>
							<div className="mb-4 flex items-center gap-3">
								<div className="h-px flex-1 bg-border" />
								<span className="text-xs font-medium text-muted-foreground">
									DADOS DO CEDENTE
								</span>
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="mb-4 space-y-3">
								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<label
											htmlFor="cedente-nome"
											className="text-sm font-medium"
										>
											Nome
										</label>
										<input
											id="cedente-nome"
											value={cedenteNome}
											disabled
											className="flex h-9 w-full rounded-md border border-input bg-muted/50 px-3 py-1 text-sm shadow-sm"
										/>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="cedente-documento"
											className="text-sm font-medium"
										>
											Documento
										</label>
										<input
											id="cedente-documento"
											value={cedenteDoc}
											disabled
											className="flex h-9 w-full rounded-md border border-input bg-muted/50 px-3 py-1 text-sm shadow-sm"
										/>
									</div>
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor="f_cedente_responsavel_legal"
										className="text-sm font-medium"
									>
										Responsável Legal{" "}
										<span className="text-destructive">*</span>
									</label>
									<input
										id="f_cedente_responsavel_legal"
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										{...register("f_cedente_responsavel_legal")}
									/>
									{errors.f_cedente_responsavel_legal && (
										<p className="text-xs text-destructive">
											{errors.f_cedente_responsavel_legal.message}
										</p>
									)}
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<label
											htmlFor="f_cedente_telefone"
											className="text-sm font-medium"
										>
											Telefone <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cedente_telefone"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_cedente_telefone")}
										/>
										{errors.f_cedente_telefone && (
											<p className="text-xs text-destructive">
												{errors.f_cedente_telefone.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_cedente_email"
											className="text-sm font-medium"
										>
											Email <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cedente_email"
											type="email"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_cedente_email")}
										/>
										{errors.f_cedente_email && (
											<p className="text-xs text-destructive">
												{errors.f_cedente_email.message}
											</p>
										)}
									</div>
								</div>
							</div>
						</fieldset>

						{/* ================================================================ */}
						{/* Section: DADOS DO CESSIONÁRIO                                  */}
						{/* ================================================================ */}
						<fieldset>
							<div className="mb-4 flex items-center gap-3">
								<div className="h-px flex-1 bg-border" />
								<span className="text-xs font-medium text-muted-foreground">
									DADOS DO CESSIONÁRIO
								</span>
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="mb-4 space-y-3">
								<div className="space-y-1.5">
									<label htmlFor="tipo-pessoa" className="text-sm font-medium">
										Tipo de Pessoa <span className="text-destructive">*</span>
									</label>
									<select
										id="tipo-pessoa"
										value={tipoPessoa}
										onChange={(e) => {
											setTipoPessoa(e.target.value as TipoPessoa);
											setSelectedPF(null);
											setPfSearch("");
											setSelectedPJ(null);
											setPjSearch("");
											setCessionarioNome("");
											setCessionarioDoc("");
										}}
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
									>
										{Object.entries(CRMTROCATITULARIDADE_TIPOPESSOA_LABELS).map(
											([value, label]) => (
												<option key={value} value={value}>
													{label}
												</option>
											),
										)}
									</select>
								</div>

								{/* PF-specific fields */}
								{tipoPessoa === "PF" && (
									<>
										<div className="space-y-1.5">
											<label
												htmlFor="pf-search"
												className="text-sm font-medium"
											>
												Pessoa (PF) <span className="text-destructive">*</span>
											</label>
											<input
												id="pf-search"
												type="text"
												placeholder="Buscar por nome..."
												value={pfSearch}
												onChange={(e) => setPfSearch(e.target.value)}
												className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											/>
											{pfLoading && (
												<p className="text-xs text-muted-foreground">
													Buscando...
												</p>
											)}
											{pfResults.length > 0 && (
												<ul className="border rounded-md max-h-40 overflow-y-auto">
													{pfResults.map((result) => (
														<li key={result?.id}>
															<button
																type="button"
																onClick={() => {
																	setSelectedPF(result);
																	setCessionarioNome(result?.f_nome ?? "");
																	setCessionarioDoc(result?.f_cpf ?? "");
																	setValue(
																		"f_cessionario",
																		result?.f_nome ?? "",
																	);
																	setValue(
																		"f_cessionario_documento",
																		result?.f_cpf ?? "",
																	);
																	setPfSearch("");
																}}
																className="w-full px-3 py-2 text-left text-sm hover:bg-muted"
															>
																{result?.f_nome} — {result?.f_cpf}
															</button>
														</li>
													))}
												</ul>
											)}
											{selectedPF && (
												<div className="flex items-center gap-2 mt-1">
													<span className="text-xs text-muted-foreground">
														Selecionado: {selectedPF.f_nome}
													</span>
													<button
														type="button"
														onClick={() => {
															setSelectedPF(null);
															setCessionarioNome("");
															setCessionarioDoc("");
														}}
														className="text-xs text-muted-foreground hover:text-foreground"
													>
														✕
													</button>
												</div>
											)}
										</div>

										{/* Credit status */}
										{selectedPF && creditLabel && (
											<div className="flex items-center gap-2">
												<span className="text-sm text-muted-foreground">
													Análise de Crédito:
												</span>
												<span
													className={cn(
														"inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
														creditoColor,
													)}
												>
													{creditLabel}
												</span>
											</div>
										)}
									</>
								)}

								{/* PJ-specific fields */}
								{tipoPessoa === "PJ" && (
									<div className="space-y-1.5">
										<label htmlFor="pj-search" className="text-sm font-medium">
											Pessoa (PJ)
										</label>
										<input
											id="pj-search"
											type="text"
											placeholder="Buscar por razão social..."
											value={pjSearch}
											onChange={(e) => setPjSearch(e.target.value)}
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										/>
										{pjLoading && (
											<p className="text-xs text-muted-foreground">
												Buscando...
											</p>
										)}
										{pjResults.length > 0 && (
											<ul className="border rounded-md max-h-40 overflow-y-auto">
												{pjResults.map((result) => (
													<li key={result?.id}>
														<button
															type="button"
															onClick={() => {
																setSelectedPJ(result);
																setPjSearch("");
															}}
															className="w-full px-3 py-2 text-left text-sm hover:bg-muted"
														>
															{result?.f_razao_social} — {result?.f_cnpj}
														</button>
													</li>
												))}
											</ul>
										)}
										{selectedPJ && (
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs text-muted-foreground">
													Selecionado: {selectedPJ.f_razao_social}
												</span>
												<button
													type="button"
													onClick={() => setSelectedPJ(null)}
													className="text-xs text-muted-foreground hover:text-foreground"
												>
													✕
												</button>
											</div>
										)}
									</div>
								)}

								{/* Nome + Documento */}
								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<label
											htmlFor="f_cessionario"
											className="text-sm font-medium"
										>
											Nome <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cessionario"
											value={cessionarioNome}
											onChange={(e) => {
												setCessionarioNome(e.target.value);
												setValue("f_cessionario", e.target.value);
											}}
											disabled={tipoPessoa === "PF"}
											className={cn(
												"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm",
												tipoPessoa === "PF" && "bg-muted/50",
											)}
										/>
										{errors.f_cessionario && (
											<p className="text-xs text-destructive">
												{errors.f_cessionario.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_cessionario_documento"
											className="text-sm font-medium"
										>
											Documento <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cessionario_documento"
											value={cessionarioDoc}
											onChange={(e) => {
												setCessionarioDoc(e.target.value);
												setValue("f_cessionario_documento", e.target.value);
											}}
											disabled={tipoPessoa === "PF"}
											className={cn(
												"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm",
												tipoPessoa === "PF" && "bg-muted/50",
											)}
										/>
										{errors.f_cessionario_documento && (
											<p className="text-xs text-destructive">
												{errors.f_cessionario_documento.message}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-3 gap-3">
									<div className="space-y-1.5">
										<label
											htmlFor="f_cessionario_responsavel"
											className="text-sm font-medium"
										>
											Responsável Legal
										</label>
										<input
											id="f_cessionario_responsavel"
											value={cessionarioResponsavel}
											onChange={(e) => {
												setCessionarioResponsavel(e.target.value);
												setValue("f_cessionario_responsavel", e.target.value);
											}}
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										/>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_cessionario_telefone"
											className="text-sm font-medium"
										>
											Telefone <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cessionario_telefone"
											value={cessionarioTelefone}
											onChange={(e) => {
												setCessionarioTelefone(e.target.value);
												setValue("f_cessionario_telefone", e.target.value);
											}}
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										/>
										{errors.f_cessionario_telefone && (
											<p className="text-xs text-destructive">
												{errors.f_cessionario_telefone.message}
											</p>
										)}
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="f_cessionario_email"
											className="text-sm font-medium"
										>
											Email <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cessionario_email"
											type="email"
											value={cessionarioEmail}
											onChange={(e) => {
												setCessionarioEmail(e.target.value);
												setValue("f_cessionario_email", e.target.value);
											}}
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										/>
										{errors.f_cessionario_email && (
											<p className="text-xs text-destructive">
												{errors.f_cessionario_email.message}
											</p>
										)}
									</div>
								</div>
							</div>
						</fieldset>

						{/* ================================================================ */}
						{/* Section: DADOS DO CONTRATO                                   */}
						{/* ================================================================ */}
						<fieldset>
							<div className="mb-4 flex items-center gap-3">
								<div className="h-px flex-1 bg-border" />
								<span className="text-xs font-medium text-muted-foreground">
									DADOS DO CONTRATO
								</span>
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="mb-4 space-y-3">
								<div className="space-y-1.5">
									<label htmlFor="contrato-id" className="text-sm font-medium">
										Contrato ID
									</label>
									<input
										id="contrato-id"
										value={contratoId}
										disabled
										className="flex h-9 w-full rounded-md border border-input bg-muted/50 px-3 py-1 text-sm shadow-sm"
									/>
								</div>

								<div className="space-y-1.5">
									<label htmlFor="f_cep" className="text-sm font-medium">
										CEP <span className="text-destructive">*</span>
									</label>
									<input
										id="f_cep"
										placeholder="Exemplo: 88523-000"
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
										{...register("f_cep")}
									/>
									{errors.f_cep && (
										<p className="text-xs text-destructive">
											{errors.f_cep.message}
										</p>
									)}
								</div>

								<div className="grid grid-cols-[1fr_auto] gap-3">
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
									<div className="w-28 space-y-1.5">
										<label htmlFor="f_numero" className="text-sm font-medium">
											Número <span className="text-destructive">*</span>
										</label>
										<input
											id="f_numero"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_numero")}
										/>
										{errors.f_numero && (
											<p className="text-xs text-destructive">
												{errors.f_numero.message}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
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
											htmlFor="f_complemento"
											className="text-sm font-medium"
										>
											Complemento <span className="text-destructive">*</span>
										</label>
										<select
											id="f_complemento"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_complemento")}
										>
											<option value="">Selecionar...</option>
											{complementoOptions.map(([value, label]) => (
												<option key={value} value={value}>
													{label}
												</option>
											))}
										</select>
										{errors.f_complemento && (
											<p className="text-xs text-destructive">
												{errors.f_complemento.message}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-[1fr_auto] gap-3">
									<div className="space-y-1.5">
										<label htmlFor="f_cidade" className="text-sm font-medium">
											Cidade <span className="text-destructive">*</span>
										</label>
										<input
											id="f_cidade"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_cidade")}
										/>
										{errors.f_cidade && (
											<p className="text-xs text-destructive">
												{errors.f_cidade.message}
											</p>
										)}
									</div>
									<div className="w-24 space-y-1.5">
										<label htmlFor="f_estado" className="text-sm font-medium">
											Estado <span className="text-destructive">*</span>
										</label>
										<select
											id="f_estado"
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
											{...register("f_estado")}
										>
											<option value="">UF</option>
											{estadoOptions.map(([value, label]) => (
												<option key={value} value={value}>
													{label}
												</option>
											))}
										</select>
										{errors.f_estado && (
											<p className="text-xs text-destructive">
												{errors.f_estado.message}
											</p>
										)}
									</div>
								</div>
							</div>
						</fieldset>

						{/* Error display */}
						{mutation.isError && (
							<div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
								{mutation.error?.message ?? "Erro ao criar transferência"}
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
						<Button
							type="submit"
							disabled={submitDisabled || mutation.isPending}
						>
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
