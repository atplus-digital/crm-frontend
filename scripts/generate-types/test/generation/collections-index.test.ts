import {
	generateCollectionMapInterface,
	generateCollectionNameUnion,
	generateCollectionRelationsMapInterface,
	generateCollectionsConst,
	generateCollectionsFile,
} from "@scripts/generate-types/src/generation/collections-index";
import { createMockCollectionTypesMap } from "@scripts/generate-types/test/setup";
import { describe, expect, it } from "vitest";

describe("generateCollectionNameUnion", () => {
	it("returns 'never' for empty array", () => {
		const result = generateCollectionNameUnion([]);
		expect(result).toBe("never");
	});

	it("returns inline format for ≤5 items", () => {
		const result = generateCollectionNameUnion(["a", "b", "c"]);
		expect(result).toBe('"a" | "b" | "c"');
	});

	it("returns multiline format for >5 items", () => {
		const result = generateCollectionNameUnion([
			"users",
			"roles",
			"departments",
			"projects",
			"tasks",
			"comments",
		]);
		expect(result).toContain('| "comments"');
		expect(result).toContain('| "departments"');
		expect(result).toContain('| "projects"');
		expect(result).toContain('| "roles"');
		expect(result).toContain('| "tasks"');
		expect(result).toContain('| "users"');
	});

	it("sorts collection names alphabetically", () => {
		const result = generateCollectionNameUnion(["zebra", "alpha", "beta"]);
		expect(result).toBe('"alpha" | "beta" | "zebra"');
	});

	it("returns correct format for exactly 5 items", () => {
		const result = generateCollectionNameUnion([
			"users",
			"roles",
			"departments",
			"projects",
			"tasks",
		]);
		expect(result).toBe(
			'"departments" | "projects" | "roles" | "tasks" | "users"',
		);
	});

	it("returns correct format for 6 items (first multiline)", () => {
		const result = generateCollectionNameUnion([
			"users",
			"roles",
			"departments",
			"projects",
			"tasks",
			"comments",
		]);
		// Should start with a tab and leading |
		expect(result).toMatch(/^\t\|/);
	});
});

describe("generateCollectionMapInterface", () => {
	it("returns empty interface for empty map", () => {
		const result = generateCollectionMapInterface({});
		expect(result).toBe("export interface CollectionMap {}");
	});

	it("generates interface with entries sorted alphabetically", () => {
		const map = createMockCollectionTypesMap({
			zebra: { scalars: { id: "string" } },
			alpha: { scalars: { id: "string" } },
			beta: { scalars: { id: "string" } },
		});

		const result = generateCollectionMapInterface(map);

		// Should be sorted alphabetically
		const alphaIndex = result.indexOf('"alpha"');
		const betaIndex = result.indexOf('"beta"');
		const zebraIndex = result.indexOf('"zebra"');

		expect(alphaIndex).toBeLessThan(betaIndex);
		expect(betaIndex).toBeLessThan(zebraIndex);
	});

	it("uses toCollectionBaseTypeName for type names", () => {
		const map = createMockCollectionTypesMap({
			"users-list": { scalars: { id: "string" } },
		});

		const result = generateCollectionMapInterface(map);

		expect(result).toContain('"users-list": UsersListBase;');
	});

	it("uses correct semicolons after type references", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionMapInterface(map);

		expect(result).toContain('"users": UsersBase;');
	});

	it("uses namespace prefix when useNamespacePrefix is true", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionMapInterface(map, {}, true);

		expect(result).toContain('"users": Types.UsersBase;');
	});

	it("uses custom base interface naming config", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionMapInterface(map, {
			prefix: "T",
			suffix: "Dto",
		});

		expect(result).toContain('"users": TUsersDto;');
	});
});

describe("generateCollectionRelationsMapInterface", () => {
	it("returns empty interface for empty map", () => {
		const result = generateCollectionRelationsMapInterface({});
		expect(result).toBe("export interface CollectionRelationsMap {}");
	});

	it("sorts entries alphabetically by collection name", () => {
		const map = createMockCollectionTypesMap({
			zebra: { scalars: { id: "string" } },
			alpha: { scalars: { id: "string" } },
			beta: { scalars: { id: "string" } },
		});

		const result = generateCollectionRelationsMapInterface(map);

		const alphaIndex = result.indexOf('"alpha"');
		const betaIndex = result.indexOf('"beta"');
		const zebraIndex = result.indexOf('"zebra"');

		expect(alphaIndex).toBeLessThan(betaIndex);
		expect(betaIndex).toBeLessThan(zebraIndex);
	});

	it("derives 'XRelations' from base name (removes 'Base' suffix)", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionRelationsMapInterface(map);

		expect(result).toContain('"users": UsersRelations;');
	});

	it("uses namespace prefix when useNamespacePrefix is true", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionRelationsMapInterface(map, true);

		expect(result).toContain('"users": Types.UsersRelations;');
	});

	it("handles collection names with hyphens correctly", () => {
		const map = createMockCollectionTypesMap({
			"users-list": { scalars: { id: "string" } },
		});

		const result = generateCollectionRelationsMapInterface(map);

		expect(result).toContain('"users-list": UsersListRelations;');
	});
});

