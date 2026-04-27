import * as path from "node:path";
import { config as loadDotEnv } from "dotenv";
import { z } from "zod";
import type { ScriptConfig } from "../@types/script-config";

function normalizeBaseUrl(baseUrl: string): string {
	return baseUrl.replace(/\/+$/, "");
}

function resolveEnvPath(envPath: string): string {
	return path.resolve(process.cwd(), envPath);
}

function getEnvPaths(defaultEnvPath: string): string[] {
	return [...new Set([defaultEnvPath, ".env"])];
}

function loadEnvFiles(defaultEnvPath: string): string[] {
	const envPaths = getEnvPaths(defaultEnvPath);

	for (const envPath of envPaths) {
		loadDotEnv({
			path: resolveEnvPath(envPath),
			quiet: true,
		});
	}

	return envPaths;
}

const envSchema = z.object({
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
		.default(15_000),
});

function formatZodError(error: z.ZodError): string {
	return error.issues
		.map((issue) => {
			const pathLabel = issue.path.join(".") || "env";
			return `${pathLabel}: ${issue.message}`;
		})
		.join("; ");
}

interface CliArgs {
	splitRequests: string[];
}

/**
 * Parseia argumentos CLI. Suporta:
 *   --split request1 --split request2
 * Retorna objeto com os argumentos parseados.
 */
export function parseCliArgs(): CliArgs {
	const args = process.argv.slice(2);
	const splitRequests: string[] = [];

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];

		if (arg === "--split" || arg === "-s") {
			const nextArg = args[i + 1];
			if (nextArg && !nextArg.startsWith("-")) {
				splitRequests.push(nextArg);
				i++;
			} else {
				throw new Error(
					"--split requer um valor (nome do request). Ex: --split criarContratoIxc",
				);
			}
		} else if (arg.startsWith("--split=")) {
			const value = arg.replace("--split=", "");
			if (!value) {
				throw new Error("--split= requer um valor. Ex: --split=request1");
			}
			splitRequests.push(value);
		} else if (arg === "--help" || arg === "-h") {
			console.log(`
Usage: pnpm tsx scripts/generate-custom-requests/index.ts [options]

Options:
  --split <name>    Adiciona um request à lista de split (pode usar múltiplas vezes)
  -s <name>        Forma curta de --split
  --split=name      Forma alternativa com = (sem espaço)
  --help, -h       Mostra esta ajuda

Exemplos:
  pnpm tsx scripts/generate-custom-requests/index.ts --split criarContratoIxc
  pnpm tsx scripts/generate-custom-requests/index.ts -s request1 -s request2
`);
			process.exit(0);
		} else if (arg.startsWith("-")) {
			// Ignora flags desconhecidos (futuro: adicionar mais opções)
		}
	}

	return { splitRequests };
}

export function parseConfig(
	overrideConfig: Partial<ScriptConfig> = {},
): ScriptConfig {
	const envPaths = loadEnvFiles(".env.local");
	const parsed = envSchema.safeParse(process.env);

	if (!parsed.success) {
		throw new Error(
			`Variáveis de ambiente inválidas após carregar ${envPaths.join(" e ")}: ${formatZodError(parsed.error)}`,
		);
	}

	return {
		baseUrl: parsed.data.CRM_NOCOBASE_URL,
		token: parsed.data.CRM_NOCOBASE_TOKEN,
		timeoutMs: parsed.data.CRM_NOCOBASE_TIMEOUT_MS,
		logLevel: "info",
		outputDir: "src/features/custom-requests",
		splitRequests: [],
		...overrideConfig,
	};
}
