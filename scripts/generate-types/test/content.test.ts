import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "@scripts/generate-types/src/@types/generation";
import {
	generateCollectionBaseInterface,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
	generateCollectionTypes,
	generateContent,
	generateContentForCollections,
	generateFileHeader,
	generateSplitFiles,
} from "@scripts/generate-types/src/generation/content";
import { describe, expect, it } from "vitest";

describe("content", () => {
	describe("generateFileHeader", () => {
		it("deve gerar header padrão", () => {
			const header = generateFileHeader();
			expect(header).toContain("Arquivo gerado automaticamente");
			expect(header).toContain("NÃO EDITAR MANUALMENTE");
			expect(header).toContain("pnpm generate-types");
			expect(header).toContain("biome-ignore-all");
		});
	});

	describe("generateCollectionBaseInterface", () => {
		it("deve gerar interface Base com apenas campos escalares", () => {
			const types: GeneratedTypes = {
				scalars: new Map([
					["id", "number"],
					["name", "string"],
				]),
				relations: new Map(),
			};

			const result = generateCollectionBaseInterface("User", types);

			expect(result).toContain("export interface UserBase {");
			expect(result).toContain("\tid: number;");
			expect(result).toContain("\tname: string;");
			expect(result).toContain("}");
		});

		it("deve gerar interface Base com campos escalares e relações one", () => {
			const types: GeneratedTypes = {
				scalars: new Map([["id", "number"]]),
				relations: new Map([
					[
						"company",
						{
							type: "m2o",
							targetCollection: "companies",
						},
					],
				]),
			};

			const result = generateCollectionBaseInterface("Contact", types);

			expect(result).toContain("export interface ContactBase {");
			expect(result).toContain("\tid: number;");
			expect(result).toContain("\tcompany: CompaniesBase | null;");
			expect(result).toContain("}");
		});

		it("não deve incluir relações many na interface Base", () => {
			const types: GeneratedTypes = {
				scalars: new Map([["id", "number"]]),
				relations: new Map([
					[
						"contacts",
						{
							type: "o2m",
							targetCollection: "contacts",
						},
					],
				]),
			};

			const result = generateCollectionBaseInterface("Company", types);

			expect(result).toContain("export interface CompanyBase {");
			expect(result).toContain("\tid: number;");
			expect(result).not.toContain("contacts");
		});

		it("deve ordenar campos alfabeticamente", () => {
			const types: GeneratedTypes = {
				scalars: new Map([
					["zulu", "string"],
					["alpha", "number"],
					["bravo", "boolean"],
				]),
				relations: new Map(),
			};

			const result = generateCollectionBaseInterface("Test", types);
			const lines = result.split("\n");

			expect(lines[1]).toContain("alpha");
			expect(lines[2]).toContain("bravo");
			expect(lines[3]).toContain("zulu");
		});
	});

	describe("generateCollectionRelationsInterface", () => {
		it("deve gerar type vazio quando não há relações", () => {
			const types: GeneratedTypes = {
				scalars: new Map([["id", "number"]]),
				relations: new Map(),
			};

			const result = generateCollectionRelationsInterface("User", types);

			expect(result).toBe("export type UserRelations = Record<string, never>;");
		});

		it("deve gerar interface Relations com todas as relações", () => {
			const types: GeneratedTypes = {
				scalars: new Map(),
				relations: new Map([
					[
						"company",
						{
							type: "m2o",
							targetCollection: "companies",
						},
					],
					[
						"tasks",
						{
							type: "o2m",
							targetCollection: "tasks",
						},
					],
				]),
			};

			const result = generateCollectionRelationsInterface("Contact", types);

			expect(result).toContain("export interface ContactRelations {");
			expect(result).toContain("\tcompany?: CompaniesBase | null;");
			expect(result).toContain("\ttasks?: TasksBase[];");
			expect(result).toContain("}");
		});

		it("deve tornar todos os campos opcionais", () => {
			const types: GeneratedTypes = {
				scalars: new Map(),
				relations: new Map([
					[
						"owner",
						{
							type: "m2o",
							targetCollection: "users",
						},
					],
				]),
			};

			const result = generateCollectionRelationsInterface("Task", types);

			expect(result).toContain("\towner?: UsersBase | null;");
		});
	});

	describe("generateCollectionRelationKeyType", () => {
		it("deve gerar tipo RelationKey em linha única quando curto", () => {
			const result = generateCollectionRelationKeyType("User");

			expect(result).toBe("export type UserRelationKey = keyof UserRelations;");
		});

		it("deve gerar tipo RelationKey em múltiplas linhas quando longo", () => {
			const longName =
				"VeryLongCollectionNameThatExceedsTheEightyCharacterLimit";
			const result = generateCollectionRelationKeyType(longName);

			expect(result).toContain(`export type ${longName}RelationKey =`);
			expect(result).toContain(`\tkeyof ${longName}Relations;`);
		});
	});

	describe("generateCollectionTypes", () => {
		it("deve gerar definição completa de tipos para uma collection", () => {
			const types: GeneratedTypes = {
				scalars: new Map([
					["id", "number"],
					["name", "string"],
				]),
				relations: new Map([
					[
						"company",
						{
							type: "m2o",
							targetCollection: "companies",
						},
					],
				]),
			};

			const result = generateCollectionTypes("Contact", types);

			expect(result).toContain("export interface ContactBase {");
			expect(result).toContain("export interface ContactRelations {");
			expect(result).toContain("export type ContactRelationKey =");
		});
	});

	describe("generateContentForCollections", () => {
		it("deve gerar conteúdo sem header quando includeHeader=false", () => {
			const collections: CollectionTypesMap = {
				users: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
			};

			const result = generateContentForCollections(collections, false);

			expect(result).not.toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});

		it("deve gerar conteúdo com header quando includeHeader=true", () => {
			const collections: CollectionTypesMap = {
				users: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
			};

			const result = generateContentForCollections(collections, true);

			expect(result).toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});

		it("deve usar includeHeader=true por padrão", () => {
			const collections: CollectionTypesMap = {
				users: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
			};

			const result = generateContentForCollections(collections);

			expect(result).toContain("Arquivo gerado automaticamente");
		});

		it("deve gerar múltiplas collections em ordem alfabética", () => {
			const collections: CollectionTypesMap = {
				zulu: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
				alpha: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
			};

			const result = generateContentForCollections(collections, false);
			const zuluIndex = result.indexOf("export interface ZuluBase");
			const alphaIndex = result.indexOf("export interface AlphaBase");

			expect(alphaIndex).toBeLessThan(zuluIndex);
		});

		it("deve separar collections com linha vazia", () => {
			const collections: CollectionTypesMap = {
				users: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
				companies: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
			};

			const result = generateContentForCollections(collections, false);

			expect(result).toContain(
				"export type CompaniesRelationKey = keyof CompaniesRelations;\n\nexport interface UsersBase {",
			);
		});
	});

	describe("generateSplitFiles", () => {
		it("deve gerar múltiplos arquivos com headers", () => {
			const splitCollections = new Map<string, CollectionTypesMap>([
				[
					"users",
					{
						users: {
							scalars: new Map([["id", "number"]]),
							relations: new Map(),
						},
					},
				],
				[
					"companies",
					{
						companies: {
							scalars: new Map([["id", "number"]]),
							relations: new Map(),
						},
					},
				],
			]);

			const result = generateSplitFiles(splitCollections);

			expect(result.size).toBe(2);
			expect(result.has("users")).toBe(true);
			expect(result.has("companies")).toBe(true);

			const usersContent = result.get("users");
			expect(usersContent).toContain("Arquivo gerado automaticamente");
			expect(usersContent).toContain("export interface UsersBase {");

			const companiesContent = result.get("companies");
			expect(companiesContent).toContain("Arquivo gerado automaticamente");
			expect(companiesContent).toContain("export interface CompaniesBase {");
		});

		it("deve gerar arquivo vazio quando não há collections", () => {
			const splitCollections = new Map<string, CollectionTypesMap>();

			const result = generateSplitFiles(splitCollections);

			expect(result.size).toBe(0);
		});

		it("deve suportar múltiplas collections por arquivo", () => {
			const splitCollections = new Map<string, CollectionTypesMap>([
				[
					"auth",
					{
						users: {
							scalars: new Map([["id", "number"]]),
							relations: new Map(),
						},
						roles: {
							scalars: new Map([["id", "number"]]),
							relations: new Map(),
						},
					},
				],
			]);

			const result = generateSplitFiles(splitCollections);

			expect(result.size).toBe(1);
			const authContent = result.get("auth");
			expect(authContent).toContain("export interface UsersBase {");
			expect(authContent).toContain("export interface RolesBase {");
		});
	});

	describe("generateContent", () => {
		it("deve gerar conteúdo completo com header (backward compatibility)", () => {
			const collections: CollectionTypesMap = {
				users: {
					scalars: new Map([["id", "number"]]),
					relations: new Map(),
				},
			};

			const result = generateContent(collections);

			expect(result).toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});
	});
});
