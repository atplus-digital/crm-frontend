import "./config";
import { createAtomicWriteSession } from "@scripts/shared/lib/atomic-writer";
import { logger } from "@scripts/shared/lib/logger";
import { config } from "./config";
import { CustomRequestsApiClient } from "./src/api/client";
import {
	collectAnalysisReport,
	transformAllEntries,
} from "./src/transformer/entry-transformer";
import { parseConfig } from "./src/utils/config";
import { mergeRegistries } from "./src/utils/merge-registries";
import { applyWorkspaceLockIfNeeded } from "./src/utils/workspace-locker";
import { writeAnalysisReport } from "./src/writer/analysis-writer";
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
	if (config.generateAnalysisReport) {
		const analysisReport = collectAnalysisReport(entries);
		writeAnalysisReport(analysisReport);
	}

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

	const atomicSession = createAtomicWriteSession({
		outputDir: config.outputDir,
		label: "generate-custom-requests",
	});

	atomicSession.backup();

	await writeGeneratedRegistry(
		mergedEntries,
		config.outputDir,
		config.requests,
	);
	logger.info("Arquivo gerado com sucesso!");

	writeAllSplitFiles(mergedEntries, config.requests, config.outputDir);
	logger.info("Split files processados com sucesso!");

	const validated = await atomicSession.validateAndFinalize();
	if (!validated) {
		logger.error(
			"Validação falhou — arquivos originais restaurados. Corrija os erros e tente novamente.",
		);
		process.exit(1);
	}
}

main().catch((error) => {
	console.error("Erro fatal:", error);
	process.exit(1);
});
