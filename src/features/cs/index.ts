// CS (Customer Success) Feature Module
// Barrel export for contracts, negotiations, and people management

// Components
export { ContratoStatusBadge } from "./components/contrato-status-badge";
export { ContratosFilters } from "./components/contratos-filters";
export { ContratosTable } from "./components/contratos-table";
export { NegociacoesKanban } from "./components/negociacoes-kanban";
export { NegociacoesList } from "./components/negociacoes-list";
export { PessoasTable } from "./components/pessoas-table";
// Contracts
export {
	contratoQueryOptions,
	contratosQueryOptions,
	useContrato,
	useContratoById,
	useContratos,
} from "./contratos-hooks";
export { fetchContratoById, fetchContratos } from "./contratos-service";
export type {
	Contrato,
	ContratoCliente,
	ContratoFilters,
	ContratoListParams,
	ContratoWithCliente,
} from "./contratos-types";
export {
	ContratoStatus,
	INTERNET_STATUS_LABELS,
	InternetStatus,
} from "./contratos-types";
// Negotiations
export {
	negociacaoQueryOptions,
	negociacoesQueryOptions,
	useNegociacao,
	useNegociacoes,
} from "./negociacoes-hooks";
export {
	createNegociacao,
	deleteNegociacao,
	fetchNegociacaoById,
	fetchNegociacoes,
	updateNegociacao,
} from "./negociacoes-service";
export type {
	Negociacao,
	NegociacaoFilters,
	NegociacaoListParams,
	NegociacaoWithRelations,
} from "./negociacoes-types";
export { NegociacaoStatus, NegociacaoSubstatus } from "./negociacoes-types";
// People (Pessoas)
export {
	pessoaFisicaQueryOptions,
	pessoaJuridicaQueryOptions,
	pessoasFisicasQueryOptions,
	pessoasJuridicasQueryOptions,
	usePessoaFisica,
	usePessoaJuridica,
	usePessoasFisicas,
	usePessoasJuridicas,
} from "./pessoas-hooks";
export {
	createPessoaFisica,
	createPessoaJuridica,
	deletePessoaFisica,
	deletePessoaJuridica,
	fetchPessoaFisicaById,
	fetchPessoaJuridicaById,
	fetchPessoasFisicas,
	fetchPessoasJuridicas,
	updatePessoaFisica,
	updatePessoaJuridica,
} from "./pessoas-service";
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
