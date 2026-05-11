import type { UseFormSetValue } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { CRMTROCATITULARIDADE_TIPOPESSOA_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";
import { PESSOAS_CREDITO_LABELS } from "#/generated/types/nocobase/pessoas";
import { cn } from "#/lib/utils";
import {
	ContactFields,
	NomeDocumentoFields,
} from "./transferencia-titularidade-cessionario-form-fields";
import { PfSearch } from "./transferencia-titularidade-pf-search";
import { PjSearch } from "./transferencia-titularidade-pj-search";
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

const CREDITO_COLORS: Record<keyof typeof PESSOAS_CREDITO_LABELS, string> = {
	1: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	2: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	9: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

function CreditBadge({ credito }: { credito: number | string | undefined }) {
	if (!credito) return null;

	const label =
		PESSOAS_CREDITO_LABELS[
			Number(credito) as keyof typeof PESSOAS_CREDITO_LABELS
		];
	const color = CREDITO_COLORS[credito as keyof typeof CREDITO_COLORS] ?? "";

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-muted-foreground">Análise de Crédito:</span>
			<span
				className={cn(
					"inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
					color,
				)}
			>
				{label}
			</span>
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

	const handlePFSelect = (pf: SelectedPF) => {
		onSelectedPFChange(pf);
		onCessionarioChange({
			...cessionario,
			nome: pf?.f_nome ?? "",
			documento: pf?.f_cpf ?? "",
		});
		setValue("f_cessionario", pf?.f_nome ?? "");
		setValue("f_cessionario_documento", pf?.f_cpf ?? "");
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
					<label className="text-sm font-medium" htmlFor="tipo-pessoa">
						Tipo de Pessoa <span className="text-destructive">*</span>
					</label>
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
						<PfSearch onSelect={handlePFSelect} onClear={handleClearPFSearch} />
						{selectedPF && <CreditBadge credito={selectedPF.f_credito} />}
					</>
				)}

				{/* PJ-specific fields */}
				{tipoPessoa === "PJ" && (
					<PjSearch onSelect={() => {}} onClear={onClearPJSearch} />
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
