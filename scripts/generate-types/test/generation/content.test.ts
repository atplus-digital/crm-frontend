import {
	generateCollectionBaseInterface,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
	generateCollectionTypes,
	generateContent,
	generateContentForCollections,
	generateFileHeader,
	generateSplitFiles,
	generateTypeDefinitions,
} from "@scripts/generate-types/src/generation/content";
import { describe, expect, it } from "vitest";
import {
	createMockCollectionTypesMap,
	createMockGeneratedTypes,
} from "../../test/setup";

describe("content", () => {
	describe("generateFileHeader", () => {
		it("returns the expected comment block", () => {
			const result = generateFileHeader();
			expect(result).toContain("Arquivo gerado automaticamente");
			expect(result).toContain("NÃO EDITAR MANUALMENTE");
			expect(result).toContain("biome-ignore-all");
		});
	});

	describe("generateCollectionBaseInterface", () => {
		it("generates 'export interface XBase {' format", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionBaseInterface("users", types);
			expect(result).toContain("export interface UsersBase {");
			expect(result).toContain("id: number;");
			expect(result).toContain("}");
		});

		it("sorts scalar entries by category then alphabetically", () => {
			const types = createMockGeneratedTypes({
				name: "string",
				id: "number",
				f_fk_department: "number | null",
			});
			const result = generateCollectionBaseInterface("users", types);
			const lines = result.split("\n");
			const idIndex = lines.findIndex((l) => l.includes("id:"));
			const fkIndex = lines.findIndex((l) => l.includes("f_fk_department:"));
			const nameIndex = lines.findIndex((l) => l.includes("name:"));
			expect(idIndex).toBeLessThan(fkIndex);
			expect(fkIndex).toBeLessThan(nameIndex);
		});

		it("handles empty scalars", () => {
			const types = createMockGeneratedTypes();
			const result = generateCollectionBaseInterface("users", types);
			expect(result).toBe(`export interface UsersBase {
}`);
		});

		it("applies base interface naming config", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionBaseInterface("users", types, {
				prefix: "I",
				suffix: "Dto",
			});
			expect(result).toContain("export interface IUsersDto {");
		});
	});

	describe("generateCollectionRelationsInterface", () => {
		it("generates 'export interface XRelations {' for non-empty relations", () => {
			const types = createMockGeneratedTypes(
				{},
				{ department: { targetCollection: "departments", type: "belongsTo" } },
			);
			const result = generateCollectionRelationsInterface("users", types);
			expect(result).toContain("export interface UsersRelations {");
			expect(result).toContain("department?:");
		});

		it("returns Record<string, never> for empty relations", () => {
			const types = createMockGeneratedTypes();
			const result = generateCollectionRelationsInterface("users", types);
			expect(result).toBe(
				"export type UsersRelations = Record<string, never>;",
			);
		});

		it("sorts relation entries alphabetically", () => {
			const types = createMockGeneratedTypes(
				{},
				{
					zebra: { targetCollection: "t_zebra", type: "belongsTo" },
					apple: { targetCollection: "t_apple", type: "belongsTo" },
				},
			);
			const result = generateCollectionRelationsInterface("users", types);
			const appleIndex = result.indexOf("apple?:");
			const zebraIndex = result.indexOf("zebra?:");
			expect(appleIndex).toBeLessThan(zebraIndex);
		});

		it("applies base interface naming config to relation types", () => {
			const types = createMockGeneratedTypes(
				{},
				{ dept: { targetCollection: "departments", type: "belongsTo" } },
			);
			const result = generateCollectionRelationsInterface("users", types, {
				prefix: "I",
				suffix: "Dto",
			});
			expect(result).toContain("IDepartmentsDto");
		});
	});

	describe("generateCollectionRelationKeyType", () => {
		it("keeps short names on one line", () => {
			const result = generateCollectionRelationKeyType("users");
			expect(result).toBe(
				"export type UsersRelationKey = keyof UsersRelations;",
			);
		});

		it("splits long names across multiple lines", () => {
			const result = generateCollectionRelationKeyType(
				"extremelyLongCollectionNameThatExceedsTheEightyCharacterLimitForSure",
			);
			expect(result).toContain("export type");
			expect(result).toContain("RelationKey =");
			expect(result).toContain("keyof");
		});
	});

	describe("generateCollectionTypes", () => {
		it("includes base interface + relations interface + relation key type", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionTypes("users", types);
			expect(result).toContain("export interface UsersBase");
			expect(result).toContain("export type UsersRelations");
			expect(result).toContain("export type UsersRelationKey");
		});

		it("optionally includes SOURCE_TABLE_NAME const", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionTypes("users", types, undefined, true);
			expect(result).toContain('USERS_TABLE_NAME = "users"');
		});

		it("does not include source table const by default", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionTypes("users", types);
			expect(result).not.toContain("TABLE_NAME");
		});

		it("normalizes special characters in source table const name", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionTypes(
				"user-roles",
				types,
				undefined,
				true,
			);
			expect(result).toContain("USER_ROLES_TABLE_NAME");
		});
	});

	describe("generateContentForCollections", () => {
		it("sorts collections alphabetically", () => {
			const collections = createMockCollectionTypesMap({
				z_collection: { scalars: { id: "number" } },
				a_collection: { scalars: { id: "number" } },
				m_collection: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, false);
			// Collection names are converted to PascalCase: a_collection → ACollection
			const aIndex = result.indexOf("export interface ACollectionBase");
			const mIndex = result.indexOf("export interface MCollectionBase");
			const zIndex = result.indexOf("export interface ZCollectionBase");
			expect(aIndex).toBeLessThan(mIndex);
			expect(mIndex).toBeLessThan(zIndex);
		});

		it("adds header when includeHeader is true", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, true);
			expect(result).toContain("Arquivo gerado automaticamente");
		});

		it("does not add header when includeHeader is false", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, false);
			expect(result).not.toContain("Arquivo gerado automaticamente");
		});

		it("handles empty map", () => {
			const collections = createMockCollectionTypesMap();
			const result = generateContentForCollections(collections, false);
			expect(result).toBe("");
		});

		it("separates multiple collections by blank lines", () => {
			const collections = createMockCollectionTypesMap({
				a_collection: { scalars: { id: "number" } },
				b_collection: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, false);
			// Check for blank line between collection types (type alias closes with })
			expect(result).toMatch(/}\n\nexport (interface|type)/);
		});

		it("passes includeSourceTableConst to generateCollectionTypes", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(
				collections,
				false,
				undefined,
				true,
			);
			expect(result).toContain("USERS_TABLE_NAME");
		});
	});

	describe("generateSplitFiles", () => {
		it("returns Map with correct fileName → content mapping", () => {
			const splitCollections = new Map([
				[
					"users",
					createMockCollectionTypesMap({
						users: { scalars: { id: "number" } },
					}),
				],
				[
					"departments",
					createMockCollectionTypesMap({
						departments: { scalars: { id: "number" } },
					}),
				],
			]);
			const result = generateSplitFiles(splitCollections);
			expect(result).toBeInstanceOf(Map);
			expect(result.has("users")).toBe(true);
			expect(result.has("departments")).toBe(true);
			expect(result.get("users")).toContain("UsersBase");
			expect(result.get("departments")).toContain("DepartmentsBase");
		});

		it("each file has header and includeSourceTableConst=true", () => {
			const splitCollections = new Map([
				[
					"users",
					createMockCollectionTypesMap({
						users: { scalars: { id: "number" } },
					}),
				],
			]);
			const result = generateSplitFiles(splitCollections);
			const content = result.get("users") ?? "";
			expect(content).toContain("Arquivo gerado automaticamente");
			expect(content).toContain("USERS_TABLE_NAME");
		});
	});

	describe("generateTypeDefinitions (deprecated)", () => {
		it("delegates to generateContentForCollections with includeHeader=false", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateTypeDefinitions(collections);
			expect(result).not.toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase");
		});
	});

	describe("generateContent", () => {
		it("delegates to generateContentForCollections with includeHeader=true", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContent(collections);
			expect(result).toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase");
		});
	});

	describe("field sorting", () => {
		it("correctly categorizes and sorts fields", () => {
			const types = createMockGeneratedTypes({
				id: "number",
				createdAt: "string",
				f_fk_owner: "number | null",
				f_id_empresa_ixc: "number | null",
				name: "string",
				updatedAt: "string",
			});
			const result = generateCollectionBaseInterface("users", types);
			const lines = result.split("\n");
			const fieldLines = lines.filter((line) => line.includes(":"));
			const fields = fieldLines.map((line) => line.trim().split(":")[0]);
			expect(fields).toEqual([
				"id",
				"f_fk_owner",
				"f_id_empresa_ixc",
				"name",
				"updatedAt",
				"createdAt",
			]);
		});

		it("sorts fields within same category alphabetically", () => {
			const types = createMockGeneratedTypes({
				f_fk_zebra: "number | null",
				f_fk_apple: "number | null",
				f_fk_mango: "number | null",
			});
			const result = generateCollectionBaseInterface("users", types);
			const lines = result.split("\n");
			const fieldLines = lines.filter((line) => line.includes(":"));
			const fields = fieldLines.map((line) => line.trim().split(":")[0]);
			expect(fields).toEqual(["f_fk_apple", "f_fk_mango", "f_fk_zebra"]);
		});
	});
});
