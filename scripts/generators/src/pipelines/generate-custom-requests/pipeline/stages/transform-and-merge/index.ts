import type { GenerationStage } from "../../../@types/orchestration";
import { transformAllEntries } from "./entry-transformer";
import { mergeRegistries } from "./merge-registries";

export function transformAndMergeStage(): GenerationStage {
	return async (context) => {
		const { transformed, schemasNotFound } = transformAllEntries(
			context.entries,
			context.logger,
			context.schemaRegistry,
		);
		context.logger.info(
			`${transformed.length} entradas válidas após transformação`,
		);

		const mergedEntries = mergeRegistries(
			transformed,
			context.config.manualRequests,
		);
		context.logger.info(
			`${mergedEntries.length} entradas após merge com ${context.config.manualRequests.length} manuais`,
		);

		// Atualiza lista de schemas não encontrados
		const allSchemasNotFound = [
			...(context.schemasNotFound ?? []),
			...schemasNotFound,
		];

		return {
			...context,
			transformedEntries: transformed,
			mergedEntries,
			schemasNotFound: allSchemasNotFound,
		};
	};
}
