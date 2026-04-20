import { config } from "@scripts/generate-types/config";
import type {
	EnumCorrectionRule,
	EnumInferenceConfig as ScriptEnumInferenceConfig,
} from "../@types/script";

export type EnumOrigin = "api" | "adapter" | "inferencia";

export interface InferredEnumInfo {
	values: string[];
	labels: Record<string, string>;
	cardinality: number;
	totalRecords: number;
	origin: EnumOrigin;
}

export type InferredEnumsMap = Record<string, InferredEnumInfo>;

export interface RejectedField {
	fieldName: string;
	uniqueValues: number;
	totalRecords: number;
	reason: string;
	suggestion?: string;
}

export type RejectedFieldsMap = Record<string, RejectedField>;

export interface EnumInferenceConfig {
	cardinalityThreshold: number;
	sampleSize: number;
	minRepetitionRatio?: number;
	fieldNameBlacklist: RegExp[];
	valueBlacklist: RegExp[];
	maxNumericVariation: number;
	minNumericValue: number;
	fieldNamePatterns: RegExp[];
	patternThreshold: number;
}

function buildEnumInferenceConfig(
	override?: ScriptEnumInferenceConfig,
): EnumInferenceConfig {
	const base = config.enumInference ?? {};
	const cfg = override ?? base;

	return {
		cardinalityThreshold: cfg.cardinalityThreshold ?? 5,
		sampleSize: cfg.sampleSize ?? 5000,
		minRepetitionRatio: cfg.minRepetitionRatio ?? 0.8,
		fieldNameBlacklist: (cfg.fieldNameBlacklist ?? []).map(
			(p) => new RegExp(p),
		),
		valueBlacklist: (cfg.valueBlacklist ?? []).map((p) => new RegExp(p)),
		maxNumericVariation: cfg.maxNumericVariation ?? 200,
		minNumericValue: cfg.minNumericValue ?? 50,
		fieldNamePatterns: (cfg.fieldNamePatterns ?? []).map((p) => new RegExp(p)),
		patternThreshold: cfg.patternThreshold ?? 500,
	};
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
 * Remove apenas acentos de uma string, mantendo espaços e outros caracteres.
 * Usado para gerar nomes de enums válidos em TypeScript.
 */
export function removeAccents(str: string): string {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

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
	config: EnumInferenceConfig,
	fieldName?: string,
): boolean {
	if (distinctValues.length >= config.cardinalityThreshold) {
		return false;
	}

	if (totalRecords === 0) {
		return false;
	}

	if (
		fieldName &&
		config.fieldNameBlacklist.some((pattern) => pattern.test(fieldName))
	) {
		return false;
	}

	if (
		config.valueBlacklist.some((v) => distinctValues.some((val) => v.test(val)))
	) {
		return false;
	}

	const cardinalityRatio = distinctValues.length / totalRecords;
	if (cardinalityRatio > 0.5 && distinctValues.length > 5) {
		return false;
	}

	if (
		config.minRepetitionRatio !== undefined &&
		config.minRepetitionRatio > 0
	) {
		const uniqueRatio = distinctValues.length / totalRecords;
		const repetitionRatio = 1 - uniqueRatio;
		if (repetitionRatio < config.minRepetitionRatio) {
			return false;
		}
	}

	if (distinctValues.length === 1) {
		const singleValue = distinctValues[0];
		const numericValue = Number(singleValue);
		if (!Number.isNaN(numericValue) && numericValue === 0) {
			return false;
		}
	}

	const datePattern = /^\d{4}(-\d{2})?(-\d{2})?$|^\d{8}$/;
	if (distinctValues.every((v) => datePattern.test(v))) {
		return false;
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
			return false;
		}

		if (minVal > effectiveMinValue) {
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
	_totalRecords: number,
): InferredEnumInfo | null {
	const labels: Record<string, string> = {};

	for (const value of distinctValues) {
		labels[value] = inferLabel(value, fieldName);
	}

	return {
		values: distinctValues,
		labels,
		cardinality: distinctValues.length,
		totalRecords: _totalRecords,
		origin: "inferencia",
	};
}

/**
 * Gera nome de membro de enum em PascalCase sem acentos.
 * Ex: "União Estável" → "UniaoEstavel", "Viúvo" → "Viuvo"
 */
export function generateEnumMemberName(
	value: string,
	baseName?: string,
): string {
	const cleaned = removeAccents(value);
	const parts = cleaned
		.split(/[^a-zA-Z0-9]+/)
		.filter((part) => part.length > 0);

	if (parts.length === 0) {
		return baseName ? `Value${baseName}` : "Unknown";
	}

	const result = parts
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");

	if (/^\d/.test(result)) {
		return `Value${result}`;
	}

	return result;
}

function getRejectionReason(
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
		return {
			reason: "Valores na blacklist (CPF, CNPJ, email, etc)",
		};
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

/**
 * Inferir enums a partir de amostra de dados.
 * Analisa valores distintos e identifica campos com baixa cardinalidade.
 * Retorna enums inferidos e campos rejeitados com motivos.
 */
export function inferEnumsFromSample(
	records: Array<Record<string, unknown>>,
	fieldNames: string[],
	inferenceConfig?: ScriptEnumInferenceConfig,
): { enums: InferredEnumsMap; rejected: RejectedFieldsMap } {
	const config = buildEnumInferenceConfig(inferenceConfig);
	const inferredEnums: InferredEnumsMap = {};
	const rejectedFields: RejectedFieldsMap = {};

	for (const fieldName of fieldNames) {
		const distinctValues = extractDistinctValues(records, fieldName);

		if (distinctValues.length === 0) {
			continue;
		}

		if (isEnumCandidate(distinctValues, records.length, config, fieldName)) {
			const enumInfo = processEnumValues(
				distinctValues,
				fieldName,
				records.length,
			);
			if (enumInfo) {
				inferredEnums[fieldName] = enumInfo;
			}
		} else {
			const rejection = getRejectionReason(
				distinctValues,
				records.length,
				config,
				fieldName,
			);
			if (rejection) {
				rejectedFields[fieldName] = {
					fieldName,
					uniqueValues: distinctValues.length,
					totalRecords: records.length,
					...rejection,
				};
			}
		}
	}

	return { enums: inferredEnums, rejected: rejectedFields };
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
			origin: "adapter",
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
