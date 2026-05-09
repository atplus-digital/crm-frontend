import * as path from "node:path";
import { createEnv } from "@t3-oss/env-core";
import { config as loadDotEnv } from "dotenv";
import { z } from "zod";

// Carrega .env antes da validação do t3-oss
const envPaths = [".env.local", ".env"];

for (const envPath of envPaths) {
	loadDotEnv({ path: path.resolve(process.cwd(), envPath), quiet: true });
}

/**
 * Schema de validação para variáveis de ambiente do NocoBase (scripts generator).
 */
export const env = createEnv({
	server: {
		CRM_NOCOBASE_URL: z
			.url("CRM_NOCOBASE_URL deve ser uma URL válida")
			.transform((url) => url.replace(/\/+$/, "")),
		CRM_NOCOBASE_TOKEN: z
			.string()
			.trim()
			.min(1, "CRM_NOCOBASE_TOKEN é obrigatório"),
		CRM_NOCOBASE_TIMEOUT_MS: z.coerce.number().int().positive().default(30_000),
		VITE_LOG_LEVEL: z.enum(["info", "debug"]).default("info"),
	},
	emptyStringAsUndefined: true,
	runtimeEnv: process.env,
	onValidationError: (issues) => {
		console.error(
			"Invalid environment variables:",
			JSON.stringify(issues, null, 2),
		);
		throw new Error("Invalid environment variables");
	},
});

interface ResolvedNocoBaseEnv {
	baseUrl: string;
	token: string;
	timeoutMs: number;
	logLevel: "error" | "warn" | "info" | "debug";
}

/**
 * Retorna as variáveis de ambiente já validadas e tipadas.
 */
export function resolveNocoBaseEnv(): ResolvedNocoBaseEnv {
	return {
		baseUrl: env.CRM_NOCOBASE_URL,
		token: env.CRM_NOCOBASE_TOKEN,
		timeoutMs: env.CRM_NOCOBASE_TIMEOUT_MS,
		logLevel: env.VITE_LOG_LEVEL,
	};
}
