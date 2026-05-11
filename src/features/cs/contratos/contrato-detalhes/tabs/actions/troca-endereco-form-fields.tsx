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
// Types
// ============================================================================

interface TrocaEnderecoFormFieldsProps {
	cep: string;
	onCepChange: (value: string) => void;
	bairro: string;
	onBairroChange: (value: string) => void;
	cidade: string;
	onCidadeChange: (value: string) => void;
	uf: string;
	onUfChange: (value: string) => void;
	endereco: string;
	onEnderecoChange: (value: string) => void;
	numero: string;
	onNumeroChange: (value: string) => void;
	complemento: string;
	onComplementoChange: (value: string) => void;
	referencia: string;
	onReferenciaChange: (value: string) => void;
	obs: string;
	onObsChange: (value: string) => void;
	telefone: string;
	onTelefoneChange: (value: string) => void;
	taxaInstalacao: string;
	onTaxaInstalacaoChange: (value: string) => void;
	taxaOptions: [string, string][];
	numeroError: string;
}

// ============================================================================
// Component
// ============================================================================

export function TrocaEnderecoFormFields({
	cep,
	onCepChange,
	bairro,
	onBairroChange,
	cidade,
	onCidadeChange,
	uf,
	onUfChange,
	endereco,
	onEnderecoChange,
	numero,
	onNumeroChange,
	complemento,
	onComplementoChange,
	referencia,
	onReferenciaChange,
	obs,
	onObsChange,
	telefone,
	onTelefoneChange,
	taxaInstalacao,
	onTaxaInstalacaoChange,
	taxaOptions,
	numeroError,
}: TrocaEnderecoFormFieldsProps) {
	// UF auto-uppercase + maxLength inline logic
	function handleUfChange(value: string) {
		onUfChange(value.toUpperCase().slice(0, 2));
	}

	return (
		<>
			{/* ================================================================ */}
			{/* Section: Preencha abaixo o novo endereço                        */}
			{/* ================================================================ */}
			<fieldset>
				<div className="flex items-center gap-3">
					<Separator className="flex-1" />
					<span className="text-xs font-medium text-muted-foreground">
						PREENCHA ABAIXO O NOVO ENDEREÇO
					</span>
					<Separator className="flex-1" />
				</div>

				<div className="mt-4 space-y-3">
					{/* Row 1: CEP, Bairro, Cidade, UF */}
					<div className="grid grid-cols-4 gap-3">
						<div className="space-y-1.5">
							<Label htmlFor="te-cep">
								CEP <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-cep"
								placeholder="Somente números"
								value={cep}
								onChange={(e) => onCepChange(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="te-bairro">
								Bairro <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-bairro"
								value={bairro}
								onChange={(e) => onBairroChange(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="te-cidade">
								Cidade <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-cidade"
								value={cidade}
								onChange={(e) => onCidadeChange(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="te-uf">
								UF <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-uf"
								placeholder="Ex: SC"
								value={uf}
								onChange={(e) => handleUfChange(e.target.value)}
								maxLength={2}
								required
							/>
						</div>
					</div>

					{/* Row 2: Endereço + Número (80/20) */}
					<div className="grid grid-cols-[4fr_1fr] gap-3">
						<div className="space-y-1.5">
							<Label htmlFor="te-endereco">
								Endereço <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-endereco"
								value={endereco}
								onChange={(e) => onEnderecoChange(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="te-numero">
								Número <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-numero"
								value={numero}
								onChange={(e) => onNumeroChange(e.target.value)}
								required
							/>
							{numeroError && (
								<p className="text-xs text-destructive">{numeroError}</p>
							)}
						</div>
					</div>

					{/* Row 3: Complemento + Ponto de Referência */}
					<div className="grid grid-cols-2 gap-3">
						<div className="space-y-1.5">
							<Label htmlFor="te-complemento">
								Complemento <span className="text-destructive">*</span>
							</Label>
							<Input
								id="te-complemento"
								value={complemento}
								onChange={(e) => onComplementoChange(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="te-referencia">Ponto de Referência</Label>
							<Input
								id="te-referencia"
								value={referencia}
								onChange={(e) => onReferenciaChange(e.target.value)}
							/>
						</div>
					</div>

					{/* Row 4: Observações + Telefone */}
					<div className="grid grid-cols-2 gap-3">
						<div className="space-y-1.5">
							<Label htmlFor="te-obs">Observações</Label>
							<Input
								id="te-obs"
								placeholder="Observações para a troca de endereço"
								value={obs}
								onChange={(e) => onObsChange(e.target.value)}
							/>
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="te-telefone">Telefone para Contato</Label>
							<Input
								id="te-telefone"
								value={telefone}
								onChange={(e) => onTelefoneChange(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</fieldset>

			{/* ================================================================ */}
			{/* Section: Cobrança                                              */}
			{/* ================================================================ */}
			<fieldset>
				<div className="flex items-center gap-3">
					<Separator className="flex-1" />
					<span className="text-xs font-medium text-muted-foreground">
						COBRANÇA
					</span>
					<Separator className="flex-1" />
				</div>

				<div className="mt-4 space-y-3">
					<div className="space-y-1.5">
						<Label htmlFor="te-taxa">
							Taxa de Instalação <span className="text-destructive">*</span>
						</Label>
						<Select
							value={taxaInstalacao}
							onValueChange={onTaxaInstalacaoChange}
						>
							<SelectTrigger id="te-taxa">
								<SelectValue placeholder="Selecionar..." />
							</SelectTrigger>
							<SelectContent>
								{taxaOptions.map(([value, label]) => (
									<SelectItem key={value} value={value}>
										{label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</fieldset>
		</>
	);
}
