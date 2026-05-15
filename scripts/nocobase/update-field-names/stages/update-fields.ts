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

	const subTasks = ctx.updates.map((request) => ({
		title: `${request.datasourceKey}.${request.collectionName} → ${request.fieldName}`,
		task: async (_subCtx: unknown, subTask: TaskRunner): Promise<void> => {
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
				subTask.title = `${request.datasourceKey}.${request.collectionName} → ${request.fieldName}: "${request.newLabel}" ✅`;
			} catch (err) {
				ctx.results.push({
					request,
					success: false,
					errorMessage: err instanceof Error ? err.message : String(err),
				});

				if (err instanceof DOMException && err.name === "AbortError") {
					throw new Error(
						`Timeout de ${credentials.timeoutMs}ms ao atualizar ${request.fieldName}`,
					);
				}
				throw err;
			} finally {
				clearTimeout(timeout);
			}
		},
	}));

	return task.newListr(subTasks, {
		concurrent: false,
		exitOnError: false,
	});
}
