import { queryOptions, useQuery } from "@tanstack/react-query";
import {
	fetchNegociacaoById,
	fetchNegociacoes,
	fetchNegociacoesCount,
} from "./negociacoes-service";
import type { NegociacaoListParams } from "./negociacoes-types";

export const negociacoesQueryOptions = (params: NegociacaoListParams) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", params] as const,
		queryFn: () => fetchNegociacoes(params),
		staleTime: 30_000,
	});

export function useNegociacoes(params: NegociacaoListParams) {
	return useQuery(negociacoesQueryOptions(params));
}

export const negociacaoQueryOptions = (id: number, appends?: string[]) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", id] as const,
		queryFn: () => fetchNegociacaoById(id, appends),
		staleTime: 30_000,
	});

export function useNegociacao(id: number, appends?: string[]) {
	return useQuery(negociacaoQueryOptions(id, appends));
}

export const negociacoesCountQueryOptions = () =>
	queryOptions({
		queryKey: ["cs", "negociacoes", "count"] as const,
		queryFn: () => fetchNegociacoesCount(),
		staleTime: 30_000,
	});

export function useNegociacoesCount() {
	return useQuery(negociacoesCountQueryOptions());
}
