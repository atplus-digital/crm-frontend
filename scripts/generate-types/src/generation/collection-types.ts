import { config } from "../../config";
import type { CollectionTypesMap, GeneratedTypes } from "../@types/generation";
import type { NocoBaseCollection, NocoBaseField } from "../@types/nocobase";
import { mapWithConcurrency } from "../utils/concurrency";
import { toCollectionTypeName } from "../utils/naming";
import type { NocoBaseClient } from "./client";
import { extractRelationInfo, mapFieldType } from "./field-mapper";

export interface BuildCollectionTypesOptions {
	concurrency?: number;
	onCollectionStart?: (context: {
		collectionName: string;
		index: number;
		total: number;
	}) => void;
}

function sortByName<T extends { name: string }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

function buildGeneratedTypes(fields: NocoBaseField[]): GeneratedTypes {
	const generated: GeneratedTypes = {
		scalars: new Map(),
		relations: new Map(),
	};

	for (const field of fields) {
		const relationInfo = extractRelationInfo(field);
		if (relationInfo) {
			generated.relations.set(field.name, relationInfo);
			continue;
		}

		generated.scalars.set(field.name, mapFieldType(field));
	}

	return generated;
}

function toCollectionTypesMap(
	entries: ReadonlyArray<readonly [string, GeneratedTypes]>,
): CollectionTypesMap {
	const collectionTypes: CollectionTypesMap = {};

	for (const [collectionName, generated] of [...entries].sort(([a], [b]) =>
		a.localeCompare(b),
	)) {
		if (collectionName in collectionTypes) {
			throw new Error(`Conflito de nomes após normalização: ${collectionName}`);
		}

		collectionTypes[collectionName] = generated;
	}

	return collectionTypes;
}

export async function buildCollectionTypes(
	client: NocoBaseClient,
	collections: NocoBaseCollection[],
	options: BuildCollectionTypesOptions = {},
): Promise<CollectionTypesMap> {
	const sortedCollections = sortByName(collections);
	const concurrency = options.concurrency ?? config.requestConcurrency;

	const entries = await mapWithConcurrency(
		sortedCollections,
		concurrency,
		async (collection, index) => {
			options.onCollectionStart?.({
				collectionName: collection.name,
				index: index + 1,
				total: sortedCollections.length,
			});

			const fields = await client.fetchCollectionFields(collection.name);
			return [
				toCollectionTypeName(collection.name),
				buildGeneratedTypes(fields),
			] as const;
		},
	);

	return toCollectionTypesMap(entries);
}
