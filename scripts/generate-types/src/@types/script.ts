import type { NocoBaseCredentials } from "./nocobase";

export interface GenerateTypesArgs {
	dryRun: boolean;
}

export interface ParsedArgs {
	showHelp: boolean;
	options: GenerateTypesArgs;
}

export interface PersistResult {
	mode: "write";
	outputPath: string;
	changed: boolean;
}

export interface DryRunDiffResult {
	mode: "dry-run";
	outputPath: string;
	changed: boolean;
	diff: string;
}

export type GenerateTypesResult = PersistResult | DryRunDiffResult;

export interface ScriptConfig {
	outputPath: string;
	defaultEnvPath: string;
	requestTimeoutMs: number;
	requestConcurrency: number;
}

export interface EnvConfig extends NocoBaseCredentials {}

export interface RuntimeConfig
	extends ScriptConfig,
		GenerateTypesArgs,
		NocoBaseCredentials {
	script: ScriptConfig;
	args: GenerateTypesArgs;
	parsedArgs: ParsedArgs;
	env: EnvConfig;
	showHelp: boolean;
}
