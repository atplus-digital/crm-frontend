import type { EnumInferenceConfig } from "./enum-inference-config";

export function getRejectionReason(
	distinctValues: string[],
	_totalRecords: number,
	config: EnumInferenceConfig,
	fieldName?: string,
): { reason: string; suggestion?: string } | null {
	if (distinctValues.length >= config.cardinalityThreshold) {
		return {
			reason: `Cardinalidade alta (${distinctValues.length} >= ${config.cardinalityThreshold})`,
			suggestion: "Aumentar cardinalityThreshold se for enum legítimo",
		};
	}

	if (
		fieldName &&
		config.fieldNameBlacklist.some((pattern) => pattern.test(fieldName))
	) {
		return {
			reason: "Campo na blacklist",
			suggestion: "Remover da blacklist se for enum",
		};
	}

	if (
		config.valueBlacklist.some((v) => distinctValues.some((val) => v.test(val)))
	) {
		return { reason: "Valores na blacklist (CPF, CNPJ, email, etc)" };
	}

	const numericValues = distinctValues
		.map((v) => Number(v))
		.filter((n) => !Number.isNaN(n));

	if (
		numericValues.length === distinctValues.length &&
		numericValues.length > 1
	) {
		const minVal = Math.min(...numericValues);
		const maxVal = Math.max(...numericValues);
		const variation = maxVal - minVal;

		const isKnownEnumPattern =
			fieldName && config.fieldNamePatterns.some((p) => p.test(fieldName));
		const effectiveThreshold = isKnownEnumPattern
			? config.patternThreshold
			: config.maxNumericVariation;
		const effectiveMinValue = isKnownEnumPattern
			? config.patternThreshold
			: config.minNumericValue;

		if (variation > effectiveThreshold) {
			return {
				reason: `Variação numérica alta (${variation} > ${effectiveThreshold})`,
				suggestion: isKnownEnumPattern
					? `Aumentar patternThreshold para >${variation}`
					: `Adicionar ${fieldName} a fieldNamePatterns se for enum`,
			};
		}

		if (minVal > effectiveMinValue) {
			return {
				reason: `Valores muito altos (mínimo ${minVal} > ${effectiveMinValue})`,
				suggestion: isKnownEnumPattern
					? `Aumentar minNumericValue para >${minVal}`
					: `Adicionar ${fieldName} a fieldNamePatterns se for enum`,
			};
		}
	}

	return null;
}
