import { nocobaseRepository } from "#/modules/repositories";
import type {
	Negociacao,
	NegociacaoFilters,
	NegociacaoListParams,
	NegociacaoWithRelations,
	PaginatedResponse,
} from "./negociacoes-types";

function buildNegociacaoFilter(
	filters?: NegociacaoFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.titulo) {
		conditions.push({ f_titulo: { $includes: filters.titulo } });
	}

	if (filters.vendedorId) {
		conditions.push({ f_vendedor: { id: { $eq: filters.vendedorId } } });
	}

	if (filters.status) {
		conditions.push({ f_status: { $eq: filters.status } });
	}

	if (filters.substatus) {
		conditions.push({ f_substatus: { $eq: filters.substatus } });
	}

	if (filters.cpfCnpj) {
		conditions.push({
			$or: [
				{ f_pessoa: { f_cpf: { $includes: filters.cpfCnpj } } },
				{
					f_negociacao_pessoa_juridica: {
						f_cnpj: { $includes: filters.cpfCnpj },
					},
				},
			],
		});
	}

	if (filters.criadoEmInicio) {
		conditions.push({
			createdAt: { $gte: filters.criadoEmInicio },
		});
	}

	if (filters.criadoEmFim) {
		conditions.push({
			createdAt: { $lte: filters.criadoEmFim },
		});
	}

	if (conditions.length === 0) return undefined;
	if (conditions.length === 1) return conditions[0];
	return { $and: conditions };
}

export async function fetchNegociacoes(
	params: NegociacaoListParams = {},
): Promise<PaginatedResponse<NegociacaoWithRelations>> {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["f_vendedor", "f_pessoa", "f_negociacao_pessoa_juridica"],
	} = params;

	const filter = buildNegociacaoFilter(filters);

	const response = await nocobaseRepository.list("t_negociacoes", {
		page,
		pageSize,
		appends: appends as unknown as Array<
			keyof import("#/@types/generated/crm/negociacoes").NegociacoesRelations
		>,
		...(sort.length > 0 && { sort }),
		...(filter && { filter }),
	});

	return response as unknown as PaginatedResponse<NegociacaoWithRelations>;
}

export async function fetchNegociacaoById(
	id: number,
): Promise<NegociacaoWithRelations> {
	const response = await nocobaseRepository.get("t_negociacoes", id);

	return response as unknown as NegociacaoWithRelations;
}

export async function createNegociacao(
	data: Partial<Negociacao>,
): Promise<Negociacao> {
	const result = await nocobaseRepository.create("t_negociacoes", data);
	return result as unknown as Negociacao;
}

export async function updateNegociacao(
	id: number,
	data: Partial<Negociacao>,
): Promise<Negociacao> {
	const result = await nocobaseRepository.update("t_negociacoes", id, data);
	return result as unknown as Negociacao;
}

export async function deleteNegociacao(id: number): Promise<void> {
	await nocobaseRepository.delete("t_negociacoes", id);
}
