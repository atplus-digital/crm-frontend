import { queryOptions, useQuery } from "@tanstack/react-query";
import {
	fetchPessoaById,
	fetchPessoaCount,
	fetchPessoas,
} from "./pessoas-service";
import type { PessoaListParams } from "./pessoas-types";

export const pessoasQueryOptions = (params: PessoaListParams) =>
	queryOptions({
		queryKey: ["cs", "pessoas", params] as const,
		queryFn: () => fetchPessoas(params),
		staleTime: 30_000,
	});

export function usePessoas(params: PessoaListParams) {
	return useQuery(pessoasQueryOptions(params));
}

export const pessoaQueryOptions = (id: number, type?: "fisica" | "juridica") =>
	queryOptions({
		queryKey: ["cs", "pessoas", id, type] as const,
		queryFn: () => fetchPessoaById(id, type),
		staleTime: 30_000,
	});

export function usePessoa(id: number, type: "fisica" | "juridica" = "fisica") {
	return useQuery(pessoaQueryOptions(id, type));
}

export const pessoaCountQueryOptions = (type?: "fisica" | "juridica") =>
	queryOptions({
		queryKey: ["cs", "pessoas", "count", type] as const,
		queryFn: () => fetchPessoaCount(type),
		staleTime: 30_000,
	});

export function usePessoaCount(type?: "fisica" | "juridica") {
	return useQuery(pessoaCountQueryOptions(type));
}
