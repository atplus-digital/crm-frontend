"use client";

import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { Separator } from "#/components/ui/separator";

// ============================================================================
// Props
// ============================================================================

export interface CedenteSectionProps {
	cedenteNome: string;
	cedenteDoc: string;
	cedenteResponsavel: string;
	onCedenteResponsavelChange: (v: string) => void;
	cedenteTelefone: string;
	onCedenteTelefoneChange: (v: string) => void;
	cedenteEmail: string;
	onCedenteEmailChange: (v: string) => void;
}

// ============================================================================
// Component
// ============================================================================

export function CedenteSection({
	cedenteNome,
	cedenteDoc,
	cedenteResponsavel,
	onCedenteResponsavelChange,
	cedenteTelefone,
	onCedenteTelefoneChange,
	cedenteEmail,
	onCedenteEmailChange,
}: CedenteSectionProps) {
	return (
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
						Responsável Legal <span className="text-destructive">*</span>
					</Label>
					<Input
						id="cedente-responsavel"
						value={cedenteResponsavel}
						onChange={(e) => onCedenteResponsavelChange(e.target.value)}
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
							onChange={(e) => onCedenteTelefoneChange(e.target.value)}
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
							onChange={(e) => onCedenteEmailChange(e.target.value)}
							required
						/>
					</div>
				</div>
			</div>
		</fieldset>
	);
}
