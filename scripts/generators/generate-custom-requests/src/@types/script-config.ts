export type RequestsMap = Record<string, string>;

export interface ManualRegistryEntry {
	key: string;
	name: string;
	collection: string;
	dataSourceKey?: string;
	method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	url: string;
	payloadSchema: string;
	payloadData?: Record<string, unknown> | null;
}

export interface ScriptConfig {
	baseUrl: string;
	token: string;
	timeoutMs: number;
	logLevel?: "debug" | "info" | "warn" | "error";
	outputDir: string;
	requests: RequestsMap;
	manualRequests: ManualRegistryEntry[];
	generateAnalysisReport: boolean;
	lockWorkspaceFolder?: boolean;
}
