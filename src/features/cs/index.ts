// Contratos

export {
	contratoQueryOptions,
	contratosQueryOptions,
	useContrato,
	useContratoById,
	useContratos,
} from "./contratos-hooks";
export type {
	Contrato,
	ContratoCliente,
	ContratoFilters,
	ContratoListParams,
	ContratoStatus,
	ContratoWithCliente,
	InternetStatus,
	PaginatedResponse,
} from "./contratos-types";
export {
	CONTRATO_STATUS_LABELS,
	INTERNET_STATUS_LABELS,
} from "./contratos-types";
export {
	createNegociacao,
	deleteNegociacao,
	negociacaoQueryOptions,
	negociacoesQueryOptions,
	updateNegociacao,
	useNegociacao,
	useNegociacoes,
} from "./negociacoes-hooks";
// Negociacoes
export type {
	Negociacao,
	NegociacaoFilters,
	NegociacaoListParams,
	NegociacaoPessoaFisica,
	NegociacaoPessoaJuridica,
	NegociacaoStatus,
	NegociacaoSubstatus,
	NegociacaoVendedor,
	NegociacaoWithRelations,
	PaginatedResponse as NegociacaoPaginatedResponse,
} from "./negociacoes-types";
export {
	createPessoaFisica,
	createPessoaJuridica,
	deletePessoaFisica,
	deletePessoaJuridica,
	pessoaFisicaQueryOptions,
	pessoaJuridicaQueryOptions,
	pessoasFisicasQueryOptions,
	pessoasJuridicasQueryOptions,
	updatePessoaFisica,
	updatePessoaJuridica,
	usePessoaFisica,
	usePessoaJuridica,
	usePessoasFisicas,
	usePessoasJuridicas,
} from "./pessoas-hooks";
// Pessoas
export type {
	PessoaFisica,
	PessoaFisicaFilters,
	PessoaFisicaListParams,
	PessoaFisicaResponse,
	PessoaJuridica,
	PessoaJuridicaFilters,
	PessoaJuridicaListParams,
	PessoaJuridicaResponse,
} from "./pessoas-types";
