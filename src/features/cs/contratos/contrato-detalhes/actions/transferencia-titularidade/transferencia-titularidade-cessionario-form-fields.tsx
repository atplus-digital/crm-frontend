import type { UseFormSetValue } from "react-hook-form";
import { cn } from "#/lib/utils";
import type {
	CessionarioState,
	TransferenciaTitularidadeFormValues,
} from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface FormFieldsProps {
	cessionario: CessionarioState;
	onCessionarioChange: (cessionario: CessionarioState) => void;
	tipoPessoa: "PF" | "PJ";
	setValue: UseFormSetValue<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Nome + Documento Fields
// ============================================================================

function NomeDocumentoFields({
	cessionario,
	onCessionarioChange,
	tipoPessoa,
	setValue,
	errors,
}: FormFieldsProps) {
	return (
		<div className="grid grid-cols-2 gap-3">
			<div className="space-y-1.5">
				<label htmlFor="f_cessionario" className="text-sm font-medium">
					Nome <span className="text-destructive">*</span>
				</label>
				<input
					id="f_cessionario"
					value={cessionario.nome}
					onChange={(e) => {
						onCessionarioChange({ ...cessionario, nome: e.target.value });
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
					value={cessionario.documento}
					onChange={(e) => {
						onCessionarioChange({ ...cessionario, documento: e.target.value });
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
	);
}

// ============================================================================
// Contact Fields
// ============================================================================

function ContactFields({
	cessionario,
	onCessionarioChange,
	setValue,
	errors,
}: FormFieldsProps) {
	return (
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
					value={cessionario.responsavel}
					onChange={(e) => {
						onCessionarioChange({
							...cessionario,
							responsavel: e.target.value,
						});
						setValue("f_cessionario_responsavel", e.target.value);
					}}
					className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
				/>
			</div>
			<div className="space-y-1.5">
				<label htmlFor="f_cessionario_telefone" className="text-sm font-medium">
					Telefone <span className="text-destructive">*</span>
				</label>
				<input
					id="f_cessionario_telefone"
					value={cessionario.telefone}
					onChange={(e) => {
						onCessionarioChange({ ...cessionario, telefone: e.target.value });
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
				<label htmlFor="f_cessionario_email" className="text-sm font-medium">
					Email <span className="text-destructive">*</span>
				</label>
				<input
					id="f_cessionario_email"
					type="email"
					value={cessionario.email}
					onChange={(e) => {
						onCessionarioChange({ ...cessionario, email: e.target.value });
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
	);
}

// ============================================================================
// Exports
// ============================================================================

export type { FormFieldsProps };
export { ContactFields, NomeDocumentoFields };
