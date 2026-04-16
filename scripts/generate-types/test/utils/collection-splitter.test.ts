import { splitCollectionsByConfig } from "@scripts/generate-types/src/utils/collection-splitter";
import { createMockCollectionTypesMap } from "@scripts/generate-types/test/setup";
import { describe, expect, it } from "vitest";

describe("splitCollectionsByConfig", () => {
	it("returns all collections to mainCollections when splitConfig is empty", () => {
		const collections = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			products: { scalars: { id: "string" } },
		});

		const result = splitCollectionsByConfig(collections, []);

		expect(result.mainCollections).toEqual(collections);
		expect(result.splitCollections.size).toBe(0);
	});

	it("splits matched collections to splitCollections and rest to mainCollections", () => {
		const collections = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			products: { scalars: { id: "string" } },
			orders: { scalars: { id: "string" } },
		});

		const result = splitCollectionsByConfig(collections, ["users", "orders"]);

		// Users and orders should be in splitCollections
		expect(result.splitCollections.has("users")).toBe(true);
		expect(result.splitCollections.has("orders")).toBe(true);
		expect(result.splitCollections.size).toBe(2);

		// Products should be in mainCollections
		expect(result.mainCollections).toHaveProperty("products");
		expect(result.mainCollections).not.toHaveProperty("users");
		expect(result.mainCollections).not.toHaveProperty("orders");
	});

	it("returns empty mainCollections when all collections match splitConfig", () => {
		const collections = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			products: { scalars: { id: "string" } },
		});

		const result = splitCollectionsByConfig(collections, ["users", "products"]);

		expect(Object.keys(result.mainCollections)).toHaveLength(0);
		expect(result.splitCollections.size).toBe(2);
		expect(result.splitCollections.has("users")).toBe(true);
		expect(result.splitCollections.has("products")).toBe(true);
	});

	it("returns all collections to mainCollections when no names match splitConfig", () => {
		const collections = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			products: { scalars: { id: "string" } },
		});

		const result = splitCollectionsByConfig(collections, [
			"orders",
			"categories",
		]);

		expect(result.mainCollections).toEqual(collections);
		expect(result.splitCollections.size).toBe(0);
	});

	it("handles duplicate collection names in splitConfig using Set behavior", () => {
		const collections = createMockCollectionTypesMap({
			users: { scalars: { id: "string" } },
			products: { scalars: { id: "string" } },
		});

		// Duplicate "users" in splitConfig
		const result = splitCollectionsByConfig(collections, [
			"users",
			"users",
			"users",
		]);

		// Should only appear once
		expect(result.splitCollections.size).toBe(1);
		expect(result.splitCollections.has("users")).toBe(true);
		expect(result.mainCollections).toHaveProperty("products");
	});

	it("stores split collections with correct structure", () => {
		const collections = createMockCollectionTypesMap({
			users: { scalars: { id: "string", name: "string" } },
			products: { scalars: { id: "number", price: "number" } },
		});

		const result = splitCollectionsByConfig(collections, ["users"]);

		// Verify the structure of the split collection
		const userCollection = result.splitCollections.get("users");
		expect(userCollection).toBeDefined();
		expect(userCollection).toHaveProperty("users");
		expect(userCollection?.users.scalars.get("id")).toBe("string");
		expect(userCollection?.users.scalars.get("name")).toBe("string");
	});

	it("uses collection name as Map key for split collections", () => {
		const collections = createMockCollectionTypesMap({
			t_users: { scalars: { id: "string" } },
			f_funcionarios: { scalars: { id: "string" } },
		});

		const result = splitCollectionsByConfig(collections, [
			"t_users",
			"f_funcionarios",
		]);

		// Map keys should match exact collection names
		const keys = Array.from(result.splitCollections.keys());
		expect(keys).toContain("t_users");
		expect(keys).toContain("f_funcionarios");
		expect(keys).toHaveLength(2);
	});

	it("preserves scalars and relations in split collections", () => {
		const collections = createMockCollectionTypesMap({
			users: {
				scalars: { id: "string", email: "string" },
				relations: {
					profile: { type: "belongsTo", targetCollection: "profiles" },
				},
			},
		});

		const result = splitCollectionsByConfig(collections, ["users"]);

		const userCollection = result.splitCollections.get("users");
		expect(userCollection).toBeDefined();

		const userTypes = userCollection?.users;
		expect(userTypes?.scalars.get("id")).toBe("string");
		expect(userTypes?.scalars.get("email")).toBe("string");

		const relation = userTypes?.relations.get("profile");
		expect(relation).toEqual({
			type: "belongsTo",
			targetCollection: "profiles",
		});
	});

	it("handles empty collections map", () => {
		const collections = createMockCollectionTypesMap({});

		const result = splitCollectionsByConfig(collections, ["users"]);

		expect(Object.keys(result.mainCollections)).toHaveLength(0);
		expect(result.splitCollections.size).toBe(0);
	});

	it("handles collections with only relations", () => {
		const collections = createMockCollectionTypesMap({
			users: {
				scalars: {},
				relations: {
					profile: { type: "belongsTo", targetCollection: "profiles" },
				},
			},
		});

		const result = splitCollectionsByConfig(collections, ["users"]);

		expect(result.splitCollections.has("users")).toBe(true);
		const userCollection = result.splitCollections.get("users");
		expect(userCollection?.users.relations.size).toBe(1);
	});
});
