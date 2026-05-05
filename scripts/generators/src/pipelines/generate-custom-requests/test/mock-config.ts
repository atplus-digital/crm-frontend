import type { ScriptConfig } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/script-config";

export const mockRequestsConfig = {
	requests: {
		"4q2j1": "negociacao-base",
	},
	manualRequests: [],
};

export const mockCustomRequestsConfig: ScriptConfig = {
	...mockRequestsConfig,
	baseUrl: "https://example.com/api",
	token: "fake-token",
	timeoutMs: 30_000,
	logLevel: "info",
	outputDir: "/tmp/test-generated-custom-reqs",
	generateAnalysisReport: true,
	reports: {
		generateConsolidatedMarkdown: true,
		consolidatedMarkdownOutputFile: "test-report.md",
	},
	lockWorkspaceFolder: false,
};

export function createMockCustomRequestsConfig(): ScriptConfig {
	return {
		...mockCustomRequestsConfig,
	};
}
