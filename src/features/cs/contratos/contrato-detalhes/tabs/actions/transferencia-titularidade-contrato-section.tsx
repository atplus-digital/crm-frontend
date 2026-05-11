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

// ============================================================================
// Props
// ============================================================================

export interface ContratoSectionProps {
	contratoId: string;
	cep: string;
	onCepChange: (v: string) => void;
	endereco: string;
	onEnderecoChange: (v: string) => void;
	numero: string;
	onNumeroChange: (v: string) => void;
	bairro: string;
	onBairroChange: (v: string) => void;
	complemento: string;
	onComplementoChange: (v: string) => void;
	cidade: string;
	onCidadeChange: (v: string) => void;
	estado: string;
	onEstadoChange: (v: string) => void;
	complementoOptions: [string, string][];
	estadoOptions: [string, string][];
}

// ============================================================================
// Component
// ============================================================================

export function ContratoSection({
	contratoId,
	cep,
	onCepChange,
	endereco,
	onEnderecoChange,
	numero,
	onNumeroChange,
	bairro,
	onBairroChange,
	complemento,
	onComplementoChange,
	cidade,
	onCidadeChange,
	estado,
	onEstadoChange,
	complementoOptions,
	estadoOptions,
}: ContratoSectionProps) {
	return (
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
						onChange={(e) => onCepChange(e.target.value)}
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
							onChange={(e) => onEnderecoChange(e.target.value)}
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
							onChange={(e) => onNumeroChange(e.target.value)}
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
							onChange={(e) => onBairroChange(e.target.value)}
							required
						/>
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="complemento">
							Complemento <span className="text-destructive">*</span>
						</Label>
						<Select value={complemento} onValueChange={onComplementoChange}>
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
							onChange={(e) => onCidadeChange(e.target.value)}
							required
						/>
					</div>
					<div className="w-24 space-y-1.5">
						<Label htmlFor="estado">
							Estado <span className="text-destructive">*</span>
						</Label>
						<Select value={estado} onValueChange={onEstadoChange}>
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
	);
}
