import { generateIndexFileWithReexports } from "@scripts/generate-types/src/generation/split-index";
import { describe, expect, it } from "vitest";

describe("split-index", () => {
	it("re-exports stripped names based on base naming config", () => {
		const content = generateIndexFileWithReexports(["t_empresas", "users"], {
			prefix: "",
			suffix: "Base",
		});

		expect(content).toContain(
			'export type { Empresas, EmpresasRelations, EmpresasRelationKey } from "./empresas";',
		);
		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
	});

	it("returns only header when splitCollectionNames is empty", () => {
		const content = generateIndexFileWithReexports([], {
			prefix: "",
			suffix: "Base",
		});

		expect(content).toMatchInlineSnapshot(`
      "/**
       * Arquivo gerado automaticamente
       * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
       * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
       */
      "
    `);
		expect(content).not.toContain("export type");
	});

	it("generates exports for multiple collections", () => {
		const content = generateIndexFileWithReexports(
			["t_empresas", "users", "t_negociacoes"],
			{
				prefix: "",
				suffix: "Base",
			},
		);

		expect(content).toContain(
			'export type { Empresas, EmpresasRelations, EmpresasRelationKey } from "./empresas";',
		);
		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
		expect(content).toContain(
			'export type { Negociacoes, NegociacoesRelations, NegociacoesRelationKey } from "./negociacoes";',
		);
	});

	it("sorts exports alphabetically", () => {
		const content = generateIndexFileWithReexports(
			["zebra", "alpha", "middle"],
			{
				prefix: "",
				suffix: "Base",
			},
		);

		const alphaIndex = content.indexOf("export type { Alpha");
		const middleIndex = content.indexOf("export type { Middle");
		const zebraIndex = content.indexOf("export type { Zebra");

		expect(alphaIndex).toBeLessThan(middleIndex);
		expect(middleIndex).toBeLessThan(zebraIndex);
	});

	it("handles prefix only configuration", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "I",
			suffix: "",
		});

		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
	});

	it("handles suffix only configuration", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "",
			suffix: "Base",
		});

		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
	});

	it("handles both prefix and suffix configuration", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "I",
			suffix: "Base",
		});

		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
	});

	it("handles neither prefix nor suffix configuration", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "",
			suffix: "",
		});

		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
	});

	it("strips prefix from base type name when deriving export", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "I",
			suffix: "",
		});

		const baseTypeName = "IUsers";
		expect(content).not.toContain(`export type { ${baseTypeName}`);
		expect(content).toContain("export type { Users");
	});

	it("strips suffix from base type name when deriving export", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "",
			suffix: "Base",
		});

		const baseTypeName = "UsersBase";
		expect(content).not.toContain(`export type { ${baseTypeName}`);
		expect(content).toContain("export type { Users");
	});

	it("strips both prefix and suffix from base type name", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "I",
			suffix: "Base",
		});

		const baseTypeName = "IUsersBase";
		expect(content).not.toContain(`export type { ${baseTypeName}`);
		expect(content).toContain("export type { Users");
	});

	it("includes file header in generated content", () => {
		const content = generateIndexFileWithReexports(["t_users"], {
			prefix: "",
			suffix: "Base",
		});

		expect(content).toContain("Arquivo gerado automaticamente");
		expect(content).toContain(
			"NÃO EDITAR MANUALMENTE - usar: pnpm generate-types",
		);
		expect(content).toContain(
			"biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated",
		);
	});

	it("converts collection names to kebab-case file names", () => {
		const content = generateIndexFileWithReexports(
			["t_user_roles", "f_departamentos"],
			{
				prefix: "",
				suffix: "Base",
			},
		);

		expect(content).toContain('from "./user-roles"');
		expect(content).toContain('from "./departamentos"');
	});

	it("handles single collection", () => {
		const content = generateIndexFileWithReexports(["t_empresas"], {
			prefix: "",
			suffix: "Base",
		});

		const exportCount = (content.match(/export type \{/g) || []).length;
		expect(exportCount).toBe(1);
		expect(content).toContain(
			'export type { Empresas, EmpresasRelations, EmpresasRelationKey } from "./empresas";',
		);
	});
});
