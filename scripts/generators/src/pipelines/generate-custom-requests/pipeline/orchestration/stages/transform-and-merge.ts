import { logger } from "@scripts/generators/src/lib/logger";
import { transformAllEntries } from "../../../transformer/entry-transformer";
import { mergeRegistries } from "../../../utils/merge-registries";
import type { GenerationStage } from "../types";

export function transformAndMergeStage(): GenerationStage {
	return async (context) => {
		const transformedEntries = transformAllEntries(context.entries);
		logger.info(
			`${transformedEntries.length} entradas válidas após transformação`,
		);

		const mergedEntries = mergeRegistries(
			transformedEntries,
			context.config.manualRequests,
		);
		logger.info(
			`${mergedEntries.length} entradas após merge com ${context.config.manualRequests.length} manuais`,
		);

		return {
			...context,
			transformedEntries,
			mergedEntries,
		};
	};
}
