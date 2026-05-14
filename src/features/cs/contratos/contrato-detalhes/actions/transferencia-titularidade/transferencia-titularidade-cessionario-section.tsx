import type { UseFormSetValue } from "react-hook-form";
import { Badge, type BadgeColor } from "#/components/ui/badge";
import { Label } from "#/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import type { PessoaFisicaResult } from "#/features/cs/pessoas/components/pessoa-fisica-search";
import { PessoaFisicaSearch } from "#/features/cs/pessoas/components/pessoa-fisica-search";
import { PessoaJuridicaSearch } from "#/features/cs/pessoas/components/pessoa-juridica-search";
import { CRMTROCATITULARIDADE_TIPOPESSOA_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";
import { PESSOAS_CREDITO_LABELS } from "#/generated/types/nocobase/pessoas";
import {
	ContactFields,
	NomeDocumentoFields,
} from "./transferencia-titularidade-cessionario-form-fields";
import type {
	CessionarioState,
	SelectedPF,
	TipoPessoa,
	TransferenciaTitularidadeFormValues,
} from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface CessionarioSectionProps {
	tipoPessoa: TipoPessoa;
	onTipoPessoaChange: (tipo: TipoPessoa) => void;
	cessionario: CessionarioState;
	onCessionarioChange: (cessionario: CessionarioState) => void;
	selectedPF: SelectedPF;
	onSelectedPFChange: (pf: SelectedPF) => void;
	onClearPJSearch: () => void;
	setValue: UseFormSetValue<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Credit Badge
// ============================================================================

const CREDITO_COLOR_MAP: Record<
	keyof typeof PESSOAS_CREDITO_LABELS,
	BadgeColor
> = {
	1: "blue",
	2: "amber",
	9: "red",
};

function CreditBadge({ credito }: { credito: number | string | undefined }) {
	if (!credito) return null;

	const creditoKey = Number(credito) as keyof typeof PESSOAS_CREDITO_LABELS;
	const label = PESSOAS_CREDITO_LABELS[creditoKey];
	const color = CREDITO_COLOR_MAP[creditoKey];

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-muted-foreground">Análise de Crédito:</span>
			<Badge color={color}>{label}</Badge>
		</div>
	);
}

// ============================================================================
// Cessionario Section
// ============================================================================

export function CessionarioSection({
	tipoPessoa,
	onTipoPessoaChange,
	cessionario,
	onCessionarioChange,
	selectedPF,
	onSelectedPFChange,
	onClearPJSearch,
	setValue,
	errors,
}: CessionarioSectionProps) {
	const handleClearPFSearch = () => {
		onSelectedPFChange(null);
		onCessionarioChange({ ...cessionario, nome: "", documento: "" });
	};

	const handlePFSelect = (pf: PessoaFisicaResult) => {
		onSelectedPFChange(pf);
		onCessionarioChange({
			...cessionario,
			nome: pf.f_nome,
			documento: pf.f_cpf,
		});
		setValue("f_cessionario", pf.f_nome);
		setValue("f_cessionario_documento", pf.f_cpf);
	};

	const handleTipoPessoaChange = (value: string) => {
		onTipoPessoaChange(value as TipoPessoa);
		handleClearPFSearch();
		onClearPJSearch();
		onCessionarioChange({
			nome: "",
			documento: "",
			responsavel: "",
			telefone: "",
			email: "",
		});
	};

	return (
		<fieldset>
			<div className="mb-4 flex items-center gap-3">
				<div className="h-px flex-1 bg-border" />
				<span className="text-xs font-medium text-muted-foreground">
					DADOS DO CESSIONÁRIO
				</span>
				<div className="h-px flex-1 bg-border" />
			</div>

			<div className="mb-4 space-y-3">
				{/* Tipo de Pessoa */}
				<div className="space-y-1.5">
					<Label htmlFor="tipo-pessoa">
						Tipo de Pessoa <span className="text-destructive">*</span>
					</Label>
					<Select value={tipoPessoa} onValueChange={handleTipoPessoaChange}>
						<SelectTrigger id="tipo-pessoa" className="w-full">
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
						<PessoaFisicaSearch
							onSelect={handlePFSelect}
							onClear={handleClearPFSearch}
						/>
						{selectedPF && <CreditBadge credito={selectedPF.f_credito} />}
					</>
				)}

				{/* PJ-specific fields */}
				{tipoPessoa === "PJ" && (
					<PessoaJuridicaSearch onSelect={() => {}} onClear={onClearPJSearch} />
				)}

				{/* Nome + Documento */}
				<NomeDocumentoFields
					cessionario={cessionario}
					onCessionarioChange={onCessionarioChange}
					tipoPessoa={tipoPessoa}
					setValue={setValue}
					errors={errors}
				/>

				{/* Responsável, Telefone, Email */}
				<ContactFields
					cessionario={cessionario}
					onCessionarioChange={onCessionarioChange}
					tipoPessoa={tipoPessoa}
					setValue={setValue}
					errors={errors}
				/>
			</div>
		</fieldset>
	);
}
