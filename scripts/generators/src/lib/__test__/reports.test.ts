import {
	addJsonReport,
	countReports,
	createReportsContext,
	renderReportsMarkdown,
} from "@scripts/generators/src/lib/reports";
import { describe, expect, it } from "vitest";

describe("reports lib", () => {
	it("acumula reports sem sobrescrever quando a chave se repete", () => {
		const now = new Date("2026-05-05T00:00:00.000Z");
		const base = createReportsContext();

		const withFirst = addJsonReport(
			base,
			{
				namespace: "custom-requests",
				key: "analysis-report",
				title: "Análise",
				scope: {
					pipeline: "generate-custom-requests",
					stage: "write-analysis-report",
				},
				payload: {
					total: 1,
				},
			},
			now,
		);

		const withSecond = addJsonReport(
			withFirst,
			{
				namespace: "custom-requests",
				key: "analysis-report",
				title: "Análise 2",
				scope: {
					pipeline: "generate-custom-requests",
					stage: "transform-and-merge",
				},
				payload: {
					total: 2,
				},
			},
			now,
		);

		const entries = withSecond.namespaces["custom-requests"]?.entries ?? [];

		expect(entries).toHaveLength(2);
		expect(entries[0]?.entryId).toBe("analysis-report");
		expect(entries[1]?.entryId).toBe("analysis-report-1");
		expect(countReports(withSecond)).toBe(2);
	});

	it("renderiza markdown consolidado com json indentado", () => {
		const now = new Date("2026-05-05T01:02:03.000Z");
		const context = addJsonReport(
			createReportsContext(),
			{
				namespace: "types",
				key: "summary",
				title: "Resumo",
				scope: {
					pipeline: "generate-types",
					stage: "format-result",
					dataSourceKey: "main",
				},
				payload: {
					total: 3,
					files: ["a.ts", "b.ts"],
				},
			},
			now,
		);

		const markdown = renderReportsMarkdown(context, {
			title: "Reports",
			generatedAt: now,
		});

		expect(markdown).toContain("# Reports");
		expect(markdown).toContain("## types");
		expect(markdown).toContain('"total": 3');
		expect(markdown).toContain('"files": [');
	});
});
