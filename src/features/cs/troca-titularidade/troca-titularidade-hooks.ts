import {
	keepPreviousData,
	queryOptions,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import { buildFilter, eq, gte, includes } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import {
	type CreateTrocaTitularidadeInput,
	createTrocaTitularidade,
} from "./troca-titularidade-service";
import type {
	TrocaTitularidadeFilters,
	TrocaTitularidadeListParams,
} from "./troca-titularidade-types";

export type CrmTrocaTitularidadeWithRelations = CrmTrocaTitularidade &
	CrmTrocaTitularidadeRelations;

function buildTrocaTitularidadeFilter(
	filters?: TrocaTitularidadeFilters,
): Record<string, unknown> | undefined {
	const conditions: Record<string, unknown>[] = [];

	if (filters?.status) conditions.push(eq("f_status", filters.status));
	if (filters?.substatus) conditions.push(eq("f_substatus", filters.substatus));
	if (filters?.estado) conditions.push(eq("f_estado", filters.estado));
	if (filters?.cidade) conditions.push(includes("f_cidade", filters.cidade));
	if (filters?.contratoId)
		conditions.push(includes("f_id_contrato", filters.contratoId));
	if (filters?.cedente) conditions.push(includes("f_cedente", filters.cedente));
	if (filters?.cessionario)
		conditions.push(includes("f_cessionario", filters.cessionario));
	if (filters?.criadoEmInicio)
		conditions.push(gte("createdAt", filters.criadoEmInicio));

	return buildFilter(conditions);
}

const trocaTitularidadeQueryOptions = (
	params: TrocaTitularidadeListParams = {},
) => {
	const {
		page = 1,
		pageSize = 15,
		sort = ["-createdAt"],
		filters,
		appends = ["f_vendedor", "f_pessoa_pf", "f_pessoa_pj"],
	} = params;

	const filter = buildTrocaTitularidadeFilter(filters);

	return queryOptions({
		queryKey: ["troca-titularidade", params] as const,
		placeholderData: keepPreviousData,
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
		staleTime: 10_000,
	});
};

export function useTrocaTitularidade(params: TrocaTitularidadeListParams) {
	return useQuery(trocaTitularidadeQueryOptions(params));
}

export function useCreateTrocaTitularidade() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateTrocaTitularidadeInput) => {
			console.log("Criando transferência de titularidade com dados:", data);
			return createTrocaTitularidade(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["troca-titularidade"] });
			queryClient.invalidateQueries({
				queryKey: ["cs", "contratos", "trocas-titularidade"],
			});
			toast.success("Transferência criada com sucesso");
		},
		onError: (error: Error) => {
			toast.error(error.message || "Erro ao criar transferência");
		},
	});
}

export function useTrocaTitularidadeById(id: number) {
	return useQuery<CrmTrocaTitularidadeWithRelations>({
		queryKey: ["troca-titularidade", id] as const,
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
		enabled: Number.isFinite(id) && id > 0,
		staleTime: 5_000,
	});
}
