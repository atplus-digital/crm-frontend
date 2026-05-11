/**
 * Gera relatórios markdown dos diffs
 */

import * as fs from "node:fs";
import * as path from "node:path";
import type { CollectionDiff, DiffItem, ScalarType, EnumOption } from "./config";
import { CONFIG } from "./config";

interface RelationInfo {
	target: string;
	type: string;
}

function ensureOutputDir(): void {
	if (!fs.existsSync(CONFIG.OUTPUT_DIR)) {
		fs.mkdirSync(CONFIG.OUTPUT_DIR, { recursive: true });
	}
}

function formatEnumOptions(opts: EnumOption[]): string {
	return opts.map((o) => `${o.value}="${o.label}"`).join(", ");
}

function formatScalarDiff(diff: DiffItem<ScalarType>): string {
	switch (diff.side) {
		case "ixc_only":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue}\` | — | ❌ Ausente no NocoBase |`;
		case "nocobase_only":
			return `| \`${diff.fieldName}\` | — | \`${diff.nocobaseValue}\` | ⚠️ Campo extra no NocoBase |`;
		case "both_different":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue}\` | \`${diff.nocobaseValue}\` | ⚠️ Tipo diferente |`;
	}
}

function formatEnumDiff(diff: DiffItem<EnumOption[]>): string[] {
	const lines: string[] = [];

	switch (diff.side) {
		case "ixc_only":
			lines.push(
				`| \`${diff.fieldName}\` | — | — | ❌ Enum ausente no NocoBase |`,
			);
			if (diff.ixcValue) {
				lines.push(
					`| | ${formatEnumOptions(diff.ixcValue)} | — | |`,
				);
			}
			break;
		case "nocobase_only":
			lines.push(
				`| \`${diff.fieldName}\` | — | — | ⚠️ Enum extra no NocoBase |`,
			);
			if (diff.nocobaseValue) {
				lines.push(
					`| | — | ${formatEnumOptions(diff.nocobaseValue)} | |`,
				);
			}
			break;
		case "both_different":
			lines.push(`| \`${diff.fieldName}\` | — | — | ⚠️ Enum diferente |`);
			if (diff.ixcValue || diff.nocobaseValue) {
				const ixcOpts = diff.ixcValue || [];
				const nbOpts = diff.nocobaseValue || [];
				const allValues = new Set([
					...ixcOpts.map((o) => o.value),
					...nbOpts.map((o) => o.value),
				]);

				for (const val of allValues) {
					const ixcOpt = ixcOpts.find((o) => o.value === val);
					const nbOpt = nbOpts.find((o) => o.value === val);

					if (ixcOpt && nbOpt) {
						if (ixcOpt.label === nbOpt.label) {
							lines.push(
								`| | \`${val}\`="${ixcOpt.label}" | \`${val}\`="${nbOpt.label}" | ✅ OK |`,
							);
						} else {
							lines.push(
								`| | \`${val}\`="${ixcOpt.label}" | \`${val}\`="${nbOpt.label}" | ⚠️ Label diferente |`,
							);
						}
					} else if (ixcOpt) {
						lines.push(
							`| | \`${val}\`="${ixcOpt.label}" | — | ❌ Valor ausente no NocoBase |`,
						);
					} else if (nbOpt) {
						lines.push(
							`| | — | \`${val}\`="${nbOpt.label}" | ⚠️ Valor extra no NocoBase |`,
						);
					}
				}
			}
			break;
	}

	return lines;
}

function formatRelationDiff(diff: DiffItem<RelationInfo>): string {
	switch (diff.side) {
		case "ixc_only":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue?.target}\` (${diff.ixcValue?.type}) | — | ❌ Relação ausente no NocoBase |`;
		case "nocobase_only":
			return `| \`${diff.fieldName}\` | — | \`${diff.nocobaseValue?.target}\` (${diff.nocobaseValue?.type}) | ⚠️ Relação extra no NocoBase |`;
		case "both_different":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue?.target}\` (${diff.ixcValue?.type}) | \`${diff.nocobaseValue?.target}\` (${diff.nocobaseValue?.type}) | ⚠️ Target diferente |`;
	}
}

