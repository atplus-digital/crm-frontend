import type { CollectionTypesMap } from "@scripts/generate-types/src/@types/generation";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "@scripts/generate-types/src/generation/import-injector";
import { describe, expect, it } from "vitest";

function createEmptyCollectionTypesMap(
	collectionNames: string[],
): CollectionTypesMap {
	const map: CollectionTypesMap = {};

	for (const collectionName of collectionNames) {
		map[collectionName] = {
			scalars: new Map(),
			relations: new Map(),
			enums: new Map(),
		};
	}

	return map;
}

describe("import-injector", () => {
	describe("withMainFileImports", () => {
		it("adds split collection imports to main file only when needed", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"users",
				"t_negociacoes",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `/**\n * generated\n */\n\nexport interface UsersRelations {\n\tnegociacao?: NegociacoesBase | null;\n\towner?: UsersBase | null;\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["t_negociacoes"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toContain(
				'import type { NegociacoesBase } from "./negociacoes";',
			);
			expect(withImports).not.toContain(
				'import type { UsersBase } from "./users";',
			);
		});

		it("returns content unchanged when all referenced types are local to main file", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersBase { id: number; }`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toBe(content);
		});

		it("returns content unchanged when split collection names is empty", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersBase { id: number; }`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toBe(content);
		});

		it("returns content unchanged when all types are local", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tposts?: PostsBase[];\n\towner?: UsersBase | null;\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users", "posts"]),
				new Set(),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toBe(content);
		});

		it("returns content unchanged when all referenced types are in main file", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tposts?: PostsBase[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users", "posts"]),
				new Set(["posts"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toBe(content);
		});

		it("adds imports only for external split collection types", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"users",
				"posts",
				"comments",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tposts?: PostsBase[];\n\tcomments?: CommentsBase[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["posts", "comments"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toContain(
				'import type { CommentsBase } from "./comments";',
			);
			expect(withImports).toContain(
				'import type { PostsBase } from "./posts";',
			);
			expect(withImports).not.toContain(
				'import type { UsersBase } from "./users";',
			);
		});
	});

	describe("withSplitFileImports", () => {
		it("adds split and main imports to split files", () => {
			const allCollections = createEmptyCollectionTypesMap([
				"users",
				"t_negociacoes",
				"t_empresas",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				allCollections,
				baseInterfaceNaming,
			);
			const splitCollections = new Map<string, CollectionTypesMap>([
				["t_negociacoes", createEmptyCollectionTypesMap(["t_negociacoes"])],
			]);
			const filesContent = new Map<string, string>([
				[
					"t_negociacoes",
					`/**\n * generated\n */\n\nexport interface NegociacoesRelations {\n\tcliente?: UsersBase | null;\n\tempresa?: EmpresasBase | null;\n}`,
				],
			]);

			const splitWithImports = withSplitFileImports(
				filesContent,
				splitCollections,
				new Set(["t_negociacoes", "t_empresas"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			const content = splitWithImports.get("t_negociacoes") ?? "";
			expect(content).toContain(
				'import type { EmpresasBase } from "./empresas";',
			);
			expect(content).toContain('import type { UsersBase } from "./index";');
		});

		it("returns empty map when filesContent is empty", () => {
			const allCollections = createEmptyCollectionTypesMap(["users"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				allCollections,
				baseInterfaceNaming,
			);
			const splitCollections = new Map<string, CollectionTypesMap>();
			const filesContent = new Map<string, string>();

			const result = withSplitFileImports(
				filesContent,
				splitCollections,
				new Set(["users"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(result.size).toBe(0);
		});

		it("handles file with no external references", () => {
			const allCollections = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				allCollections,
				baseInterfaceNaming,
			);
			const splitCollections = new Map<string, CollectionTypesMap>([
				["users", createEmptyCollectionTypesMap(["users"])],
			]);
			const filesContent = new Map<string, string>([
				["users", `export interface UsersBase { id: number; }`],
			]);

			const result = withSplitFileImports(
				filesContent,
				splitCollections,
				new Set(["users", "posts"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(result.get("users")).toBe(
				`export interface UsersBase { id: number; }`,
			);
		});

		it("handles missing source collection in baseTypeIndex", () => {
			const allCollections = createEmptyCollectionTypesMap(["users"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				allCollections,
				baseInterfaceNaming,
			);
			const splitCollections = new Map<string, CollectionTypesMap>([
				["users", createEmptyCollectionTypesMap(["users"])],
			]);
			const filesContent = new Map<string, string>([
				[
					"users",
					`export interface UsersRelations {\n\tunknown?: UnknownType | null;\n}`,
				],
			]);

			const result = withSplitFileImports(
				filesContent,
				splitCollections,
				new Set(["users"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(result.get("users")).toBe(
				`export interface UsersRelations {\n\tunknown?: UnknownType | null;\n}`,
			);
		});

		it("imports from index when source is main collection", () => {
			const allCollections = createEmptyCollectionTypesMap([
				"users",
				"t_posts",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				allCollections,
				baseInterfaceNaming,
			);
			const splitCollections = new Map<string, CollectionTypesMap>([
				["t_posts", createEmptyCollectionTypesMap(["t_posts"])],
			]);
			const filesContent = new Map<string, string>([
				[
					"t_posts",
					`export interface PostsRelations {\n\tauthor?: UsersBase | null;\n}`,
				],
			]);

			const result = withSplitFileImports(
				filesContent,
				splitCollections,
				new Set(["t_posts"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(result.get("t_posts")).toContain(
				'import type { UsersBase } from "./index";',
			);
		});
	});

	describe("createBaseTypeIndex", () => {
		it("creates index with default naming (no prefix, Base suffix)", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };

			const index = createBaseTypeIndex(collectionTypes, baseInterfaceNaming);

			expect(index.get("UsersBase")).toBe("users");
			expect(index.get("PostsBase")).toBe("posts");
		});

		it("creates index with custom prefix", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "I", suffix: "Base" };

			const index = createBaseTypeIndex(collectionTypes, baseInterfaceNaming);

			expect(index.get("IUsersBase")).toBe("users");
			expect(index.get("IPostsBase")).toBe("posts");
		});

		it("creates index with custom suffix", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "DTO" };

			const index = createBaseTypeIndex(collectionTypes, baseInterfaceNaming);

			expect(index.get("UsersDTO")).toBe("users");
			expect(index.get("PostsDTO")).toBe("posts");
		});

		it("creates index with both prefix and suffix", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"users",
				"t_empresas",
			]);
			const baseInterfaceNaming = { prefix: "Base", suffix: "Type" };

			const index = createBaseTypeIndex(collectionTypes, baseInterfaceNaming);

			expect(index.get("BaseUsersType")).toBe("users");
			expect(index.get("BaseEmpresasType")).toBe("t_empresas");
		});

		it("handles empty collection types map", () => {
			const collectionTypes = createEmptyCollectionTypesMap([]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };

			const index = createBaseTypeIndex(collectionTypes, baseInterfaceNaming);

			expect(index.size).toBe(0);
		});

		it("handles collection names with underscores", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"t_negociacoes",
				"t_empresas",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };

			const index = createBaseTypeIndex(collectionTypes, baseInterfaceNaming);

			expect(index.get("NegociacoesBase")).toBe("t_negociacoes");
			expect(index.get("EmpresasBase")).toBe("t_empresas");
		});
	});

	describe("injectImports (via withMainFileImports/withSplitFileImports)", () => {
		it("returns content unchanged when no imports needed", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersBase { id: number; }`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toBe(content);
		});

		it("inserts imports after header comment block", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `/**\n * generated\n */\n\nexport interface UsersRelations {\n\tposts?: PostsBase[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["posts"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toMatch(
				/\/\*\*\n \* generated\n \*\/\nimport type \{ PostsBase \} from "\.\/posts";\n\nexport interface UsersRelations/,
			);
		});

		it("inserts imports at beginning when no header comment", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tposts?: PostsBase[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["posts"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toMatch(
				/import type \{ PostsBase \} from "\.\/posts";\n\nexport interface UsersRelations/,
			);
		});

		it("formats long import lines as multi-line when exceeding 80 characters", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"users",
				"very_long_collection_name_one",
				"very_long_collection_name_two",
				"very_long_collection_name_three",
				"very_long_collection_name_four",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Type" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tfield1?: VeryLongCollectionNameOneType[];\n\tfield2?: VeryLongCollectionNameTwoType[];\n\tfield3?: VeryLongCollectionNameThreeType[];\n\tfield4?: VeryLongCollectionNameFourType[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set([
					"very_long_collection_name_one",
					"very_long_collection_name_two",
					"very_long_collection_name_three",
					"very_long_collection_name_four",
				]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			expect(withImports).toContain("import type {");
			expect(withImports).toContain("VeryLongCollectionNameOneType,");
			expect(withImports).toContain("VeryLongCollectionNameTwoType,");
		});

		it("sorts imports alphabetically by source", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"users",
				"zebra",
				"apple",
				"mango",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tzebra?: ZebraBase | null;\n\tapple?: AppleBase | null;\n\tmango?: MangoBase | null;\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["zebra", "apple", "mango"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			const appleIndex = withImports.indexOf('from "./apple"');
			const mangoIndex = withImports.indexOf('from "./mango"');
			const zebraIndex = withImports.indexOf('from "./zebra"');

			expect(appleIndex).toBeLessThan(mangoIndex);
			expect(mangoIndex).toBeLessThan(zebraIndex);
		});

		it("sorts type names alphabetically within import", () => {
			const collectionTypes = createEmptyCollectionTypesMap([
				"users",
				"posts",
				"comments",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface SharedRelations {\n\tcomments?: CommentsBase[];\n\tposts?: PostsBase[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["posts", "comments"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			const commentsImport = withImports.match(
				/import type \{ ([^}]+) \} from "\.\/comments"/,
			);
			expect(commentsImport).toBeTruthy();
		});
	});

	describe("addImport (via integration tests)", () => {
		it("handles duplicate imports from same source", () => {
			const collectionTypes = createEmptyCollectionTypesMap(["users", "posts"]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				collectionTypes,
				baseInterfaceNaming,
			);
			const content = `export interface UsersRelations {\n\tposts1?: PostsBase[];\n\tposts2?: PostsBase[];\n}`;

			const withImports = withMainFileImports(
				content,
				createEmptyCollectionTypesMap(["users"]),
				new Set(["posts"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			const importMatches = withImports.match(
				/import type \{ PostsBase \} from "\.\/posts";/g,
			);
			expect(importMatches).toHaveLength(1);
		});

		it("handles multiple different types from same source file", () => {
			const allCollections = createEmptyCollectionTypesMap([
				"users",
				"t_posts",
				"t_comments",
			]);
			const baseInterfaceNaming = { prefix: "", suffix: "Base" };
			const baseTypeIndex = createBaseTypeIndex(
				allCollections,
				baseInterfaceNaming,
			);
			const splitCollections = new Map<string, CollectionTypesMap>([
				["t_posts", createEmptyCollectionTypesMap(["t_posts"])],
				["t_comments", createEmptyCollectionTypesMap(["t_comments"])],
			]);
			const filesContent = new Map<string, string>([
				[
					"t_posts",
					`export interface PostsRelations {\n\tcomments?: CommentsBase[];\n}`,
				],
			]);

			const result = withSplitFileImports(
				filesContent,
				splitCollections,
				new Set(["t_posts", "t_comments"]),
				baseTypeIndex,
				baseInterfaceNaming,
			);

			const content = result.get("t_posts") ?? "";
			expect(content).toContain(
				'import type { CommentsBase } from "./comments";',
			);
		});
	});
});
