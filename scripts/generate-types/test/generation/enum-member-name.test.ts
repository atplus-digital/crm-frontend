import type { EnumOption } from "@scripts/generate-types/src/@types/generation";
import { describe, expect, it } from "vitest";

async function getToEnumMemberName() {
	const module = await import("@scripts/generate-types/src/generation/content");
	return module;
}

describe("toEnumMemberName (via generateEnumDefinition)", () => {
	it("deve converter valores com acentos para PascalCase sem acentos", async () => {
		const { generateEnumDefinition } = await getToEnumMemberName();

		const enumOptions: EnumOption[] = [
			{ value: "União Estável", label: "União Estável" },
			{ value: "Viúvo", label: "Viúvo" },
			{ value: "Solteiro", label: "Solteiro" },
		];

		const result = generateEnumDefinition("t_teste", "status", enumOptions);

		expect(result).toContain("UniaoEstavel");
		expect(result).toContain("Viuvo");
		expect(result).toContain("Solteiro");

		expect(result).toContain('= "União Estável"');
		expect(result).toContain('= "Viúvo"');
	});

	it("deve converter valores numéricos para PascalCase", async () => {
		const { generateEnumDefinition } = await getToEnumMemberName();

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

		expect(result).toContain("Value3");
		expect(result).toContain("Value4");
		expect(result).toContain("Value5");
	});

	it("deve converter valores com espaços e caracteres especiais", async () => {
		const { generateEnumDefinition } = await getToEnumMemberName();

		const enumOptions: EnumOption[] = [
			{ value: "Pessoa Física", label: "Pessoa Física" },
			{ value: "Pessoa Jurídica", label: "Pessoa Jurídica" },
			{ value: "Outros @#$", label: "Outros" },
		];

		const result = generateEnumDefinition("t_teste", "tipo", enumOptions);

		expect(result).toContain("PessoaFisica");
		expect(result).toContain("PessoaJuridica");
		expect(result).toContain("Outros");
	});
});
