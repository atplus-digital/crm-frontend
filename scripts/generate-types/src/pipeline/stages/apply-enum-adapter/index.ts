import { logger } from "../../../utils/logger";
import type { BuildTypesContext, PipelineStage } from "../../core/types";
import {
	adapterEnumsToInferredEnums,
	mergeEnums,
} from "../../stages/infer-enums/enum-inference";

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
