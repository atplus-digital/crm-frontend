import {
	getRelationCardinality,
	renderRelationValueType,
	resolveRelationInterface,
} from "@scripts/generate-types/src/generation/relations";
import { describe, expect, it } from "vitest";

describe("relations - resolveRelationInterface", () => {
	it("deve resolver tipos de relação many-to-one", () => {
		expect(resolveRelationInterface("m2o")).toBe("m2o");
		expect(resolveRelationInterface("belongsto")).toBe("belongsTo");
		expect(resolveRelationInterface("BelongsTo")).toBe("belongsTo");
	});

	it("deve resolver tipos de relação one-to-many", () => {
		expect(resolveRelationInterface("o2m")).toBe("o2m");
		expect(resolveRelationInterface("hasmany")).toBe("hasMany");
		expect(resolveRelationInterface("HasMany")).toBe("hasMany");
	});

	it("deve resolver tipos de relação many-to-many", () => {
		expect(resolveRelationInterface("m2m")).toBe("m2m");
		expect(resolveRelationInterface("manytomany")).toBe("manyToMany");
		expect(resolveRelationInterface("ManyToMany")).toBe("manyToMany");
	});

	it("deve resolver tipos de relação especiais", () => {
		expect(resolveRelationInterface("oho")).toBe("oho");
		expect(resolveRelationInterface("obo")).toBe("obo");
		expect(resolveRelationInterface("mbm")).toBe("mbm");
		expect(resolveRelationInterface("belongstoarray")).toBe("belongsToArray");
	});

	it("deve retornar null para valores inválidos", () => {
		expect(resolveRelationInterface("invalid")).toBeNull();
		expect(resolveRelationInterface("xyz")).toBeNull();
		expect(resolveRelationInterface("")).toBeNull();
	});

	it("deve retornar null para valores null ou undefined", () => {
		expect(resolveRelationInterface(null)).toBeNull();
		expect(resolveRelationInterface(undefined)).toBeNull();
	});

	it("deve ignorar espaços em branco", () => {
		expect(resolveRelationInterface("  m2o  ")).toBe("m2o");
		expect(resolveRelationInterface("  belongsTo  ")).toBe("belongsTo");
	});

	it("deve ser case-insensitive", () => {
		expect(resolveRelationInterface("M2O")).toBe("m2o");
		expect(resolveRelationInterface("HASMANY")).toBe("hasMany");
	});
});

describe("relations - getRelationCardinality", () => {
	it("deve retornar 'many' para relações one-to-many", () => {
		expect(getRelationCardinality("o2m")).toBe("many");
		expect(getRelationCardinality("hasMany")).toBe("many");
	});

	it("deve retornar 'many' para relações many-to-many", () => {
		expect(getRelationCardinality("m2m")).toBe("many");
		expect(getRelationCardinality("manyToMany")).toBe("many");
	});

	it("deve retornar 'many' para relações especiais de array", () => {
		expect(getRelationCardinality("mbm")).toBe("many");
		expect(getRelationCardinality("belongsToArray")).toBe("many");
	});

	it("deve retornar 'one' para relações many-to-one", () => {
		expect(getRelationCardinality("m2o")).toBe("one");
		expect(getRelationCardinality("belongsTo")).toBe("one");
	});

	it("deve retornar 'one' para relações especiais one-to-one", () => {
		expect(getRelationCardinality("oho")).toBe("one");
		expect(getRelationCardinality("obo")).toBe("one");
	});
});

describe("relations - renderRelationValueType", () => {
	it("deve renderizar tipo array para cardinalidade 'many'", () => {
		expect(renderRelationValueType("users", "many")).toBe("UsersBase[]");
		expect(renderRelationValueType("t_posts", "many")).toBe("PostsBase[]");
	});

	it("deve renderizar tipo nullable para cardinalidade 'one'", () => {
		expect(renderRelationValueType("users", "one")).toBe("UsersBase | null");
		expect(renderRelationValueType("t_posts", "one")).toBe("PostsBase | null");
	});

	it("deve retornar 'unknown[]' para coleção vazia com cardinalidade 'many'", () => {
		expect(renderRelationValueType("", "many")).toBe("unknown[]");
		expect(renderRelationValueType("   ", "many")).toBe("unknown[]");
	});

	it("deve retornar 'unknown | null' para coleção vazia com cardinalidade 'one'", () => {
		expect(renderRelationValueType("", "one")).toBe("unknown | null");
		expect(renderRelationValueType("   ", "one")).toBe("unknown | null");
	});

	it("deve fazer trim do nome da coleção", () => {
		expect(renderRelationValueType("  users  ", "many")).toBe("UsersBase[]");
		expect(renderRelationValueType("  users  ", "one")).toBe(
			"UsersBase | null",
		);
	});
});
