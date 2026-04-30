import type {
	RejectedFieldsMap,
	EnumInferenceConfig as ScriptEnumInferenceConfig,
} from "../../../@types/script";
import type { EnumOrigin } from "../../datasource-pipeline/types";
import type { EnumInferenceConfig } from "./enum-inference-config";
import { buildEnumInferenceConfig } from "./enum-inference-config";
import { inferLabel } from "./enum-inference-heuristics";
import { getRejectionReason } from "./enum-inference-rejection";

export interface InferredEnumInfo {
	values: string[];
	labels: Record<string, string>;
	cardinality: number;
	totalRecords: number;
	origin: EnumOrigin;
}

export type InferredEnumsMap = Record<string, InferredEnumInfo>;

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

function isEnumCandidate(
	distinctValues: string[],
	totalRecords: number,
	config: EnumInferenceConfig,
	fieldName?: string,
): boolean {
	if (distinctValues.length >= config.cardinalityThreshold) return false;
	if (totalRecords === 0) return false;

	if (fieldName && config.fieldNameBlacklist.some((p) => p.test(fieldName))) {
		return false;
	}
	if (
		config.valueBlacklist.some((v) => distinctValues.some((val) => v.test(val)))
	) {
		return false;
	}

	const cardinalityRatio = distinctValues.length / totalRecords;
	if (cardinalityRatio > 0.5 && distinctValues.length > 5) return false;

	if (
		config.minRepetitionRatio !== undefined &&
		config.minRepetitionRatio > 0
	) {
		const repetitionRatio = 1 - distinctValues.length / totalRecords;
		if (repetitionRatio < config.minRepetitionRatio) return false;
	}

	if (distinctValues.length === 1) {
		const numericValue = Number(distinctValues[0]);
		if (!Number.isNaN(numericValue) && numericValue === 0) return false;
	}

	const datePattern = /^\d{4}(-\d{2})?(-\d{2})?$|^\d{8}$/;
	if (distinctValues.every((v) => datePattern.test(v))) return false;

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

		if (variation > effectiveThreshold) return false;
		if (minVal > effectiveMinValue) return false;
	}

	return true;
}

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
