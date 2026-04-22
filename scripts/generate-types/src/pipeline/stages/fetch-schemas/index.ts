import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "../../../@types/generation";
import { mapWithConcurrency } from "../../../utils/concurrency";
import type { FetchCollectionsContext, PipelineStage } from "../../core/types";
import {
	extractRelationInfo,
	mapFieldType,
} from "../generate-content/field-mapper";

export const fetchSchemas: PipelineStage<FetchCollectionsContext> = async (
	ctx,
) => {
	const { client, collections, config } = ctx;
	const knownCollections = new Set(collections.map((c) => c.name));
	const concurrency = config.requestConcurrency ?? 5;

	const entries = await mapWithConcurrency(
		collections,
		concurrency,
		async (collection) => {
			const { fields, schemaAvailable } = await client.fetchCollectionFields(
				collection.name,
			);
			const generated: GeneratedTypes = {
				scalars: new Map(),
				relations: new Map(),
				enums: new Map(),
				schemaAvailable,
			};
			for (const field of fields) {
				const relationInfo = extractRelationInfo(field, undefined, false);
				if (relationInfo) {
					generated.relations.set(field.name, {
						...relationInfo,
						targetCollection: knownCollections.has(
							relationInfo.targetCollection,
						)
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
			return [collection.name, generated] as const;
		},
	);

	const collectionTypes: CollectionTypesMap = {};
	for (const [name, types] of entries as Array<[string, GeneratedTypes]>) {
		collectionTypes[name] = types;
	}

	return { ...ctx, collectionTypes };
};
