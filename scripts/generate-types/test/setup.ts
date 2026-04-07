import type {
	CollectionTypesMap,
	GeneratedTypes,
	RelationInfo,
} from "@scripts/generate-types/src/@types/generation";
import type { NocoBaseField } from "@scripts/generate-types/src/@types/nocobase";
import type {
	EnvConfig,
	RuntimeConfig,
	ScriptConfig,
} from "@scripts/generate-types/src/@types/script";
import { vi } from "vitest";

// ── Mock de variáveis de ambiente ─────────────────────────────────────────────

const mockEnvConfig: EnvConfig = {
	baseUrl: "http://localhost:13000",
	token: "test-token",
	timeoutMs: 15_000,
};

process.env.CRM_NOCOBASE_URL = mockEnvConfig.baseUrl;
process.env.CRM_NOCOBASE_TOKEN = mockEnvConfig.token;
process.env.CRM_NOCOBASE_TIMEOUT_MS = String(mockEnvConfig.timeoutMs);

// ── Mock do módulo de config ──────────────────────────────────────────────────

const mockScriptConfig: ScriptConfig = {
	outputPath: "/tmp/test-generated/index.ts",
	splitOutputDir: "/tmp/test-generated",
	splitCollections: [
		"users",
		"f_funcionarios",
		"t_negociacoes",
		"t_pessoas",
		"t_empresas",
		"t_contratos",
		"t_servicos",
		"t_sites",
		"t_equipamentos",
		"t_telecom_recursos",
	],
	defaultEnvPath: ".env.local",
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
};

const mockRuntimeConfig: RuntimeConfig = {
	...mockScriptConfig,
	dryRun: false,
	baseUrl: mockEnvConfig.baseUrl,
	token: mockEnvConfig.token,
	timeoutMs: mockEnvConfig.timeoutMs,
	script: mockScriptConfig,
	args: { dryRun: false },
	parsedArgs: { showHelp: false, options: { dryRun: false } },
	env: mockEnvConfig,
	showHelp: false,
};

vi.mock("@scripts/generate-types/config", () => ({
	config: mockRuntimeConfig,
}));

// ── Helpers de fábrica para testes ────────────────────────────────────────────

/**
 * Cria um mock de NocoBaseField com valores padrão.
 * Útil para reduzir boilerplate nos testes de field-mapper.
 */
export function createMockField(
	overrides: Partial<{
		name: string;
		type: string;
		interface: string | null;
		target: string;
	}> = {},
): NocoBaseField {
	return {
		name: "campo_teste",
		type: "string",
		interface: "input",
		...overrides,
	} as NocoBaseField;
}

/**
 * Cria um GeneratedTypes (scalars + relations) para uma collection.
 */
export function createMockGeneratedTypes(
	scalars: Record<string, string> = {},
	relations: Record<string, RelationInfo> = {},
): GeneratedTypes {
	return {
		scalars: new Map(Object.entries(scalars)),
		relations: new Map(Object.entries(relations)),
	};
}

/**
 * Cria um CollectionTypesMap simples a partir de um objeto de collections.
 */
export function createMockCollectionTypesMap(
	collections: Record<
		string,
		{
			scalars?: Record<string, string>;
			relations?: Record<string, RelationInfo>;
		}
	> = {},
): CollectionTypesMap {
	const map: CollectionTypesMap = {};
	for (const [name, types] of Object.entries(collections)) {
		map[name] = {
			scalars: new Map(Object.entries(types.scalars ?? {})),
			relations: new Map(Object.entries(types.relations ?? {})),
		};
	}
	return map;
}

export { mockEnvConfig, mockRuntimeConfig, mockScriptConfig };
