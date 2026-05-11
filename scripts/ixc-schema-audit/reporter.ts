/**
 * Gera relatórios markdown dos diffs
 */

import * as fs from "node:fs";
import * as path from "node:path";
import type {
	CollectionDiff,
	DiffItem,
	EnumOption,
	ScalarType,
} from "./config";
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
		case "match":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue}\` | \`${diff.nocobaseValue}\` | ✅ OK |`;
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
		case "match":
			lines.push(`| \`${diff.fieldName}\` | — | — | ✅ OK |`);
			if (diff.ixcValue) {
				lines.push(
					`| | ${formatEnumOptions(diff.ixcValue)} | ${formatEnumOptions(diff.ixcValue)} | |`,
				);
			}
			break;
		case "ixc_only":
			lines.push(
				`| \`${diff.fieldName}\` | — | — | ❌ Enum ausente no NocoBase |`,
			);
			if (diff.ixcValue) {
				lines.push(`| | ${formatEnumOptions(diff.ixcValue)} | — | |`);
			}
			break;
		case "nocobase_only":
			lines.push(
				`| \`${diff.fieldName}\` | — | — | ⚠️ Enum extra no NocoBase |`,
			);
			if (diff.nocobaseValue) {
				lines.push(`| | — | ${formatEnumOptions(diff.nocobaseValue)} | |`);
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
		case "match":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue?.target}\` (${diff.ixcValue?.type}) | \`${diff.nocobaseValue?.target}\` (${diff.nocobaseValue?.type}) | ✅ OK |`;
		case "ixc_only":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue?.target}\` (${diff.ixcValue?.type}) | — | ❌ Relação ausente no NocoBase |`;
		case "nocobase_only":
			return `| \`${diff.fieldName}\` | — | \`${diff.nocobaseValue?.target}\` (${diff.nocobaseValue?.type}) | ⚠️ Relação extra no NocoBase |`;
		case "both_different":
			return `| \`${diff.fieldName}\` | \`${diff.ixcValue?.target}\` (${diff.ixcValue?.type}) | \`${diff.nocobaseValue?.target}\` (${diff.nocobaseValue?.type}) | ⚠️ Target diferente |`;
	}
}

