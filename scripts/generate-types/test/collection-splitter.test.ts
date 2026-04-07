import { splitCollectionsByConfig } from "@scripts/generate-types/src/utils/collection-splitter";
import { describe, expect, it } from "vitest";
import { createMockCollectionTypesMap } from "./setup";

describe("splitCollectionsByConfig", () => {
	const mockCollections = createMockCollectionTypesMap({
		users: { scalars: { id: "number", email: "string" } },
		f_funcionarios: { scalars: { id: "number", nome: "string" } },
		t_negociacoes: { scalars: { id: "number", titulo: "string" } },
		t_outros: { scalars: { id: "number" } },
	});

	it("deve dividir collections corretamente", () => {
		const result = splitCollectionsByConfig(mockCollections, [
			"users",
			"f_funcionarios",
		]);

		// Verifica que as collections split estão no Map
		expect(result.splitCollections.size).toBe(2);
		expect(result.splitCollections.has("users")).toBe(true);
		expect(result.splitCollections.has("f_funcionarios")).toBe(true);

		// Verifica que cada collection split contém apenas sua própria definição
		const usersCollection = result.splitCollections.get("users");
		expect(usersCollection).toBeDefined();
		if (usersCollection) {
			expect(Object.keys(usersCollection)).toEqual(["users"]);
		}

		// Verifica que as collections não-split estão em mainCollections
		expect(Object.keys(result.mainCollections)).toEqual([
			"t_negociacoes",
			"t_outros",
		]);
	});

	it("deve retornar todas collections em mainCollections quando splitConfig está vazio", () => {
		const result = splitCollectionsByConfig(mockCollections, []);

		expect(result.splitCollections.size).toBe(0);
		expect(Object.keys(result.mainCollections)).toEqual([
			"users",
			"f_funcionarios",
			"t_negociacoes",
			"t_outros",
		]);
	});

	it("deve lidar corretamente quando collection em splitConfig não existe", () => {
		const result = splitCollectionsByConfig(mockCollections, [
			"users",
			"nao_existe",
			"outra_nao_existe",
		]);

		// Apenas "users" existe, então splitCollections deve ter tamanho 1
		expect(result.splitCollections.size).toBe(1);
		expect(result.splitCollections.has("users")).toBe(true);
		expect(result.splitCollections.has("nao_existe")).toBe(false);
		expect(result.splitCollections.has("outra_nao_existe")).toBe(false);

		// As outras collections devem estar em mainCollections
		expect(Object.keys(result.mainCollections)).toEqual([
			"f_funcionarios",
			"t_negociacoes",
			"t_outros",
		]);
	});

	it("deve preservar os dados das collections ao dividir", () => {
		const result = splitCollectionsByConfig(mockCollections, ["users"]);

		const usersCollection = result.splitCollections.get("users");
		expect(usersCollection?.users.scalars.get("id")).toBe("number");
		expect(usersCollection?.users.scalars.get("email")).toBe("string");

		expect(result.mainCollections.f_funcionarios.scalars.get("nome")).toBe(
			"string",
		);
	});

	it("deve retornar collections vazias quando allCollections está vazio", () => {
		const result = splitCollectionsByConfig({}, ["users", "f_funcionarios"]);

		expect(result.splitCollections.size).toBe(0);
		expect(Object.keys(result.mainCollections)).toEqual([]);
	});

	it("deve lidar com splitConfig contendo todas as collections", () => {
		const result = splitCollectionsByConfig(mockCollections, [
			"users",
			"f_funcionarios",
			"t_negociacoes",
			"t_outros",
		]);

		expect(result.splitCollections.size).toBe(4);
		expect(Object.keys(result.mainCollections)).toEqual([]);
	});
});
