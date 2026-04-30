import { createAtomicWriteSession } from "@scripts/generators/src/lib/atomic-writer";
import { writeGeneratedRegistry } from "../../../writer/registry-writer";
import { writeAllSplitFiles } from "../../../writer/split-writer";
import type { GenerationStage } from "../types";

export function writeOutputStage(): GenerationStage {
	return async (context) => {
		if (context.mergedEntries.length === 0) {
			context.logger.warn(
				"Nenhuma entrada válida para escrever. Pulando escrita.",
			);
			return context;
		}

		const atomicSession = createAtomicWriteSession({
			outputDir: context.config.outputDir,
			label: "generate-custom-requests",
		});
		atomicSession.backup();

		await writeGeneratedRegistry(
			context.mergedEntries,
			context.config.outputDir,
			context.config.requests,
			context.logger,
		);
		context.logger.info("Arquivo gerado com sucesso!");

		writeAllSplitFiles(
			context.mergedEntries,
			context.config.requests,
			context.config.outputDir,
			context.logger,
		);
		context.logger.info("Split files processados com sucesso!");

		const validated = await atomicSession.validateAndFinalize();
		if (!validated) {
			throw new Error(
				"Validação falhou — arquivos originais restaurados. Corrija os erros e tente novamente.",
			);
		}

		return context;
	};
}
