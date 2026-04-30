import {
	createNocoBaseEnvSchema,
	formatZodError,
	getEnvPaths,
	loadEnvFiles,
	normalizeBaseUrl,
	resolveEnvPath,
} from "@scripts/generators/shared/utils/env-config";
import { describe, expect, it, vi } from "vitest";

vi.mock("dotenv", () => ({
	config: vi.fn(),
}));

describe("normalizeBaseUrl", () => {
	describe("remoção de barras finais", () => {
		it("deve remover barra final única", () => {
			const result = normalizeBaseUrl("https://example.com/api/");
			expect(result).toBe("https://example.com/api");
		});

		it("deve remover múltiplas barras finais", () => {
			const result = normalizeBaseUrl("https://example.com/api///");
			expect(result).toBe("https://example.com/api");
		});

		it("deve retornar URL sem barra final inalterada", () => {
			const result = normalizeBaseUrl("https://example.com/api");
			expect(result).toBe("https://example.com/api");
		});

		it("deve lidar com URL raiz com barra", () => {
			const result = normalizeBaseUrl("https://example.com/");
			expect(result).toBe("https://example.com");
		});

		it("deve lidar com URL raiz sem barra", () => {
			const result = normalizeBaseUrl("https://example.com");
			expect(result).toBe("https://example.com");
		});
	});
});

describe("resolveEnvPath", () => {
	it("deve resolver path relativo ao cwd", () => {
		const result = resolveEnvPath(".env.local");
		expect(result).toContain(".env.local");
	});

	it("deve resolver path absoluto", () => {
		const result = resolveEnvPath("/absolute/path/.env");
		expect(result).toBe("/absolute/path/.env");
	});
});

describe("getEnvPaths", () => {
	it("deve retornar defaultEnvPath e .env deduplicados", () => {
		const result = getEnvPaths(".env.local");
		expect(result).toEqual([".env.local", ".env"]);
	});

	it("deve deduplicar quando defaultEnvPath é .env", () => {
		const result = getEnvPaths(".env");
		expect(result).toEqual([".env"]);
	});

	it("deve retornar ambos quando são diferentes", () => {
		const result = getEnvPaths(".env.production");
		expect(result).toEqual([".env.production", ".env"]);
	});
});

describe("loadEnvFiles", () => {
	it("deve carregar arquivos de ambiente", () => {
		const result = loadEnvFiles(".env.local");
		expect(result).toEqual([".env.local", ".env"]);
	});

	it("deve retornar paths carregados", () => {
		const result = loadEnvFiles(".env");
		expect(result).toEqual([".env"]);
	});
});

describe("createNocoBaseEnvSchema", () => {
	const schema = createNocoBaseEnvSchema(15_000);

	describe("validação de URL", () => {
		it("deve aceitar URL válida", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api/",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "10000",
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.CRM_NOCOBASE_URL).toBe("https://example.com/api");
			}
		});

		it("deve falhar com URL inválida", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "not-a-url",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "10000",
			});
			expect(result.success).toBe(false);
		});

		it("deve normalizar URL removendo barras finais", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api///",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "10000",
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.CRM_NOCOBASE_URL).toBe("https://example.com/api");
			}
		});
	});

	describe("validação de token", () => {
		it("deve aceitar token não vazio", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "valid-token",
				CRM_NOCOBASE_TIMEOUT_MS: "10000",
			});
			expect(result.success).toBe(true);
		});

		it("deve falhar com token vazio", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "",
				CRM_NOCOBASE_TIMEOUT_MS: "10000",
			});
			expect(result.success).toBe(false);
		});

		it("deve falhar com token em branco", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "   ",
				CRM_NOCOBASE_TIMEOUT_MS: "10000",
			});
			expect(result.success).toBe(false);
		});
	});

	describe("validação de timeout", () => {
		it("deve aceitar timeout válido", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "30000",
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.CRM_NOCOBASE_TIMEOUT_MS).toBe(30_000);
			}
		});

		it("deve aplicar valor padrão quando timeout ausente", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "token123",
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.CRM_NOCOBASE_TIMEOUT_MS).toBe(15_000);
			}
		});

		it("deve falhar com timeout zero", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "0",
			});
			expect(result.success).toBe(false);
		});

		it("deve falhar com timeout negativo", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "-1000",
			});
			expect(result.success).toBe(false);
		});

		it("deve converter string para número", () => {
			const result = schema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "token123",
				CRM_NOCOBASE_TIMEOUT_MS: "20000",
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(typeof result.data.CRM_NOCOBASE_TIMEOUT_MS).toBe("number");
				expect(result.data.CRM_NOCOBASE_TIMEOUT_MS).toBe(20_000);
			}
		});
	});

	describe("valores padrão de timeout", () => {
		it("deve usar 15000 como padrão quando especificado", () => {
			const customSchema = createNocoBaseEnvSchema(30_000);
			const result = customSchema.safeParse({
				CRM_NOCOBASE_URL: "https://example.com/api",
				CRM_NOCOBASE_TOKEN: "token123",
			});
			expect(result.success).toBe(true);
			if (result.success) {
				expect(result.data.CRM_NOCOBASE_TIMEOUT_MS).toBe(30_000);
			}
		});
	});
});

describe("formatZodError", () => {
	it("deve formatar erro único", () => {
		const schema = createNocoBaseEnvSchema(15_000);
		const result = schema.safeParse({
			CRM_NOCOBASE_URL: "invalid",
			CRM_NOCOBASE_TOKEN: "",
			CRM_NOCOBASE_TIMEOUT_MS: "0",
		});

		expect(result.success).toBe(false);
		if (!result.success) {
			const formatted = formatZodError(result.error);
			expect(formatted).toContain("CRM_NOCOBASE_URL");
			expect(formatted).toContain("CRM_NOCOBASE_TOKEN");
			expect(formatted).toContain("CRM_NOCOBASE_TIMEOUT_MS");
		}
	});

	it("deve separar erros com ponto e vírgula", () => {
		const schema = createNocoBaseEnvSchema(15_000);
		const result = schema.safeParse({
			CRM_NOCOBASE_URL: "invalid",
			CRM_NOCOBASE_TOKEN: "",
			CRM_NOCOBASE_TIMEOUT_MS: "0",
		});

		expect(result.success).toBe(false);
		if (!result.success) {
			const formatted = formatZodError(result.error);
			expect(formatted).toContain(";");
		}
	});

	it("deve usar 'env' como label quando path está vazio", () => {
		const mockError = {
			issues: [
				{
					path: [],
					message: "erro genérico",
				},
			],
		} as unknown as import("zod").ZodError;

		const formatted = formatZodError(mockError);
		expect(formatted).toBe("env: erro genérico");
	});
});
