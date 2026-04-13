import { config } from "@scripts/generate-types/config";
import type {
	DryRunDiffResult,
	GenerateTypesResult,
	MultiFileDryRunResult,
	MultiFilePersistResult,
	PersistResult,
} from "@scripts/generate-types/src/@types/script";

const DRY_RUN_PREVIEW_LIMIT = 120;

function printDryRunResult(result: DryRunDiffResult) {
	if (!result.changed) {
		console.log(
			`🧪 Dry-run concluído: nenhuma alteração em ${result.outputPath}.`,
		);
		return;
	}

	const diffLines = result.diff ? result.diff.split("\n") : [];

	console.log(
		`🧪 Dry-run concluído: diferenças detectadas em ${result.outputPath} (${diffLines.length} linhas).`,
	);
	if (!config.verbose) {
		return;
	}

	console.log(diffLines.slice(0, DRY_RUN_PREVIEW_LIMIT).join("\n"));

	if (diffLines.length > DRY_RUN_PREVIEW_LIMIT) {
		console.log(
			`... diff truncado (${diffLines.length - DRY_RUN_PREVIEW_LIMIT} linhas omitidas)`,
		);
	}
}

function printPersistResult(result: PersistResult) {
	if (!result.changed) {
		console.log(`ℹ️ Nenhuma alteração em: ${result.outputPath}`);
		return;
	}

	console.log(`✅ Arquivo gerado: ${result.outputPath}`);
}

function printMultiFilePersistResult(result: MultiFilePersistResult) {
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

function printMultiFileDryRunResult(result: MultiFileDryRunResult) {
	const changedFiles = result.files.filter((f) => f.changed);
	const unchangedCount = result.totalFiles - result.totalChanged;

	console.log(
		`🧪 Dry-run concluído: ${result.totalFiles} arquivos (${result.totalChanged} com alterações, ${unchangedCount} inalterados)`,
	);

	if (config.verbose && changedFiles.length > 0) {
		console.log("\nArquivos com alterações:");
		for (const file of changedFiles) {
			const diffLines = file.diff ? file.diff.split("\n") : [];
			console.log(`\n📄 ${file.outputPath} (${diffLines.length} linhas)`);

			// Mostra preview do diff
			const previewLines = diffLines.slice(0, DRY_RUN_PREVIEW_LIMIT);
			if (previewLines.length > 0) {
				console.log(previewLines.join("\n"));
			}

			if (diffLines.length > DRY_RUN_PREVIEW_LIMIT) {
				console.log(
					`... diff truncado (${diffLines.length - DRY_RUN_PREVIEW_LIMIT} linhas omitidas)`,
				);
			}
		}
	}
}

export function printResult(result: GenerateTypesResult) {
	if (result.mode === "dry-run") {
		if ("totalFiles" in result) {
			printMultiFileDryRunResult(result);
		} else {
			printDryRunResult(result);
		}
		return;
	}

	if ("totalFiles" in result) {
		printMultiFilePersistResult(result);
	} else {
		printPersistResult(result);
	}
}
