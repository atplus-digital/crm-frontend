import { resolveNocoBaseEnv } from "@generators/lib/utils/env";
import type { PipelineContext } from "../@types/script";
import { fieldNameConfig } from "../config.js";

/**
 * Stage 1 — Resolve credentials and build flat list of field updates from config.
 */
export async function resolveConfig(
	ctx: PipelineContext,
	task: import("@generators/lib/types").TaskRunner,
): Promise<void> {
	const env = resolveNocoBaseEnv();
	ctx.credentials = {
		baseUrl: env.baseUrl,
		token: env.token,
		timeoutMs: env.timeoutMs,
	};

	// Flatten nested config into a flat list of update requests
	const updates: PipelineContext["updates"] = [];

	for (const [datasourceKey, collections] of Object.entries(fieldNameConfig)) {
		for (const [collectionName, fields] of Object.entries(
			collections as Record<string, Record<string, string>>,
		)) {
			for (const [fieldName, newLabel] of Object.entries(fields)) {
				updates.push({
					datasourceKey,
					collectionName,
					fieldName,
					newLabel,
				});
			}
		}
	}

	ctx.updates = updates;

	if (updates.length === 0) {
		task.output = "Nenhum campo configurado para atualização.";
		return;
	}

	task.output = `${updates.length} campo(s) encontrado(s) na configuração.`;
}
