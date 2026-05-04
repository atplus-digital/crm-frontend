import { existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import type { Logger } from "@scripts/generators/src/lib/logger";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";

interface CleanupLegacySplitFilesOptions {
	collectionDir: string;
	entry: GeneratedRegistryEntry;
	filePath: string;
	outputDir: string;
	splitFileName: string;
	logger: Logger;
}

function removeLegacyFile(
	legacyPath: string,
	message: string,
	logger: Logger,
	currentFilePath: string,
): void {
	if (!existsSync(legacyPath) || legacyPath === currentFilePath) {
		return;
	}

	unlinkSync(legacyPath);
	logger.debug(message);
}

export function cleanupLegacySplitFiles(
	options: CleanupLegacySplitFilesOptions,
): void {
	const { collectionDir, entry, filePath, outputDir, splitFileName, logger } =
		options;

	const legacyKeyFilePath = join(outputDir, `${entry.key}.ts`);
	if (splitFileName !== entry.key) {
		removeLegacyFile(
			legacyKeyFilePath,
			`Split file legado removido: ${entry.key}.ts`,
			logger,
			filePath,
		);
	}

	removeLegacyFile(
		join(outputDir, `${splitFileName}.ts`),
		`Split file legado removido: ${splitFileName}.ts`,
		logger,
		filePath,
	);

	removeLegacyFile(
		join(outputDir, collectionDir, `${splitFileName}.ts`),
		`Split file legado removido (sem dataSourceKey): ${collectionDir}/${splitFileName}.ts`,
		logger,
		filePath,
	);
}
