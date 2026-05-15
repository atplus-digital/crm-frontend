/**
 * Pipeline para atualizar uiSchema.title dos campos via API do NocoBase.
 *
 * Usa Listr2 com stages organizadas, seguindo o padrão dos scripts geradores.
 * Não usa runStandardPipeline (que é para pipelines com atomic write de arquivos).
 */

import type { TaskRunner } from "@shared/types";
import { Listr } from "listr2";
import type { PipelineContext } from "./@types/script";
import { fetchExistingFields } from "./stages/fetch-existing-fields";
import { resolveConfig } from "./stages/resolve-config";
import { updateFields } from "./stages/update-fields";

/**
 * Runs the update-field-names pipeline with Listr2.
 *
 * Stages:
 *   1. Resolve config — loads NocoBase credentials and flattens fieldNameConfig
 *   2. Fetch existing fields — 1 GET/datasource → lookup map of uiSchema per field
 *   3. Update fields — sends POST requests for each field label (sub-tasks per field)
 *   4. Summary — prints results
 */
export async function runUpdateFieldNamesPipeline(): Promise<void> {
	const initialContext: PipelineContext = {
		credentials: { baseUrl: "", token: "", timeoutMs: 30_000 },
		updates: [],
		fieldLookup: new Map(),
		results: [],
	};

	const tasks = [
		{
			title: "Resolvendo configuração e credenciais",
			task: async (ctx: PipelineContext, task: TaskRunner) => {
				await resolveConfig(ctx, task);
			},
		},
		{
			title: "Buscando uiSchema existente dos campos",
			task: async (ctx: PipelineContext, task: TaskRunner) => {
				await fetchExistingFields(ctx, task);
			},
		},
		{
			title: "Atualizando labels dos campos",
			task: (ctx: PipelineContext, task: TaskRunner) => updateFields(ctx, task),
		},
		{
			title: "Resumo",
			task: (ctx: PipelineContext, task: TaskRunner) => {
				const succeeded = ctx.results.filter((r) => r.success).length;
				const failed = ctx.results.filter((r) => !r.success).length;
				const total = ctx.results.length;

				if (failed === 0) {
					task.title = `✅ Concluído: ${succeeded}/${total} campo(s) atualizado(s)`;
				} else {
					task.title = `⚠️ Concluído: ${succeeded} atualizado(s), ${failed} erro(s) de ${total} total`;
				}

				for (const result of ctx.results) {
					if (!result.success) {
						task.output = `  ❌ ${result.request.datasourceKey}.${result.request.collectionName} → ${result.request.fieldName}: ${result.errorMessage ?? `HTTP ${result.statusCode}`}`;
					}
				}
			},
		},
	];

	const rootListr = new Listr(tasks, {
		concurrent: false,
		renderer: process.env.VITE_LOG_LEVEL === "debug" ? "verbose" : "default",
		rendererOptions: {
			lazy: false,
			collapseSkips: false,
			collapseErrors: false,
		},
	});

	await rootListr.run(initialContext);

	// Exit with error if any update failed
	const failed = initialContext.results.filter((r) => !r.success).length;
	if (failed > 0) {
		process.exitCode = 1;
	}
}
