import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { DetailSkeleton } from "#/features/cs/components/detail-skeleton";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { AssinaturaDigitalCard } from "./assinatura-digital-card";
import { ContatoCard } from "./contato-card";
import { CupomVendedorCard } from "./cupom-vendedor-card";
import { DadosClienteCard } from "./dados-cliente-card";
import { EnderecoCobrancaCard } from "./endereco-cobranca-card";
import { EnderecoInstalacaoCard } from "./endereco-instalacao-card";
import { IdentificacaoCard } from "./identificacao-card";
import { PacoteServicosCard } from "./pacote-servicos-card";
import { PontosAtencaoCard } from "./pontos-atencao-card";
import { SistemaCard } from "./sistema-card";
import { ValoresFinanceirosCard } from "./valores-financeiros-card";

export interface NegociacaoDetalhesTabProps {
	negociacao: NegociacaoWithRelations | undefined;
	isLoading: boolean;
}

export function NegociacaoDetalhesTab({
	negociacao,
	isLoading,
}: NegociacaoDetalhesTabProps) {
	if (isLoading) {
		return <DetailSkeleton />;
	}

	if (!negociacao) {
		return <InlineErrorAlert>Negociação não encontrada</InlineErrorAlert>;
	}

	return (
		<div className="flex flex-col gap-6">
			<IdentificacaoCard negociacao={negociacao} />
			<DadosClienteCard negociacao={negociacao} />
			<ContatoCard negociacao={negociacao} />
			<EnderecoInstalacaoCard negociacao={negociacao} />
			<EnderecoCobrancaCard negociacao={negociacao} />
			<ValoresFinanceirosCard negociacao={negociacao} />
			<PacoteServicosCard negociacao={negociacao} />
			<CupomVendedorCard negociacao={negociacao} />
			<PontosAtencaoCard negociacao={negociacao} />
			<AssinaturaDigitalCard negociacao={negociacao} />
			<SistemaCard negociacao={negociacao} />
		</div>
	);
}
