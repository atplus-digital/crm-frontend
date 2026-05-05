import type { CollectionSchemaMapping } from "../../../../@types/collection-schema";

export function deduplicateSchemasNotFound(
	items: CollectionSchemaMapping[],
): CollectionSchemaMapping[] {
	const seen = new Set<string>();
	const result: CollectionSchemaMapping[] = [];

	for (const item of items) {
		const key = `${item.dataSourceKey}:${item.collectionName}`;
		if (!seen.has(key)) {
			seen.add(key);
			result.push(item);
		}
	}

	return result;
}
