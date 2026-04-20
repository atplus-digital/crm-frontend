import type { EnumCorrectionRule } from "../@types/script";

export interface InferredEnumValue {
	value: string;
	label: string;
}

export interface InferredEnumInfo {
	values: string[];
	labels: Record<string, string>;
	cardinality: number;
	totalRecords: number;
}

export type InferredEnumsMap = Record<string, InferredEnumInfo>;

/**
 * Configuração para inferência de enums.
 */
export interface EnumInferenceConfig {
	/**
	 * Threshold de cardinalidade para considerar um campo como enum.
	 * Campos com cardinalidade menor que este valor são candidatos a enum.
	 * @default 8
	 */
	cardinalityThreshold: number;

	/**
	 * Tamanho da amostra para calcular cardinalidade.
	 * @default 5000
	 */
	sampleSize: number;

	/**
	 * Razão mínima de repetição para considerar como enum.
	 * Ex: 0.8 significa que 80% dos registros devem ter valores repetidos.
	 * @default 0.8
	 */
	minRepetitionRatio?: number;
}

/**
 * Mapeamento de valores de boolean/flags para labels.
 */
const BOOLEAN_FLAG_LABELS: Record<string, string> = {
	S: "Sim",
	N: "Não",
	Y: "Yes",
	"1": "Ativo",
	"0": "Inativo",
	true: "Sim",
	false: "Não",
	TRUE: "Sim",
	FALSE: "Não",
	yes: "Sim",
	no: "Não",
	YES: "Sim",
	NO: "Não",
	A: "Ativo",
	I: "Inativo",
	ATIVO: "Ativo",
	INATIVO: "Inativo",
	ativo: "Ativo",
	inativo: "Inativo",
};

/**
 * Mapeamento de siglas de estados brasileiros para nomes completos.
 */
const ESTADOS_BRASIL: Record<string, string> = {
	AC: "Acre",
	AL: "Alagoas",
	AP: "Amapá",
	AM: "Amazonas",
	BA: "Bahia",
	CE: "Ceará",
	DF: "Distrito Federal",
	ES: "Espírito Santo",
	GO: "Goiás",
	MA: "Maranhão",
	MT: "Mato Grosso",
	MS: "Mato Grosso do Sul",
	MG: "Minas Gerais",
	PA: "Pará",
	PB: "Paraíba",
	PR: "Paraná",
	PE: "Pernambuco",
	PI: "Piauí",
	RJ: "Rio de Janeiro",
	RN: "Rio Grande do Norte",
	RS: "Rio Grande do Sul",
	RO: "Rondônia",
	RR: "Roraima",
	SC: "Santa Catarina",
	SP: "São Paulo",
	SE: "Sergipe",
	TO: "Tocantins",
};

/**
 * Heurística para inferir label de um valor enum.
 * Tenta encontrar nomes legíveis baseados em padrões comuns.
 */
function inferLabel(value: string, fieldName: string): string {
	const normalizedValue = value.trim();

	// Verifica mapeamento de boolean/flags
	if (normalizedValue in BOOLEAN_FLAG_LABELS) {
		return BOOLEAN_FLAG_LABELS[normalizedValue];
	}

	// Verifica se é estado brasileiro (para campos como UF, estado, etc.)
	if (/^(uf|estado|sigla|uf_)/i.test(fieldName)) {
		const estado = ESTADOS_BRASIL[normalizedValue.toUpperCase()];
		if (estado) {
			return estado;
		}
	}

	// Se é código numérico simples (1-2 dígitos), mantém como está
	if (/^\d{1,2}$/.test(normalizedValue)) {
		return `Código ${normalizedValue}`;
	}

	// Tenta capitalizar e formatar (ex: "PENDENTE" -> "Pendente")
	const words = normalizedValue
		.split(/[_\s-]+/)
		.filter((w) => w.length > 0)
		.map((word) => {
			// Se for sigla (2-4 letras maiúsculas), mantém
			if (/^[A-Z]{2,4}$/.test(word)) {
				return word;
			}
			// Senão, capitaliza primeira letra
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		});

	if (words.length > 0) {
		return words.join(" ");
	}

	// Fallback: retorna o próprio valor
	return normalizedValue;
}

/**
 * Extrai valores distintos de uma lista de registros para um campo específico.
 * Retorna valores únicos não-nulos ordenados.
 */
export function extractDistinctValues(
	records: Array<Record<string, unknown>>,
	fieldName: string,
): string[] {
	const values = new Set<string>();

	for (const record of records) {
		const value = record[fieldName];
		if (value !== null && value !== undefined && value !== "") {
			values.add(String(value));
		}
	}

	return Array.from(values).sort((a, b) => a.localeCompare(b));
}

/**
 * Verifica se um campo é candidato a enum baseado em heurísticas.
 */
