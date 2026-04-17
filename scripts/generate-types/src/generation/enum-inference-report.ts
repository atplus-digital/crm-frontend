import type { InferredEnumInfo } from "./enum-inference";

interface FieldReport {
	fieldName: string;
	inferredEnum: InferredEnumInfo;
}

interface CollectionReport {
	collectionName: string;
	totalFields: number;
	enumFields: FieldReport[];
	rejectedFields: Array<{
		fieldName: string;
		uniqueValues: number;
		totalRecords: number;
		reason: string;
	}>;
}

function formatEnumValue(value: string): string {
	return value === "" ? "(vazio)" : value;
}

function _formatStatus(enumInfo: InferredEnumInfo): string {
	if (enumInfo.cardinality <= 5) {
		return "✅ Aprovado";
	}
	if (enumInfo.cardinality <= 10) {
		return "⚠️ Revisar";
	}
	return "❓ Avaliar";
}

function _formatEnumDetails(fieldName: string, info: InferredEnumInfo): string {
	const lines: string[] = [];

	lines.push(`#### ${fieldName}`);
	lines.push("");
	lines.push(`- **Valores:** ${info.values.length}`);
	lines.push(`- **Total Registros:** ${info.totalRecords}`);
	lines.push(`- **Status:** ${_formatStatus(info)}`);
	lines.push("");
	lines.push("| Valor | Label |");
	lines.push("|-------|-------|");
	for (const value of info.values) {
		const label = info.labels[value] ?? value;
		lines.push(`| ${formatEnumValue(value)} | ${label} |`);
	}

	return lines.join("\n");
}

export function generateEnumInferenceReport(
	collectionName: string,
	enumsByField: Map<string, InferredEnumInfo>,
): string {
	const entries = Array.from(enumsByField.entries()).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	if (entries.length === 0) {
		return `## Collection: ${collectionName}

**Status:** Nenhum enum inferido para esta collection.

---\n\n`;
	}

	const lines: string[] = [
		`## Collection: ${collectionName}`,
		"",
		"| Campo | Cardinalidade | Status | Valores |",
		"|-------|--------------|--------|---------|",
	];

	for (const [fieldName, enumInfo] of entries) {
		const status = _formatStatus(enumInfo);
		const valuesPreview = enumInfo.values.join(", ").slice(0, 50);
		const valuesDisplay =
			valuesPreview.length < enumInfo.values.join(", ").length
				? `${valuesPreview}...`
				: valuesPreview;
		lines.push(
			`| ${fieldName} | ${enumInfo.cardinality} | ${status} | ${valuesDisplay} |`,
		);
	}

	lines.push("");
	lines.push("### Detalhes");
	lines.push("");

	for (const [fieldName, enumInfo] of entries) {
		lines.push(_formatEnumDetails(fieldName, enumInfo));
	}

	lines.push("");
	lines.push("---");
	lines.push("");

	return lines.join("\n");
}

export function generateMultiCollectionReport(
	reports: Array<{
		collectionName: string;
		enumFields: Map<string, InferredEnumInfo>;
		rejectedFields?: CollectionReport["rejectedFields"];
	}>,
): string {
	const lines: string[] = [
		"# Relatório de Inferência de Enums - IXC",
		"",
		"> **Data:** " + new Date().toISOString().split("T")[0],
		"> **Collections analisadas:** " + reports.length,
		"",
		"---",
		"",
	];

	lines.push("## Resumo por Collection");
	lines.push("");
	lines.push("| Collection | Campos Enum | Status |");
	lines.push("|------------|-------------|--------|");

	for (const report of reports) {
		const enumCount = report.enumFields.size;
		const status = enumCount > 0 ? "✅" : "➖";
		lines.push(`| ${report.collectionName} | ${enumCount} | ${status} |`);
	}

	lines.push("");
	lines.push("---");
	lines.push("");

	lines.push("## Sumário");
	lines.push("");
	for (const report of reports) {
		if (report.enumFields.size > 0) {
			lines.push(
				`- [${report.collectionName}](#${report.collectionName.toLowerCase().replace(/[^a-z0-9]+/g, "-")})`,
			);
		}
	}
	lines.push("");
	lines.push("---");
	lines.push("");

	for (const report of reports) {
		if (report.enumFields.size > 0) {
			lines.push(
				generateEnumInferenceReport(report.collectionName, report.enumFields),
			);
			lines.push("");
			lines.push("---");
			lines.push("");
		}
	}

	return lines.join("\n");
}
