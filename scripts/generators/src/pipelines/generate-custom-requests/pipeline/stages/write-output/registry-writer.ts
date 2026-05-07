import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Logger } from "@scripts/generators/src/lib/logging";
import { defaultLogger as defaultRuntimeLogger } from "@scripts/generators/src/lib/logging";
import type { CollectionSchemaMapping } from "../../../@types/collection-schema";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import type { RequestsMap } from "../../../@types/script-config";
import { serializeEntryFields } from "./entry-serialization";
import { resolveSplitPathInfo } from "./split-paths";

function toSafeIdentifier(value: string): string {
	return value.replace(/[^a-zA-Z0-9_]/g, "_");
}

function toObjectKey(value: string): string {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) ? value : `"${value}"`;
}

function createSplitAlias(relativeSplitName: string): string {
	return `split_${toSafeIdentifier(relativeSplitName)}`;
}

interface SplitImportDescriptor {
	alias: string;
	entryKey: string;
	importPath: string;
}

function buildSplitImportDescriptors(
	entries: GeneratedRegistryEntry[],
	requests: RequestsMap,
): SplitImportDescriptor[] {
	const splitDescriptors: SplitImportDescriptor[] = [];

	for (const entry of entries) {
		const splitFileName = requests[entry.key];
		if (!splitFileName) {
			continue;
		}

		const splitPathInfo = resolveSplitPathInfo(entry, splitFileName);
		splitDescriptors.push({
			alias: createSplitAlias(splitPathInfo.relativeSplitName),
			entryKey: entry.key,
			importPath: splitPathInfo.relativeImportPath,
		});
	}

	return splitDescriptors;
}

function buildCollectionToRequestKeys(
	entries: GeneratedRegistryEntry[],
): string {
	const collectionMap: Record<string, string[]> = {};

	for (const entry of entries) {
		if (!collectionMap[entry.collection]) {
			collectionMap[entry.collection] = [];
		}
		collectionMap[entry.collection].push(entry.key);
	}

	const lines = Object.entries(collectionMap)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(
			([collection, keys]) =>
				`  "${collection}": [${keys
					.sort()
					.map((key) => `"${key}"`)
					.join(", ")}],`,
		)
		.join("\n");

	return `export const collectionToRequestKeys = {\n${lines}\n} as const;`;
}

function buildInlineEntryContent(entry: GeneratedRegistryEntry): string {
	const {
		escapedCollection,
		escapedDataSourceKey,
		escapedKey,
		escapedMethod,
		escapedName,
		escapedUrl,
		payloadDataStr,
	} = serializeEntryFields(entry);

	const collectionSchemaLine = entry.collectionSchemaName
		? `\n    collectionSchema: ${entry.collectionSchemaName},`
		: "";

	return `  ${toObjectKey(entry.key)}: {
    key: "${escapedKey}",
    name: "${escapedName}",
    collection: "${escapedCollection}",${collectionSchemaLine}
    dataSourceKey: "${escapedDataSourceKey}",
    method: "${escapedMethod}",
    url: "${escapedUrl}",
    payloadSchema: ${entry.payloadSchema},
    payloadData: ${payloadDataStr},
  },`;
}

/**
 * Extract schema names referenced in payloadSchema strings.
 * Matches patterns like: SomeNameSchema.pick(...) or just SomeNameSchema
 */
function extractSchemaReferences(payloadSchema: string): Set<string> {
	const schemaNames = new Set<string>();

	// Pattern to match schema references: SchemaName.pick or SchemaName followed by space/newline/end
	// Handles: ClienteContratoSchema.pick, fn_areceberSchema.pick, etc.
	const schemaPattern = /([A-Za-z_][A-Za-z0-9_]*Schema)(?=\.pick|\b)/g;
	for (const match of payloadSchema.matchAll(schemaPattern)) {
		const schemaName = match[1];
		// Exclude Zod built-in schemas
		if (!["z", "ZodType", "ZodObject", "ZodSchema"].includes(schemaName)) {
			schemaNames.add(schemaName);
		}
	}

	return schemaNames;
}

