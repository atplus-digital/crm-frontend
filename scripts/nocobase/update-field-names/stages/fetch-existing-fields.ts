import { fetchJsonWithAuth } from "@shared/http/http-client";
import type { TaskRunner } from "@shared/types";
import type { PipelineContext } from "../@types/script";
import { fieldNameConfig } from "../config.js";

/**
 * Stage 1.5 — Fetch existing field uiSchema from NocoBase (1 request per datasource).
 *
 * Uses `fetchJsonWithAuth` from `@shared/http` to query
 * `dataSources/{key}/collections:list?paginate=false` for each datasource
 * in the config, then builds a lookup map of `${ds}.${collection}.${field} → uiSchema`.
 */
export async function fetchExistingFields(
	ctx: PipelineContext,
	task: TaskRunner,
): Promise<void> {
	const { credentials } = ctx;
	const lookup = ctx.fieldLookup;

	// Collect unique datasource keys from config
	const datasourceKeys = Object.keys(fieldNameConfig);

	for (const datasourceKey of datasourceKeys) {
		const collectionNames = Object.keys(
			(
				fieldNameConfig as Record<
					string,
					Record<string, Record<string, string>>
				>
			)[datasourceKey],
		);

		task.output = `Buscando collections de ${datasourceKey}...`;

		const response = await fetchJsonWithAuth<{
			data: Array<{
				name: string;
				fields: Array<{
					name: string;
					uiSchema?: Record<string, unknown>;
				}>;
			}>;
		}>(`dataSources/${datasourceKey}/collections:list?paginate=false`, {
			baseUrl: credentials.baseUrl,
			token: credentials.token,
			timeoutMs: credentials.timeoutMs,
		});

		const collections = Array.isArray(response)
			? response
			: (response.data ?? []);

		// Filter in-memory: only collections present in config
		const targetSet = new Set(collectionNames);
		const matched = collections.filter((c) => targetSet.has(c.name));

		let fieldCount = 0;
		for (const collection of matched) {
			for (const field of collection.fields ?? []) {
				const key = `${datasourceKey}.${collection.name}.${field.name}`;
				lookup.set(key, field.uiSchema);
				fieldCount++;
			}
		}

		task.output = `${datasourceKey}: ${matched.length}/${collections.length} collections, ${fieldCount} fields carregados`;
	}
}
