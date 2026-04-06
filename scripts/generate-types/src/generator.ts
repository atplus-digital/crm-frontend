import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { outputPath } from "..";
import { formatKey, toPascalCase, toValidIdentifier } from "./naming";
import { fetchCollectionFields, isRelation, mapFieldType } from "./nocobase";
import type {
	CollectionTypesMap,
	GeneratedTypes,
	NocoBaseCollection,
} from "./types";

export function generateTypeDefinitions(
	collectionTypes: CollectionTypesMap,
): string {
	const lines: string[] = [];

	for (const [collectionName, types] of Object.entries(collectionTypes)) {
		const { scalars, relations } = types;
		const validName = toValidIdentifier(collectionName);

		lines.push(`export interface ${validName}Base {`);
		for (const [fieldName, fieldType] of scalars) {
			lines.push(`	${formatKey(fieldName)}: ${fieldType};`);
		}
		for (const [fieldName, relInfo] of relations) {
			if (relInfo.type === "belongsTo") {
				const targetName = toPascalCase(relInfo.targetCollection);
				lines.push(`	${formatKey(fieldName)}: ${targetName}Base | null;`);
			}
		}
		lines.push(`}`);
		lines.push("");

		// XxxRelations - propriedades de relação opcionais
		const relationEntries = Array.from(relations.entries());
		if (relationEntries.length === 0) {
			lines.push(`export type ${validName}Relations = object;`);
		} else {
			lines.push(`export interface ${validName}Relations {`);
			for (const [fieldName, relInfo] of relationEntries) {
				if (relInfo.type === "hasMany" || relInfo.type === "belongsToMany") {
					const targetName = toPascalCase(relInfo.targetCollection);
					lines.push(`	${formatKey(fieldName)}?: ${targetName}Base[];`);
				} else if (relInfo.type === "belongsTo") {
					const targetName = toPascalCase(relInfo.targetCollection);
					lines.push(`	${formatKey(fieldName)}?: ${targetName}Base | null;`);
				}
			}
			lines.push(`}`);
		}
		lines.push("");

		// XxxRelationKey - keyof XxxRelations
		lines.push(
			`export type ${validName}RelationKey = keyof ${validName}Relations;`,
		);
		lines.push("");
	}

	return lines.join("\n");
}

export function calculateSchemaHash(
	collectionTypes: CollectionTypesMap,
): string {
	const schemaJson = JSON.stringify(collectionTypes);
	const schemaHash = crypto
		.createHash("sha256")
		.update(schemaJson)
		.digest("hex");

	if (hasSchemaChanged(schemaHash)) {
		console.log("⚠️  Hash do schema divergiu do arquivo existente");
	}

	return schemaHash;
}

export function hasSchemaChanged(schemaHash: string): boolean {
	const hashFilePath = path.resolve(process.cwd(), "scripts/types.hash");

	if (!fs.existsSync(hashFilePath)) {
		return true;
	}

	const existingHash = fs.readFileSync(hashFilePath, "utf-8").trim();
	return existingHash !== schemaHash;
}

export async function generateCollectionsTypes(
	collections: NocoBaseCollection[],
): Promise<CollectionTypesMap> {
	const baseUrl = process.env.CRM_NOCOBASE_URL ?? "";
	const token = process.env.CRM_NOCOBASE_TOKEN ?? "";

	const allCollectionNames = collections.map((c) => c.name);

	const collectionTypes: CollectionTypesMap = {};

	for (const collection of collections) {
		const fields = await fetchCollectionFields(baseUrl, token, collection.name);

		const pascalName = toPascalCase(collection.name);
		const generated: GeneratedTypes = {
			scalars: new Map(),
			relations: new Map(),
		};

		for (const field of fields) {
			if (isRelation(field)) {
				generated.relations.set(field.name, {
					type: field.interface,
					targetCollection: field.target || "",
				});
			} else {
				const tsType = mapFieldType(field, collection.name, allCollectionNames);
				generated.scalars.set(field.name, tsType);
			}
		}

		collectionTypes[pascalName] = generated;
	}

	return collectionTypes;
}

export function generateContent(collectionTypes: CollectionTypesMap): string {
	const output = generateTypeDefinitions(collectionTypes);

	const banner = `
/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 */

`;
	const content = banner + output;

	return content;
}

export function persistTypes({
	content,
	schemaHash,
}: {
	content: string;
	schemaHash: string;
}) {
	const typesOutputPath = path.resolve(process.cwd(), outputPath);
	const typesDir = path.dirname(typesOutputPath);

	if (!fs.existsSync(typesDir)) {
		fs.mkdirSync(typesDir, { recursive: true });
	}

	fs.writeFileSync(typesOutputPath, content, "utf-8");

	const hashFilePath = path.resolve(process.cwd(), "scripts/types.hash");
	fs.writeFileSync(hashFilePath, schemaHash, "utf-8");

	console.log(`✅ Arquivo gerado: ${typesOutputPath}`);
}
