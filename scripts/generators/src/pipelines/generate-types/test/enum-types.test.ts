import { describe, expect, it } from "vitest";
import type { GeneratedTypes } from "../@types/generation";
import {
	generateCollectionEnumMaps,
	generateCollectionEnumSchemas,
	generateCollectionEnumTypes,
	generateEnumDefinition,
	generateEnumLabelMap,
	generateEnumSchema,
	generateEnumType,
} from "../pipeline/stages/generate-content/content";

describe("generateEnumLabelMap", () => {
	it("should generate constant object with as const", () => {
		const result = generateEnumLabelMap("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
		]);

		expect(result).toContain("export const PESSOAS_STATUS_LABELS = {");
		expect(result).toContain('"ativo": "Ativo"');
		expect(result).toContain('"inativo": "Inativo"');
		expect(result).toContain("} as const;");
	});

	it("should use raw values as keys", () => {
		const result = generateEnumLabelMap("t_teste", "f_tipo_pessoa", [
			{ value: "pessoa_fisica", label: "Pessoa Física" },
			{ value: "pessoa_juridica", label: "Pessoa Jurídica" },
		]);

		expect(result).toContain("export const TESTE_TIPOPESSOA_LABELS = {");
		expect(result).toContain('"pessoa_fisica": "Pessoa Física"');
		expect(result).toContain('"pessoa_juridica": "Pessoa Jurídica"');
		expect(result).toContain("} as const;");
	});

	it("should handle integer enum values", () => {
		const result = generateEnumLabelMap("t_negociacoes", "f_prioridade", [
			{ value: 1, label: "Baixa" },
			{ value: 2, label: "Média" },
		]);

		expect(result).toContain("export const NEGOCIACOES_PRIORIDADE_LABELS = {");
		expect(result).toContain('"1": "Baixa"');
		expect(result).toContain('"2": "Média"');
		expect(result).toContain("} as const;");
	});

	it("should deduplicate by value first", () => {
		const result = generateEnumLabelMap("t_teste", "status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "ativo", label: "Ativo (dup)" },
			{ value: "inativo", label: "Inativo" },
		]);

		expect(result).toContain('"ativo": "Ativo"');
		expect(result).not.toContain("Ativo (dup)");
	});

	it("should keep both entries when values differ", () => {
		const result = generateEnumLabelMap("t_teste", "status", [
			{ value: "M", label: "Masculino" },
			{ value: "MASCULINO", label: "Masculino" },
		]);

		expect(result).toContain('"M": "Masculino"');
		expect(result).toContain('"MASCULINO": "Masculino"');
	});
});

describe("generateEnumSchema", () => {
	it("should generate Zod enum schema with error message", () => {
		const result = generateEnumSchema("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
		]);

		expect(result).toContain("export const pessoasStatusSchema = z.enum([");
		expect(result).toContain('"ativo", "inativo"');
		expect(result).toContain("error:");
		expect(result).toContain("status: valores válidos são");
	});

	it("should handle integer enum values", () => {
		const result = generateEnumSchema("t_negociacoes", "f_prioridade", [
			{ value: 1, label: "Baixa" },
			{ value: 2, label: "Média" },
			{ value: 3, label: "Alta" },
		]);

		expect(result).toContain(
			"export const negociacoesPrioridadeSchema = z.enum([",
		);
		expect(result).toContain('"1", "2", "3"');
	});

	it("should handle numeric-prefixed collection names", () => {
		const result = generateEnumSchema("t_902ctke5dhq", "f_status", [
			{ value: "ativo", label: "Ativo" },
		]);

		expect(result).toContain("_902ctke5dhqStatusSchema");
	});
});

describe("generateEnumType", () => {
	it("should generate type using z.infer", () => {
		const result = generateEnumType("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
		]);

		expect(result).toBe(
			"export type PessoasStatus = z.infer<typeof pessoasStatusSchema>;",
		);
	});

	it("should handle mixed collection names", () => {
		const result = generateEnumType("t_teste", "status", [
			{ value: "aberto", label: "Aberto" },
		]);

		expect(result).toBe(
			"export type TesteStatus = z.infer<typeof testeStatusSchema>;",
		);
	});
});

