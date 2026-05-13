import {
	keepPreviousData,
	queryOptions,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { buildFilter, eq, gte, includes } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type {
	SuspensaoContratoFilters,
	SuspensaoContratoListParams,
	SuspensaoContratoWithRelations,
} from "./suspensao-de-contrato-types";

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

const suspensaoContratoQueryOptions = (
	params: SuspensaoContratoListParams = {},
) => {
	const {
		page = 1,
		pageSize = 15,
		sort = ["-createdAt"],
		filters,
		appends = ["createdBy"],
	} = params;

	const filter = buildSuspensaoContratoFilter(filters);

	return queryOptions({
		queryKey: ["suspensao-contrato", params] as const,
		placeholderData: keepPreviousData,
		queryFn: async () => {
			const response = await nocobaseRepository.list("t_suspensao_contrato", {
				page,
				pageSize,
				appends: appends as ("createdBy" | "updatedBy")[],
				...(sort.length > 0 && { sort }),
				...(filter && { filter }),
			});
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
		staleTime: 10_000,
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
				"t_suspensao_contrato",
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

export function useUpdateSuspensaoContrato() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({
			id,
			data,
		}: {
			id: number;
			data: Record<string, unknown>;
		}) => {
			return nocobaseRepository.update("t_suspensao_contrato", id, data);
		},
		onSuccess: (_data, variables) => {
			toast.success("Atualizado com sucesso");
			queryClient.invalidateQueries({
				queryKey: ["suspensao-contrato", variables.id],
			});
			queryClient.invalidateQueries({ queryKey: ["suspensao-contrato"] });
		},
		onError: (error) => {
			toast.error(
				`Erro ao atualizar: ${error instanceof Error ? error.message : "desconhecido"}`,
			);
		},
	});
}

export function useCreateSuspensaoComentario(suspensaoId: number) {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: { f_comentario: string }) => {
			return nocobaseRepository.create(
				`t_suspensao_contrato/${suspensaoId}/f_comentarios` as any,
				data,
			);
		},
		onSuccess: () => {
			toast.success("Comentário adicionado");
			queryClient.invalidateQueries({
				queryKey: ["suspensao-contrato", suspensaoId],
			});
		},
		onError: (error) => {
			toast.error(
				`Erro ao adicionar comentário: ${error instanceof Error ? error.message : "desconhecido"}`,
			);
		},
	});
}
