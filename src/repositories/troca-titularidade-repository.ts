import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/nocobase/crm-troca-titularidade";
import { buildFilter } from "#/lib/filter-builder";
import { nocobaseRepository } from "./nocobase-repository";
import type { PaginatedResponse } from "./types";

/**
 * Parameters for listing trocas de titularidade with pagination, filtering and sorting
 */
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

/**
 * Lists trocas de titularidade with pagination, filtering, sorting and appends
 */
export async function listTrocaTitularidade(
	params: TrocaTitularidadeListParams = {},
): Promise<PaginatedResponse<CrmTrocaTitularidadeWithRelations>> {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["f_vendedor", "f_pessoa_pf", "f_pessoa_pj"],
	} = params;

	const filter = filters ? buildFilter([filters]) : undefined;

	const response = await nocobaseRepository.list("t_crm_troca_titularidade", {
		page,
		pageSize,
		appends: appends as Array<keyof CrmTrocaTitularidadeRelations>,
		...(sort.length > 0 && { sort }),
		...(filter && { filter }),
	});

	return response as PaginatedResponse<CrmTrocaTitularidadeWithRelations>;
}

/**
 * Gets a troca de titularidade by ID with optional relationship appends
 */
export async function getTrocaTitularidadeById(
	id: number,
	appends: (keyof CrmTrocaTitularidadeRelations)[] = [
		"f_vendedor",
		"f_pessoa_pf",
		"f_pessoa_pj",
		"f_comentarios",
		"f_anexos",
		"f_trocadetitularidade_contrato",
		"createdBy",
		"updatedBy",
	],
): Promise<CrmTrocaTitularidadeWithRelations> {
	const response = await nocobaseRepository.get(
		"t_crm_troca_titularidade",
		id,
		{
			appends: appends as Array<keyof CrmTrocaTitularidadeRelations>,
		},
	);

	return response as CrmTrocaTitularidadeWithRelations;
}

/**
 * Counts trocas de titularidade with optional filtering
 */
export async function countTrocaTitularidade(
	filters?: Record<string, unknown>,
): Promise<{ count: number }> {
	const filter = filters ? buildFilter([filters]) : undefined;

	return await nocobaseRepository.count("t_crm_troca_titularidade", {
		filter,
	});
}
