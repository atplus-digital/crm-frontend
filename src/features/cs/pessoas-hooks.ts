import { queryOptions, useQuery } from "@tanstack/react-query";
import {
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

export const pessoaFisicaQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "pessoas", "fisicas", id] as const,
		queryFn: () => fetchPessoaFisicaById(id),
		staleTime: 30_000,
	});

export function usePessoaFisica(id: number) {
	return useQuery(pessoaFisicaQueryOptions(id));
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

export const pessoaJuridicaQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "pessoas", "juridicas", id] as const,
		queryFn: () => fetchPessoaJuridicaById(id),
		staleTime: 30_000,
	});

export function usePessoaJuridica(id: number) {
	return useQuery(pessoaJuridicaQueryOptions(id));
}

export {
	createPessoaFisica,
	createPessoaJuridica,
	deletePessoaFisica,
	deletePessoaJuridica,
	updatePessoaFisica,
	updatePessoaJuridica,
};
