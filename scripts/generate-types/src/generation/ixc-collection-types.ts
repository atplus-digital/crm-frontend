import type {
	GeneratedTypes,
	IxcCollectionTypesResult,
} from "@scripts/generate-types/src/@types/generation";
import { mapWithConcurrency } from "@scripts/generate-types/src/utils/concurrency";
import { config } from "../../config";
import {
	generateCollectionBaseInterface,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
} from "./content";
import type { IxcClient } from "./ixc-client";

interface IxcField {
	name: string;
	type: string;
	interface?: string;
}

function mapIxcFieldType(field: IxcField): string {
	switch (field.type) {
		case "double":
		case "integer":
		case "bigInt":
			return "number";
		case "boolean":
			return "boolean";
		case "date":
		case "datetime":
		case "dateOnly":
			return "string";
		case "array":
			return "string[]";
		case "json":
		case "object":
			return "Record<string, unknown>";
		default:
			return "string";
	}
}

function buildGeneratedTypes(
	fields: IxcField[],
	_knownCollections: ReadonlySet<string>,
): GeneratedTypes {
	const generated: GeneratedTypes = {
		scalars: new Map(),
		relations: new Map(),
	};

	for (const field of fields) {
		if (field.name.startsWith("f_nc_") || field.name.startsWith("f_fk_")) {
			generated.relations.set(field.name, {
				type: "belongsTo",
				targetCollection: "",
			});
			continue;
		}

		generated.scalars.set(field.name, mapIxcFieldType(field));
	}

	return generated;
}

/**
 * Constrói tipos TypeScript para collections do IXC.
 *
 * Orquestra o processo de geração:
 * 1. Busca campos de cada collection (concurrent)
 * 2. Mapeia campos para scalars e relations
 * 3. Gera as strings de tipo para cada collection
 *
 * @param client - Cliente da API IXC
 * @param collectionNames - Array de nomes de collections para processar
 * @returns Mapa com os tipos gerados para cada collection
 *
 * @example
 * ```typescript
 * const result = await buildIxcCollectionTypes(client, ["cliente_contrato"]);
 * // result.cliente_contrato.base = "export interface ClienteContrato { ... }"
 * // result.cliente_contrato.relations = "export interface ClienteContratoRelations { ... }"
 * // result.cliente_contrato.relationKey = "export type ClienteContratoRelationKey = ..."
 * ```
 */
export async function buildIxcCollectionTypes(
	client: IxcClient,
	collectionNames: string[],
): Promise<IxcCollectionTypesResult> {
	const sortedCollectionNames = [...collectionNames].sort((a, b) =>
		a.localeCompare(b),
	);
	const knownCollections = new Set(sortedCollectionNames);
	const concurrency = config.requestConcurrency;

	const entries = await mapWithConcurrency(
		sortedCollectionNames,
		concurrency,
		async (collectionName) => {
			const fields = await client.fetchCollectionFields(collectionName);
			const generatedTypes = buildGeneratedTypes(fields, knownCollections);

			// Gera as strings de tipo usando as funções existentes de content.ts
			const baseInterface = generateCollectionBaseInterface(
				collectionName,
				generatedTypes,
				config.baseInterfaceNaming,
			);
			const relationsInterface = generateCollectionRelationsInterface(
				collectionName,
				generatedTypes,
				config.baseInterfaceNaming,
			);
			const relationKeyType = generateCollectionRelationKeyType(collectionName);

			return [
				collectionName,
				{
					base: baseInterface,
					relations: relationsInterface,
					relationKey: relationKeyType,
				},
			] as const;
		},
	);

	// Converte array de entries em objeto resultado
	const result: IxcCollectionTypesResult = {};
	for (const [collectionName, types] of entries) {
		result[collectionName] = types;
	}

	return result;
}
