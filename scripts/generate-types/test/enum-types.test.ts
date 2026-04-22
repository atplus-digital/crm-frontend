import { describe, expect, it } from "vitest";
import type { GeneratedTypes } from "../src/@types/generation";
import {
	generateCollectionEnumMaps,
	generateCollectionEnums,
	generateEnumDefinition,
	generateEnumLabelMap,
} from "../src/generation/content";

describe("generateEnumDefinition", () => {
	it("should generate type alias using keyof typeof for string values", () => {
		const result = generateEnumDefinition("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
			{ value: "pendente", label: "Pendente" },
		]);

		expect(result).toBe(
			"export type PessoasStatus = keyof typeof PESSOAS_STATUS_LABELS;",
		);
	});

	it("should remove f_ prefix from type name", () => {
		const result = generateEnumDefinition("t_pessoas", "f_tipo_pessoa", [
			{ value: "pf", label: "Pessoa Física" },
			{ value: "pj", label: "Pessoa Jurídica" },
		]);

		expect(result).toBe(
			"export type PessoasTipoPessoa = keyof typeof PESSOAS_TIPOPESSOA_LABELS;",
		);
		expect(result).not.toContain("PessoasFTipoPessoa");
	});

	it("should generate type alias for integer values", () => {
		const result = generateEnumDefinition("t_negociacoes", "f_prioridade", [
			{ value: 1, label: "Baixa" },
			{ value: 2, label: "Média" },
			{ value: 3, label: "Alta" },
		]);

		expect(result).toBe(
			"export type NegociacoesPrioridade = keyof typeof NEGOCIACOES_PRIORIDADE_LABELS;",
		);
	});

	it("should handle mixed string and number values", () => {
		const result = generateEnumDefinition("t_teste", "status", [
			{ value: "aberto", label: "Aberto" },
			{ value: 0, label: "Zero" },
			{ value: "fechado", label: "Fechado" },
		]);

		expect(result).toBe(
			"export type TesteStatus = keyof typeof TESTE_STATUS_LABELS;",
		);
	});

	it("should handle string values that start with numbers", () => {
		const result = generateEnumDefinition("t_empresas", "f_analise_ixc", [
			{ value: "0", label: "0" },
			{ value: "1", label: "1" },
		]);

		expect(result).toBe(
			"export type EmpresasAnaliseIxc = keyof typeof EMPRESAS_ANALISEIXC_LABELS;",
		);
	});

	it("should handle UUID-like values with hyphens", () => {
		const result = generateEnumDefinition("t_teste", "procedimento", [
			{
				value: "17760523-1404-4ff9-b786-15a4b0d7a3e2",
				label: "Procedimento A",
			},
		]);

		expect(result).toBe(
			"export type TesteProcedimento = keyof typeof TESTE_PROCEDIMENTO_LABELS;",
		);
	});

	it("should handle values with special characters", () => {
		const result = generateEnumDefinition("t_teste", "campo", [
			{ value: "a.b.c", label: "ABC" },
			{ value: "x@y#z", label: "XYZ" },
		]);

		expect(result).toBe(
			"export type TesteCampo = keyof typeof TESTE_CAMPO_LABELS;",
		);
	});
});

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

describe("generateCollectionEnums", () => {
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

		const result = generateCollectionEnums("t_pessoas", types);

		expect(result).toContain(
			"export type PessoasStatus = keyof typeof PESSOAS_STATUS_LABELS;",
		);
		expect(result).toContain(
			"export type PessoasTipoPessoa = keyof typeof PESSOAS_TIPOPESSOA_LABELS;",
		);
	});

	it("should return empty string when no enums", () => {
		const types: GeneratedTypes = {
			scalars: new Map([["id", "number"]]),
			relations: new Map(),
			enums: new Map(),
			schemaAvailable: true,
		};

		const result = generateCollectionEnums("t_pessoas", types);
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

		const result = generateCollectionEnums("t_teste", types);

		const alfaIndex = result.indexOf("TesteAlfa");
		const betaIndex = result.indexOf("TesteBeta");
		const zebraIndex = result.indexOf("TesteZebra");

		expect(alfaIndex).toBeLessThan(betaIndex);
		expect(betaIndex).toBeLessThan(zebraIndex);
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
