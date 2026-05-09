import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import type { TaskRunner } from "@scripts/generators/src/lib/cli/types";
import {
	toDataSourceOutputFolder,
	toSafePathSegment,
} from "@scripts/generators/src/lib/path-utils";
import type { PipelineExecutionContext } from "@scripts/generators/src/lib/pipeline/context";
import {
	escapeString,
	serializePayloadData,
} from "@scripts/generators/src/lib/strings";
import type { CollectionSchemaMapping } from "../@types/collection-schema";
import type { GeneratedRegistryEntry } from "../@types/generated-registry";
import type { RequestsMap, ScriptConfig } from "../@types/script-config";
import type { CustomRequestsPipelineCtx } from "./load-schemas";

// ── Path utilities (from old path-utils.ts + split-paths.ts) ──

interface SplitPathInfo {
	collectionDir: string;
	dataSourceDir: string;
	relativeImportPath: string;
	relativeSplitName: string;
	resolvedFilePath: string;
}

function resolveSplitPathInfo(
	entry: GeneratedRegistryEntry,
	splitFileName: string,
	outputDir: string,
): SplitPathInfo {
	const dataSourceDir = toDataSourceOutputFolder(entry.dataSourceKey);
	const collectionDir = toSafePathSegment(entry.collection);
	const relativeSplitName = `${dataSourceDir}/${collectionDir}/${splitFileName}`;

	return {
		collectionDir,
		dataSourceDir,
		relativeImportPath: `./${relativeSplitName}`,
		relativeSplitName,
		resolvedFilePath: join(outputDir, `${relativeSplitName}.ts`),
	};
}

// ── Entry serialization (from old entry-serialization.ts) ──

interface SerializedEntryFields {
	escapedCollection: string;
	escapedDataSourceKey: string;
	escapedKey: string;
	escapedMethod: string;
	escapedName: string;
	escapedUrl: string;
	payloadDataStr: string;
}

function serializeEntryFields(
	entry: GeneratedRegistryEntry,
	displayName = entry.name,
): SerializedEntryFields {
	return {
		escapedCollection: escapeString(entry.collection),
		escapedDataSourceKey: escapeString(entry.dataSourceKey),
		escapedKey: escapeString(entry.key),
		escapedMethod: escapeString(entry.method),
		escapedName: escapeString(displayName),
		escapedUrl: escapeString(entry.url),
		payloadDataStr: serializePayloadData(entry.payloadData),
	};
}

// ── Legacy split file cleanup (from old legacy-split-cleanup.ts) ──

function removeLegacyFile(
	legacyPath: string,
	_message: string,
	currentFilePath: string,
): void {
	if (!existsSync(legacyPath) || legacyPath === currentFilePath) return;
	unlinkSync(legacyPath);
}

function cleanupLegacySplitFiles(options: {
	collectionDir: string;
	entry: GeneratedRegistryEntry;
	filePath: string;
	outputDir: string;
	splitFileName: string;
}): void {
	const { collectionDir, entry, filePath, outputDir, splitFileName } = options;

	if (splitFileName !== entry.key) {
		const legacyKeyPath = join(outputDir, `${entry.key}.ts`);
		removeLegacyFile(
			legacyKeyPath,
			`Split file legado removido: ${entry.key}.ts`,
			filePath,
		);
	}

	removeLegacyFile(
		join(outputDir, `${splitFileName}.ts`),
		`Split file legado removido: ${splitFileName}.ts`,
		filePath,
	);

	removeLegacyFile(
		join(outputDir, collectionDir, `${splitFileName}.ts`),
		`Split file legado removido (sem dataSourceKey): ${collectionDir}/${splitFileName}.ts`,
		filePath,
	);
}

// ── Registry writer (from old registry-writer.ts) ──

function toSafeIdentifier(value: string): string {
	return value.replace(/[^a-zA-Z0-9_]/g, "_");
}

function toObjectKey(value: string): string {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) ? value : `"${value}"`;
}

function createSplitAlias(relativeSplitName: string): string {
	return `split_${toSafeIdentifier(relativeSplitName)}`;
}

function extractSchemaReferences(payloadSchema: string): Set<string> {
	const schemaNames = new Set<string>();
	const schemaPattern = /([A-Za-z_][A-Za-z0-9_]*Schema)(?=\.pick|\b)/g;
	for (const match of payloadSchema.matchAll(schemaPattern)) {
		const name = match[1];
		if (!["z", "ZodType", "ZodObject", "ZodSchema"].includes(name)) {
			schemaNames.add(name);
		}
	}
	return schemaNames;
}

