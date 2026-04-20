import type { InferredEnumInfo } from "./enum-inference";

function formatOrigin(origin: InferredEnumInfo["origin"]): string {
	switch (origin) {
		case "api":
			return "API";
		case "adapter":
			return "Adapter";
		case "inferencia":
			return "Inferência";
		default:
			return origin;
	}
}

function _hasDuplicateLabels(enumInfo: {
	values: string[];
	labels: Record<string, string>;
}): boolean {
	const labelCounts = new Map<string, number>();
	for (const value of enumInfo.values) {
		const label = enumInfo.labels[value];
		if (label) {
			labelCounts.set(label, (labelCounts.get(label) || 0) + 1);
		}
	}
	return Array.from(labelCounts.values()).some((count) => count > 1);
}

function _formatStatus(enumInfo: {
	cardinality: number;
	values: string[];
	labels: Record<string, string>;
}): string {
	if (_hasDuplicateLabels(enumInfo)) {
		return "⚠️ Duplicado";
	}
	if (enumInfo.cardinality <= 5) {
		return "✅";
	}
	if (enumInfo.cardinality <= 10) {
		return "⚠️";
	}
	return "❓ Avaliar";
}

interface RejectedField {
	fieldName: string;
	uniqueValues: number;
	totalRecords: number;
	reason: string;
}

export function generateEnumInferenceReport(
	collectionName: string,
	enumsByField: Map<
		string,
		{
			values: string[];
			labels: Record<string, string>;
			cardinality: number;
			origin: "api" | "adapter" | "inferencia";
		}
	>,
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
		"| Campo | Origem | Count | Status | Valores |",
		"|-------|--------|-------|--------|---------|",
	];

	for (const [fieldName, enumInfo] of entries) {
		const status = _formatStatus(enumInfo);
		const origin = formatOrigin(enumInfo.origin);
		const valuesPreview = enumInfo.values.join(", ").slice(0, 50);
		const valuesDisplay =
			valuesPreview.length < enumInfo.values.join(", ").length
				? `${valuesPreview}...`
				: valuesPreview;
		lines.push(
			`| ${fieldName} | ${origin} | ${enumInfo.cardinality} | ${status} | ${valuesDisplay} |`,
		);
	}

	lines.push("");
	lines.push("---");
	lines.push("");

	return lines.join("\n");
}

export function generateMultiCollectionReport(
	reports: Array<{
		collectionName: string;
		enumFields: Map<
			string,
			{
				values: string[];
				labels: Record<string, string>;
				cardinality: number;
				origin: "api" | "adapter" | "inferencia";
			}
		>;
		rejectedFields?: RejectedField[];
	}>,
): string {
	const lines: string[] = [
		"# Relatório de Inferência de Enums",
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
