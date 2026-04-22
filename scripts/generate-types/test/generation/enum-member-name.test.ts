import type { EnumOption } from "@scripts/generate-types/src/@types/generation";
import { describe, expect, it } from "vitest";

async function getGenerateEnumDefinition() {
	const module = await import("@scripts/generate-types/src/generation/content");
	return module;
}

describe("generateEnumDefinition integration", () => {
	it("deve gerar type alias com nome correto para valores com acentos", async () => {
		const { generateEnumDefinition } = await getGenerateEnumDefinition();

		const enumOptions: EnumOption[] = [
			{ value: "União Estável", label: "União Estável" },
			{ value: "Viúvo", label: "Viúvo" },
			{ value: "Solteiro", label: "Solteiro" },
		];

		const result = generateEnumDefinition("t_teste", "status", enumOptions);

		expect(result).toBe(
			"export type TesteStatus = keyof typeof TESTE_STATUS_LABELS;",
		);
	});

	it("deve gerar type alias com nome correto para valores numéricos", async () => {
		const { generateEnumDefinition } = await getGenerateEnumDefinition();

		const enumOptions: EnumOption[] = [
			{ value: "3", label: "Ruim" },
			{ value: "4", label: "Regular" },
			{ value: "5", label: "Bom" },
		];

		const result = generateEnumDefinition(
			"t_teste",
			"grau_satisfacao",
			enumOptions,
		);

		expect(result).toBe(
			"export type TesteGrauSatisfacao = keyof typeof TESTE_GRAUSATISFACAO_LABELS;",
		);
	});

	it("deve gerar type alias com nome correto para valores com espaços", async () => {
		const { generateEnumDefinition } = await getGenerateEnumDefinition();

		const enumOptions: EnumOption[] = [
			{ value: "Pessoa Física", label: "Pessoa Física" },
			{ value: "Pessoa Jurídica", label: "Pessoa Jurídica" },
			{ value: "Outros", label: "Outros" },
		];

		const result = generateEnumDefinition("t_teste", "tipo", enumOptions);

		expect(result).toBe(
			"export type TesteTipo = keyof typeof TESTE_TIPO_LABELS;",
		);
	});
});