function buildSchemaImportMap(
	schemaMappings: CollectionSchemaMapping[],
): Map<string, CollectionSchemaMapping> {
	const map = new Map<string, CollectionSchemaMapping>();
	for (const mapping of schemaMappings) {
		map.set(mapping.schemaName, mapping);
	}
	return map;
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
					.map((k) => `"${k}"`)
					.join(", ")}],`,
		)
		.join("\n");

	return `export const collectionToRequestKeys = {\n${lines}\n} as const;`;
}

function buildInlineEntryContent(entry: GeneratedRegistryEntry): string {
	const fields = serializeEntryFields(entry);
	const collectionSchemaLine = entry.collectionSchemaName
		? `\n    collectionSchema: ${entry.collectionSchemaName},`
		: "";

	return `  ${toObjectKey(entry.key)}: {
    key: "${fields.escapedKey}",
    name: "${fields.escapedName}",
    collection: "${fields.escapedCollection}",${collectionSchemaLine}
    dataSourceKey: "${fields.escapedDataSourceKey}",
    method: "${fields.escapedMethod}",
    url: "${fields.escapedUrl}",
    payloadSchema: ${entry.payloadSchema},
    payloadData: ${fields.payloadDataStr},
  },`;
}

function buildRegistryContent(
	entries: GeneratedRegistryEntry[],
	requests: RequestsMap,
	schemaMappings: CollectionSchemaMapping[],
): string {
	const sorted = [...entries].sort((a, b) => a.key.localeCompare(b.key));

	// Build split descriptors
	const splitDescriptors: {
		alias: string;
		entryKey: string;
		importPath: string;
	}[] = [];

	for (const entry of sorted) {
		const splitFileName = requests[entry.key];
		if (!splitFileName) continue;
		const info = resolveSplitPathInfo(entry, splitFileName, ".");
		splitDescriptors.push({
			alias: createSplitAlias(info.relativeSplitName),
			entryKey: entry.key,
			importPath: info.relativeImportPath,
		});
	}

	const splitAliasByKey = new Map(
		splitDescriptors.map((d) => [d.entryKey, d.alias]),
	);
	const hasInline = sorted.some((e) => !splitAliasByKey.has(e.key));

	// Collect schema references from inline entries
	const allSchemaRefs = new Set<string>();
	for (const entry of sorted) {
		const alias = splitAliasByKey.get(entry.key);
		if (!alias) {
			if (entry.collectionSchemaName) {
				allSchemaRefs.add(entry.collectionSchemaName);
			}
			for (const ref of extractSchemaReferences(entry.payloadSchema)) {
				allSchemaRefs.add(ref);
			}
		}
	}

	const schemaImportMap = buildSchemaImportMap(schemaMappings);
	const schemaImports = [...allSchemaRefs]
		.sort()
		.map((name) => {
			const mapping = schemaImportMap.get(name);
			return mapping
				? `import { ${mapping.schemaName} } from "${mapping.schemaImportPath}";`
				: null;
		})
		.filter((l): l is string => Boolean(l));

	const splitImports = splitDescriptors
		.map(
			(d) =>
				`import { requestEntry as ${d.alias}RequestEntry } from "${d.importPath}";`,
		)
		.join("\n");

	const entryLines = sorted
		.map((entry) => {
			const alias = splitAliasByKey.get(entry.key);
			if (alias) return `  ${toObjectKey(entry.key)}: ${alias}RequestEntry,`;
			return buildInlineEntryContent(entry);
		})
		.join("\n\n");

	const collectionMapping = buildCollectionToRequestKeys(sorted);

	const allImports = [
		hasInline ? `import { z } from "zod";` : undefined,
		...schemaImports,
		splitImports || undefined,
	]
		.filter(Boolean)
		.join("\n");

	return `/*************************************************************
 * This file was auto-generated by generate-custom-requests.
 * Do not edit manually.
 *************************************************************/
${allImports}

export const generatedCustomRequestsRegistry = {
${entryLines}
} as const;

export const customRequestsRegistry = generatedCustomRequestsRegistry;

export type CustomRequestRegistryKey = keyof typeof customRequestsRegistry;

