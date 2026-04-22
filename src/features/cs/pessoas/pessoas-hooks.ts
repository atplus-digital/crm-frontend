import { queryOptions, useQuery } from "@tanstack/react-query";
import {
	createPessoaFisica,
	createPessoaJuridica,
	deletePessoaFisica,
	deletePessoaJuridica,
	fetchPessoasFisicas,
	fetchPessoasJuridicas,
	updatePessoaFisica,
	updatePessoaJuridica,
} from "./pessoas-service";
import type {
	PessoaFisicaListParams,
	PessoaJuridicaListParams,
} from "./pessoas-types";

export const pessoasFisicasQueryOptions = (params: PessoaFisicaListParams) =>
	queryOptions({
		queryKey: ["cs", "pessoas", "fisicas", params] as const,
		queryFn: () => fetchPessoasFisicas(params),
		staleTime: 30_000,
	});

export function usePessoasFisicas(params: PessoaFisicaListParams) {
	return useQuery(pessoasFisicasQueryOptions(params));
}

export const pessoasJuridicasQueryOptions = (
	params: PessoaJuridicaListParams,
) =>
	queryOptions({
		queryKey: ["cs", "pessoas", "juridicas", params] as const,
		queryFn: () => fetchPessoasJuridicas(params),
		staleTime: 30_000,
	});

export function usePessoasJuridicas(params: PessoaJuridicaListParams) {
	return useQuery(pessoasJuridicasQueryOptions(params));
}

export {
	createPessoaFisica,
	createPessoaJuridica,
	deletePessoaFisica,
	deletePessoaJuridica,
	updatePessoaFisica,
	updatePessoaJuridica,
};
