type LowercaseLetter =
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z";

type SplitRequestNameChar = LowercaseLetter | "-";

type IsValidSplitRequestNameTail<S extends string> = S extends ""
	? true
	: S extends `${infer Char}${infer Rest}`
		? Char extends SplitRequestNameChar
			? IsValidSplitRequestNameTail<Rest>
			: false
		: false;

type IsValidSplitRequestName<S extends string> =
	S extends `${infer First}${infer Rest}`
		? First extends LowercaseLetter
			? IsValidSplitRequestNameTail<Rest>
			: false
		: false;

export type SplitRequestName<S extends string> =
	IsValidSplitRequestName<S> extends true ? S : never;

type AssertSplitRequestNames<T extends Record<string, string>> = {
	[K in keyof T]: T[K] extends SplitRequestName<T[K]> ? T[K] : never;
};

export type SplitRequestsMap = Record<string, string>;

export function defineSplitRequests<const T extends Record<string, string>>(
	splitRequests: AssertSplitRequestNames<T>,
): T {
	return splitRequests;
}

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

export function defineManualRequests<const T extends ManualRegistryEntry[]>(
	manualRequests: T,
): T {
	return manualRequests;
}

export interface ScriptConfig {
	baseUrl: string;
	token: string;
	timeoutMs: number;
	logLevel: "debug" | "info" | "warn" | "error";
	outputDir: string;
	splitRequests: SplitRequestsMap;
	manualRequests: ManualRegistryEntry[];
	generateAnalysisReport: boolean;
	lockWorkspaceFolder?: boolean;
}
