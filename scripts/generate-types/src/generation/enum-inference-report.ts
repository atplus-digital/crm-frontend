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

function hasDuplicateLabels(enumInfo: {
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

function formatStatus(enumInfo: {
	cardinality: number;
	values: string[];
	labels: Record<string, string>;
}): string {
	if (hasDuplicateLabels(enumInfo)) {
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

export interface RejectedField {
	fieldName: string;
	uniqueValues: number;
	totalRecords: number;
	reason: string;
	suggestion?: string;
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
		const status = formatStatus(enumInfo);
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
		`> **Data:** ${new Date().toISOString().split("T")[0]}`,
		`> **Collections analisadas:** ${reports.length}`,
		"",
		"---",
		"",
	];

	const totalEnums = reports.reduce((sum, r) => sum + r.enumFields.size, 0);
	const totalRejected = reports.reduce(
		(sum, r) => sum + (r.rejectedFields?.length ?? 0),
		0,
	);

	lines.push("## Resumo Geral");
	lines.push("");
	lines.push(`- **Total de enums inferidos:** ${totalEnums}`);
	lines.push(`- **Total de campos rejeitados:** ${totalRejected}`);
	lines.push("");
	lines.push("---");
	lines.push("");

	lines.push("## Resumo por Collection");
	lines.push("");
	lines.push("| Collection | Enums | Rejeitados | Status |");
	lines.push("|------------|-------|------------|--------|");

	for (const report of reports) {
		const enumCount = report.enumFields.size;
		const rejectedCount = report.rejectedFields?.length ?? 0;
		let status = "✅";

		if (enumCount === 0 && rejectedCount === 0) {
			status = "➖";
		} else if (rejectedCount > enumCount * 2) {
			status = "⚠️ Muitos rejeitados";
		}

		lines.push(
			`| ${report.collectionName} | ${enumCount} | ${rejectedCount} | ${status} |`,
		);
	}

	lines.push("");
	lines.push("---");
	lines.push("");

	const hasRejected = reports.some((r) => (r.rejectedFields?.length ?? 0) > 0);

	if (hasRejected) {
		lines.push("## Campos Rejeitados");
		lines.push("");
		lines.push(
			"| Collection | Campo | Valores Únicos | Total Registros | Motivo | Sugestão |",
		);
		lines.push(
			"|------------|-------|----------------|-----------------|--------|----------|",
		);

		for (const report of reports) {
			if (!report.rejectedFields || report.rejectedFields.length === 0) {
				continue;
			}

			for (const rejected of report.rejectedFields) {
				lines.push(
					`| ${report.collectionName} | ${rejected.fieldName} | ${rejected.uniqueValues} | ${rejected.totalRecords} | ${rejected.reason} | ${rejected.suggestion ?? "—"} |`,
				);
			}
		}

		lines.push("");
		lines.push("---");
		lines.push("");
	}

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
