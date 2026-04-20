import type {
	CollectionTypesMap,
	GeneratedTypes,
	RelationInfo,
} from "@scripts/generate-types/src/@types/generation";
import type { NocoBaseField } from "@scripts/generate-types/src/@types/nocobase";
import type { RuntimeConfig } from "@scripts/generate-types/src/@types/script";
import { beforeEach, vi } from "vitest";

const mockScriptConfig = {
	outputDir: "/tmp/test-generated",
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
	] as string[],
	defaultEnvPath: ".env.local",
	verbose: false,
	requestTimeoutMs: 15_000,
	requestConcurrency: 5,
	baseInterfaceNaming: {
		prefix: "",
		suffix: "Base",
	},
	datasources: [
		{
			name: "nocobase",
			type: "nocobase" as const,
			dataSource: "main",
			outputDir: "/tmp/test-generated",
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
		},
		{
			name: "ixc",
			type: "nocobase" as const,
			dataSource: "d_db_ixcsoft",
			outputDir: "/tmp/test-generated-ixc",
			splitCollections: ["cliente_contrato"],
			collections: ["cliente_contrato"],
		},
	],
};

const mockRuntimeConfig: RuntimeConfig = {
	...mockScriptConfig,
	baseUrl: "https://example.com/api",
	token: "fake-token",
	timeoutMs: 30_000,
};

// Mock factory function - cria novo objeto para cada teste
function createMockRuntimeConfig(): RuntimeConfig {
	return {
		...mockScriptConfig,
		baseUrl: "https://example.com/api",
		token: "fake-token",
		timeoutMs: 30_000,
	};
}

let currentMockConfig = createMockRuntimeConfig();

vi.mock("@scripts/generate-types/config", () => ({
	get config() {
		// Retorna referência atualizada via getter
		return currentMockConfig;
	},
}));

// Reset do mock entre testes para evitar contaminação
if (typeof beforeEach !== "undefined") {
	beforeEach(() => {
		currentMockConfig = createMockRuntimeConfig();
	});
}

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
 * Cria um GeneratedTypes (scalars + relations + enums) para uma collection.
 */
export function createMockGeneratedTypes(
	scalars: Record<string, string> = {},
	relations: Record<string, RelationInfo> = {},
): GeneratedTypes {
	return {
		scalars: new Map(Object.entries(scalars)),
		relations: new Map(Object.entries(relations)),
		enums: new Map(),
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
			enums: new Map(),
		};
	}
	return map;
}

export { mockRuntimeConfig, mockScriptConfig };
