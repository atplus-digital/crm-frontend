#!/usr/bin/env node
/**
 * Script para atualizar uiSchema.title dos campos via API do NocoBase.
 *
 * Uso:
 *   pnpm tsx scripts/nocobase/update-field-names/index.ts
 *
 * Configuração: edite config.ts com os campos a atualizar.
 */

import { runUpdateFieldNamesPipeline } from "./src/pipeline.js";

async function main(): Promise<void> {
	await runUpdateFieldNamesPipeline();
}

// Self-executing entrypoint
if (process.argv[1]?.endsWith("update-field-names/index.ts")) {
	void main().catch((error: unknown) => {
		const message = error instanceof Error ? error.message : String(error);
		console.error(message);
		process.exitCode = 1;
	});
}
