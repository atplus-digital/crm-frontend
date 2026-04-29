import "./config";
import { logger } from "@scripts/shared/utils/logger";
import { config } from "./config";
import { CustomRequestsApiClient } from "./src/api/client";
import { transformAllEntries } from "./src/transformer/entry-transformer";
import { parseConfig } from "./src/utils/config";
import { mergeRegistries } from "./src/utils/merge-registries";
import { applyWorkspaceLockIfNeeded } from "./src/utils/workspace-locker";
import { writeGeneratedRegistry } from "./src/writer/registry-writer";
import { writeAllSplitFiles } from "./src/writer/split-writer";

export { config } from "./config";

async function main(): Promise<void> {
	try {
		parseConfig();
	} catch (error) {
		logger.error(
			`Config inválida: ${error instanceof Error ? error.message : String(error)}`,
		);
		process.exit(1);
	}

	applyWorkspaceLockIfNeeded();

	logger.info("Iniciando geração de custom requests...");
	const client = new CustomRequestsApiClient(config);
	const entries = await client.fetchAllCustomRequests();
	logger.info(`${entries.length} entradas encontradas na API`);

	const transformed = transformAllEntries(entries);
	logger.info(`${transformed.length} entradas válidas após transformação`);

	const mergedEntries = mergeRegistries(transformed, config.manualRequests);
	logger.info(
		`${mergedEntries.length} entradas após merge com ${config.manualRequests.length} manuais`,
	);

	if (mergedEntries.length === 0) {
		logger.warn("Nenhuma entrada válida para escrever. Pulando escrita.");
		return;
	}

	await writeGeneratedRegistry(
		mergedEntries,
		config.outputDir,
		config.splitRequests,
	);
	logger.info("Arquivo gerado com sucesso!");

	writeAllSplitFiles(mergedEntries, config.splitRequests, config.outputDir);
	logger.info("Split files processados com sucesso!");
}

main().catch((error) => {
	console.error("Erro fatal:", error);
	process.exit(1);
});
