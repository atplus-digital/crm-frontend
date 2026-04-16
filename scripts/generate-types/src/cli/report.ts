import { config } from "@scripts/generate-types/config";
import type {
	GenerateTypesResult,
	MultiFileResult,
	SingleFileResult,
} from "@scripts/generate-types/src/@types/script";

function printSingleFileResult(result: SingleFileResult) {
	if (!result.changed) {
		console.log(`ℹ️ Nenhuma alteração em: ${result.outputPath}`);
		return;
	}

	console.log(`✅ Arquivo gerado: ${result.outputPath}`);
}

function printMultiFileResult(result: MultiFileResult) {
	const changedFiles = result.files.filter((f) => f.changed);
	const unchangedCount = result.totalFiles - result.totalChanged;

	console.log(
		`✅ Arquivos gerados: ${result.totalFiles} (${result.totalChanged} alterados, ${unchangedCount} inalterados)`,
	);

	if (config.verbose && changedFiles.length > 0) {
		console.log("\nAlterados:");
		for (const file of changedFiles) {
			console.log(`  - ${file.outputPath}`);
		}
	}
}

export function printResult(result: GenerateTypesResult) {
	if (result.resultType === "multi") {
		printMultiFileResult(result);
	} else {
		printSingleFileResult(result);
	}
}
