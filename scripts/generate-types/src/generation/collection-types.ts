import { config } from "@scripts/generate-types/config";
import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "@scripts/generate-types/src/@types/generation";
import type {
	DataSourceClient,
	DataSourceCollection,
	DataSourceField,
	RelationsAdapter,
} from "@scripts/generate-types/src/@types/script";
import { mapWithConcurrency } from "@scripts/generate-types/src/utils/concurrency";
import { toCollectionTypeName } from "@scripts/generate-types/src/utils/naming";
import { extractRelationInfo, mapFieldType } from "./field-mapper";

/**
 * Opções para buildCollectionTypes.
 */
export interface BuildCollectionTypesOptions {
	concurrency?: number;
	onCollectionStart?: (context: {
		collectionName: string;
		index: number;
		total: number;
	}) => void;
	/**
	 * Adapter opcional para buscar relações de fonte externa.
	 */
	relationsAdapter?: RelationsAdapter;
	/**
	 * Mapeamento manual de relações por collection.
	 */
	relationsMapping?: Record<
		string,
		Record<
			string,
			{ target: string; type: "belongsTo" | "hasMany" | "m2m" | "hasOne" }
		>
	>;
	/**
	 * Habilita inferência automática de relações por convenção de nomes.
	 */
	inferRelationsByName?: boolean;
}

/**
 * Ordena array de objetos por propriedade 'name' (ordem alfabética).
 */
function sortByName<T extends { name: string }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

function buildGeneratedTypes(
	fields: DataSourceField[],
	knownCollections: ReadonlySet<string>,
	schemaAvailable: boolean,
	manualRelations?: Record<
		string,
		{ target: string; type: "belongsTo" | "hasMany" | "m2m" | "hasOne" }
	>,
	inferRelationsByName = false,
): GeneratedTypes {
	const generated: GeneratedTypes = {
		scalars: new Map(),
		relations: new Map(),
		enums: new Map(),
		schemaAvailable,
	};

	// 1. Processar campos da API
	for (const field of fields) {
		const relationInfo = extractRelationInfo(
			field,
			manualRelations,
			inferRelationsByName,
		);
		if (relationInfo) {
			generated.relations.set(field.name, {
				...relationInfo,
				targetCollection: knownCollections.has(relationInfo.targetCollection)
					? relationInfo.targetCollection
					: "",
			});
			continue;
		}

		generated.scalars.set(field.name, mapFieldType(field));

		if (field.uiSchema?.enum && field.uiSchema.enum.length > 0) {
			generated.enums.set(field.name, field.uiSchema.enum);
		}
	}

	// 2. Adicionar relações manuais que não existem como campos na API
	// Ex: adapter retorna f_cliente, mas a API só retorna id_cliente
	if (manualRelations) {
		for (const [relationFieldName, relation] of Object.entries(
			manualRelations,
		)) {
			// Só adicionar se ainda não existir
			if (!generated.relations.has(relationFieldName)) {
				generated.relations.set(relationFieldName, {
					type: relation.type,
					targetCollection: knownCollections.has(relation.target)
						? relation.target
						: "",
				});
			}
		}
	}

	return generated;
}

/**
 * Converte array de entries em CollectionTypesMap.
 * Valida duplicatas após normalização de nomes.
 *
 * @param entries - Array de [collectionName, GeneratedTypes]
 * @returns CollectionTypesMap ordenado
 * @throws {Error} Se houver conflito de nomes após normalização
 */
function toCollectionTypesMap(
	entries: ReadonlyArray<readonly [string, GeneratedTypes]>,
): CollectionTypesMap {
	const collectionTypes: CollectionTypesMap = {};
	const normalizedNames = new Map<string, string>();

	for (const [collectionName, generated] of [...entries].sort(([a], [b]) =>
		a.localeCompare(b),
	)) {
		const normalizedName = toCollectionTypeName(collectionName);
		const previousName = normalizedNames.get(normalizedName);
		if (previousName && previousName !== collectionName) {
			throw new Error(
				`Conflito de nomes após normalização: ${previousName} e ${collectionName} -> ${normalizedName}`,
			);
		}

		normalizedNames.set(normalizedName, collectionName);

		if (collectionName in collectionTypes) {
			throw new Error(`Conflito de nomes após normalização: ${collectionName}`);
		}

		collectionTypes[collectionName] = generated;
	}

	return collectionTypes;
}

/**
 * Constrói tipos TypeScript para todas as collections.
 *
 * Orquestra o processo de geração:
 * 1. Busca campos de cada collection (concurrent)
 * 2. Mapeia campos para scalars e relations
 * 3. Retorna CollectionTypesMap ordenado
 *
 * @param client - Cliente da API NocoBase
 * @param collections - Array de collections para processar
 * @param options - Opções de concorrência e callbacks
 * @returns CollectionTypesMap com tipos gerados
 *
 * @example
 * ```typescript
 * const collectionTypes = await buildCollectionTypes(client, collections, {
 *   concurrency: 5,
 *   onCollectionStart: ({ collectionName, index, total }) => {
 *     console.log(`[${index}/${total}] ${collectionName}`);
 *   }
 * });
 * ```
 */
export async function buildCollectionTypes(
	client: DataSourceClient,
	collections: DataSourceCollection[],
	options: BuildCollectionTypesOptions = {},
): Promise<CollectionTypesMap> {
	const sortedCollections = sortByName(collections);
	const knownCollections = new Set(
		sortedCollections.map((collection) => collection.name),
	);
	const concurrency = options.concurrency ?? config.requestConcurrency;
	const inferRelationsByName = options.inferRelationsByName ?? false;

	const entries = await mapWithConcurrency(
		sortedCollections,
		concurrency,
		async (collection, index) => {
			options.onCollectionStart?.({
				collectionName: collection.name,
				index: index + 1,
				total: sortedCollections.length,
			});

			const { fields, schemaAvailable } = await client.fetchCollectionFields(
				collection.name,
			);

			// Obter relações do adapter (se configurado)
			let adapterRelations: Record<
				string,
				{ target: string; type: "belongsTo" | "hasMany" | "m2m" | "hasOne" }
			> = {};

			if (options.relationsAdapter) {
				try {
					adapterRelations = await options.relationsAdapter.fetchRelations(
						collection.name,
					);
				} catch {
					// No-op - fallback para inferência
				}
			}

			// Mesclar: manual > adapter > inferência
			const manualRelations = options.relationsMapping?.[collection.name];
			const mergedRelations = { ...adapterRelations, ...manualRelations };

			const relationsToPass =
				Object.keys(mergedRelations).length > 0 ? mergedRelations : undefined;

			return [
				collection.name,
				buildGeneratedTypes(
					fields,
					knownCollections,
					schemaAvailable,
					relationsToPass,
					inferRelationsByName && !relationsToPass,
				),
			] as const;
		},
	);

	return toCollectionTypesMap(entries);
}