describe("generateCollectionsConst", () => {
	it("returns empty const for empty array", () => {
		const result = generateCollectionsConst([]);
		expect(result).toBe("export const COLLECTIONS = [] as const;");
	});

	it("returns single line for ≤10 items", () => {
		const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
		const result = generateCollectionsConst(names);

		expect(result).toBe(
			'export const COLLECTIONS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"] as const;',
		);
	});

	it("returns multiline for >10 items", () => {
		const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
		const result = generateCollectionsConst(names);

		expect(result).toContain("export const COLLECTIONS = [");
		expect(result).toContain('\t"a",');
		expect(result).toContain('\t"k"');
		expect(result).toContain("] as const;");
	});

	it("sorts collection names alphabetically", () => {
		const result = generateCollectionsConst(["zebra", "alpha", "beta"]);
		expect(result).toBe(
			'export const COLLECTIONS = ["alpha", "beta", "zebra"] as const;',
		);
	});

	it("handles exactly 10 items in single line", () => {
		const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
		const result = generateCollectionsConst(names);

		expect(result).not.toContain("export const COLLECTIONS = [\n");
		expect(result).toContain(
			'"1", "10", "2", "3", "4", "5", "6", "7", "8", "9"',
		);
	});

	it("handles 11 items in multiline", () => {
		const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
		const result = generateCollectionsConst(names);

		expect(result).toContain("export const COLLECTIONS = [");
		expect(result).toContain("] as const;");
	});
});

describe("generateCollectionsFile", () => {
	it("includes imports from split files when splitCollectionNames provided", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			t_negociacoes: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map, {}, ["t_negociacoes"]);

		expect(result).toContain(
			'import type { Negociacoes, NegociacoesRelations } from "./negociacoes";',
		);
	});

	it("does not include imports when splitCollectionNames is empty", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map, {}, []);

		expect(result).not.toContain("import type");
	});

	it("includes CollectionName type union", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			sites: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map);

		expect(result).toContain("export type CollectionName");
		expect(result).toContain('"sites"');
		expect(result).toContain('"users"');
	});

	it("includes CollectionMap interface", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map);

		expect(result).toContain("export interface CollectionMap {");
		expect(result).toContain('"users": UsersBase;');
	});

	it("includes CollectionRelationsMap interface", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map);

		expect(result).toContain("export interface CollectionRelationsMap {");
		expect(result).toContain('"users": UsersRelations;');
	});

	it("includes COLLECTIONS const", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map);

		expect(result).toContain("export const COLLECTIONS");
		expect(result).toContain('"users"');
	});

	it("includes file header", () => {
		const map = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map);

		expect(result).toContain("/**");
		expect(result).toContain("Arquivo gerado automaticamente");
		expect(result).toContain("*/");
	});

	it("sorts split collection imports", () => {
		const map = createMockCollectionTypesMap({
			t_zebra: { scalars: { id: "string" } },
			t_alpha: { scalars: { id: "string" } },
			t_beta: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(map, {}, [
			"t_zebra",
			"t_alpha",
			"t_beta",
		]);

		const alphaIndex = result.indexOf('"./alpha"');
		const betaIndex = result.indexOf('"./beta"');
		const zebraIndex = result.indexOf('"./zebra"');

		expect(alphaIndex).toBeLessThan(betaIndex);
		expect(betaIndex).toBeLessThan(zebraIndex);
	});

	it("uses custom base interface naming for imports", () => {
		const map = createMockCollectionTypesMap({
			t_users: { scalars: { id: "string" } },
		});

		const result = generateCollectionsFile(
			map,
			{ prefix: "T", suffix: "Dto" },
			["t_users"],
		);

		// With custom naming {prefix: "T", suffix: "Dto"}, base type becomes TUsersDto
		// The code only strips "Base" suffix, so import uses TUsersDto directly
		expect(result).toContain(
			'import type { TUsersDto, TUsersDtoRelations } from "./users";',
		);
	});
});
