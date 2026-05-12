import {
	keepPreviousData,
	queryOptions,
	useQuery,
} from "@tanstack/react-query";
import { fetchPessoasFisicas, fetchPessoasJuridicas } from "./pessoas-service";
import type {
	PessoaFisicaListParams,
	PessoaJuridicaListParams,
} from "./pessoas-types";

const pessoasFisicasQueryOptions = (params: PessoaFisicaListParams) =>
	queryOptions({
		queryKey: ["cs", "pessoas", "fisicas", params] as const,
		queryFn: () => fetchPessoasFisicas(params),
		placeholderData: keepPreviousData,
		staleTime: 10_000,
	});

export function usePessoasFisicas(params: PessoaFisicaListParams) {
	return useQuery(pessoasFisicasQueryOptions(params));
}

const pessoasJuridicasQueryOptions = (params: PessoaJuridicaListParams) =>
	queryOptions({
		queryKey: ["cs", "pessoas", "juridicas", params] as const,
		queryFn: () => fetchPessoasJuridicas(params),
		placeholderData: keepPreviousData,
		staleTime: 10_000,
	});

export function usePessoasJuridicas(params: PessoaJuridicaListParams) {
	return useQuery(pessoasJuridicasQueryOptions(params));
}
