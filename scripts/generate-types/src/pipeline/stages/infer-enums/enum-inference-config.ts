import { config } from "@scripts/generate-types/config";
import type { EnumInferenceConfig as ScriptEnumInferenceConfig } from "../../../@types/script";

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

export function buildEnumInferenceConfig(
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