function generateCollectionReport(
	diff: CollectionDiff,
	verbose: boolean,
): string {
	const lines: string[] = [];

	lines.push(`# ${diff.collectionName}`);
	lines.push("");
	lines.push(`**Diffs encontrados:** ${diff.diffCount}`);
	lines.push("");

	// Verbose: mostrar todos os campos encontrados
	if (verbose) {
		lines.push("## 📋 Resumo Geral");
		lines.push("");
		lines.push(`| Fonte | Total de Campos |`);
		lines.push(`|-------|-----------------|`);
		lines.push(`| IXC (Wiki + Relations) | ${diff.metadata.ixcTotalFields} |`);
		lines.push(`| NocoBase | ${diff.metadata.nocobaseTotalFields} |`);
		lines.push("");

		lines.push("### 📝 Nomes dos Campos (Brutos)");
		lines.push("");
		lines.push("<details>");
		lines.push("<summary>Ver lista completa de campos</summary>");
		lines.push("");
		lines.push("**IXC:**");
		lines.push("");
		if (diff.metadata.ixcRawFieldNames.length === 0) {
			lines.push("_Nenhum campo encontrado_");
		} else {
			lines.push("```");
			for (const name of diff.metadata.ixcRawFieldNames.sort()) {
				lines.push(name);
			}
			lines.push("```");
		}
		lines.push("");
		lines.push("**NocoBase:**");
		lines.push("");
		if (diff.metadata.nocobaseRawFieldNames.length === 0) {
			lines.push("_Nenhum campo encontrado_");
		} else {
			lines.push("```");
			for (const name of diff.metadata.nocobaseRawFieldNames.sort()) {
				lines.push(name);
			}
			lines.push("```");
		}
		lines.push("");
		lines.push("</details>");
		lines.push("");

		// Campo a Campo - comparação lado a lado
		lines.push("## 🔍 Comparação Campo a Campo");
		lines.push("");

		const allFieldNames = new Set([
			...diff.metadata.ixcRawFieldNames,
			...diff.metadata.nocobaseRawFieldNames,
		]);

		if (allFieldNames.size > 0) {
			lines.push("| Campo | Status IXC | Status NocoBase |");
			lines.push("|-------|------------|-----------------|");

			for (const name of [...allFieldNames].sort()) {
				const inIxc = diff.metadata.ixcRawFieldNames.includes(name)
					? "✅"
					: "❌";
				const inNb = diff.metadata.nocobaseRawFieldNames.includes(name)
					? "✅"
					: "❌";
				const status =
					inIxc === "✅" && inNb === "✅"
						? "`" + name + "`"
						: `**\`${name}\`**`;
				lines.push(`| ${status} | ${inIxc} | ${inNb} |`);
			}
			lines.push("");
		}
	}

	lines.push("## Scalars");
	lines.push("");

	// Separate matches from diffs for display
	const scalarMatches = diff.scalars.filter((d) => d.side === "match");
	const scalarDiffs = diff.scalars.filter((d) => d.side !== "match");

	if (verbose && scalarMatches.length > 0) {
		lines.push(`### ✅ Matches (${scalarMatches.length})`);
		lines.push("");
		if (verbose) {
			lines.push("| Campo | IXC | NocoBase | Status |");
			lines.push("|-------|-----|----------|--------|");
			for (const d of scalarMatches) {
				lines.push(formatScalarDiff(d));
			}
			lines.push("");
		} else {
			lines.push(`${scalarMatches.length} campos com tipo correspondente.`);
			lines.push("");
		}
	}

	if (scalarDiffs.length === 0) {
		lines.push("✅ Nenhum diff encontrado.");
	} else {
		lines.push(`### ❌ Diffs (${scalarDiffs.length})`);
		lines.push("");
		lines.push("| Campo | IXC | NocoBase | Status |");
		lines.push("|-------|-----|----------|--------|");
		for (const d of scalarDiffs) {
			lines.push(formatScalarDiff(d));
		}
	}
	lines.push("");

	lines.push("## Enums");
	lines.push("");

	const enumMatches = diff.enums.filter((d) => d.side === "match");
	const enumDiffs = diff.enums.filter((d) => d.side !== "match");

	if (verbose && enumMatches.length > 0) {
		lines.push(`### ✅ Matches (${enumMatches.length})`);
		lines.push("");
		if (verbose) {
			lines.push("| Campo | Valores IXC | Valores NocoBase | Status |");
			lines.push("|-------|-------------|------------------|--------|");
			for (const d of enumMatches) {
				for (const line of formatEnumDiff(d)) {
					lines.push(line);
				}
			}
			lines.push("");
		} else {
			lines.push(`${enumMatches.length} enums com valores correspondentes.`);
			lines.push("");
		}
	}

	if (enumDiffs.length === 0) {
		lines.push("✅ Nenhum diff encontrado.");
	} else {
		lines.push(`### ❌ Diffs (${enumDiffs.length})`);
		lines.push("");
		lines.push("| Campo | Valores IXC | Valores NocoBase | Status |");
		lines.push("|-------|-------------|------------------|--------|");
		for (const d of enumDiffs) {
			for (const line of formatEnumDiff(d)) {
				lines.push(line);
			}
		}
	}
	lines.push("");

	lines.push("## Relações");
	lines.push("");

	const relMatches = diff.relations.filter((d) => d.side === "match");
	const relDiffs = diff.relations.filter((d) => d.side !== "match");

	if (verbose && relMatches.length > 0) {
		lines.push(`### ✅ Matches (${relMatches.length})`);
		lines.push("");
		if (verbose) {
			lines.push("| Campo | Target IXC | Target NocoBase | Status |");
			lines.push("|-------|------------|-----------------|--------|");
			for (const d of relMatches) {
				lines.push(formatRelationDiff(d as unknown as DiffItem<RelationInfo>));
			}
			lines.push("");
		} else {
			lines.push(`${relMatches.length} relações com target correspondente.`);
			lines.push("");
		}
	}

	if (relDiffs.length === 0) {
		lines.push("✅ Nenhum diff encontrado.");
	} else {
		lines.push(`### ❌ Diffs (${relDiffs.length})`);
		lines.push("");
		lines.push("| Campo | Target IXC | Target NocoBase | Status |");
		lines.push("|-------|------------|-----------------|--------|");
		for (const d of relDiffs) {
			lines.push(formatRelationDiff(d as unknown as DiffItem<RelationInfo>));
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
		"| Collection | Total IXC | Total NocoBase | Scalars | Enums | Relations | **Total Diffs** |",
	);
	lines.push(
		"|------------|-----------|----------------|---------|-------|-----------|-----------------|",
	);

	let totalIxcFields = 0;
	let totalNbFields = 0;
	let totalScalars = 0;
	let totalEnums = 0;
	let totalRelations = 0;
	let totalDiffs = 0;

	for (const diff of allDiffs) {
		totalIxcFields += diff.metadata.ixcTotalFields;
		totalNbFields += diff.metadata.nocobaseTotalFields;
		totalScalars += diff.scalars.filter((d) => d.side !== "match").length;
		totalEnums += diff.enums.filter((d) => d.side !== "match").length;
		totalRelations += diff.relations.filter((d) => d.side !== "match").length;
		totalDiffs += diff.diffCount;

		const collectionLink = `[${diff.collectionName}](./${diff.collectionName}.md)`;

		const statusEmoji =
			diff.diffCount === 0 ? "✅" : diff.diffCount < 5 ? "⚠️" : "❌";

		lines.push(
			`| ${collectionLink} | ${diff.metadata.ixcTotalFields} | ${diff.metadata.nocobaseTotalFields} | ${diff.scalars.filter((d) => d.side !== "match").length} | ${diff.enums.filter((d) => d.side !== "match").length} | ${diff.relations.filter((d) => d.side !== "match").length} | ${statusEmoji} ${diff.diffCount} |`,
		);
	}

	lines.push("");
	lines.push(
		`**Totais:** ${totalIxcFields} campos IXC, ${totalNbFields} campos NocoBase → ${totalDiffs} diffs`,
	);
	lines.push("");

	return lines.join("\n");
}

export function writeReports(
	allDiffs: CollectionDiff[],
	verbose: boolean = false,
): string[] {
	ensureOutputDir();
	const writtenPaths: string[] = [];

	const indexContent = generateIndexReport(allDiffs);
	const indexPath = path.join(CONFIG.OUTPUT_DIR, "index.md");
	fs.writeFileSync(indexPath, indexContent, "utf-8");
	writtenPaths.push(indexPath);

	for (const diff of allDiffs) {
		const content = generateCollectionReport(diff, verbose);
		const filePath = path.join(CONFIG.OUTPUT_DIR, `${diff.collectionName}.md`);
		fs.writeFileSync(filePath, content, "utf-8");
		writtenPaths.push(filePath);
	}

	return writtenPaths;
}
