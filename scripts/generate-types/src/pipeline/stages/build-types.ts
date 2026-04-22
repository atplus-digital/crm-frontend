import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "../../@types/generation";
import type { ManualRelationMapping } from "../../@types/script";
import {
	extractRelationInfo,
	mapFieldType,
} from "../../generation/field-mapper";
import { mapWithConcurrency } from "../../utils/concurrency";
import type { FetchCollectionsContext, PipelineStage } from "../types";

export const buildTypes: PipelineStage<
	FetchCollectionsContext & {
		relations?: Record<string, ManualRelationMapping>;
	}
> = async (ctx) => {
	const { client, collections, config, relations, dataSource } = ctx;
	const knownCollections = new Set(collections.map((c) => c.name));
	const concurrency = config.requestConcurrency ?? 5;
	const inferRelationsByName = dataSource.inferRelationsByName ?? false;

	const entries = await mapWithConcurrency(
		collections,
		concurrency,
		async (collection) => {
			const { fields, schemaAvailable } = await client.fetchCollectionFields(
				collection.name,
			);
			const manualRelations = relations?.[collection.name];

			const generated: GeneratedTypes = {
				scalars: new Map(),
				relations: new Map(),
				enums: new Map(),
				schemaAvailable,
			};

			for (const field of fields) {
				const relationInfo = extractRelationInfo(
					field,
					manualRelations,
					inferRelationsByName && !manualRelations,
				);
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

			// Add manual relations that don't exist as fields
			if (manualRelations) {
				for (const [fieldName, relation] of Object.entries(manualRelations)) {
					if (!generated.relations.has(fieldName)) {
						generated.relations.set(fieldName, {
							type: relation.type,
							targetCollection: knownCollections.has(relation.target)
								? relation.target
								: "",
						});
					}
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