${collectionMapping}
`;
}

function writeGeneratedRegistry(
	entries: GeneratedRegistryEntry[],
	outputDir: string,
	requests: RequestsMap,
	schemaMappings: CollectionSchemaMapping[],
): void {
	const content = buildRegistryContent(entries, requests, schemaMappings);
	const outputPath = resolve(outputDir, "generated-registry.ts");
	mkdirSync(resolve(outputDir), { recursive: true });
	writeFileSync(outputPath, content, "utf-8");
}

// ── URL masking ──

/**
 * Masks a URL for display in comments, e.g.:
 * https://n8n.atplus.cloud/webhook/836d3099-bd29-49d0-8010-a4b5033ecc43
 * becomes n8n.at[masked]
 */
function maskUrl(url: string): string {
	try {
		const u = new URL(url);
		const host = u.hostname;
		const path = u.pathname;
		const maskedHost =
			host.length > 7
				? `${host.slice(0, 4)}***${host.slice(-3)}`
				: `${host.slice(0, 2)}***`;
		const maskedPath = path.length > 4 ? `/***${path.slice(-4)}` : "/***";
		return `${maskedHost}${maskedPath}`;
	} catch {
		return url.length > 8 ? `${url.slice(0, 4)}***${url.slice(-4)}` : "***";
	}
}

// ── Split writer (from old split-writer.ts) ──

function buildSplitFileContent(
	entry: GeneratedRegistryEntry,
	displayName: string,
	schemaMappingsByName: Map<string, CollectionSchemaMapping>,
): string {
	const fields = serializeEntryFields(entry, displayName);

	const schemaPattern = /([A-Za-z_][A-Za-z0-9_]*Schema)(?=\.pick|\b)/g;
	const schemaRefs = new Set<string>();
	for (const match of entry.payloadSchema.matchAll(schemaPattern)) {
		const name = match[1];
		if (!["z", "ZodType", "ZodObject", "ZodSchema"].includes(name)) {
			schemaRefs.add(name);
		}
	}

	const schemaImports = [...schemaRefs]
		.sort()
		.map((name) => {
			const mapping = schemaMappingsByName.get(name);
			return mapping
				? `import { ${mapping.schemaName} } from "${mapping.schemaImportPath}";`
				: null;
		})
		.filter((l): l is string => Boolean(l))
		.join("\n");

	return `import { z } from "zod";
${schemaImports ? `${schemaImports}\n` : ""}

/*************************************************************
 * Custom request: ${fields.escapedName}
 * Collection: ${entry.collection}
 * Method: ${entry.method}
 * URL: ${maskUrl(entry.url)}
 *
 * This file was auto-generated by generate-custom-requests.
 * Do not edit manually.
 *************************************************************/
export const payloadSchema = ${entry.payloadSchema};

export const payloadData = ${fields.payloadDataStr};

export const requestEntry = {
	key: "${fields.escapedKey}",
	name: "${fields.escapedName}",
	collection: "${fields.escapedCollection}",
	dataSourceKey: "${fields.escapedDataSourceKey}",
	method: "${fields.escapedMethod}",
	payloadSchema,
	payloadData,
} as const;
`;
}

function writeAllSplitFiles(
	entries: GeneratedRegistryEntry[],
	requests: RequestsMap,
	outputDir: string,
	schemaMappings: CollectionSchemaMapping[],
): void {
	const splitRequestKeys = new Set(Object.keys(requests));
	const schemaMappingsByName = new Map(
		schemaMappings.map((m) => [m.schemaName, m]),
	);
	const toWrite = entries.filter((e) => splitRequestKeys.has(e.key));

	for (const entry of toWrite) {
		const splitFileName = requests[entry.key];
		if (!splitFileName) continue;

		const info = resolveSplitPathInfo(entry, splitFileName, outputDir);
		mkdirSync(dirname(info.resolvedFilePath), { recursive: true });

		const content = buildSplitFileContent(
			entry,
			splitFileName,
			schemaMappingsByName,
		);
		writeFileSync(info.resolvedFilePath, content, "utf-8");

		cleanupLegacySplitFiles({
			collectionDir: info.collectionDir,
			entry,
			filePath: info.resolvedFilePath,
			outputDir,
			splitFileName,
		});
	}
}

// ── Stage ──

export async function writeOutputStage(
	context: PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>,
	task: TaskRunner,
): Promise<PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>> {
	const pipelineCtx = (context.pipelineContext ??
		{}) as CustomRequestsPipelineCtx;
	const mergedEntries = pipelineCtx.mergedEntries ?? [];
	const schemaMappings = pipelineCtx.schemaMappings ?? [];
	const requests = context.runtimeConfig.requests;

	if (mergedEntries.length === 0) {
		task.output = "Nenhuma entrada válida para escrever. Pulando.";
		return context;
	}

	// Write to tempDir so the lifecycle can validate and swap atomically
	const outputDir = resolve(context.tempDir, context.runtimeConfig.outputDir);

	task.output = "Escrevendo registry...";
	writeGeneratedRegistry(mergedEntries, outputDir, requests, schemaMappings);

	task.output = "Escrevendo split files...";
	writeAllSplitFiles(mergedEntries, requests, outputDir, schemaMappings);

	task.output = `${mergedEntries.length} entradas escritas em ${context.runtimeConfig.outputDir}`;

	return context;
}
