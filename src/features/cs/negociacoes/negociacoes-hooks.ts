import {
	keepPreviousData,
	queryOptions,
	useQuery,
} from "@tanstack/react-query";
import {
	fetchNegociacaoAnexos,
	fetchNegociacaoById,
	fetchNegociacaoComentarios,
	fetchNegociacaoItens,
	fetchNegociacoes,
} from "./negociacoes-service";
import type { NegociacaoListParams } from "./negociacoes-types";

const negociacoesQueryOptions = (params: NegociacaoListParams) =>
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
const negociacaoQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", id] as const,
		queryFn: () => fetchNegociacaoById(id),
	});

export function useNegociacao(id: number) {
	return useQuery(negociacaoQueryOptions(id));
}

const negociacaoItensQueryOptions = (negociacaoId: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "itens", negociacaoId] as const,
		queryFn: () => fetchNegociacaoItens(negociacaoId),
	});

export function useNegociacaoItens(negociacaoId: number) {
	return useQuery(negociacaoItensQueryOptions(negociacaoId));
}

const negociacaoAnexosQueryOptions = (negociacaoId: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "anexos", negociacaoId] as const,
		queryFn: () => fetchNegociacaoAnexos(negociacaoId),
	});

export function useNegociacaoAnexos(negociacaoId: number) {
	return useQuery(negociacaoAnexosQueryOptions(negociacaoId));
}

const negociacaoComentariosQueryOptions = (negociacaoId: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "comentarios", negociacaoId] as const,
		queryFn: () => fetchNegociacaoComentarios(negociacaoId),
	});

export function useNegociacaoComentarios(negociacaoId: number) {
	return useQuery(negociacaoComentariosQueryOptions(negociacaoId));
}
