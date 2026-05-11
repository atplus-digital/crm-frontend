import type { UseFormRegister } from "react-hook-form";
import type { TransferenciaTitularidadeFormValues } from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface CedenteSectionProps {
	cedenteNome: string;
	cedenteDoc: string;
	register: UseFormRegister<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Cedente Section
// ============================================================================

export function CedenteSection({
	cedenteNome,
	cedenteDoc,
	register,
	errors,
}: CedenteSectionProps) {
	return (
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
						<label htmlFor="cedente-nome" className="text-sm font-medium">
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
						<label htmlFor="cedente-documento" className="text-sm font-medium">
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
						Responsável Legal <span className="text-destructive">*</span>
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
						<label htmlFor="f_cedente_telefone" className="text-sm font-medium">
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
						<label htmlFor="f_cedente_email" className="text-sm font-medium">
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
	);
}
