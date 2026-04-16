import { describe, expect, it } from "vitest";
import type { CollectionTypesMap } from "../@types/generation";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "./import-injector";

function createEmptyCollectionTypesMap(
	collectionNames: string[],
): CollectionTypesMap {
	const map: CollectionTypesMap = {};

	for (const collectionName of collectionNames) {
		map[collectionName] = {
			scalars: new Map(),
			relations: new Map(),
		};
	}

	return map;
}

describe("import-injector", () => {
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
});