describe("generateCollectionEnumMaps", () => {
	it("should generate all constant objects for a collection", () => {
		const types: GeneratedTypes = {
			scalars: new Map(),
			relations: new Map(),
			enums: new Map([
				[
					"f_status",
					[
						{ value: "ativo", label: "Ativo" },
						{ value: "inativo", label: "Inativo" },
					],
				],
				[
					"f_tipo_pessoa",
					[
						{ value: "pf", label: "Pessoa Física" },
						{ value: "pj", label: "Pessoa Jurídica" },
					],
				],
			]),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumMaps("t_pessoas", types);

		expect(result).toContain("export const PESSOAS_STATUS_LABELS = {");
		expect(result).toContain("export const PESSOAS_TIPOPESSOA_LABELS = {");
		expect(result).toContain("} as const;");
	});

	it("should return empty string when no enums", () => {
		const types: GeneratedTypes = {
			scalars: new Map([["id", "number"]]),
			relations: new Map(),
			enums: new Map(),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumMaps("t_pessoas", types);
		expect(result).toBe("");
	});

	it("should sort enum maps alphabetically by field name", () => {
		const types: GeneratedTypes = {
			scalars: new Map(),
			relations: new Map(),
			enums: new Map([
				["zebra", [{ value: "z", label: "Z" }]],
				["alfa", [{ value: "a", label: "A" }]],
				["beta", [{ value: "b", label: "B" }]],
			]),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumMaps("t_teste", types);

		const alfaIndex = result.indexOf("TESTE_ALFA_LABELS");
		const betaIndex = result.indexOf("TESTE_BETA_LABELS");
		const zebraIndex = result.indexOf("TESTE_ZEBRA_LABELS");

		expect(alfaIndex).toBeLessThan(betaIndex);
		expect(betaIndex).toBeLessThan(zebraIndex);
	});
});

describe("generateCollectionEnumSchemas", () => {
	it("should generate all Zod schemas for a collection", () => {
		const types: GeneratedTypes = {
			scalars: new Map(),
			relations: new Map(),
			enums: new Map([
				[
					"f_status",
					[
						{ value: "ativo", label: "Ativo" },
						{ value: "inativo", label: "Inativo" },
					],
				],
				[
					"f_tipo_pessoa",
					[
						{ value: "pf", label: "Pessoa Física" },
						{ value: "pj", label: "Pessoa Jurídica" },
					],
				],
			]),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumSchemas("t_pessoas", types);

		expect(result).toContain("export const pessoasStatusSchema = z.enum(");
		expect(result).toContain("export const pessoasTipoPessoaSchema = z.enum(");
	});

	it("should return empty string when no enums", () => {
		const types: GeneratedTypes = {
			scalars: new Map([["id", "number"]]),
			relations: new Map(),
			enums: new Map(),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumSchemas("t_pessoas", types);
		expect(result).toBe("");
	});
});

describe("generateCollectionEnumTypes", () => {
	it("should generate all type aliases for a collection", () => {
		const types: GeneratedTypes = {
			scalars: new Map(),
			relations: new Map(),
			enums: new Map([
				[
					"f_status",
					[
						{ value: "ativo", label: "Ativo" },
						{ value: "inativo", label: "Inativo" },
					],
				],
				[
					"f_tipo_pessoa",
					[
						{ value: "pf", label: "Pessoa Física" },
						{ value: "pj", label: "Pessoa Jurídica" },
					],
				],
			]),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumTypes("t_pessoas", types);

		expect(result).toContain(
			"export type PessoasStatus = z.infer<typeof pessoasStatusSchema>;",
		);
		expect(result).toContain(
			"export type PessoasTipoPessoa = z.infer<typeof pessoasTipoPessoaSchema>;",
		);
	});

	it("should return empty string when no enums", () => {
		const types: GeneratedTypes = {
			scalars: new Map([["id", "number"]]),
			relations: new Map(),
			enums: new Map(),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumTypes("t_pessoas", types);
		expect(result).toBe("");
	});

	it("should sort enums alphabetically by field name", () => {
		const types: GeneratedTypes = {
			scalars: new Map(),
			relations: new Map(),
			enums: new Map([
				["zebra", [{ value: "z", label: "Z" }]],
				["alfa", [{ value: "a", label: "A" }]],
				["beta", [{ value: "b", label: "B" }]],
			]),
			schemaAvailable: true,
		};

		const result = generateCollectionEnumTypes("t_teste", types);

		const alfaIndex = result.indexOf("TesteAlfa");
		const betaIndex = result.indexOf("TesteBeta");
		const zebraIndex = result.indexOf("TesteZebra");

		expect(alfaIndex).toBeLessThan(betaIndex);
		expect(betaIndex).toBeLessThan(zebraIndex);
	});
});

describe("generateEnumDefinition (legacy)", () => {
	it("should generate type alias using z.infer (legacy compatibility)", () => {
		const result = generateEnumDefinition("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
		]);

		expect(result).toBe(
			"export type PessoasStatus = z.infer<typeof pessoasStatusSchema>;",
		);
	});

	it("should handle mixed string and number values", () => {
		const result = generateEnumDefinition("t_teste", "status", [
			{ value: "aberto", label: "Aberto" },
			{ value: 0, label: "Zero" },
			{ value: "fechado", label: "Fechado" },
		]);

		expect(result).toBe(
			"export type TesteStatus = z.infer<typeof testeStatusSchema>;",
		);
	});
});
