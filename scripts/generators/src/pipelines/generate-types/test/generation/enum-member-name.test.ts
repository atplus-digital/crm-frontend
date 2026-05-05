import type { EnumOption } from "@scripts/generators/src/pipelines/generate-types/@types/generation";
import { describe, expect, it } from "vitest";

async function getGenerateEnumType() {
	const module = await import(
		"@scripts/generators/src/pipelines/generate-types/pipeline/stages/generate-content/content"
	);
	return module;
}

describe("generateEnumType integration", () => {
	it("deve gerar type alias com nome correto para valores com acentos", async () => {
		const { generateEnumType } = await getGenerateEnumType();

		const enumOptions: EnumOption[] = [
			{ value: "União Estável", label: "União Estável" },
			{ value: "Viúvo", label: "Viúvo" },
			{ value: "Solteiro", label: "Solteiro" },
		];

		const result = generateEnumType("t_teste", "status", enumOptions);

		expect(result).toBe(
			"export type TesteStatus = z.infer<typeof testeStatusSchema>;",
		);
	});

	it("deve gerar type alias com nome correto para valores numéricos", async () => {
		const { generateEnumType } = await getGenerateEnumType();

		const enumOptions: EnumOption[] = [
			{ value: "3", label: "Ruim" },
			{ value: "4", label: "Regular" },
			{ value: "5", label: "Bom" },
		];

		const result = generateEnumType("t_teste", "grau_satisfacao", enumOptions);

		expect(result).toBe(
			"export type TesteGrauSatisfacao = z.infer<typeof testeGrauSatisfacaoSchema>;",
		);
	});

	it("deve gerar type alias com nome correto para valores com espaços", async () => {
		const { generateEnumType } = await getGenerateEnumType();

		const enumOptions: EnumOption[] = [
			{ value: "Pessoa Física", label: "Pessoa Física" },
			{ value: "Pessoa Jurídica", label: "Pessoa Jurídica" },
			{ value: "Outros", label: "Outros" },
		];

		const result = generateEnumType("t_teste", "tipo", enumOptions);

		expect(result).toBe(
			"export type TesteTipo = z.infer<typeof testeTipoSchema>;",
		);
	});
});
