import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchContratoById, fetchContratos } from "./contratos-service";
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
