"use client";

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
import { CRMTROCATITULARIDADE_TIPOPESSOA_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { PESSOAS_CREDITO_LABELS } from "#/generated/types/nocobase/pessoas";
import { cn } from "#/lib/utils";
import { SearchableLookup } from "./searchable-lookup";

// ============================================================================
// Types
// ============================================================================

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
// Props
// ============================================================================

export interface CessionarioSectionProps {
	tipoPessoa: "PF" | "PJ";
	onTipoPessoaChange: (v: "PF" | "PJ") => void;
	selectedPF: SelectedPF;
	pfSearch: string;
	pfLoading: boolean;
	pfResults: SelectedPF[];
	selectedPJ: SelectedPJ;
	pjSearch: string;
	pjLoading: boolean;
	pjResults: SelectedPJ[];
	cessionarioNome: string;
	onCessionarioNomeChange: (v: string) => void;
	cessionarioDoc: string;
	onCessionarioDocChange: (v: string) => void;
	cessionarioResponsavel: string;
	onCessionarioResponsavelChange: (v: string) => void;
	cessionarioTelefone: string;
	onCessionarioTelefoneChange: (v: string) => void;
	cessionarioEmail: string;
	onCessionarioEmailChange: (v: string) => void;
	onSearchPF: (v: string) => void;
	onSearchPJ: (v: string) => void;
	onSelectPF: (person: SelectedPF) => void;
	onClearPF: () => void;
	onSelectPJ: (empresa: SelectedPJ) => void;
	onClearPJ: () => void;
}

// ============================================================================
// Component
// ============================================================================

export function CessionarioSection({
	tipoPessoa,
	onTipoPessoaChange,
	selectedPF,
	pfSearch,
	pfLoading,
	pfResults,
	selectedPJ,
	pjSearch,
	pjLoading,
	pjResults,
	cessionarioNome,
	onCessionarioNomeChange,
	cessionarioDoc,
	onCessionarioDocChange,
	cessionarioResponsavel,
	onCessionarioResponsavelChange,
	cessionarioTelefone,
	onCessionarioTelefoneChange,
	cessionarioEmail,
	onCessionarioEmailChange,
	onSearchPF,
	onSearchPJ,
	onSelectPF,
	onClearPF,
	onSelectPJ,
	onClearPJ,
}: CessionarioSectionProps) {
	// -----------------------------------------------------------------------
	// Credit status display
	// -----------------------------------------------------------------------

	const creditLabel = selectedPF?.f_credito
		? PESSOAS_CREDITO_LABELS[
				Number(selectedPF.f_credito) as keyof typeof PESSOAS_CREDITO_LABELS
			]
		: null;

	const creditColor = selectedPF?.f_credito
		? (CREDITO_COLORS[selectedPF.f_credito] ?? "")
		: "";

	return (
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
						onValueChange={(v) => onTipoPessoaChange(v as "PF" | "PJ")}
					>
						<SelectTrigger id="tipo-pessoa">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{Object.entries(CRMTROCATITULARIDADE_TIPOPESSOA_LABELS).map(
								([value, label]) => (
									<SelectItem key={value} value={value}>
										{label}
									</SelectItem>
								),
							)}
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
								getOptionLabel={(o) => `${o?.f_nome ?? ""} — ${o?.f_cpf ?? ""}`}
								getOptionId={(o) => o?.id ?? 0}
								onSearch={onSearchPF}
								onSelect={(person) => {
									onSelectPF(person as SelectedPF);
								}}
								onClear={onClearPF}
								value={pfSearch}
								onValueChange={onSearchPF}
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
							onSearch={onSearchPJ}
							onSelect={(empresa) => {
								onSelectPJ(empresa as SelectedPJ);
							}}
							onClear={onClearPJ}
							value={pjSearch}
							onValueChange={onSearchPJ}
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
							onChange={(e) => onCessionarioNomeChange(e.target.value)}
							disabled={tipoPessoa === "PF"}
							className={tipoPessoa === "PF" ? "bg-muted/50" : undefined}
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
							onChange={(e) => onCessionarioDocChange(e.target.value)}
							disabled={tipoPessoa === "PF"}
							className={tipoPessoa === "PF" ? "bg-muted/50" : undefined}
							required={tipoPessoa === "PF"}
						/>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-3">
					<div className="space-y-1.5">
						<Label htmlFor="cessionario-responsavel">Responsável Legal</Label>
						<Input
							id="cessionario-responsavel"
							value={cessionarioResponsavel}
							onChange={(e) => onCessionarioResponsavelChange(e.target.value)}
						/>
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="cessionario-telefone">
							Telefone <span className="text-destructive">*</span>
						</Label>
						<Input
							id="cessionario-telefone"
							value={cessionarioTelefone}
							onChange={(e) => onCessionarioTelefoneChange(e.target.value)}
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
							onChange={(e) => onCessionarioEmailChange(e.target.value)}
							required
						/>
					</div>
				</div>
			</div>
		</fieldset>
	);
}
