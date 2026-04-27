export interface ScriptConfig {
	baseUrl: string;
	token: string;
	timeoutMs: number;
	logLevel: "debug" | "info" | "warn" | "error";
	outputDir: string;
	splitRequests: string[];
}
