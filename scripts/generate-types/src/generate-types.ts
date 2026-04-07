import { config } from "../config";
import type { GenerateTypesResult } from "./@types/script";
import { NocoBaseClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateContent } from "./generation/content";
import { previewGeneratedFile, writeGeneratedFile } from "./utils/writer";

export async function runGenerateTypes(): Promise<GenerateTypesResult> {
	const client = new NocoBaseClient(config);

	console.log(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await client.fetchCollections();

	console.log(`📋 Encontradas ${collections.length} collections`);

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			console.log(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	const content = generateContent(collectionTypes);

	if (config.dryRun) {
		return previewGeneratedFile(content);
	}

	return writeGeneratedFile(content);
}
