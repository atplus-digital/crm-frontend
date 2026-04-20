import { describe, expect, it } from "vitest";
import type { GeneratedTypes } from "../src/@types/generation";
import {
	generateCollectionEnums,
	generateEnumDefinition,
	generateEnumLabelMap,
} from "../src/generation/content";

describe("generateEnumDefinition", () => {
	it("should generate TypeScript enum for string values", () => {
		const result = generateEnumDefinition("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
			{ value: "pendente", label: "Pendente" },
		]);

		expect(result).toContain("export enum PessoasStatus {");
		expect(result).toContain('Ativo = "ativo"');
		expect(result).toContain('Inativo = "inativo"');
		expect(result).toContain('Pendente = "pendente"');
	});

	it("should remove f_ prefix from enum name", () => {
		const result = generateEnumDefinition("t_pessoas", "f_tipo_pessoa", [
			{ value: "pf", label: "Pessoa Física" },
			{ value: "pj", label: "Pessoa Jurídica" },
		]);

		expect(result).toContain("export enum PessoasTipoPessoa {");
		expect(result).not.toContain("PessoasFTipoPessoa");
	});

	it("should generate TypeScript enum for integer values", () => {
		const result = generateEnumDefinition("t_negociacoes", "f_prioridade", [
			{ value: 1, label: "Baixa" },
			{ value: 2, label: "Média" },
			{ value: 3, label: "Alta" },
		]);

		expect(result).toContain("export enum NegociacoesPrioridade {");
		expect(result).toContain("Value1 = 1");
		expect(result).toContain("Value2 = 2");
		expect(result).toContain("Value3 = 3");
	});

	it("should handle mixed string and number values", () => {
		const result = generateEnumDefinition("t_teste", "status", [
			{ value: "aberto", label: "Aberto" },
			{ value: 0, label: "Zero" },
			{ value: "fechado", label: "Fechado" },
		]);

		expect(result).toContain('Aberto = "aberto"');
		expect(result).toContain("Value0 = 0");
		expect(result).toContain('Fechado = "fechado"');
	});

	it("should handle string values that start with numbers", () => {
		const result = generateEnumDefinition("t_empresas", "f_analise_ixc", [
			{ value: "0", label: "0" },
			{ value: "1", label: "1" },
		]);

		expect(result).toContain("export enum EmpresasAnaliseIxc {");
		expect(result).toContain('Value0 = "0"');
		expect(result).toContain('Value1 = "1"');
	});

	it("should sanitize UUID-like values with hyphens", () => {
		const result = generateEnumDefinition("t_teste", "procedimento", [
			{
				value: "17760523-1404-4ff9-b786-15a4b0d7a3e2",
				label: "Procedimento A",
			},
		]);

		expect(result).toContain("export enum TesteProcedimento {");
		expect(result).toContain(
			'Value1776052314044ff9B78615a4b0d7a3e2 = "17760523-1404-4ff9-b786-15a4b0d7a3e2"',
		);
	});

	it("should sanitize values with special characters", () => {
		const result = generateEnumDefinition("t_teste", "campo", [
			{ value: "a.b.c", label: "ABC" },
			{ value: "x@y#z", label: "XYZ" },
		]);

		expect(result).toContain('ABC = "a.b.c"');
		expect(result).toContain('XYZ = "x@y#z"');
	});
});

describe("generateEnumLabelMap", () => {
	it("should generate typed label map using enum members", () => {
		const result = generateEnumLabelMap("t_pessoas", "f_status", [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
		]);

		expect(result).toContain(
			"export const PESSOAS_STATUS_LABELS: Record<PessoasStatus, string>",
		);
		expect(result).toContain('[PessoasStatus.Ativo]: "Ativo"');
		expect(result).toContain('[PessoasStatus.Inativo]: "Inativo"');
	});

	it("should use enum member names (not values) as keys", () => {
		const result = generateEnumLabelMap("t_teste", "f_tipo_pessoa", [
			{ value: "pessoa_fisica", label: "Pessoa Física" },
			{ value: "pessoa_juridica", label: "Pessoa Jurídica" },
		]);

		expect(result).toContain(
			"export const TESTE_TIPOPESSOA_LABELS: Record<TesteTipoPessoa, string>",
		);
		expect(result).toContain('[TesteTipoPessoa.PessoaFisica]: "Pessoa Física"');
		expect(result).toContain(
			'[TesteTipoPessoa.PessoaJuridica]: "Pessoa Jurídica"',
		);
	});

	it("should handle integer enum values", () => {
		const result = generateEnumLabelMap("t_negociacoes", "f_prioridade", [
			{ value: 1, label: "Baixa" },
			{ value: 2, label: "Média" },
		]);

		expect(result).toContain(
			"export const NEGOCIACOES_PRIORIDADE_LABELS: Record<NegociacoesPrioridade, string>",
		);
		expect(result).toContain('[NegociacoesPrioridade.Value1]: "Baixa"');
		expect(result).toContain('[NegociacoesPrioridade.Value2]: "Média"');
	});
});

describe("generateCollectionEnums", () => {
	it("should generate all enums for a collection", () => {
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

		expect(result).toContain("export enum PessoasStatus {");
		expect(result).toContain("export enum PessoasTipoPessoa {");
		expect(result).toContain('Ativo = "ativo"');
		expect(result).toContain('Pf = "pf"');
		expect(result).toContain('Pj = "pj"');
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
