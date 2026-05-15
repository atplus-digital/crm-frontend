import {
	buildFilter,
	eq,
	gte,
	includes,
	lte,
	nestedField,
	or,
} from "#/lib/filter-builder";
import type { NegociacaoFilters } from "../negociacoes-types";

export function buildNegociacaoFilter(
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
		if (Array.isArray(filters.motivo)) {
			const motivos = filters.motivo.filter(Boolean);
			if (motivos.length > 0) {
				conditions.push(or(...motivos.map((motivo) => eq("f_motivo", motivo))));
			}
		} else {
			conditions.push(eq("f_motivo", filters.motivo));
		}
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
