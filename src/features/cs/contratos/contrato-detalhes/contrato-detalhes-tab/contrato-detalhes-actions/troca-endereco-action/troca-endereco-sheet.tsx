import { Loader2, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
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
import { useCreateTrocaEndereco } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import type { TrocaEnderecoTaxaInstalacao } from "#/generated/types/nocobase/troca-endereco";
import { TROCAENDERECO_TAXAINSTALACAO_LABELS } from "#/generated/types/nocobase/troca-endereco";

// ============================================================================
// Types
// ============================================================================

interface TrocaEnderecoSheetProps {
	contrato: ContratoWithCliente;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

// ============================================================================
// Validation helpers
// ============================================================================

const NUMERO_PATTERN = /^(?:SN|[1-9][0-9]*)$/;

// ============================================================================
// Main Component
// ============================================================================

export function TrocaEnderecoSheet({
	contrato,
	open,
	onOpenChange,
}: TrocaEnderecoSheetProps) {
	// Hidden auto-filled fields
	const contratoId = String(contrato.id);
	const clienteNome = contrato.f_nc_cliente?.razao ?? "";

	// Form fields
	const [cep, setCep] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [uf, setUf] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [referencia, setReferencia] = useState("");
	const [obs, setObs] = useState("");
	const [telefone, setTelefone] = useState("");
	const [taxaInstalacao, setTaxaInstalacao] = useState("");

	// Validation errors
	const [numeroError, setNumeroError] = useState("");

	// Taxa options from generated labels
	const taxaOptions = useMemo(
		() =>
			Object.entries(TROCAENDERECO_TAXAINSTALACAO_LABELS) as [string, string][],
		[],
	);

	// Mutation
	const mutation = useCreateTrocaEndereco();

	// -----------------------------------------------------------------------
	// Handlers
	// -----------------------------------------------------------------------

	function handleNumeroChange(value: string) {
		setNumero(value);
		if (value && !NUMERO_PATTERN.test(value)) {
			setNumeroError("Caso não possua número, insira SN.");
		} else {
			setNumeroError("");
		}
	}

	function handleUfChange(value: string) {
		// Only allow 2 chars, auto-uppercase
		setUf(value.toUpperCase().slice(0, 2));
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		// Validate numero again before submit
		if (numero && !NUMERO_PATTERN.test(numero)) {
			setNumeroError("Caso não possua número, insira SN.");
			return;
		}

		mutation.mutate(
			{
				f_cep: cep.replace(/\D/g, ""), // Only digits
				f_bairro: bairro,
				f_endereco_cidade: cidade,
				f_endereco_estado: uf,
				f_endereco: endereco,
				f_endereco_numero: numero.trim(),
				f_endereco_complemento: complemento,
				f_endereco_referencia: referencia,
				f_obs: obs,
				f_telefone_contato: telefone,
				f_taxa_instalacao: taxaInstalacao as TrocaEnderecoTaxaInstalacao,
				f_id_contrato: contratoId,
				f_cliente: clienteNome,
			},
			{
				onSuccess: () => {
					onOpenChange(false);
				},
			},
		);
	}

	function handleClose(nextOpen: boolean) {
		if (!nextOpen) {
			setCep("");
			setBairro("");
			setCidade("");
			setUf("");
			setEndereco("");
			setNumero("");
			setComplemento("");
			setReferencia("");
			setObs("");
			setTelefone("");
			setTaxaInstalacao("");
			setNumeroError("");
			mutation.reset();
		}
		onOpenChange(nextOpen);
	}

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
						<MapPin className="size-5" />
						Troca de Endereço
					</SheetTitle>
				</SheetHeader>

				<form
					onSubmit={handleSubmit}
					className="flex flex-1 flex-col overflow-hidden"
				>
					<div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
						{/* ======================================================== */}
						{/* Section: Preencha abaixo o novo endereço                  */}
						{/* ======================================================== */}
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
											onChange={(e) => setCep(e.target.value)}
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
											onChange={(e) => setBairro(e.target.value)}
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
											onChange={(e) => setCidade(e.target.value)}
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
											onChange={(e) => setEndereco(e.target.value)}
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
											onChange={(e) => handleNumeroChange(e.target.value)}
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
											onChange={(e) => setComplemento(e.target.value)}
											required
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="te-referencia">Ponto de Referência</Label>
										<Input
											id="te-referencia"
											value={referencia}
											onChange={(e) => setReferencia(e.target.value)}
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
											onChange={(e) => setObs(e.target.value)}
										/>
									</div>
									<div className="space-y-1.5">
										<Label htmlFor="te-telefone">Telefone para Contato</Label>
										<Input
											id="te-telefone"
											value={telefone}
											onChange={(e) => setTelefone(e.target.value)}
										/>
									</div>
								</div>
							</div>
						</fieldset>

						{/* ======================================================== */}
						{/* Section: Cobrança                                        */}
						{/* ======================================================== */}
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
										Taxa de Instalação{" "}
										<span className="text-destructive">*</span>
									</Label>
									<Select
										value={taxaInstalacao}
										onValueChange={setTaxaInstalacao}
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

						{/* Error display */}
						{mutation.isError && (
							<div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
								{mutation.error?.message ?? "Erro ao criar troca de endereço"}
							</div>
						)}
					</div>

					{/* ============================================================ */}
					{/* Footer: Actions                                              */}
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
						<Button type="submit" disabled={mutation.isPending}>
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
