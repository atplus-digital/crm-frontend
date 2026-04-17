import { queryOptions, useQuery } from "@tanstack/react-query";
import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/nocobase/crm-troca-titularidade";
import type { TrocaTitularidadeListParams } from "#/repositories/troca-titularidade-repository";
import {
	getTrocaTitularidadeById,
	listTrocaTitularidade,
} from "#/repositories/troca-titularidade-repository";

export const trocaTitularidadeQueryOptions = (
	params: TrocaTitularidadeListParams,
) =>
	queryOptions({
		queryKey: ["troca-titularidade", params] as const,
		queryFn: () => listTrocaTitularidade(params),
		staleTime: 30_000,
	});

export function useTrocaTitularidade(params: TrocaTitularidadeListParams) {
	return useQuery(trocaTitularidadeQueryOptions(params));
}

export function useTrocaTitularidadeById(id: number) {
	return useQuery<CrmTrocaTitularidade & CrmTrocaTitularidadeRelations>({
		queryKey: ["troca-titularidade", id],
		queryFn: () => getTrocaTitularidadeById(id),
		enabled: !Number.isNaN(id),
	});
}
