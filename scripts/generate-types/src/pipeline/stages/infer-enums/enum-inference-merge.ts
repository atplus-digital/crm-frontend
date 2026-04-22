import type {
	InferredEnumInfo,
	InferredEnumsMap,
} from "./enum-inference-analysis";

/**
 * Converte InferredEnumInfo para formato EnumOption compatível com geração de tipos.
 */
export function inferredEnumToEnumOptions(
	inferredEnum: InferredEnumInfo,
): Array<{ value: string | number; label: string }> {
	return inferredEnum.values.map((value) => ({
		value,
		label: inferredEnum.labels[value] ?? value,
	}));
}

/**
 * Merge enums inferidos com enums existentes de uiSchema.
 * Prioriza enums do uiSchema quando existem.
 *
 * @param adapterEnums - Enuns existentes do adapter
 * @returns Enums mesclados
 */
export function adapterEnumsToInferredEnums(
	adapterEnums: Record<
		string,
		{ values: string[]; labels?: Record<string, string> }
	>,
): InferredEnumsMap {
	const result: InferredEnumsMap = {};

	for (const [fieldName, adapterEnum] of Object.entries(adapterEnums)) {
		result[fieldName] = {
			values: adapterEnum.values,
			labels: adapterEnum.labels ?? {},
			cardinality: adapterEnum.values.length,
			totalRecords: 0,
			origin: "adapter",
		};
	}

	return result;
}

export function mergeEnums(
	existingEnums: Map<string, Array<{ value: string | number; label: string }>>,
	inferredEnums: InferredEnumsMap,
): Map<string, Array<{ value: string | number; label: string }>> {
	const merged = new Map(existingEnums);

	for (const [fieldName, inferredInfo] of Object.entries(inferredEnums)) {
		// Não sobrescreve se já existe enum do uiSchema
		if (!merged.has(fieldName)) {
			merged.set(fieldName, inferredEnumToEnumOptions(inferredInfo));
		}
	}

	return merged;
}
