import {
	keepPreviousData,
	queryOptions,
	useQuery,
} from "@tanstack/react-query";
import {
	createNegociacao,
	deleteNegociacao,
	fetchNegociacaoAnexos,
	fetchNegociacaoById,
	fetchNegociacaoComentarios,
	fetchNegociacaoItens,
	fetchNegociacaoPacotes,
	fetchNegociacoes,
	updateNegociacao,
} from "./negociacoes-service";
import type { NegociacaoListParams } from "./negociacoes-types";

export const negociacoesQueryOptions = (params: NegociacaoListParams) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", params] as const,
		queryFn: () => fetchNegociacoes(params),
		placeholderData: keepPreviousData,
		staleTime: 10_000,
	});

export function useNegociacoes(params: NegociacaoListParams) {
	return useQuery(negociacoesQueryOptions(params));
}

// Detail queries don't use staleTime - always fetch fresh data when navigating
export const negociacaoQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", id] as const,
		queryFn: () => fetchNegociacaoById(id),
	});

export function useNegociacao(id: number) {
	return useQuery(negociacaoQueryOptions(id));
}

export const negociacaoItensQueryOptions = (negociacaoId: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "itens", negociacaoId] as const,
		queryFn: () => fetchNegociacaoItens(negociacaoId),
	});

export function useNegociacaoItens(negociacaoId: number) {
	return useQuery(negociacaoItensQueryOptions(negociacaoId));
}

export const negociacaoAnexosQueryOptions = (negociacaoId: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "anexos", negociacaoId] as const,
		queryFn: () => fetchNegociacaoAnexos(negociacaoId),
	});

export function useNegociacaoAnexos(negociacaoId: number) {
	return useQuery(negociacaoAnexosQueryOptions(negociacaoId));
}

export const negociacaoComentariosQueryOptions = (negociacaoId: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "comentarios", negociacaoId] as const,
		queryFn: () => fetchNegociacaoComentarios(negociacaoId),
	});

export function useNegociacaoComentarios(negociacaoId: number) {
	return useQuery(negociacaoComentariosQueryOptions(negociacaoId));
}

// Hooks para mutações (criar, atualizar, deletar)
// Nota: Estes hooks são simplificados - em produção, considere usar useMutation do TanStack Query
export {
	createNegociacao,
	deleteNegociacao,
	fetchNegociacaoAnexos,
	fetchNegociacaoComentarios,
	fetchNegociacaoItens,
	fetchNegociacaoPacotes,
	updateNegociacao,
};
