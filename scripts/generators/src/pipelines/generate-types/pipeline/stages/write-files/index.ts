import * as path from "node:path";
import type { CollectionTypesMap } from "../../../@types/generation";
import type {
	GeneratedFileWrite,
	PipelineContext,
} from "../../datasource-pipeline/types";
import { writeGeneratedFile } from "../../post-pipeline/writer";

function createGenerationReport(
	dataSourceName: string,
	collectionTypes: CollectionTypesMap,
	configuredSplitCollections: string[],
): string {
	const unresolvedRelationsByCollection = Object.entries(collectionTypes)
		.map(([collectionName, types]) => {
			const unresolvedFields = Array.from(types.relations.entries())
				.filter(([, relation]) => relation.targetCollection.trim() === "")
				.map(([fieldName, relation]) => ({
					fieldName,
					targetCollection: relation.originalTarget?.trim() || "(unknown)",
				}));

			return {
				collectionName,
				unresolvedFields,
			};
		})
		.filter((entry) => entry.unresolvedFields.length > 0);

	const splitSet = new Set(configuredSplitCollections);
	const nonSplitCollections = Object.keys(collectionTypes)
		.filter((collectionName) => !splitSet.has(collectionName))
		.sort((a, b) => a.localeCompare(b));

	const lines: string[] = [
		"# Relatorio de Geracao de Tipos",
		"",
		`**Datasource:** ${dataSourceName}`,
		"",
		"## Status: Relacoes",
		"",
	];

	if (unresolvedRelationsByCollection.length === 0) {
		lines.push("### Sem problemas");
	} else {
		lines.push(
			`### ${unresolvedRelationsByCollection.length} collection(oes) com relacoes nao resolvidas`,
			"",
		);
		for (const entry of unresolvedRelationsByCollection) {
			lines.push(`#### ${entry.collectionName}`, "");
			lines.push("| Campo | Target original |");
			lines.push("| --- | --- |");
			for (const unresolvedField of entry.unresolvedFields) {
				lines.push(
					`| \`${unresolvedField.fieldName}\` | \`${unresolvedField.targetCollection}\` |`,
				);
			}
			lines.push("");
		}
	}

	lines.push("## Status: Collections Split", "");

	if (nonSplitCollections.length === 0) {
		lines.push("### Sem problemas");
	} else {
		lines.push(
			`### ${nonSplitCollections.length} collection(oes) nao splitada(s)`,
			"",
		);
		lines.push("| Collection |");
		lines.push("| --- |");
		for (const collectionName of nonSplitCollections) {
			lines.push(`| \`${collectionName}\` |`);
		}
		lines.push(
			"",
			"```ts",
			"// Cole este array no splitCollections:",
			JSON.stringify(nonSplitCollections),
			"```",
		);
	}

	lines.push("");
	return lines.join("\n");
}

export async function writeFiles(
	ctx: Readonly<PipelineContext & { fileContents: Map<string, string> }>,
): Promise<PipelineContext> {
	const outputDir = ctx.dataSource.outputDir ?? ctx.config.outputDir;
	if (!outputDir?.trim()) {
		throw new Error(
			`outputDir inválido para datasource '${ctx.dataSource.name}'`,
		);
	}
	const writeResults: GeneratedFileWrite[] = [];
	const fileContents = new Map(ctx.fileContents);

	if (ctx.dataSource.generateEnumReport) {
		fileContents.set(
			"generation-report.md",
			createGenerationReport(
				ctx.dataSource.name,
				ctx.collectionTypes ?? {},
				ctx.dataSource.splitCollections ?? [],
			),
		);
	}

	for (const [relativePath, content] of fileContents.entries()) {
		const fullPath = path.join(outputDir, relativePath);
		const result = writeGeneratedFile(
			content,
			fullPath,
			{ dryRun: ctx.config.dryRun },
			ctx.logger,
		);

		writeResults.push({
			outputPath: result.outputPath,
			changed: result.changed,
			skipped: result.skipped,
		});
	}

	return {
		...ctx,
		writeResults,
	};
}
