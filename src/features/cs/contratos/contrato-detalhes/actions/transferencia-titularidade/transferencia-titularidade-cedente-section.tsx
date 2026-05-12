import type { UseFormRegister } from "react-hook-form";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
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
						<Label htmlFor="cedente-nome">Nome</Label>
						<Input id="cedente-nome" value={cedenteNome} disabled />
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="cedente-documento">Documento</Label>
						<Input id="cedente-documento" value={cedenteDoc} disabled />
					</div>
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="f_cedente_responsavel_legal">
						Responsável Legal <span className="text-destructive">*</span>
					</Label>
					<Input
						id="f_cedente_responsavel_legal"
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
						<Label htmlFor="f_cedente_telefone">
							Telefone <span className="text-destructive">*</span>
						</Label>
						<Input
							id="f_cedente_telefone"
							{...register("f_cedente_telefone")}
						/>
						{errors.f_cedente_telefone && (
							<p className="text-xs text-destructive">
								{errors.f_cedente_telefone.message}
							</p>
						)}
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="f_cedente_email">
							Email <span className="text-destructive">*</span>
						</Label>
						<Input
							id="f_cedente_email"
							type="email"
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
