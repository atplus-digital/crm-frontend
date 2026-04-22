import type { EnumOption } from "@scripts/generate-types/src/@types/generation";
import { describe, expect, it } from "vitest";

async function getToEnumMemberName() {
	const module = await import(
		"@scripts/generate-types/src/generation/enum-inference"
	);
	return module;
}

async function getGenerateEnumDefinition() {
	const module = await import("@scripts/generate-types/src/generation/content");
	return module;
}

describe("generateEnumMemberName", () => {
	it("deve converter valores com acentos para PascalCase sem acentos", async () => {
		const { generateEnumMemberName } = await getToEnumMemberName();

		expect(generateEnumMemberName("União Estável")).toBe("UniaoEstavel");
		expect(generateEnumMemberName("Viúvo")).toBe("Viuvo");
		expect(generateEnumMemberName("Solteiro")).toBe("Solteiro");
	});

	it("deve converter valores numéricos para PascalCase", async () => {
		const { generateEnumMemberName } = await getToEnumMemberName();

		expect(generateEnumMemberName("3")).toBe("Value3");
		expect(generateEnumMemberName("4")).toBe("Value4");
		expect(generateEnumMemberName("5")).toBe("Value5");
	});

	it("deve converter valores com espaços e caracteres especiais", async () => {
		const { generateEnumMemberName } = await getToEnumMemberName();

		expect(generateEnumMemberName("Pessoa Física")).toBe("PessoaFisica");
		expect(generateEnumMemberName("Pessoa Jurídica")).toBe("PessoaJuridica");
		expect(generateEnumMemberName("Outros @#$")).toBe("Outros");
	});
});

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
