import { queryOptions, useQuery } from "@tanstack/react-query";
import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/nocobase/crm-troca-titularidade";
import { buildFilter } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";

export interface TrocaTitularidadeListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: Record<string, unknown>;
	appends?: (keyof CrmTrocaTitularidadeRelations)[];
}

export type CrmTrocaTitularidadeWithRelations = CrmTrocaTitularidade &
	Partial<{
		[K in keyof CrmTrocaTitularidadeRelations]: CrmTrocaTitularidadeRelations[K];
	}>;

export const trocaTitularidadeQueryOptions = (
	params: TrocaTitularidadeListParams = {},
) => {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["f_vendedor", "f_pessoa_pf", "f_pessoa_pj"],
	} = params;

	const filter = filters ? buildFilter([filters]) : undefined;

	return queryOptions({
		queryKey: ["troca-titularidade", params] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_crm_troca_titularidade",
				{
					page,
					pageSize,
					appends: appends as Array<keyof CrmTrocaTitularidadeRelations>,
					...(sort.length > 0 && { sort }),
					...(filter && { filter }),
				},
			);
			return response as {
				data: CrmTrocaTitularidadeWithRelations[];
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

export function useTrocaTitularidade(params: TrocaTitularidadeListParams) {
	return useQuery(trocaTitularidadeQueryOptions(params));
}

export function useTrocaTitularidadeById(id: number) {
	return useQuery<CrmTrocaTitularidadeWithRelations>({
		queryKey: ["troca-titularidade", id],
		queryFn: async () => {
			const response = await nocobaseRepository.get(
				"t_crm_troca_titularidade",
				id,
				{
					appends: [
						"f_vendedor",
						"f_pessoa_pf",
						"f_pessoa_pj",
						"f_comentarios",
						"f_anexos",
						"f_trocadetitularidade_contrato",
						"createdBy",
						"updatedBy",
					] as Array<keyof CrmTrocaTitularidadeRelations>,
				},
			);
			return response as CrmTrocaTitularidadeWithRelations;
		},
		enabled: !Number.isNaN(id),
	});
}
