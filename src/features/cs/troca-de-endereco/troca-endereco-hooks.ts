import { queryOptions, useQuery } from "@tanstack/react-query";
import type {
	TrocaEndereco,
	TrocaEnderecoRelations,
} from "#/generated/nocobase/troca-endereco";
import { buildFilter, eq, gte, includes } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type { TrocaEnderecoFilters } from "./troca-endereco-types";

export interface TrocaEnderecoListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: TrocaEnderecoFilters;
	appends?: (keyof TrocaEnderecoRelations)[];
}

export type TrocaEnderecoWithRelations = TrocaEndereco & TrocaEnderecoRelations;

function buildTrocaEnderecoFilter(
	filters?: TrocaEnderecoFilters,
): Record<string, unknown> | undefined {
	const conditions: Record<string, unknown>[] = [];

	if (filters?.status) conditions.push(eq("f_status", filters.status));
	if (filters?.cliente) conditions.push(includes("f_cliente", filters.cliente));
	if (filters?.idContrato)
		conditions.push(includes("f_id_contrato", filters.idContrato));
	if (filters?.idAtendimento)
		conditions.push(includes("f_id_atendimento", filters.idAtendimento));
	if (filters?.criadoEmInicio)
		conditions.push(gte("createdAt", filters.criadoEmInicio));

	return buildFilter(conditions);
}

export const trocaEnderecoQueryOptions = (
	params: TrocaEnderecoListParams = {},
) => {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["createdBy"],
	} = params;

	const filter = buildTrocaEnderecoFilter(filters);

	return queryOptions({
		queryKey: ["troca-endereco", params] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_troca_endereco" as "users",
				{
					page,
					pageSize,
					appends:
						appends as (keyof import("#/generated/nocobase/troca-endereco").TrocaEnderecoRelations)[],
					...(sort.length > 0 && { sort }),
					...(filter && { filter }),
				},
			);
			return response as unknown as {
				data: TrocaEnderecoWithRelations[];
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

export function useTrocaEndereco(params: TrocaEnderecoListParams) {
	return useQuery(trocaEnderecoQueryOptions(params));
}

export function useTrocaEnderecoById(id: number) {
	return useQuery<TrocaEnderecoWithRelations>({
		queryKey: ["troca-endereco", id],
		queryFn: async () => {
			const response = await nocobaseRepository.get(
				"t_troca_endereco" as "users",
				id,
				{
					appends: [
						"createdBy",
					] as (keyof import("#/generated/nocobase/troca-endereco").TrocaEnderecoRelations)[],
				},
			);
			return response as unknown as TrocaEnderecoWithRelations;
		},
		enabled: !Number.isNaN(id),
	});
}