function isEnumCandidate(
	distinctValues: string[],
	totalRecords: number,
	cardinalityThreshold: number,
	minRepetitionRatio?: number,
): boolean {
	// Cardinalidade baixa: menos valores distintos que o threshold
	if (distinctValues.length >= cardinalityThreshold) {
		return false;
	}

	// Se não há registros, não é candidato
	if (totalRecords === 0) {
		return false;
	}

	// Regras adicionais para filtrar campos que não são enums

	// Se há muitos valores únicos relativos ao total, provavelmente não é enum
	// (ex: 100 registros com 80 valores distintos = alta cardinalidade)
	const cardinalityRatio = distinctValues.length / totalRecords;
	if (cardinalityRatio > 0.5 && distinctValues.length > 5) {
		return false;
	}

	// Nova regra: verificar razão de repetição mínima
	// Se minRepetitionRatio = 0.8, então 80% dos registros devem ter valores repetidos
	if (minRepetitionRatio !== undefined && minRepetitionRatio > 0) {
		const uniqueRatio = distinctValues.length / totalRecords;
		const repetitionRatio = 1 - uniqueRatio;
		if (repetitionRatio < minRepetitionRatio) {
			return false;
		}
	}

	// REGRA 1: Único valor com Number(val) === 0 não é enum
	// Ex: campo "apartamento" com apenas valor "0" significa NULL/ausência de valor
	if (distinctValues.length === 1) {
		const singleValue = distinctValues[0];
		const numericValue = Number(singleValue);
		if (!isNaN(numericValue) && numericValue === 0) {
			return false;
		}
	}

	// REGRA 2: Padrão de data (YYYY-MM-DD ou YYYYMMDD) não é enum
	// Ex: "0000-00-00", "2024-01-15" são datas, não enums
	const datePattern = /^\d{4}(-\d{2})?(-\d{2})?$|^\d{8}$/;
	if (distinctValues.every((v) => datePattern.test(v))) {
		return false;
	}

	// REGRA 3: Variação grande entre valores numéricos (>50) não é enum
	// Ex: valores [036, 327, 348, 377, 433, 721] têm variação de 685 → não é enum
	const numericValues = distinctValues
		.map((v) => Number(v))
		.filter((n) => !isNaN(n));

	if (
		numericValues.length === distinctValues.length &&
		numericValues.length > 1
	) {
		const minVal = Math.min(...numericValues);
		const maxVal = Math.max(...numericValues);
		const variation = maxVal - minVal;

		// Se a variação entre maior e menor valor for >50, provavelmente não é enum
		if (variation > 50) {
			return false;
		}

		// REGRA 4: Valores que começam em >50 também não são enum
		// Ex: [1898, 2896] são IDs, não enums
		if (minVal > 50) {
			return false;
		}
	}

	return true;
}

/**
 * Processa valores distintos e retorna informações do enum inferido.
 */
function processEnumValues(
	distinctValues: string[],
	fieldName: string,
	totalRecords: number,
): InferredEnumInfo | null {
	const labels: Record<string, string> = {};

	for (const value of distinctValues) {
		labels[value] = inferLabel(value, fieldName);
	}

	return {
		values: distinctValues,
		labels,
		cardinality: distinctValues.length,
		totalRecords,
	};
}

/**
 * Inferir enums a partir de amostra de dados.
 * Analisa valores distintos e identifica campos com baixa cardinalidade.
 *
 * @param records - Registros da amostra
 * @param fieldNames - Nomes dos campos a analisar
 * @param config - Configuração de inferência
 * @returns Mapa de campos que são candidatos a enum
 */
export function inferEnumsFromSample(
	records: Array<Record<string, unknown>>,
	fieldNames: string[],
	inferenceConfig?: Partial<EnumInferenceConfig>,
): InferredEnumsMap {
	const threshold = inferenceConfig?.cardinalityThreshold ?? 8;
	const minRepetitionRatio = inferenceConfig?.minRepetitionRatio;
	const inferredEnums: InferredEnumsMap = {};

	for (const fieldName of fieldNames) {
		const distinctValues = extractDistinctValues(records, fieldName);

		if (distinctValues.length === 0) {
			continue;
		}

		if (
			isEnumCandidate(
				distinctValues,
				records.length,
				threshold,
				minRepetitionRatio,
			)
		) {
			const enumInfo = processEnumValues(
				distinctValues,
				fieldName,
				records.length,
			);
			if (enumInfo) {
				inferredEnums[fieldName] = enumInfo;
			}
		}
	}

	return inferredEnums;
}

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
 * @param existingEnums - Enums existentes do uiSchema
 * @param inferredEnums - Enums inferidos da amostra
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
		};
	}

	return result;
}

export function mergeAdapterWithSample(
	adapterEnums: InferredEnumsMap,
	sampleEnums: InferredEnumsMap,
): InferredEnumsMap {
	const merged: InferredEnumsMap = { ...sampleEnums };

	for (const [fieldName, adapterEnum] of Object.entries(adapterEnums)) {
		merged[fieldName] = adapterEnum;
	}

	return merged;
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

export function applyEnumCorrections(
	collectionTypes: Record<
		string,
		{ enums: Map<string, Array<{ value: string | number; label: string }>> }
	>,
	enumCorrection: EnumCorrectionRule[] | undefined,
): void {
	if (!enumCorrection) {
		return;
	}

	const byCollection = new Map<string, EnumCorrectionRule[]>();
	for (const rule of enumCorrection) {
		const existing = byCollection.get(rule.collection);
		if (existing) {
			existing.push(rule);
		} else {
			byCollection.set(rule.collection, [rule]);
		}
	}

	for (const [collectionName, collection] of Object.entries(collectionTypes)) {
		const rules = byCollection.get(collectionName);
		if (!rules) {
			continue;
		}

		for (const rule of rules) {
			const enums = collection.enums;
			const options = enums.get(rule.field);

			if (options) {
				for (const option of options) {
					const label = rule.labels[String(option.value)];
					if (label !== undefined) {
						option.label = label;
					}
				}
			} else {
				if (!rule.values || rule.values.length === 0) {
					continue;
				}
				enums.set(
					rule.field,
					rule.values.map((v: string) => ({
						value: v,
						label: rule.labels[v] ?? v,
					})),
				);
			}
		}
	}
}
