import { queryOptions, useQuery } from "@tanstack/react-query";
import {
	fetchContratoAtendimentos,
	fetchContratoById,
	fetchContratoFaturas,
	fetchContratoMovel,
	fetchContratoProdutos,
	fetchContratoRegistros,
	fetchContratos,
	fetchContratoTrocasTitularidade,
} from "./contratos-service";
import type { ContratoListParams } from "./contratos-types";

export const contratosQueryOptions = (params: ContratoListParams) =>
	queryOptions({
		queryKey: ["cs", "contratos", params] as const,
		queryFn: () => fetchContratos(params),
		staleTime: 30_000,
	});

export function useContratos(params: ContratoListParams) {
	return useQuery(contratosQueryOptions(params));
}

export const contratoQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", id] as const,
		queryFn: () => fetchContratoById(id),
		staleTime: 30_000,
	});

export function useContrato(id: number) {
	return useQuery(contratoQueryOptions(id));
}

export function useContratoById(id: number) {
	return useContrato(id);
}

export const contratoMovelQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", "movel", id] as const,
		queryFn: () => fetchContratoMovel(id),
		staleTime: 30_000,
	});

export function useContratoMovel(id: number) {
	return useQuery(contratoMovelQueryOptions(id));
}

export const contratoProdutosQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", "produtos", id] as const,
		queryFn: () => fetchContratoProdutos(id),
		staleTime: 30_000,
	});

export function useContratoProdutos(id: number) {
	return useQuery(contratoProdutosQueryOptions(id));
}

export const contratoFaturasQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", "faturas", id] as const,
		queryFn: () => fetchContratoFaturas(id),
		staleTime: 30_000,
	});

export function useContratoFaturas(id: number) {
	return useQuery(contratoFaturasQueryOptions(id));
}

export const contratoTrocasTitularidadeQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", "trocas-titularidade", id] as const,
		queryFn: () => fetchContratoTrocasTitularidade(id),
		staleTime: 30_000,
	});

export function useContratoTrocasTitularidade(id: number) {
	return useQuery(contratoTrocasTitularidadeQueryOptions(id));
}

export const contratoAtendimentosQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", "atendimentos", id] as const,
		queryFn: () => fetchContratoAtendimentos(id),
		staleTime: 30_000,
	});

export function useContratoAtendimentos(id: number) {
	return useQuery(contratoAtendimentosQueryOptions(id));
}

export const contratoRegistrosQueryOptions = (id: number) =>
	queryOptions({
		queryKey: ["cs", "contratos", "registros", id] as const,
		queryFn: () => fetchContratoRegistros(id),
		staleTime: 30_000,
	});

export function useContratoRegistros(id: number) {
	return useQuery(contratoRegistrosQueryOptions(id));
}
