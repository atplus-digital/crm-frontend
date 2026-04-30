import "./config";
import {
	createGenerator,
	runGeneratorCli,
} from "@scripts/generators/run-generator";
import { createAtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import { logger } from "@scripts/generators/src/lib/logger";
import type { CustomRequestApiEntry } from "./@types/custom-request-api";
import type { GeneratedRegistryEntry } from "./@types/generated-registry";
import { CustomRequestsApiClient } from "./api/client";
import { config } from "./config";
import {
	collectAnalysisReport,
	transformAllEntries,
} from "./transformer/entry-transformer";
import { parseConfig } from "./utils/config";
import { mergeRegistries } from "./utils/merge-registries";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";
import { writeAnalysisReport } from "./writer/analysis-writer";
import { writeGeneratedRegistry } from "./writer/registry-writer";
import { writeAllSplitFiles } from "./writer/split-writer";

export { config } from "./config";

interface CustomRequestsGeneratorContext {
	entries: CustomRequestApiEntry[];
	transformedEntries: GeneratedRegistryEntry[];
	mergedEntries: GeneratedRegistryEntry[];
}

const initialContext: CustomRequestsGeneratorContext = {
	entries: [],
	transformedEntries: [],
	mergedEntries: [],
};

const generateCustomRequests = createGenerator<CustomRequestsGeneratorContext>(
	"generate-custom-requests",
	initialContext,
)
	.addStep("validate-config", () => {
		try {
			parseConfig();
		} catch (error) {
			logger.error(
				`Config inválida: ${error instanceof Error ? error.message : String(error)}`,
			);
			process.exit(1);
		}
	})
	.addStep("lock-workspace", () => {
		applyWorkspaceLockIfNeeded();
	})
	.addStep("fetch-entries", async (context) => {
		logger.info("Iniciando geração de custom requests...");
		const client = new CustomRequestsApiClient(config);
		context.entries = await client.fetchAllCustomRequests();
		logger.info(`${context.entries.length} entradas encontradas na API`);
	})
	.addStep("write-analysis-report", (context) => {
		if (!config.generateAnalysisReport) return;
		const analysisReport = collectAnalysisReport(context.entries);
		writeAnalysisReport(analysisReport);
	})
	.addStep("transform-and-merge", (context) => {
		context.transformedEntries = transformAllEntries(context.entries);
		logger.info(
			`${context.transformedEntries.length} entradas válidas após transformação`,
		);

		context.mergedEntries = mergeRegistries(
			context.transformedEntries,
			config.manualRequests,
		);
		logger.info(
			`${context.mergedEntries.length} entradas após merge com ${config.manualRequests.length} manuais`,
		);
	})
	.addStep("write-output", async (context) => {
		if (context.mergedEntries.length === 0) {
			logger.warn("Nenhuma entrada válida para escrever. Pulando escrita.");
			return;
		}

		const atomicSession = createAtomicWriteSession({
			outputDir: config.outputDir,
			label: "generate-custom-requests",
		});
		atomicSession.backup();

		await writeGeneratedRegistry(
			context.mergedEntries,
			config.outputDir,
			config.requests,
		);
		logger.info("Arquivo gerado com sucesso!");

		writeAllSplitFiles(
			context.mergedEntries,
			config.requests,
			config.outputDir,
		);
		logger.info("Split files processados com sucesso!");

		const validated = await atomicSession.validateAndFinalize();
		if (!validated) {
			logger.error(
				"Validação falhou — arquivos originais restaurados. Corrija os erros e tente novamente.",
			);
			process.exit(1);
		}
	});

void runGeneratorCli(generateCustomRequests);
