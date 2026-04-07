import type {
	DryRunDiffResult,
	GenerateTypesResult,
	PersistResult,
} from "../@types/script";

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

export function printResult(result: GenerateTypesResult) {
	if (result.mode === "dry-run") {
		printDryRunResult(result);
		return;
	}

	printPersistResult(result);
}
