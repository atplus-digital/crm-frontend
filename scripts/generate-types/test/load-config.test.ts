import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { resolveEnvConfig } from "@scripts/generate-types/src/utils/load-config";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mockScriptConfig } from "./setup";

const ENV_KEYS = [
	"CRM_NOCOBASE_URL",
	"CRM_NOCOBASE_TOKEN",
	"CRM_NOCOBASE_TIMEOUT_MS",
] as const;

describe("load-config", () => {
	const originalCwd = process.cwd();
	let tempDir = "";
	let originalEnv: Record<string, string | undefined> = {};

	beforeEach(() => {
		originalEnv = Object.fromEntries(
			ENV_KEYS.map((key) => [key, process.env[key]]),
		);

		for (const key of ENV_KEYS) {
			delete process.env[key];
		}

		tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "crm-atplus-load-config-"));
		process.chdir(tempDir);
	});

	afterEach(() => {
		process.chdir(originalCwd);
		fs.rmSync(tempDir, { recursive: true, force: true });

		for (const key of ENV_KEYS) {
			const value = originalEnv[key];
			if (value === undefined) {
				delete process.env[key];
				continue;
			}

			process.env[key] = value;
		}
	});

	it("deve usar .env como fallback quando .env.local não existe", () => {
		fs.writeFileSync(
			path.join(tempDir, ".env"),
			[
				'CRM_NOCOBASE_URL="https://fallback.example/api"',
				'CRM_NOCOBASE_TOKEN="fallback-token"',
				"CRM_NOCOBASE_TIMEOUT_MS=25000",
			].join("\n"),
		);

		const result = resolveEnvConfig(mockScriptConfig);

		expect(result).toEqual({
			baseUrl: "https://fallback.example/api",
			token: "fallback-token",
			timeoutMs: 25_000,
		});
	});

	it("deve priorizar .env.local sobre .env", () => {
		fs.writeFileSync(
			path.join(tempDir, ".env"),
			[
				'CRM_NOCOBASE_URL="https://fallback.example/api"',
				'CRM_NOCOBASE_TOKEN="fallback-token"',
				"CRM_NOCOBASE_TIMEOUT_MS=25000",
			].join("\n"),
		);
		fs.writeFileSync(
			path.join(tempDir, ".env.local"),
			[
				'CRM_NOCOBASE_URL="https://local.example/api"',
				'CRM_NOCOBASE_TOKEN="local-token"',
				"CRM_NOCOBASE_TIMEOUT_MS=15000",
			].join("\n"),
		);

		const result = resolveEnvConfig(mockScriptConfig);

		expect(result).toEqual({
			baseUrl: "https://local.example/api",
			token: "local-token",
			timeoutMs: 15_000,
		});
	});

	it("deve formatar erros de validação quando as variáveis são inválidas", () => {
		fs.writeFileSync(
			path.join(tempDir, ".env"),
			[
				'CRM_NOCOBASE_URL="invalida"',
				'CRM_NOCOBASE_TOKEN=""',
				"CRM_NOCOBASE_TIMEOUT_MS=0",
			].join("\n"),
		);

		expect(() => resolveEnvConfig(mockScriptConfig)).toThrow(
			/Variáveis de ambiente inválidas após carregar .env.local e .env: CRM_NOCOBASE_URL|CRM_NOCOBASE_TOKEN|CRM_NOCOBASE_TIMEOUT_MS/,
		);
	});
});
