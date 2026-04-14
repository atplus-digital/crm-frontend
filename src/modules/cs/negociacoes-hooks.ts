import { queryOptions, useQuery } from "@tanstack/react-query";
import {
	createNegociacao,
	deleteNegociacao,
	fetchNegociacaoById,
	fetchNegociacoes,
	updateNegociacao,
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

export const negociacaoQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "negociacoes", id] as const,
		queryFn: () => fetchNegociacaoById(id),
		staleTime: 30_000,
	});

export function useNegociacao(id: number) {
	return useQuery(negociacaoQueryOptions(id));
}

// Hooks para mutações (criar, atualizar, deletar)
// Nota: Estes hooks são simplificados - em produção, considere usar useMutation do TanStack Query
export { createNegociacao, deleteNegociacao, updateNegociacao };
