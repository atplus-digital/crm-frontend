import { queryOptions, useQuery } from "@tanstack/react-query";
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
} from "#/generated/nocobase/suspensao-contrato";
import { buildFilter, eq, gte, includes } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type { SuspensaoContratoFilters } from "./suspensao-de-contrato-types";

export interface SuspensaoContratoListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: SuspensaoContratoFilters;
	appends?: (keyof SuspensaoContratoRelations)[];
}

export type SuspensaoContratoWithRelations = SuspensaoContrato &
	SuspensaoContratoRelations;

function buildSuspensaoContratoFilter(
	filters?: SuspensaoContratoFilters,
): Record<string, unknown> | undefined {
	const conditions: Record<string, unknown>[] = [];

	if (filters?.status) conditions.push(eq("f_status", filters.status));
	if (filters?.titulo) conditions.push(includes("f_titulo", filters.titulo));
	if (filters?.createdAt) conditions.push(gte("createdAt", filters.createdAt));
	if (filters?.updatedAt) conditions.push(gte("updatedAt", filters.updatedAt));
	if (filters?.criadoPor) conditions.push(eq("createdById", filters.criadoPor));

	return buildFilter(conditions);
}

export const suspensaoContratoQueryOptions = (
	params: SuspensaoContratoListParams = {},
) => {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["createdBy"],
	} = params;

	const filter = buildSuspensaoContratoFilter(filters);

	return queryOptions({
		queryKey: ["suspensao-contrato", params] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_suspensao_contrato" as "users",
				{
					page,
					pageSize,
					appends: appends as ("createdBy" | "updatedBy")[],
					...(sort.length > 0 && { sort }),
					...(filter && { filter }),
				},
			);
			return response as unknown as {
				data: SuspensaoContratoWithRelations[];
				meta: {
					total: number;
					totalPage: number;
					page: number;
					pageSize: number;
				};
			};
		},
		staleTime: 30_000,
	});
};

export function useSuspensaoContrato(params: SuspensaoContratoListParams) {
	return useQuery(suspensaoContratoQueryOptions(params));
}

export function useSuspensaoContratoById(id: number) {
	return useQuery<SuspensaoContratoWithRelations>({
		queryKey: ["suspensao-contrato", id],
		queryFn: async () => {
			const response = await nocobaseRepository.get(
				"t_suspensao_contrato" as "users",
				id,
				{
					appends: [
						"createdBy",
						"updatedBy",
						"f_comentarios",
						"f_contratos",
					] as ("createdBy" | "updatedBy")[],
				},
			);
			return response as unknown as SuspensaoContratoWithRelations;
		},
		enabled: !Number.isNaN(id),
	});
}
