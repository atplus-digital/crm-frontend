import * as path from "node:path";
import { type LogLevel, logger } from "@scripts/generators/shared/lib/logger";
import { config as loadDotEnv } from "dotenv";
import { z } from "zod";

const VALID_LOG_LEVELS = new Set<string>(["debug", "info", "warn", "error"]);

/**
 * Resolve o log level a partir da variável de ambiente SCRIPT_LOG_LEVEL.
 * Ordem de prioridade: override direto > SCRIPT_LOG_LEVEL > "info".
 * Também aplica o nível ao logger compartilhado.
 */
export function resolveLogLevel(override?: LogLevel): LogLevel {
	if (override) {
		logger.setLevel(override);
		return override;
	}

	const envLevel = process.env.SCRIPT_LOG_LEVEL;
	if (envLevel && VALID_LOG_LEVELS.has(envLevel)) {
		logger.setLevel(envLevel as LogLevel);
		return envLevel as LogLevel;
	}

	logger.setLevel("info");
	return "info";
}

/**
 * Normaliza URL removendo barras finais.
 */
export function normalizeBaseUrl(baseUrl: string): string {
	return baseUrl.replace(/\/+$/, "");
}

/**
 * Resolve path para ambiente com base no cwd.
 */
export function resolveEnvPath(envPath: string): string {
	return path.resolve(process.cwd(), envPath);
}

/**
 * Retorna paths de arquivos .env a carregar, deduplicados.
 */
export function getEnvPaths(defaultEnvPath: string): string[] {
	return [...new Set([defaultEnvPath, ".env"])];
}

/**
 * Carrega arquivos dotenv e retorna os paths carregados.
 */
export function loadEnvFiles(defaultEnvPath: string): string[] {
	const envPaths = getEnvPaths(defaultEnvPath);

	for (const envPath of envPaths) {
		loadDotEnv({
			path: resolveEnvPath(envPath),
			quiet: true,
		});
	}

	return envPaths;
}

/**
 * Cria schema Zod para variáveis de ambiente do NocoBase.
 */
export function createNocoBaseEnvSchema(defaultTimeoutMs: number) {
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

/**
 * Formata erros Zod para exibição legível.
 */
export function formatZodError(error: z.ZodError): string {
	return error.issues
		.map((issue) => {
			const pathLabel = issue.path.join(".") || "env";
			return `${pathLabel}: ${issue.message}`;
		})
		.join("; ");
}
