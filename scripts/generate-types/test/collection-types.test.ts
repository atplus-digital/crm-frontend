import type { NocoBaseCollection } from "@scripts/generate-types/src/@types/nocobase";
import { buildCollectionTypes } from "@scripts/generate-types/src/generation/collection-types";
import { describe, expect, it } from "vitest";
import { createMockField } from "./setup";

describe("collection-types", () => {
	it("deve preservar targets de relações quando a collection existe no conjunto gerado", async () => {
		const client = {
			async fetchCollectionFields(collectionName: string) {
				if (collectionName === "users") {
					return [
						createMockField({
							name: "roles",
							type: "belongsToMany",
							interface: "m2m",
							target: "roles",
						}),
					];
				}

				return [];
			},
		};
		const collections: NocoBaseCollection[] = [
			{ name: "users" },
			{ name: "roles" },
		];

		const result = await buildCollectionTypes(client as never, collections);

		expect(result.users.relations.get("roles")).toEqual({
			type: "m2m",
			targetCollection: "roles",
		});
	});

	it("deve rebaixar o target para unknown quando a collection relacionada não está disponível", async () => {
		const client = {
			async fetchCollectionFields() {
				return [
					createMockField({
						name: "storage",
						type: "belongsTo",
						interface: null,
						target: "storages",
					}),
				];
			},
		};
		const collections: NocoBaseCollection[] = [{ name: "t_contratos" }];

		const result = await buildCollectionTypes(client as never, collections);

		expect(result.t_contratos.relations.get("storage")).toEqual({
			type: "belongsTo",
			targetCollection: "",
		});
	});

	it("deve incluir campos escalares quando não são relações", async () => {
		const client = {
			async fetchCollectionFields() {
				return [
					createMockField({
						name: "id",
						type: "snowflakeId",
						interface: "snowflakeId",
					}),
				];
			},
		};

		const result = await buildCollectionTypes(client as never, [
			{ name: "departments" },
		]);

		expect(result.departments.scalars.get("id")).toBe("number");
	});

	it("deve lançar erro quando duas collections colidem após normalização", async () => {
		const client = {
			async fetchCollectionFields() {
				return [];
			},
		};

		await expect(
			buildCollectionTypes(client as never, [{ name: "abc" }, { name: "t_abc" }]),
		).rejects.toThrow("Conflito de nomes após normalização");
	});

	it("deve lançar erro para entradas duplicadas com o mesmo nome de collection", async () => {
		const client = {
			async fetchCollectionFields() {
				return [];
			},
		};

		await expect(
			buildCollectionTypes(client as never, [{ name: "users" }, { name: "users" }]),
		).rejects.toThrow("Conflito de nomes após normalização: users");
	});
});
