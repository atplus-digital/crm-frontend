import type { CollectionTypesMap } from "@scripts/generate-types/src/@types/generation";
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
} from "./setup";

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
			const types = createMockGeneratedTypes({ id: "number", name: "string" });
			const result = generateCollectionBaseInterface("User", types);

			expect(result).toContain("export interface UserBase {");
			expect(result).toContain("\tid: number;");
			expect(result).toContain("\tname: string;");
			expect(result).toContain("}");
		});

		it("deve manter apenas campos escalares na interface Base", () => {
			const types = createMockGeneratedTypes(
				{ id: "number" },
				{ company: { type: "m2o", targetCollection: "companies" } },
			);
			const result = generateCollectionBaseInterface("Contact", types);

			expect(result).toContain("export interface ContactBase {");
			expect(result).toContain("\tid: number;");
			expect(result).not.toContain("company");
			expect(result).toContain("}");
		});

		it("não deve incluir relações many na interface Base", () => {
			const types = createMockGeneratedTypes(
				{ id: "number" },
				{ contacts: { type: "o2m", targetCollection: "contacts" } },
			);
			const result = generateCollectionBaseInterface("Company", types);

			expect(result).toContain("export interface CompanyBase {");
			expect(result).toContain("\tid: number;");
			expect(result).not.toContain("contacts");
		});

		it("deve ordenar campos alfabeticamente", () => {
			const types = createMockGeneratedTypes({
				zulu: "string",
				alpha: "number",
				bravo: "boolean",
			});
			const result = generateCollectionBaseInterface("Test", types);
			const lines = result.split("\n");

			expect(lines[1]).toContain("alpha");
			expect(lines[2]).toContain("bravo");
			expect(lines[3]).toContain("zulu");
		});

		it("deve aplicar nomenclatura customizada na interface base", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionBaseInterface("users", types, {
				prefix: "I",
				suffix: "",
			});

			expect(result).toContain("export interface IUsers {");
		});
	});

	describe("generateCollectionRelationsInterface", () => {
		it("deve gerar type vazio quando não há relações", () => {
			const types = createMockGeneratedTypes({ id: "number" });
			const result = generateCollectionRelationsInterface("User", types);

			expect(result).toBe("export type UserRelations = Record<string, never>;");
		});

		it("deve gerar interface Relations com todas as relações", () => {
			const types = createMockGeneratedTypes(
				{},
				{
					company: { type: "m2o", targetCollection: "companies" },
					tasks: { type: "o2m", targetCollection: "tasks" },
				},
			);
			const result = generateCollectionRelationsInterface("Contact", types);

			expect(result).toContain("export interface ContactRelations {");
			expect(result).toContain("\tcompany?: CompaniesBase | null;");
			expect(result).toContain("\ttasks?: TasksBase[];");
			expect(result).toContain("}");
		});

		it("deve tornar todos os campos opcionais", () => {
			const types = createMockGeneratedTypes(
				{},
				{ owner: { type: "m2o", targetCollection: "users" } },
			);
			const result = generateCollectionRelationsInterface("Task", types);

			expect(result).toContain("\towner?: UsersBase | null;");
		});

		it("deve usar a nomenclatura customizada nas relações", () => {
			const types = createMockGeneratedTypes(
				{},
				{ owner: { type: "m2o", targetCollection: "users" } },
			);
			const result = generateCollectionRelationsInterface("Task", types, {
				prefix: "",
				suffix: "",
			});

			expect(result).toContain("\towner?: Users | null;");
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
			const types = createMockGeneratedTypes(
				{ id: "number", name: "string" },
				{ company: { type: "m2o", targetCollection: "companies" } },
			);
			const result = generateCollectionTypes("Contact", types);

			expect(result).toContain("export interface ContactBase {");
			expect(result).toContain("export interface ContactRelations {");
			expect(result).toContain("export type ContactRelationKey =");
		});
	});

	describe("generateContentForCollections", () => {
		it("deve gerar conteúdo sem header quando includeHeader=false", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, false);

			expect(result).not.toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});

		it("deve gerar conteúdo com header quando includeHeader=true", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, true);

			expect(result).toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});

		it("deve usar includeHeader=true por padrão", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections);

			expect(result).toContain("Arquivo gerado automaticamente");
		});

		it("deve gerar múltiplas collections em ordem alfabética", () => {
			const collections = createMockCollectionTypesMap({
				zulu: { scalars: { id: "number" } },
				alpha: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, false);
			const zuluIndex = result.indexOf("export interface ZuluBase");
			const alphaIndex = result.indexOf("export interface AlphaBase");

			expect(alphaIndex).toBeLessThan(zuluIndex);
		});

		it("deve separar collections com linha vazia", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
				companies: { scalars: { id: "number" } },
			});
			const result = generateContentForCollections(collections, false);

			expect(result).toContain(
				"export type CompaniesRelationKey = keyof CompaniesRelations;\n\nexport interface UsersBase {",
			);
		});
	});

	describe("generateSplitFiles", () => {
		it("deve gerar múltiplos arquivos com headers", () => {
			const splitCollections = new Map<string, CollectionTypesMap>();
			splitCollections.set(
				"users",
				createMockCollectionTypesMap({
					users: { scalars: { id: "number" } },
				}),
			);
			splitCollections.set(
				"companies",
				createMockCollectionTypesMap({
					companies: { scalars: { id: "number" } },
				}),
			);

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
			const splitCollections = new Map<string, CollectionTypesMap>();
			splitCollections.set(
				"auth",
				createMockCollectionTypesMap({
					users: { scalars: { id: "number" } },
					roles: { scalars: { id: "number" } },
				}),
			);

			const result = generateSplitFiles(splitCollections);

			expect(result.size).toBe(1);
			const authContent = result.get("auth");
			expect(authContent).toContain("export interface UsersBase {");
			expect(authContent).toContain("export interface RolesBase {");
		});
	});

	describe("generateContent", () => {
		it("deve gerar conteúdo completo com header (backward compatibility)", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateContent(collections);

			expect(result).toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});

		it("deve permitir gerar conteúdo sem prefixo e sem sufixo na interface base", () => {
			const collections = createMockCollectionTypesMap({
				users: {
					scalars: { id: "number" },
					relations: {
						manager: { type: "m2o", targetCollection: "users" },
					},
				},
			});
			const result = generateContentForCollections(collections, false, {
				prefix: "",
				suffix: "",
			});

			expect(result).toContain("export interface Users {");
			expect(result).toContain("\tmanager?: Users | null;");
		});
	});

	describe("generateTypeDefinitions", () => {
		it("deve gerar conteúdo sem header para compatibilidade retroativa", () => {
			const collections = createMockCollectionTypesMap({
				users: { scalars: { id: "number" } },
			});
			const result = generateTypeDefinitions(collections);

			expect(result).not.toContain("Arquivo gerado automaticamente");
			expect(result).toContain("export interface UsersBase {");
		});
	});
});
