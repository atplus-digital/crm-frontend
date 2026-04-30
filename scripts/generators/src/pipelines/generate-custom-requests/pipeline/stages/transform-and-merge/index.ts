import type { GenerationStage } from "../../orchestration/types";
import { transformAllEntries } from "./entry-transformer";
import { mergeRegistries } from "./merge-registries";

export function transformAndMergeStage(): GenerationStage {
	return async (context) => {
		const transformedEntries = transformAllEntries(
			context.entries,
			context.logger,
		);
		context.logger.info(
			`${transformedEntries.length} entradas válidas após transformação`,
		);

		const mergedEntries = mergeRegistries(
			transformedEntries,
			context.config.manualRequests,
		);
		context.logger.info(
			`${mergedEntries.length} entradas após merge com ${context.config.manualRequests.length} manuais`,
		);

		return {
			...context,
			transformedEntries,
			mergedEntries,
		};
	};
}
