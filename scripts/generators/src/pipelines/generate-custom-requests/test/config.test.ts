import * as path from "node:path";
import { parseConfig } from "@scripts/generators/src/pipelines/generate-custom-requests/utils/config";
import { config as loadDotEnv } from "dotenv";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("dotenv", () => ({
	config: vi.fn(),
}));

const trackedEnvKeys = [
	"CRM_NOCOBASE_URL",
	"CRM_NOCOBASE_TOKEN",
	"CRM_NOCOBASE_TIMEOUT_MS",
] as const;

const initialTrackedEnv = Object.fromEntries(
	trackedEnvKeys.map((key) => [key, process.env[key]]),
) as Record<(typeof trackedEnvKeys)[number], string | undefined>;

function restoreTrackedEnv(): void {
	for (const key of trackedEnvKeys) {
		const value = initialTrackedEnv[key];
		if (value === undefined) {
			delete process.env[key];
			continue;
		}

		process.env[key] = value;
	}
}

describe("parseConfig", () => {
	const mockedLoadDotEnv = vi.mocked(loadDotEnv);

	beforeEach(() => {
		restoreTrackedEnv();
		mockedLoadDotEnv.mockClear();
	});

	afterEach(() => {
		restoreTrackedEnv();
	});

	it("carrega .env.local e .env antes da validação", () => {
		process.env.CRM_NOCOBASE_URL = "https://example.com/api/";
		process.env.CRM_NOCOBASE_TOKEN = "token";
		delete process.env.CRM_NOCOBASE_TIMEOUT_MS;

		const result = parseConfig();

		expect(result.baseUrl).toBe("https://example.com/api");
		expect(result.timeoutMs).toBe(15_000);
		expect(result.generateAnalysisReport).toBe(true);
		expect(mockedLoadDotEnv).toHaveBeenNthCalledWith(1, {
			path: path.resolve(process.cwd(), ".env.local"),
			quiet: true,
		});
		expect(mockedLoadDotEnv).toHaveBeenNthCalledWith(2, {
			path: path.resolve(process.cwd(), ".env"),
			quiet: true,
		});
	});

	it("inclui os arquivos carregados na mensagem de erro de validação", () => {
		delete process.env.CRM_NOCOBASE_URL;
		delete process.env.CRM_NOCOBASE_TOKEN;
		delete process.env.CRM_NOCOBASE_TIMEOUT_MS;

		expect(() => parseConfig()).toThrow(/após carregar \.env\.local e \.env/);
	});

	it("permite desligar generateAnalysisReport via override", () => {
		process.env.CRM_NOCOBASE_URL = "https://example.com/api/";
		process.env.CRM_NOCOBASE_TOKEN = "token";
		delete process.env.CRM_NOCOBASE_TIMEOUT_MS;

		const result = parseConfig({ generateAnalysisReport: false });

		expect(result.generateAnalysisReport).toBe(false);
	});
});
