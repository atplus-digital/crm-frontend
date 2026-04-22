import { applyEnumCorrections as applyCorrections } from "../../generation/enum-inference";
import type { ApplyEnumCorrectionsContext, PipelineStage } from "../types";

/**
 * Pipeline stage: apply custom enum corrections to collection types.
 *
 * Extracted from generate-types.ts line 251.
 *
 * Applies label overrides and value additions defined in the datasource config.
 * Corrections can:
 * - Override existing enum labels via `labels` map
 * - Add new enum fields that don't exist in the schema via `values` array
 */
export const applyEnumCorrections: PipelineStage<
	ApplyEnumCorrectionsContext
> = async (ctx) => {
	const { collectionTypes, dataSource } = ctx;

	applyCorrections(collectionTypes, dataSource.enumCorrection ?? []);

	return { ...ctx, collectionTypes };
};
