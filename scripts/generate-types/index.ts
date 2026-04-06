import { validateEnv } from "./src/env";
import {
	calculateSchemaHash,
	generateCollectionsTypes,
	generateContent,
	persistTypes,
} from "./src/generator";
import { fetchCollections } from "./src/nocobase";

export const outputPath = "src/@types/types.generated.ts";

async function generateTypes() {
	validateEnv();

	const collections = await fetchCollections();

	const collectionTypes = await generateCollectionsTypes(collections);

	const content = generateContent(collectionTypes);

	const schemaHash = calculateSchemaHash(collectionTypes);

	persistTypes({ content, schemaHash });
}

generateTypes().catch((error) => {
	console.error("Erro fatal:", error);
	process.exit(1);
});
