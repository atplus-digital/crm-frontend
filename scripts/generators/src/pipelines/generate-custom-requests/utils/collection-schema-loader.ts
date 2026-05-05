import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type {
	CollectionSchemaMapping,
	SchemaLoadResult,
	SchemaRegistry,
} from "../@types/collection-schema";
import { fileNameToCollectionName } from "./collection-schema-loader/case-utils";
import { scanSchemaFiles } from "./collection-schema-loader/file-scanner";
import {
	extractPlaceholderFields,
	generateSchemaPickCode,
	type PlaceholderFields,
} from "./collection-schema-loader/placeholders";
import {
	extractSchemaFieldNames,
	extractSchemaNames,
} from "./collection-schema-loader/schema-parser";

const GENERATED_TYPES_ROOT = resolve(process.cwd(), "src/generated/types");

function buildCollectionNameVariants(collectionName: string): string[] {
	const variants = new Set<string>([collectionName]);
	if (collectionName.startsWith("t_")) {
		variants.add(collectionName.slice(2));
	} else {
		variants.add(`t_${collectionName}`);
	}

	return [...variants];
}

function resolveCollectionNameFromSchemaFile(filePath: string): string | null {
	const normalizedPath = filePath.replace(/\\/g, "/");
	const parts = normalizedPath.split("/");
	const fileName = parts.at(-1);
	const parentDir = parts.at(-2);

	if (!fileName) {
		return null;
	}

	if (fileName === "schemas.ts") {
		// src/generated/types/<ds>/<segment>/<collection>/schemas.ts
		if (!parentDir || parentDir === "types") {
			return null;
		}
		return fileNameToCollectionName(parentDir);
	}

	return fileNameToCollectionName(fileName);
}

function scanAllSchemas(logger?: {
	debug: (msg: string) => void;
}): CollectionSchemaMapping[] {
	const mappings: CollectionSchemaMapping[] = [];

	if (!existsSync(GENERATED_TYPES_ROOT)) {
		logger?.debug(
			`Diretório de schemas não encontrado: ${GENERATED_TYPES_ROOT}`,
		);
		return mappings;
	}

	const dataSourceDirs = readdirSync(GENERATED_TYPES_ROOT, {
		withFileTypes: true,
	});

	for (const dataSourceDir of dataSourceDirs) {
		if (!dataSourceDir.isDirectory()) continue;

		const dataSourceKey = dataSourceDir.name;
		const datasourcePath = join(GENERATED_TYPES_ROOT, dataSourceDir.name);

		logger?.debug(`Escaneando datasource: ${dataSourceKey}`);

		const schemaFiles = scanSchemaFiles(datasourcePath);

		for (const filePath of schemaFiles) {
			const collectionName = resolveCollectionNameFromSchemaFile(filePath);
			if (!collectionName) {
				logger?.debug(`Collection não resolvida para arquivo: ${filePath}`);
				continue;
			}
			const fileContent = readFileSync(filePath, "utf-8");

			const schemaInfo = extractSchemaNames(collectionName, fileContent);
			if (!schemaInfo) {
				logger?.debug(`Schema não encontrado em: ${filePath}`);
				continue;
			}

			const availableFields = extractSchemaFieldNames(fileContent);
			const relativePath = filePath.replace(`${GENERATED_TYPES_ROOT}/`, "");
			const importPath = `#/generated/types/${relativePath.replace(/\.ts$/, "")}`;

			mappings.push({
				collectionName,
				dataSourceKey,
				schemaImportPath: importPath,
				schemaName: schemaInfo.schemaName,
				baseSchemaName: schemaInfo.baseSchemaName,
				availableFields,
			});

			logger?.debug(
				`  ${collectionName} -> ${schemaInfo.schemaName} (${importPath})`,
			);
		}
	}

	return mappings;
}

export function createRegistry(
	mappings: CollectionSchemaMapping[],
): SchemaRegistry {
	const registry = new Map<string, CollectionSchemaMapping>();

	for (const mapping of mappings) {
		const collectionVariants = buildCollectionNameVariants(
			mapping.collectionName,
		);

		for (const variant of collectionVariants) {
			const dataSourceKey = `${mapping.dataSourceKey}:${variant}`;
			if (!registry.has(dataSourceKey)) {
				registry.set(dataSourceKey, mapping);
			}

			if (!registry.has(variant)) {
				registry.set(variant, mapping);
			}
		}
	}

	return registry;
}

export function loadCollectionSchemas(logger?: {
	debug: (msg: string) => void;
}): SchemaLoadResult {
	const mappings = scanAllSchemas(logger);
	const registry = createRegistry(mappings);

	return {
		mappings,
		registry,
		notFound: [],
	};
}

export function findSchema(
	registry: SchemaRegistry,
	collectionName: string,
	dataSourceKey?: string,
): CollectionSchemaMapping | null {
	const collectionVariants = buildCollectionNameVariants(collectionName);

	if (dataSourceKey) {
		for (const variant of collectionVariants) {
			const key = `${dataSourceKey}:${variant}`;
			if (registry.has(key)) {
				return registry.get(key) ?? null;
			}
		}
	}

	for (const variant of collectionVariants) {
		if (registry.has(variant)) {
			return registry.get(variant) ?? null;
		}
	}

	return null;
}

export type {
	CollectionSchemaMapping,
	SchemaLoadResult,
	SchemaRegistry,
} from "../@types/collection-schema";
export {
	extractPlaceholderFields,
	generateSchemaPickCode,
	type PlaceholderFields,
};
