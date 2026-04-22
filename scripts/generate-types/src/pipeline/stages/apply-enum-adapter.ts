import {
	adapterEnumsToInferredEnums,
	mergeEnums,
} from "../../generation/enum-inference";
import { logger } from "../../utils/logger";
import type { BuildTypesContext, PipelineStage } from "../types";

/**
 * Pipeline stage: apply enum adapter to fetch enums from pre-configured adapter.
 *
 * Extracted from generate-types.ts lines 188-243.
 *
 * If `ctx.dataSource.preEnumAdapter` exists:
 * - For each collection in `ctx.collectionTypes`:
 *   - Try `adapter.fetchEnums(collectionName)`
 *   - If success: convert via `adapterEnumsToInferredEnums()`
 *   - Merge with existing API enums via `mergeEnums()`
 *   - Track origin as "adapter" in `ctx.enumOrigins`
 * - If adapter fails per-collection: log debug, skip (fallback to inference later)
 */
export const applyEnumAdapter: PipelineStage<BuildTypesContext> = async (
	ctx,
) => {
	const { collectionTypes, dataSource } = ctx;
	const enumOrigins = new Map<
		string,
		Map<string, { origin: "api" | "adapter" | "inferencia" }>
	>();

	for (const [collectionName, types] of Object.entries(collectionTypes)) {
		const existingEnums = new Map(types.enums);
		const originsForCollection = new Map<
			string,
			{ origin: "api" | "adapter" | "inferencia" }
		>();

		let adapterEnums: Record<
			string,
			{ values: string[]; labels?: Record<string, string> }
		> = {};
		let usedAdapter = false;

		if (dataSource.preEnumAdapter) {
			try {
				adapterEnums =
					await dataSource.preEnumAdapter.fetchEnums(collectionName);
				usedAdapter = true;
			} catch {
				logger.debug(
					`[${collectionName}] Adapter '${dataSource.preEnumAdapter.name}' falhou — usando sample-based`,
				);
			}
		}

		const hasAdapterEnum = usedAdapter && Object.keys(adapterEnums).length > 0;

		if (hasAdapterEnum) {
			const adapterInferred = adapterEnumsToInferredEnums(adapterEnums);

			// Track origin of adapter enums
			for (const fieldName of Object.keys(adapterInferred)) {
				originsForCollection.set(fieldName, { origin: "adapter" });
			}

			const mergedEnums = mergeEnums(existingEnums, adapterInferred);
			types.enums = mergedEnums;
		}

		if (originsForCollection.size > 0) {
			enumOrigins.set(collectionName, originsForCollection);
		}
	}

	return { ...ctx, collectionTypes, enumOrigins };
};
