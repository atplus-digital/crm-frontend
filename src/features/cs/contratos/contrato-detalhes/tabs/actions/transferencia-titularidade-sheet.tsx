import { ArrowRightLeft, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "#/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import { CedenteSection } from "#/features/cs/contratos/contrato-detalhes/tabs/actions/transferencia-titularidade-cedente-section";
import { CessionarioSection } from "#/features/cs/contratos/contrato-detalhes/tabs/actions/transferencia-titularidade-cessionario-section";
import { ContratoSection } from "#/features/cs/contratos/contrato-detalhes/tabs/actions/transferencia-titularidade-contrato-section";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import type {
	CrmTrocaTitularidadeComplemento,
	CrmTrocaTitularidadeEstado,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import {
	CRMTROCATITULARIDADE_COMPLEMENTO_LABELS,
	CRMTROCATITULARIDADE_ESTADO_LABELS,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { useCreateTrocaTitularidade } from "@/features/cs/troca-titularidade/troca-titularidade-hooks";
import type { CreateTrocaTitularidadeInput } from "@/features/cs/troca-titularidade/troca-titularidade-service";
import {
	searchPessoasFisicas,
	searchPessoasJuridicas,
} from "@/features/cs/troca-titularidade/troca-titularidade-service";

// ============================================================================
// Types
// ============================================================================

interface TransferenciaTitularidadeSheetProps {
	contrato: ContratoWithCliente;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

type TipoPessoa = "PF" | "PJ";
type SelectedPF = Pick<Pessoas, "id" | "f_nome" | "f_cpf" | "f_credito"> | null;
type SelectedPJ = Pick<Empresas, "id" | "f_razao_social" | "f_cnpj"> | null;

export function TransferenciaTitularidadeSheet({
	contrato,
	open,
	onOpenChange,
}: TransferenciaTitularidadeSheetProps) {
	const cedente = contrato.f_nc_cliente;

	// -----------------------------------------------------------------------
	// Form state
	// -----------------------------------------------------------------------

	const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>("PF");

	// Cedente (pre-filled, read-only)
	const [cedenteNome] = useState(cedente?.razao ?? "");
	const [cedenteDoc] = useState(cedente?.cnpj_cpf ?? "");
	const [cedenteResponsavel, setCedenteResponsavel] = useState("");
	const [cedenteTelefone, setCedenteTelefone] = useState("");
	const [cedenteEmail, setCedenteEmail] = useState("");

	// Cessionário
	const [cessionarioNome, setCessionarioNome] = useState("");
	const [cessionarioDoc, setCessionarioDoc] = useState("");
	const [cessionarioResponsavel, setCessionarioResponsavel] = useState("");
	const [cessionarioTelefone, setCessionarioTelefone] = useState("");
	const [cessionarioEmail, setCessionarioEmail] = useState("");

	// PF lookup
	const [selectedPF, setSelectedPF] = useState<SelectedPF>(null);
	const [pfSearch, setPfSearch] = useState("");
	const [pfResults, setPfResults] = useState<SelectedPF[]>([]);
	const [pfLoading, setPfLoading] = useState(false);

	// PJ lookup
	const [selectedPJ, setSelectedPJ] = useState<SelectedPJ>(null);
	const [pjSearch, setPjSearch] = useState("");
	const [pjResults, setPjResults] = useState<SelectedPJ[]>([]);
	const [pjLoading, setPjLoading] = useState(false);

	// Contrato (pre-filled, read-only)
	const [contratoId] = useState(String(contrato.id));
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [bairro, setBairro] = useState("");
	const [complemento, setComplemento] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");

	// -----------------------------------------------------------------------
	// PF Search debounce
	// -----------------------------------------------------------------------

	useEffect(() => {
		if (pfSearch.length < 2) {
			setPfResults([]);
			return;
		}

		const timer = setTimeout(async () => {
			setPfLoading(true);
			const results = await searchPessoasFisicas(pfSearch);
			setPfResults(results);
			setPfLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [pfSearch]);

	// -----------------------------------------------------------------------
	// PJ Search debounce
	// -----------------------------------------------------------------------

	useEffect(() => {
		if (pjSearch.length < 2) {
			setPjResults([]);
			return;
		}

		const timer = setTimeout(async () => {
			setPjLoading(true);
			const results = await searchPessoasJuridicas(pjSearch);
			setPjResults(results);
			setPjLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [pjSearch]);

	// -----------------------------------------------------------------------
	// Submit
	// -----------------------------------------------------------------------

	const mutation = useCreateTrocaTitularidade();

	const submitDisabled = useMemo(() => {
		if (tipoPessoa === "PF" && selectedPF?.f_credito === "9") return true;
		return false;
	}, [tipoPessoa, selectedPF?.f_credito]);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const payload: CreateTrocaTitularidadeInput = {
			f_cedente: cedenteNome,
			f_cedente_documento: cedenteDoc,
			f_cedente_responsavel_legal: cedenteResponsavel,
			f_cedente_telefone: cedenteTelefone,
			f_cedente_email: cedenteEmail,
			f_tipo_pessoa: tipoPessoa,
			f_pessoa_pf: tipoPessoa === "PF" ? (selectedPF?.id ?? null) : null,
			f_pessoa_pj: tipoPessoa === "PJ" ? (selectedPJ?.id ?? null) : null,
			f_cessionario: cessionarioNome,
			f_cessionario_documento: cessionarioDoc,
			f_cessionario_responsavel: cessionarioResponsavel,
			f_cessionario_telefone: cessionarioTelefone,
			f_cessionario_email: cessionarioEmail,
			f_id_contrato: contratoId,
			f_cep: cep,
			f_endereco: endereco,
			f_numero: numero.trim(),
			f_bairro: bairro,
			f_complemento: complemento as CrmTrocaTitularidadeComplemento,
			f_cidade: cidade,
			f_estado: estado as CrmTrocaTitularidadeEstado,
		};

		mutation.mutate(payload, {
			onSuccess: () => {
				onOpenChange(false);
			},
		});
	}

	// -----------------------------------------------------------------------
	// Reset form on open
	// -----------------------------------------------------------------------

	function handleClose(closeOpen: boolean) {
		if (!closeOpen) {
			// Reset form
			setTipoPessoa("PF");
			setCedenteResponsavel("");
			setCedenteTelefone("");
			setCedenteEmail("");
			setCessionarioNome("");
			setCessionarioDoc("");
			setCessionarioResponsavel("");
			setCessionarioTelefone("");
			setCessionarioEmail("");
			setSelectedPF(null);
			setPfSearch("");
			setSelectedPJ(null);
			setPjSearch("");
			setCep("");
			setEndereco("");
			setNumero("");
			setBairro("");
			setComplemento("");
			setCidade("");
			setEstado("");
			mutation.reset();
		}
		onOpenChange(closeOpen);
	}

	// -----------------------------------------------------------------------
	// Complemento / Estado options
	// -----------------------------------------------------------------------

	const complementoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS),
		[],
	);

	const estadoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS),
		[],
	);

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
						<ArrowRightLeft className="size-5" />
						Transferência de Titularidade
					</SheetTitle>
				</SheetHeader>

				<form
					onSubmit={handleSubmit}
					className="flex flex-1 flex-col overflow-hidden"
				>
					<div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
						<CedenteSection
							cedenteNome={cedenteNome}
							cedenteDoc={cedenteDoc}
							cedenteResponsavel={cedenteResponsavel}
							onCedenteResponsavelChange={setCedenteResponsavel}
							cedenteTelefone={cedenteTelefone}
							onCedenteTelefoneChange={setCedenteTelefone}
							cedenteEmail={cedenteEmail}
							onCedenteEmailChange={setCedenteEmail}
						/>

						<CessionarioSection
							tipoPessoa={tipoPessoa}
							onTipoPessoaChange={(v) => {
								setTipoPessoa(v);
								setSelectedPF(null);
								setPfSearch("");
								setSelectedPJ(null);
								setPjSearch("");
								setCessionarioNome("");
								setCessionarioDoc("");
							}}
							selectedPF={selectedPF}
							pfSearch={pfSearch}
							pfLoading={pfLoading}
							pfResults={pfResults}
							selectedPJ={selectedPJ}
							pjSearch={pjSearch}
							pjLoading={pjLoading}
							pjResults={pjResults}
							cessionarioNome={cessionarioNome}
							onCessionarioNomeChange={setCessionarioNome}
							cessionarioDoc={cessionarioDoc}
							onCessionarioDocChange={setCessionarioDoc}
							cessionarioResponsavel={cessionarioResponsavel}
							onCessionarioResponsavelChange={setCessionarioResponsavel}
							cessionarioTelefone={cessionarioTelefone}
							onCessionarioTelefoneChange={setCessionarioTelefone}
							cessionarioEmail={cessionarioEmail}
							onCessionarioEmailChange={setCessionarioEmail}
							onSearchPF={setPfSearch}
							onSearchPJ={setPjSearch}
							onSelectPF={(person) => {
								setSelectedPF(person);
								setCessionarioNome(person?.f_nome ?? "");
								setCessionarioDoc(person?.f_cpf ?? "");
								setPfSearch("");
							}}
							onClearPF={() => {
								setSelectedPF(null);
								setCessionarioNome("");
								setCessionarioDoc("");
							}}
							onSelectPJ={(empresa) => {
								setSelectedPJ(empresa);
								setPjSearch("");
							}}
							onClearPJ={() => {
								setSelectedPJ(null);
							}}
						/>

						<ContratoSection
							contratoId={contratoId}
							cep={cep}
							onCepChange={setCep}
							endereco={endereco}
							onEnderecoChange={setEndereco}
							numero={numero}
							onNumeroChange={setNumero}
							bairro={bairro}
							onBairroChange={setBairro}
							complemento={complemento}
							onComplementoChange={setComplemento}
							cidade={cidade}
							onCidadeChange={setCidade}
							estado={estado}
							onEstadoChange={setEstado}
							complementoOptions={complementoOptions}
							estadoOptions={estadoOptions}
						/>

						{/* Error display */}
						{mutation.isError && (
							<div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
								{mutation.error?.message ?? "Erro ao criar transferência"}
							</div>
						)}
					</div>

					{/* ============================================================ */}
					{/* Footer: Actions                                             */}
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
						<Button
							type="submit"
							disabled={submitDisabled || mutation.isPending}
						>
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