function generateCollectionReport(diff: CollectionDiff): string {
	const lines: string[] = [];

	lines.push(`# ${diff.collectionName}`);
	lines.push("");
	lines.push(`**Diffs encontrados:** ${diff.diffCount}`);
	lines.push("");

	lines.push("## Scalars");
	lines.push("");
	if (diff.scalars.length === 0) {
		lines.push("✅ Nenhum diff encontrado.");
	} else {
		lines.push("| Campo | IXC | NocoBase | Status |");
		lines.push("|-------|-----|----------|--------|");
		for (const d of diff.scalars) {
			lines.push(formatScalarDiff(d));
		}
	}
	lines.push("");

	lines.push("## Enums");
	lines.push("");
	if (diff.enums.length === 0) {
		lines.push("✅ Nenhum diff encontrado.");
	} else {
		lines.push("| Campo | Valores IXC | Valores NocoBase | Status |");
		lines.push("|-------|-------------|------------------|--------|");
		for (const d of diff.enums) {
			for (const line of formatEnumDiff(d)) {
				lines.push(line);
			}
		}
	}
	lines.push("");

	lines.push("## Relações");
	lines.push("");
	if (diff.relations.length === 0) {
		lines.push("✅ Nenhum diff encontrado.");
	} else {
		lines.push("| Campo | Target IXC | Target NocoBase | Status |");
		lines.push("|-------|------------|-----------------|--------|");
		for (const d of diff.relations) {
			lines.push(
				formatRelationDiff(d as unknown as DiffItem<RelationInfo>),
			);
		}
	}
	lines.push("");

	return lines.join("\n");
}

function generateIndexReport(allDiffs: CollectionDiff[]): string {
	const lines: string[] = [];

	lines.push("# IXC Schema Audit — Resumo");
	lines.push("");
	lines.push(`**Data:** ${new Date().toISOString().slice(0, 10)}`);
	lines.push(`**Collections auditadas:** ${allDiffs.length}`);
	lines.push("");

	lines.push("## Resumo por Collection");
	lines.push("");
	lines.push(
		"| Collection | Scalars | Enums | Relations | **Total** |",
	);
	lines.push(
		"|------------|---------|-------|-----------|-----------|",
	);

	let totalScalars = 0;
	let totalEnums = 0;
	let totalRelations = 0;
	let totalDiffs = 0;

	for (const diff of allDiffs) {
		totalScalars += diff.scalars.length;
		totalEnums += diff.enums.length;
		totalRelations += diff.relations.length;
		totalDiffs += diff.diffCount;

		const collectionLink = `[${diff.collectionName}](./${diff.collectionName}.md)`;

		const statusEmoji =
			diff.diffCount === 0 ? "✅" : diff.diffCount < 5 ? "⚠️" : "❌";

		lines.push(
			`| ${collectionLink} | ${diff.scalars.length} | ${diff.enums.length} | ${diff.relations.length} | ${statusEmoji} ${diff.diffCount} |`,
		);
	}

	lines.push("");
	lines.push(
		`**Totais:** ${totalScalars} scalars, ${totalEnums} enums, ${totalRelations} relations = **${totalDiffs} diffs**`,
	);
	lines.push("");

	return lines.join("\n");
}

export function writeReports(allDiffs: CollectionDiff[]): string[] {
	ensureOutputDir();
	const writtenPaths: string[] = [];

	const indexContent = generateIndexReport(allDiffs);
	const indexPath = path.join(CONFIG.OUTPUT_DIR, "index.md");
	fs.writeFileSync(indexPath, indexContent, "utf-8");
	writtenPaths.push(indexPath);

	for (const diff of allDiffs) {
		const content = generateCollectionReport(diff);
		const filePath = path.join(
			CONFIG.OUTPUT_DIR,
			`${diff.collectionName}.md`,
		);
		fs.writeFileSync(filePath, content, "utf-8");
		writtenPaths.push(filePath);
	}

	return writtenPaths;
}
