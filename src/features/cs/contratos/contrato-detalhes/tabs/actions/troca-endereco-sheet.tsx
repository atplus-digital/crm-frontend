import { Loader2, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "#/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import { TrocaEnderecoFormFields } from "#/features/cs/contratos/contrato-detalhes/tabs/actions/troca-endereco-form-fields";
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
						<TrocaEnderecoFormFields
							cep={cep}
							onCepChange={setCep}
							bairro={bairro}
							onBairroChange={setBairro}
							cidade={cidade}
							onCidadeChange={setCidade}
							uf={uf}
							onUfChange={handleUfChange}
							endereco={endereco}
							onEnderecoChange={setEndereco}
							numero={numero}
							onNumeroChange={handleNumeroChange}
							complemento={complemento}
							onComplementoChange={setComplemento}
							referencia={referencia}
							onReferenciaChange={setReferencia}
							obs={obs}
							onObsChange={setObs}
							telefone={telefone}
							onTelefoneChange={setTelefone}
							taxaInstalacao={taxaInstalacao}
							onTaxaInstalacaoChange={setTaxaInstalacao}
							taxaOptions={taxaOptions}
							numeroError={numeroError}
						/>

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
