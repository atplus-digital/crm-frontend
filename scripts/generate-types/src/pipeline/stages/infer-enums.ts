import {
	type InferredEnumsMap,
	mergeEnums,
} from "../../generation/enum-inference";
import { logger } from "../../utils/logger";
import type { BuildTypesContext, PipelineStage } from "../types";

/**
 * Pipeline stage: infer enums from data sampling when no schema or adapter enums available.
 *
 * Extracted from generate-types.ts lines 208-232.
 *
 * For each collection where `!types.schemaAvailable` AND no adapter enums:
 * - Use `client.inferEnumsFromData()` with config thresholds
 * - Merge inferred enums with existing API enums via `mergeEnums()`
 * - Track origin as "inferencia"
 * No-op on inference errors (try/catch that logs but doesn't throw)
 */
export const inferEnums: PipelineStage<BuildTypesContext> = async (ctx) => {
	const { client, collectionTypes, enumOrigins } = ctx;

	const updatedEnumOrigins = enumOrigins ?? new Map();

	for (const [collectionName, types] of Object.entries(collectionTypes)) {
		const existingEnums = new Map(types.enums);
		const originsForCollection =
			updatedEnumOrigins.get(collectionName) ??
			new Map<string, { origin: "api" | "adapter" | "inferencia" }>();

		// Check if we already have adapter enums for this collection
		const hasAdapterEnum = originsForCollection.size > 0;

		if (!types.schemaAvailable && !hasAdapterEnum) {
			try {
				const scalarFieldNames = Array.from(types.scalars.keys()).filter(
					(name) => !types.relations.has(name),
				);

				if (scalarFieldNames.length === 0) {
					continue;
				}

				const { enums: inferredEnums } = await client.inferEnumsFromData(
					collectionName,
					scalarFieldNames,
				);

				// Track origin of inferred enums
				for (const fieldName of Object.keys(inferredEnums)) {
					originsForCollection.set(fieldName, { origin: "inferencia" });
				}

				if (originsForCollection.size > 0) {
					updatedEnumOrigins.set(collectionName, originsForCollection);
				}

				const mergedEnums = mergeEnums(
					existingEnums,
					inferredEnums as InferredEnumsMap,
				);
				types.enums = mergedEnums;
			} catch {
				// No-op: inference errors are silently ignored
				logger.debug(`[${collectionName}] Enum inference failed — skipping`);
			}
		}
	}

	return { ...ctx, collectionTypes, enumOrigins: updatedEnumOrigins };
};
