import { addJsonReport } from "@scripts/generators/src/lib/reports";
import type { GenerationStage } from "../../orchestration/types";
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

		const reports = addJsonReport(context.reports, {
			namespace: "custom-requests",
			key: "schemas-not-found",
			title: "Schemas de collection não encontrados",
			scope: {
				pipeline: "generate-custom-requests",
				stage: "transform-and-merge",
			},
			payload: {
				totalMissing: allSchemasNotFound.length,
				missingSchemas: allSchemasNotFound.map((item) => ({
					collectionName: item.collectionName,
					dataSourceKey: item.dataSourceKey,
				})),
			},
		});

		return {
			...context,
			transformedEntries: transformed,
			mergedEntries,
			reports,
			schemasNotFound: allSchemasNotFound,
		};
	};
}
