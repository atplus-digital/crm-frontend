import type {
	AnexosNegociacoes,
	NegociacoesComentarios,
	NegociacoesItens,
	Pacotes,
} from "#/generated/nocobase/index";
import {
	buildFilter,
	eq,
	gte,
	includes,
	lte,
	nestedField,
	or,
} from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import { exportNegociacoesToCsv } from "./export-csv";
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
		conditions.push(includes("f_titulo", filters.titulo));
	}

	if (filters.vendedorId) {
		conditions.push(nestedField("f_vendedor", eq("id", filters.vendedorId)));
	}

	if (filters.status) {
		conditions.push(eq("f_status", filters.status));
	}

	if (filters.substatus) {
		conditions.push(eq("f_substatus", filters.substatus));
	}

	if (filters.cpfCnpj) {
		conditions.push(
			or(
				nestedField("f_pessoa", includes("f_cpf", filters.cpfCnpj)),
				nestedField(
					"f_negociacao_pessoa_juridica",
					includes("f_cnpj", filters.cpfCnpj),
				),
			),
		);
	}

	if (filters.criadoEmInicio) {
		conditions.push(gte("createdAt", filters.criadoEmInicio));
	}

	if (filters.criadoEmFim) {
		conditions.push(lte("createdAt", filters.criadoEmFim));
	}

	if (filters.contratoId) {
		conditions.push(eq("f_contrato_ixc", filters.contratoId));
	}

	if (filters.motivo) {
		conditions.push(eq("f_motivo", filters.motivo));
	}

	if (filters.fidelidade) {
		conditions.push(eq("f_fidelidade", filters.fidelidade));
	}

	if (filters.valorDevedorGte) {
		conditions.push(gte("f_valor_devedor", filters.valorDevedorGte));
	}

	if (filters.valorDevedorLte) {
		conditions.push(lte("f_valor_devedor", filters.valorDevedorLte));
	}

	if (filters.parcelasMensais) {
		conditions.push(eq("f_parcelas_mensais", filters.parcelasMensais));
	}

	if (filters.multaJurosGte) {
		conditions.push(gte("f_multa_juros", filters.multaJurosGte));
	}

	if (filters.multaJurosLte) {
		conditions.push(lte("f_multa_juros", filters.multaJurosLte));
	}

	if (filters.pacote) {
		conditions.push(nestedField("f_pacote", eq("id", filters.pacote)));
	}

	return buildFilter(conditions);
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
		appends: appends as Array<
			keyof import("#/generated/nocobase/negociacoes").NegociacoesRelations
		>,
		...(sort.length > 0 && { sort }),
		...(filter && { filter }),
	});

	return {
		data: response.data as unknown as NegociacaoWithRelations[],
		meta: response.meta,
	};
}

export async function fetchNegociacaoById(
	id: number,
): Promise<NegociacaoWithRelations> {
	const response = await nocobaseRepository.get("t_negociacoes", id, {
		appends: [
			"f_vendedor",
			"f_pessoa",
			"f_negociacao_pessoa_juridica",
			"f_itens_negociacao",
			"f_anexos",
			"f_comentarios",
			"f_pacote",
			"f_pacotes_adicionais",
			"f_cupom_desconto",
			"createdBy",
			"updatedBy",
		],
	});

	return response as unknown as NegociacaoWithRelations;
}

export async function fetchNegociacaoItens(
	negociacaoId: number,
): Promise<PaginatedResponse<NegociacoesItens>> {
	const response = await nocobaseRepository.list(
		"t_negociacoes_itens" as never,
		{
			page: 1,
			pageSize: 100,
			filter: eq("f_fk_negociacao", negociacaoId),
		},
	);

	return {
		data: response.data as unknown as NegociacoesItens[],
		meta: response.meta,
	};
}

export async function fetchNegociacaoAnexos(
	negociacaoId: number,
): Promise<PaginatedResponse<AnexosNegociacoes>> {
	const response = await nocobaseRepository.list(
		"t_anexos_negociacoes" as never,
		{
			page: 1,
			pageSize: 100,
			filter: eq("f_anexos_fk", negociacaoId),
		},
	);

	return {
		data: response.data as unknown as AnexosNegociacoes[],
		meta: response.meta,
	};
}

export async function fetchNegociacaoComentarios(
	negociacaoId: number,
): Promise<PaginatedResponse<NegociacoesComentarios>> {
	const response = await nocobaseRepository.list(
		"t_negociacoes_comentarios" as never,
		{
			page: 1,
			pageSize: 100,
			filter: eq("f_fk_comentarios_negociacoes", negociacaoId),
		},
	);

	return {
		data: response.data as unknown as NegociacoesComentarios[],
		meta: response.meta,
	};
}

export async function fetchNegociacaoPacotes(
	negociacaoId: number,
): Promise<PaginatedResponse<Pacotes>> {
	const response = await nocobaseRepository.list("t_pacotes" as never, {
		page: 1,
		pageSize: 100,
		filter: { f_negociacao: negociacaoId },
	});

	return {
		data: response.data as unknown as Pacotes[],
		meta: response.meta,
	};
}

export async function createNegociacao(
	data: Omit<Negociacao, "f_contrato_ixc"> & {
		f_contrato_ixc?: number | string | null;
	},
): Promise<Negociacao> {
	const payload: Record<string, unknown> = {};

	Object.assign(payload, data);
	if (data.f_contrato_ixc != null) {
		payload.f_contrato_ixc = String(data.f_contrato_ixc);
	}

	const result = await nocobaseRepository.create("t_negociacoes", payload);
	return result as unknown as Negociacao;
}

export async function updateNegociacao(
	id: number,
	data: Omit<Negociacao, "f_contrato_ixc"> & {
		f_contrato_ixc?: number | string | null;
	},
): Promise<Negociacao> {
	const payload: Record<string, unknown> = {};

	Object.assign(payload, data);
	if (data.f_contrato_ixc != null) {
		payload.f_contrato_ixc = String(data.f_contrato_ixc);
	}

	const result = await nocobaseRepository.update("t_negociacoes", id, payload);
	return result as unknown as Negociacao;
}

export async function deleteNegociacao(id: number): Promise<void> {
	await nocobaseRepository.delete("t_negociacoes", id);
}

export { exportNegociacoesToCsv };
