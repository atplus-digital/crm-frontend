import * as path from "node:path";
import type {
	EnvConfig,
	ScriptConfig,
} from "@scripts/generate-types/src/@types/script";
import { config as loadDotEnv } from "dotenv";
import { z } from "zod";

function normalizeBaseUrl(baseUrl: string): string {
	return baseUrl.replace(/\/+$/, "");
}

function resolveEnvPath(envPath: string): string {
	return path.resolve(process.cwd(), envPath);
}

function getEnvPaths(defaultEnvPath: string): string[] {
	return [...new Set([defaultEnvPath, ".env"])];
}

function formatZodError(error: z.ZodError): string {
	return error.issues
		.map((issue) => {
			const pathLabel = issue.path.join(".") || "env";
			return `${pathLabel}: ${issue.message}`;
		})
		.join("; ");
}

function createEnvSchema(defaultTimeoutMs: number) {
	return z.object({
		CRM_NOCOBASE_URL: z
			.url("CRM_NOCOBASE_URL deve ser uma URL válida")
			.transform((url) => normalizeBaseUrl(url)),
		CRM_NOCOBASE_TOKEN: z
			.string()
			.trim()
			.min(1, "CRM_NOCOBASE_TOKEN é obrigatório"),
		CRM_NOCOBASE_TIMEOUT_MS: z.coerce
			.number()
			.int("CRM_NOCOBASE_TIMEOUT_MS deve ser inteiro")
			.positive("CRM_NOCOBASE_TIMEOUT_MS deve ser maior que zero")
			.default(defaultTimeoutMs),
	});
}

export function resolveEnvConfig(scriptConfig: ScriptConfig): EnvConfig {
	for (const envPath of getEnvPaths(scriptConfig.defaultEnvPath)) {
		loadDotEnv({
			path: resolveEnvPath(envPath),
			quiet: true,
		});
	}

	const parsed = createEnvSchema(scriptConfig.requestTimeoutMs).safeParse(
		process.env,
	);

	if (!parsed.success) {
		throw new Error(
			`Variáveis de ambiente inválidas após carregar ${getEnvPaths(scriptConfig.defaultEnvPath).join(" e ")}: ${formatZodError(parsed.error)}`,
		);
	}

	return {
		baseUrl: normalizeBaseUrl(parsed.data.CRM_NOCOBASE_URL),
		token: parsed.data.CRM_NOCOBASE_TOKEN,
		timeoutMs: parsed.data.CRM_NOCOBASE_TIMEOUT_MS,
	};
}
