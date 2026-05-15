#!/usr/bin/env node
/**
 * Script para atualizar uiSchema.title dos campos via API do NocoBase.
 *
 * Uso:
 *   pnpm update-field-names
 *
 * Configuração: edite config.ts com os campos a atualizar.
 */

import { runUpdateFieldNamesPipeline } from "./pipeline.js";

async function main(): Promise<void> {
	await runUpdateFieldNamesPipeline();
}

// Self-executing entrypoint
if (process.argv[1]?.endsWith("update-field-names.ts")) {
	void main().catch((error: unknown) => {
		const message = error instanceof Error ? error.message : String(error);
		console.error(message);
		process.exitCode = 1;
	});
}
