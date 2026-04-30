import {
	type AtomicWriteSession,
	createAtomicWriteSession,
} from "@scripts/generators/src/lib/atomic-writer";
import type { Logger } from "@scripts/generators/src/lib/logger";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import type { ScriptConfig } from "../../../@types/script-config";
import type { GenerationStage } from "../../orchestration/types";
import { writeGeneratedRegistry } from "./registry-writer";
import { writeAllSplitFiles } from "./split-writer";

type WriteOutputContext = {
	config: Pick<ScriptConfig, "outputDir" | "requests">;
	logger: Logger;
	mergedEntries: GeneratedRegistryEntry[];
};

export function hasEntriesToWrite(context: WriteOutputContext): boolean {
	return context.mergedEntries.length > 0;
}

export function createWriteOutputSession(
	context: WriteOutputContext,
): AtomicWriteSession {
	const session = createAtomicWriteSession({
		outputDir: context.config.outputDir,
		label: "generate-custom-requests",
	});
	session.backup();
	return session;
}

export async function writeGeneratedRegistryOutput(
	context: WriteOutputContext,
): Promise<void> {
	await writeGeneratedRegistry(
		context.mergedEntries,
		context.config.outputDir,
		context.config.requests,
		context.logger,
	);
	context.logger.info("Arquivo gerado com sucesso!");
}

export function writeSplitFilesOutput(context: WriteOutputContext): void {
	writeAllSplitFiles(
		context.mergedEntries,
		context.config.requests,
		context.config.outputDir,
		context.logger,
	);
	context.logger.info("Split files processados com sucesso!");
}

export async function finalizeWriteOutput(
	session: AtomicWriteSession,
): Promise<void> {
	const validated = await session.validateAndFinalize();
	if (!validated) {
		throw new Error(
			"Validação falhou — arquivos originais restaurados. Corrija os erros e tente novamente.",
		);
	}
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

	const session = createWriteOutputSession(context);

	try {
		await writeGeneratedRegistryOutput(context);
		writeSplitFilesOutput(context);
		await finalizeWriteOutput(session);
	} catch (error) {
		session.restore();
		throw error;
	} finally {
		session.cleanup();
	}
}

export function writeOutputStage(): GenerationStage {
	return async (context) => {
		await executeWriteOutput(context);
		return context;
	};
}
