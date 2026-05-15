import { fetchJsonWithAuth } from "@shared/http/http-client";
import type { TaskRunner } from "@shared/types";
import type { PipelineContext } from "../@types/script";

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
	if (ctx.updates.length === 0) {
		task.output = "Nenhuma collection precisa ser consultada.";
		return;
	}

	// Collect unique datasource -> collection names from resolved update list
	const targetsByDatasource = new Map<string, Set<string>>();
	for (const update of ctx.updates) {
		const collections =
			targetsByDatasource.get(update.datasourceKey) ?? new Set();
		collections.add(update.collectionName);
		targetsByDatasource.set(update.datasourceKey, collections);
	}

	for (const [datasourceKey, collectionSet] of targetsByDatasource) {
		const collectionNames = [...collectionSet];

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

	const pendingUpdates: PipelineContext["updates"] = [];
	let skippedAlreadyUpdated = 0;

	for (const update of ctx.updates) {
		const lookupKey = `${update.datasourceKey}.${update.collectionName}.${update.fieldName}`;
		const existingUiSchema = lookup.get(lookupKey);
		const currentTitle =
			typeof existingUiSchema?.title === "string"
				? existingUiSchema.title.trim()
				: undefined;
		const nextTitle = update.newLabel.trim();

		if (currentTitle === nextTitle) {
			skippedAlreadyUpdated++;
			continue;
		}

		pendingUpdates.push(update);
	}

	ctx.updates = pendingUpdates;
	task.output = `Filtragem concluída: ${skippedAlreadyUpdated} campo(s) já atualizado(s), ${ctx.updates.length} pendente(s).`;
}
