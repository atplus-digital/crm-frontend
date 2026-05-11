import { ArrowRightLeft, Loader2, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
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
import { Separator } from "#/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import type {
	CrmTrocaTitularidadeComplemento,
	CrmTrocaTitularidadeEstado,
} from "#/generated/types/nocobase/crm-troca-titularidade";
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
// Credit Badge Helper
// ============================================================================

const CREDITO_COLORS: Record<keyof typeof PESSOAS_CREDITO_LABELS, string> = {
	1: "bg-blue-100 text-blue-800",
	2: "bg-amber-100 text-amber-800",
	9: "bg-red-100 text-red-800",
};

// ============================================================================
// Searchable Lookup Component
// ============================================================================

interface SearchableLookupProps<T> {
	placeholder: string;
	loading: boolean;
	results: T[];
	selected: T | null;
	getOptionLabel: (option: T) => string;
	getOptionId: (option: T) => number;
	onSearch: (query: string) => void;
	onSelect: (option: T) => void;
	onClear: () => void;
	value: string;
	onValueChange: (value: string) => void;
}

function SearchableLookup<T>({
	placeholder,
	loading,
	results,
	selected,
	getOptionLabel,
	getOptionId,
	onSearch,
	onSelect,
	onClear,
	value,
	onValueChange,
}: SearchableLookupProps<T>) {
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Fechar ao clicar fora
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className="relative">
			{selected ? (
				<div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
					<span className="flex-1 truncate">{getOptionLabel(selected)}</span>
					<Button
						variant="ghost"
						size="icon-sm"
						onClick={() => {
							onClear();
							onValueChange("");
						}}
					>
						<span className="sr-only">Limpar</span>
						<span aria-hidden="true">&times;</span>
					</Button>
				</div>
			) : (
				<div className="relative">
					<div className="relative">
						<Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							placeholder={placeholder}
							value={value}
							onChange={(e) => {
								onValueChange(e.target.value);
								onSearch(e.target.value);
								setOpen(true);
							}}
							onFocus={() => {
								if (results.length > 0) setOpen(true);
							}}
							className="pl-9"
						/>
					</div>
					{open && results.length > 0 && (
						<div className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-md border bg-popover shadow-md">
							{loading ? (
								<div className="flex items-center justify-center py-4">
									<Loader2 className="size-4 animate-spin text-muted-foreground" />
								</div>
							) : (
								results.map((option) => (
									<button
										key={getOptionId(option)}
										type="button"
										className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-accent"
										onClick={() => {
											onSelect(option);
											setOpen(false);
										}}
									>
										<span className="truncate">{getOptionLabel(option)}</span>
									</button>
								))
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

// ============================================================================
// Main Component
// ============================================================================

export function TransferenciaTitularidadeSheet({
	contrato,
	open,
	onOpenChange,
}: TransferenciaTitularidadeSheetProps) {
	const cedente = contrato.f_nc_cliente;

	// -----------------------------------------------------------------------
	// Form state
	// -----------------------------------------------------------------------

	const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>("PF");

	// Cedente (pre-filled, read-only)
	const [cedenteNome] = useState(cedente?.razao ?? "");
	const [cedenteDoc] = useState(cedente?.cnpj_cpf ?? "");
	const [cedenteResponsavel, setCedenteResponsavel] = useState("");
	const [cedenteTelefone, setCedenteTelefone] = useState("");
	const [cedenteEmail, setCedenteEmail] = useState("");

	// Cessionário
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

	// Contrato (pre-filled, read-only)
	const [contratoId] = useState(String(contrato.id));
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [bairro, setBairro] = useState("");
	const [complemento, setComplemento] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");

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

	const creditLabel = useMemo(() => {
		if (!selectedPF?.f_credito) return null;
		return (
			PESSOAS_CREDITO_LABELS[
				Number(selectedPF.f_credito) as keyof typeof PESSOAS_CREDITO_LABELS
			] ?? null
		);
	}, [selectedPF?.f_credito]);

	const creditColor = useMemo(() => {
		if (!selectedPF?.f_credito) return "";
		return CREDITO_COLORS[selectedPF.f_credito] ?? "";
	}, [selectedPF?.f_credito]);

	// -----------------------------------------------------------------------
	// Submit
	// -----------------------------------------------------------------------

	const mutation = useCreateTrocaTitularidade();

	const submitDisabled = useMemo(() => {
		if (tipoPessoa === "PF" && selectedPF?.f_credito === "9") return true;
		return false;
	}, [tipoPessoa, selectedPF?.f_credito]);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const payload: CreateTrocaTitularidadeInput = {
			f_cedente: cedenteNome,
			f_cedente_documento: cedenteDoc,
			f_cedente_responsavel_legal: cedenteResponsavel,
			f_cedente_telefone: cedenteTelefone,
			f_cedente_email: cedenteEmail,
			f_tipo_pessoa: tipoPessoa,
			f_pessoa_pf: tipoPessoa === "PF" ? (selectedPF?.id ?? null) : null,
			f_pessoa_pj: tipoPessoa === "PJ" ? (selectedPJ?.id ?? null) : null,
			f_cessionario: cessionarioNome,
			f_cessionario_documento: cessionarioDoc,
			f_cessionario_responsavel: cessionarioResponsavel,
			f_cessionario_telefone: cessionarioTelefone,
			f_cessionario_email: cessionarioEmail,
			f_id_contrato: contratoId,
			f_cep: cep,
			f_endereco: endereco,
			f_numero: numero.trim(),
			f_bairro: bairro,
			f_complemento: complemento as CrmTrocaTitularidadeComplemento,
			f_cidade: cidade,
			f_estado: estado as CrmTrocaTitularidadeEstado,
		};

		mutation.mutate(payload, {
			onSuccess: () => {
				onOpenChange(false);
			},
		});
	}

	// -----------------------------------------------------------------------
	// Reset form on open
	// -----------------------------------------------------------------------

	function handleClose(closeOpen: boolean) {
		if (!closeOpen) {
			// Reset form
			setTipoPessoa("PF");
			setCedenteResponsavel("");
			setCedenteTelefone("");
			setCedenteEmail("");
			setCessionarioNome("");
			setCessionarioDoc("");
			setCessionarioResponsavel("");
			setCessionarioTelefone("");
			setCessionarioEmail("");
			setSelectedPF(null);
			setPfSearch("");
			setSelectedPJ(null);
			setPjSearch("");
			setCep("");
			setEndereco("");
			setNumero("");
			setBairro("");
			setComplemento("");
			setCidade("");
			setEstado("");
			mutation.reset();
		}
		onOpenChange(closeOpen);
	}

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
		<Sheet open={open} onOpenChange={handleClose}>
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
					onSubmit={handleSubmit}
					className="flex flex-1 flex-col overflow-hidden"
				>
					<div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
						{/* ======================================================== */}
						{/* Section 1: Dados do Cedente                              */}
						{/* ======================================================== */}
						<fieldset>
							<div className="flex items-center gap-3">
								<Separator className="flex-1" />
								<span className="text-xs font-medium text-muted-foreground">
									DADOS DO CEDENTE
								</span>
								<Separator className="flex-1" />
							</div>

							<div className="mt-4 space-y-3">
								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="cedente-nome">Nome</Label>
										<Input
											id="cedente-nome"
											value={cedenteNome}
											disabled
											className="bg-muted/50"
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="cedente-doc">Documento</Label>
										<Input
											id="cedente-doc"
											value={cedenteDoc}
											disabled
											className="bg-muted/50"
										/>
									</div>
								</div>

								<div className="space-y-1.5">
									<Label htmlFor="cedente-responsavel">
										Responsável Legal{" "}
										<span className="text-destructive">*</span>
									</Label>
									<Input
										id="cedente-responsavel"
										value={cedenteResponsavel}
										onChange={(e) => setCedenteResponsavel(e.target.value)}
										required
									/>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="cedente-telefone">
											Telefone <span className="text-destructive">*</span>
										</Label>
										<Input
											id="cedente-telefone"
											value={cedenteTelefone}
											onChange={(e) => setCedenteTelefone(e.target.value)}
											required
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="cedente-email">
											Email <span className="text-destructive">*</span>
										</Label>
										<Input
											id="cedente-email"
											type="email"
											value={cedenteEmail}
											onChange={(e) => setCedenteEmail(e.target.value)}
											required
										/>
									</div>
								</div>
							</div>
						</fieldset>

						{/* ======================================================== */}
						{/* Section 2: Dados do Cessionário                          */}
						{/* ======================================================== */}
						<fieldset>
							<div className="flex items-center gap-3">
								<Separator className="flex-1" />
								<span className="text-xs font-medium text-muted-foreground">
									DADOS DO CESSIONÁRIO
								</span>
								<Separator className="flex-1" />
							</div>

							<div className="mt-4 space-y-3">
								<div className="space-y-1.5">
									<Label htmlFor="tipo-pessoa">
										Tipo de Pessoa <span className="text-destructive">*</span>
									</Label>
									<Select
										value={tipoPessoa}
										onValueChange={(v) => {
											setTipoPessoa(v as TipoPessoa);
											setSelectedPF(null);
											setPfSearch("");
											setSelectedPJ(null);
											setPjSearch("");
											setCessionarioNome("");
											setCessionarioDoc("");
										}}
									>
										<SelectTrigger id="tipo-pessoa">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{Object.entries(
												CRMTROCATITULARIDADE_TIPOPESSOA_LABELS,
											).map(([value, label]) => (
												<SelectItem key={value} value={value}>
													{label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								{/* PF-specific fields */}
								{tipoPessoa === "PF" && (
									<>
										<div className="space-y-1.5">
											<Label htmlFor="pf-lookup">
												Pessoa (PF) <span className="text-destructive">*</span>
											</Label>
											<SearchableLookup<SelectedPF>
												placeholder="Buscar por nome..."
												loading={pfLoading}
												results={pfResults as SelectedPF[]}
												selected={selectedPF}
												getOptionLabel={(o) =>
													`${o?.f_nome ?? ""} — ${o?.f_cpf ?? ""}`
												}
												getOptionId={(o) => o?.id ?? 0}
												onSearch={setPfSearch}
												onSelect={(person) => {
													setSelectedPF(person);
													setCessionarioNome(person?.f_nome ?? "");
													setCessionarioDoc(person?.f_cpf ?? "");
													setPfSearch("");
												}}
												onClear={() => {
													setSelectedPF(null);
													setCessionarioNome("");
													setCessionarioDoc("");
												}}
												value={pfSearch}
												onValueChange={setPfSearch}
											/>
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
														creditColor,
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
										<Label htmlFor="pj-lookup">Pessoa (PJ)</Label>
										<SearchableLookup<SelectedPJ>
											placeholder="Buscar por razão social..."
											loading={pjLoading}
											results={pjResults as SelectedPJ[]}
											selected={selectedPJ}
											getOptionLabel={(o) =>
												`${o?.f_razao_social ?? ""} — ${o?.f_cnpj ?? ""}`
											}
											getOptionId={(o) => o?.id ?? 0}
											onSearch={setPjSearch}
											onSelect={(empresa) => {
												setSelectedPJ(empresa);
												setPjSearch("");
											}}
											onClear={() => {
												setSelectedPJ(null);
											}}
											value={pjSearch}
											onValueChange={setPjSearch}
										/>
									</div>
								)}

								{/* Nome + Documento */}
								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="cessionario-nome">
											Nome{" "}
											{tipoPessoa === "PF" || !tipoPessoa ? (
												<span className="text-destructive">*</span>
											) : null}
										</Label>
										<Input
											id="cessionario-nome"
											value={cessionarioNome}
											onChange={(e) => setCessionarioNome(e.target.value)}
											disabled={tipoPessoa === "PF"}
											className={
												tipoPessoa === "PF" ? "bg-muted/50" : undefined
											}
											required={tipoPessoa === "PF"}
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="cessionario-doc">
											Documento{" "}
											{tipoPessoa === "PF" || !tipoPessoa ? (
												<span className="text-destructive">*</span>
											) : null}
										</Label>
										<Input
											id="cessionario-doc"
											value={cessionarioDoc}
											onChange={(e) => setCessionarioDoc(e.target.value)}
											disabled={tipoPessoa === "PF"}
											className={
												tipoPessoa === "PF" ? "bg-muted/50" : undefined
											}
											required={tipoPessoa === "PF"}
										/>
									</div>
								</div>

								<div className="grid grid-cols-3 gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="cessionario-responsavel">
											Responsável Legal
										</Label>
										<Input
											id="cessionario-responsavel"
											value={cessionarioResponsavel}
											onChange={(e) =>
												setCessionarioResponsavel(e.target.value)
											}
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="cessionario-telefone">
											Telefone <span className="text-destructive">*</span>
										</Label>
										<Input
											id="cessionario-telefone"
											value={cessionarioTelefone}
											onChange={(e) => setCessionarioTelefone(e.target.value)}
											required
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="cessionario-email">
											Email <span className="text-destructive">*</span>
										</Label>
										<Input
											id="cessionario-email"
											type="email"
											value={cessionarioEmail}
											onChange={(e) => setCessionarioEmail(e.target.value)}
											required
										/>
									</div>
								</div>
							</div>
						</fieldset>

						{/* ======================================================== */}
						{/* Section 3: Dados do Contrato                             */}
						{/* ======================================================== */}
						<fieldset>
							<div className="flex items-center gap-3">
								<Separator className="flex-1" />
								<span className="text-xs font-medium text-muted-foreground">
									DADOS DO CONTRATO
								</span>
								<Separator className="flex-1" />
							</div>

							<div className="mt-4 space-y-3">
								<div className="space-y-1.5">
									<Label htmlFor="contrato-id">Contrato ID</Label>
									<Input
										id="contrato-id"
										value={contratoId}
										disabled
										className="bg-muted/50"
									/>
								</div>

								<div className="space-y-1.5">
									<Label htmlFor="cep">
										CEP <span className="text-destructive">*</span>
									</Label>
									<Input
										id="cep"
										value={cep}
										onChange={(e) => setCep(e.target.value)}
										placeholder="Exemplo: 88523-000"
										required
									/>
								</div>

								<div className="grid grid-cols-[1fr_auto] gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="endereco">
											Endereço <span className="text-destructive">*</span>
										</Label>
										<Input
											id="endereco"
											value={endereco}
											onChange={(e) => setEndereco(e.target.value)}
											required
										/>
									</div>
									<div className="w-28 space-y-1.5">
										<Label htmlFor="numero">
											Número <span className="text-destructive">*</span>
										</Label>
										<Input
											id="numero"
											value={numero}
											onChange={(e) => setNumero(e.target.value)}
											required
										/>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="bairro">
											Bairro <span className="text-destructive">*</span>
										</Label>
										<Input
											id="bairro"
											value={bairro}
											onChange={(e) => setBairro(e.target.value)}
											required
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="complemento">
											Complemento <span className="text-destructive">*</span>
										</Label>
										<Select value={complemento} onValueChange={setComplemento}>
											<SelectTrigger id="complemento">
												<SelectValue placeholder="Selecionar..." />
											</SelectTrigger>
											<SelectContent>
												{complementoOptions.map(([value, label]) => (
													<SelectItem key={value} value={value}>
														{label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="grid grid-cols-[1fr_auto] gap-3">
									<div className="space-y-1.5">
										<Label htmlFor="cidade">
											Cidade <span className="text-destructive">*</span>
										</Label>
										<Input
											id="cidade"
											value={cidade}
											onChange={(e) => setCidade(e.target.value)}
											required
										/>
									</div>
									<div className="w-24 space-y-1.5">
										<Label htmlFor="estado">
											Estado <span className="text-destructive">*</span>
										</Label>
										<Select value={estado} onValueChange={setEstado}>
											<SelectTrigger id="estado">
												<SelectValue placeholder="UF" />
											</SelectTrigger>
											<SelectContent>
												{estadoOptions.map(([value, label]) => (
													<SelectItem key={value} value={value}>
														{label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
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

					{/* ============================================================ */}
					{/* Footer: Actions                                             */}
					{/* ============================================================ */}
					<SheetFooter className="border-t px-4 py-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => handleClose(false)}
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
