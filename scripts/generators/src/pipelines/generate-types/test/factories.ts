import type {
	CollectionTypesMap,
	GeneratedTypes,
	RelationInfo,
} from "@scripts/generators/src/pipelines/generate-types/@types/generation";
import type { NocoBaseField } from "@scripts/generators/src/pipelines/generate-types/@types/nocobase";

/**
 * Cria um mock de NocoBaseField com valores padrão.
 * Útil para reduzir boilerplate nos testes de field-mapper.
 */
export function createMockField(
	overrides: Partial<{
		name: string;
		type: string;
		interface: string | null;
		target: string;
	}> = {},
): NocoBaseField {
	return {
		name: "campo_teste",
		type: "string",
		interface: "input",
		...overrides,
	} as NocoBaseField;
}

/**
 * Cria um GeneratedTypes (scalars + relations + enums) para uma collection.
 */
export function createMockGeneratedTypes(
	scalars: Record<string, string> = {},
	relations: Record<string, RelationInfo> = {},
): GeneratedTypes {
	return {
		scalars: new Map(Object.entries(scalars)),
		relations: new Map(Object.entries(relations)),
		enums: new Map(),
		schemaAvailable: true,
	};
}

/**
 * Cria um CollectionTypesMap simples a partir de um objeto de collections.
 */
export function createMockCollectionTypesMap(
	collections: Record<
		string,
		{
			scalars?: Record<string, string>;
			relations?: Record<string, RelationInfo>;
		}
	> = {},
): CollectionTypesMap {
	const map: CollectionTypesMap = {};
	for (const [name, types] of Object.entries(collections)) {
		map[name] = {
			scalars: new Map(Object.entries(types.scalars ?? {})),
			relations: new Map(Object.entries(types.relations ?? {})),
			enums: new Map(),
			schemaAvailable: true,
		};
	}
	return map;
}
