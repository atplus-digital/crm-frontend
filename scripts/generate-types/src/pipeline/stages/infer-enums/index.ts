import { logger } from "../../../utils/logger";
import type { BuildTypesContext, PipelineStage } from "../../core/types";
import { type InferredEnumsMap, mergeEnums } from "./enum-inference";

export const inferEnums: PipelineStage<BuildTypesContext> = async (ctx) => {
	const { client, collectionTypes, enumOrigins } = ctx;

	const updatedEnumOrigins = enumOrigins ?? new Map();

	for (const [collectionName, types] of Object.entries(collectionTypes)) {
		const existingEnums = new Map(types.enums);
		const originsForCollection =
			updatedEnumOrigins.get(collectionName) ??
			new Map<string, { origin: "api" | "adapter" | "inferencia" }>();

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
				logger.debug(`[${collectionName}] Enum inference failed — skipping`);
			}
		}
	}

	return { ...ctx, collectionTypes, enumOrigins: updatedEnumOrigins };
};