/**
 * Build a map from schema name to its import path.
 */
function buildSchemaImportMap(
	schemaMappings: CollectionSchemaMapping[],
): Map<string, CollectionSchemaMapping> {
	const map = new Map<string, CollectionSchemaMapping>();

	for (const mapping of schemaMappings) {
		map.set(mapping.schemaName, mapping);
	}

	return map;
}

function buildRegistryContent(
	entries: GeneratedRegistryEntry[],
	requests: RequestsMap,
	schemaMappings: CollectionSchemaMapping[],
): string {
	const sortedEntries = [...entries].sort((a, b) => a.key.localeCompare(b.key));
	const splitDescriptors = buildSplitImportDescriptors(sortedEntries, requests);
	const splitAliasByKey = new Map(
		splitDescriptors.map((descriptor) => [
			descriptor.entryKey,
			descriptor.alias,
		]),
	);
	const hasInlineEntries = sortedEntries.some(
		(entry) => !splitAliasByKey.has(entry.key),
	);

	// Collect all schema references from inline entries
	const allSchemaRefs = new Set<string>();
	for (const entry of sortedEntries) {
		const splitAlias = splitAliasByKey.get(entry.key);
		// Only inline entries need schema imports - split entries have their own imports
		if (!splitAlias) {
			if (entry.collectionSchemaName) {
				allSchemaRefs.add(entry.collectionSchemaName);
			}
			const refs = extractSchemaReferences(entry.payloadSchema);
			for (const ref of refs) {
				allSchemaRefs.add(ref);
			}
		}
	}

	// Build schema import map
	const schemaImportMap = buildSchemaImportMap(schemaMappings);

	// Generate schema import statements
	const schemaImports: string[] = [];
	for (const schemaName of [...allSchemaRefs].sort()) {
		const mapping = schemaImportMap.get(schemaName);
		if (mapping) {
			schemaImports.push(
				`import { ${mapping.schemaName} } from "${mapping.schemaImportPath}";`,
			);
		}
	}

	const splitImports = splitDescriptors
		.map(
			(descriptor) =>
				`import { requestEntry as ${descriptor.alias}RequestEntry } from "${descriptor.importPath}";`,
		)
		.join("\n");

	const entryLines = sortedEntries
		.map((entry) => {
			const splitAlias = splitAliasByKey.get(entry.key);
			if (splitAlias) {
				return `  ${toObjectKey(entry.key)}: ${splitAlias}RequestEntry,`;
			}

			return buildInlineEntryContent(entry);
		})
		.join("\n\n");

	const collectionMapping = buildCollectionToRequestKeys(entries);

	// Combine all imports
	const allImports = [
		hasInlineEntries ? `import { z } from "zod";` : undefined,
		...schemaImports,
		splitImports || undefined,
	]
		.filter(Boolean)
		.join("\n");

	return `/**
 * This file was auto-generated by generate-custom-requests script.
 * Do not edit manually.
 */
${allImports}

export const generatedCustomRequestsRegistry = {
 ${entryLines}
} as const;

export const customRequestsRegistry = generatedCustomRequestsRegistry;

export type CustomRequestRegistryKey = keyof typeof customRequestsRegistry;

${collectionMapping}
`;
}

export async function writeGeneratedRegistry(
	entries: GeneratedRegistryEntry[],
	outputDir: string,
	requests: RequestsMap = {},
	logger?: Logger,
	schemaMappings?: CollectionSchemaMapping[],
): Promise<void> {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const content = buildRegistryContent(entries, requests, schemaMappings ?? []);
	const outputPath = resolve(outputDir, "generated-registry.ts");

	activeLogger.debug("Gerando registry");
	activeLogger.debug(`registry path: ${outputPath}`);
	mkdirSync(resolve(outputDir), { recursive: true });

	writeFileSync(outputPath, content, "utf-8");
}
