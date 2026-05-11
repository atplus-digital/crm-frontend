/**
 * IXC Schema Audit
 * Compara schemas IXC (Wiki API + relations map) com tipos gerados pelo NocoBase
 *
 * Comando: pnpm ixc:audit
 */

import { CONFIG, type CollectionSchema, type CollectionDiff } from "./config";
import { discoverCollections } from "./discovery";
import { extractCollectionSchema } from "./extractor";
import { getIXCSchemaFromWiki } from "./sources/ixc-wiki";
import { getIXCRelations } from "./sources/ixc-relations";
import { compareCollections } from "./comparator";
import { writeReports } from "./reporter";

function mergeIXCRelations(
	schema: CollectionSchema,
	collectionName: string,
): CollectionSchema {
	const relations = getIXCRelations(collectionName);

	for (const rel of relations) {
		schema.relations.set(rel.fieldName, {
			target: rel.targetCollection,
			type: rel.type,
		});
	}

	return schema;
}

async function main(): Promise<void> {
	console.log("=".repeat(60));
	console.log("IXC Schema Audit");
	console.log("=".repeat(60));
	console.log("");

	console.log("🔍 Descobrindo collections...");
	const collections = discoverCollections();
	console.log(`   Encontradas: ${collections.length} collections`);
	console.log(`   ${collections.map((c) => c.name).join(", ")}`);
	console.log("");

	const allDiffs: CollectionDiff[] = [];
	const errors: Array<{ collection: string; error: string }> = [];

	for (const [i, collection] of collections.entries()) {
		console.log(
			`\n[${i + 1}/${collections.length}] Processando: ${collection.name}`,
		);

		try {
			console.log(`   📦 Extraindo schema NocoBase...`);
			const nocobaseSchema =
				await extractCollectionSchema(collection);
			console.log(`      Scalars: ${nocobaseSchema.scalars.size}`);
			console.log(`      Enums: ${nocobaseSchema.enums.size}`);
			console.log(`      Relations: ${nocobaseSchema.relations.size}`);

			console.log(
				`   🌐 Buscando schema IXC (Wiki API + Relations Map)...`,
			);
			let ixcSchema: CollectionSchema;
			try {
				ixcSchema = await getIXCSchemaFromWiki(collection.name);
				console.log(
					`      Wiki: ${ixcSchema.scalars.size} scalars, ${ixcSchema.enums.size} enums`,
				);
			} catch (wikiErr) {
				console.warn(`      ⚠️ Wiki API falhou: ${wikiErr}`);
				console.warn(`      ⚠️ Usando apenas Relations Map`);
				ixcSchema = {
					collectionName: collection.name,
					scalars: new Map(),
					enums: new Map(),
					relations: new Map(),
				};
			}

			ixcSchema = mergeIXCRelations(ixcSchema, collection.name);
			console.log(
				`      Relations Map: ${ixcSchema.relations.size} relações`,
			);

			console.log(`   🔄 Comparando...`);
			const diff = compareCollections(ixcSchema, nocobaseSchema);
			console.log(`      Diffs: ${diff.diffCount}`);

			allDiffs.push(diff);

			if (diff.diffCount === 0) {
				console.log(`   ✅ Nenhum diff!`);
			} else {
				console.log(
					`   ⚠️ ${diff.scalars.length} scalars, ${diff.enums.length} enums, ${diff.relations.length} relations com diff`,
				);
			}
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error(`   ❌ ERRO: ${msg}`);
			errors.push({ collection: collection.name, error: msg });
		}
	}

	console.log("\n" + "=".repeat(60));
	console.log("📝 Gerando relatórios...");

	const writtenPaths = writeReports(allDiffs);
	console.log(`   Escritos: ${writtenPaths.length} arquivos`);
	console.log(`   Diretório: ${CONFIG.OUTPUT_DIR}`);

	console.log("\n" + "=".repeat(60));
	console.log("📊 Resumo Final");
	console.log("=".repeat(60));

	const totalDiffs = allDiffs.reduce((sum, d) => sum + d.diffCount, 0);
	const collectionsWithDiffs = allDiffs.filter((d) => d.diffCount > 0).length;

	console.log(`Collections processadas: ${collections.length}`);
	console.log(`Collections com diffs: ${collectionsWithDiffs}`);
	console.log(`Total de diffs: ${totalDiffs}`);

	if (errors.length > 0) {
		console.log(`\n⚠️ Erros (${errors.length}):`);
		for (const e of errors) {
			console.log(`   - ${e.collection}: ${e.error}`);
		}
	}

	console.log("\n" + "=".repeat(60));
	console.log(`Relatório principal: ${CONFIG.OUTPUT_DIR}/index.md`);
	console.log("=".repeat(60));
}

main().catch((err) => {
	console.error("ERRO FATAL:", err);
	process.exit(1);
});
