import type { TaskRunner } from "@shared/types";
import type { Listr } from "listr2";
import type { PipelineContext, UiSchema } from "../@types/script";

/**
 * Stage 3 — Execute all field label updates via NocoBase API.
 *
 * Each update is a sub-task in Listr2, showing progress per field.
 * Merges existing uiSchema from lookup with the new title before POST,
 * preserving all other uiSchema properties (enum, x-component, etc.).
 * Returns undefined when there are no updates (skips sub-task creation).
 */
export function updateFields(
	ctx: PipelineContext,
	task: TaskRunner,
): Listr<PipelineContext> | undefined {
	if (ctx.updates.length === 0) {
		task.output = "Nenhum campo para atualizar.";
		return undefined;
	}

	const { credentials } = ctx;
	const updatesByDatasource = new Map<
		string,
		Map<string, PipelineContext["updates"]>
	>();

	for (const request of ctx.updates) {
		const collections =
			updatesByDatasource.get(request.datasourceKey) ?? new Map();
		const collectionUpdates = collections.get(request.collectionName) ?? [];
		collectionUpdates.push(request);
		collections.set(request.collectionName, collectionUpdates);
		updatesByDatasource.set(request.datasourceKey, collections);
	}

	const datasourceTasks = [...updatesByDatasource.entries()].map(
		([datasourceKey, collections]) => ({
			title: datasourceKey,
			task: (_subCtx: unknown, dsTask: TaskRunner) => {
				const collectionTasks = [...collections.entries()].map(
					([collectionName, requests]) => ({
						title: collectionName,
						task: (_collectionCtx: unknown, collectionTask: TaskRunner) => {
							const fieldTasks = requests.map((request) => ({
								title: request.fieldName,
								task: async (
									_fieldCtx: unknown,
									fieldTask: TaskRunner,
								): Promise<void> => {
									const endpoint = `${credentials.baseUrl}/dataSourcesCollections/${request.datasourceKey}.${request.collectionName}/fields:update`;

									const controller = new AbortController();
									const timeout = setTimeout(
										() => controller.abort(),
										credentials.timeoutMs,
									);

									try {
										const lookupKey = `${request.datasourceKey}.${request.collectionName}.${request.fieldName}`;
										const existingUiSchema = ctx.fieldLookup.get(lookupKey);

										const mergedUiSchema: UiSchema = {
											...(existingUiSchema ?? {}),
											title: request.newLabel,
										};

										const response = await fetch(
											`${endpoint}?filterByTk=${request.fieldName}`,
											{
												method: "POST",
												headers: {
													Authorization: `Bearer ${credentials.token}`,
													"Content-Type": "application/json",
												},
												body: JSON.stringify({
													uiSchema: mergedUiSchema,
												}),
												signal: controller.signal,
											},
										);

										if (!response.ok) {
											const errorBody = await response.text();
											ctx.results.push({
												request,
												success: false,
												statusCode: response.status,
												errorMessage: errorBody
													.replaceAll(/\s+/g, " ")
													.trim()
													.slice(0, 200),
											});
											throw new Error(
												`HTTP ${response.status}: ${errorBody.replaceAll(/\s+/g, " ").trim().slice(0, 150)}`,
											);
										}

										ctx.results.push({ request, success: true });
										fieldTask.title = `${request.fieldName}: "${request.newLabel}"`;
									} catch (err) {
										// Check for abort before pushing — we want the "Timeout" message, not "aborted"
										if (
											err instanceof DOMException &&
											err.name === "AbortError"
										) {
											ctx.results.push({
												request,
												success: false,
												errorMessage: `Timeout de ${credentials.timeoutMs}ms ao atualizar ${request.fieldName}`,
											});
											throw new Error(
												`Timeout de ${credentials.timeoutMs}ms ao atualizar ${request.fieldName}`,
											);
										}

										// Skip duplicate push for HTTP errors already recorded in !response.ok branch
										const alreadyRecorded = ctx.results.some(
											(r) =>
												r.request.datasourceKey === request.datasourceKey &&
												r.request.collectionName === request.collectionName &&
												r.request.fieldName === request.fieldName,
										);

										if (!alreadyRecorded) {
											ctx.results.push({
												request,
												success: false,
												errorMessage:
													err instanceof Error ? err.message : String(err),
											});
										}

										throw err;
									} finally {
										clearTimeout(timeout);
									}
								},
							}));

							return collectionTask.newListr(fieldTasks, {
								concurrent: false,
								exitOnError: false,
							});
						},
					}),
				);

				return dsTask.newListr(collectionTasks, {
					concurrent: false,
					exitOnError: false,
				});
			},
		}),
	);

	return task.newListr(datasourceTasks, {
		concurrent: false,
		exitOnError: false,
	});
}
