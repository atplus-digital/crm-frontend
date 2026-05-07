import { writeGeneratedRegistry } from "./registry-writer";
import { writeAllSplitFiles } from "./split-writer";
import type { WriteOutputContext } from "./types";

export function hasEntriesToWrite(context: WriteOutputContext): boolean {
	return context.mergedEntries.length > 0;
}

export async function writeGeneratedRegistryOutput(
	context: WriteOutputContext,
): Promise<void> {
	await writeGeneratedRegistry(
		context.mergedEntries,
		context.config.outputDir,
		context.config.requests,
		context.logger,
		context.schemaMappings,
	);
	context.logger.info("Arquivo gerado com sucesso!");
}

export function writeSplitFilesOutput(context: WriteOutputContext): void {
	writeAllSplitFiles(
		context.mergedEntries,
		context.config.requests,
		context.config.outputDir,
		context.schemaMappings,
		context.logger,
	);
	context.logger.info("Split files processados com sucesso!");
}

export async function executeWriteOutput(
	context: WriteOutputContext,
): Promise<void> {
	if (!hasEntriesToWrite(context)) {
		context.logger.warn(
			"Nenhuma entrada válida para escrever. Pulando escrita.",
		);
		return;
	}

	await writeGeneratedRegistryOutput(context);
	writeSplitFilesOutput(context);
}
