import type { Logger } from "@scripts/generators/src/lib/logging";
import { addJsonReport } from "@scripts/generators/src/lib/reports";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import type { RequestsMap } from "../../../@types/script-config";
import type { GenerationStage } from "../../orchestration/types";
import { transformAllEntries } from "./entry-transformer";
import { mergeRegistries } from "./merge-registries";

export function filterGeneratedEntriesByConfiguredRequests(
	entries: GeneratedRegistryEntry[],
	requests: RequestsMap,
	logger: Logger,
): GeneratedRegistryEntry[] {
	const configuredKeys = new Set(Object.keys(requests));

	if (configuredKeys.size === 0) {
		if (entries.length > 0) {
			logger.warn(
				`Nenhuma request configurada em requests.config.ts; ${entries.length} entradas da API serão ignoradas`,
			);
		}
		return [];
	}

	const filteredEntries = entries.filter((entry) =>
		configuredKeys.has(entry.key),
	);
	const ignoredCount = entries.length - filteredEntries.length;

	if (ignoredCount > 0) {
		logger.info(
			`${ignoredCount} entradas da API ignoradas por não estarem mapeadas em requests.config.ts`,
		);
	}

	return filteredEntries;
}

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

		const filteredGeneratedEntries = filterGeneratedEntriesByConfiguredRequests(
			transformed,
			context.config.requests,
			context.logger,
		);

		const mergedEntries = mergeRegistries(
			filteredGeneratedEntries,
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
			transformedEntries: filteredGeneratedEntries,
			mergedEntries,
			reports,
			schemasNotFound: allSchemasNotFound,
		};
	};
}
