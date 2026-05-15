/**
 * IXC Schema Audit
 * Compara schemas IXC (Wiki API + relations map) com tipos gerados pelo NocoBase
 *
 * Comando: pnpm ixc:audit [--verbose] [--collection=nome]
 *
 * Opções:
 *   --verbose       Mostra TODOS os campos (incluindo matches) nos relatórios
 *   --collection=NOME  Apenas a collection especificada
 */

import { compareCollections } from "./comparator";
import {
	type CliOptions,
	CONFIG,
	type CollectionDiff,
	type CollectionSchema,
} from "./config";
import { discoverCollections } from "./discovery";
import { extractCollectionSchema } from "./extractor";
import { writeReports } from "./reporter";
import { getIXCRelations } from "./sources/ixc-relations";
import { getIXCSchemaFromWiki } from "./sources/ixc-wiki";

function parseCliArgs(): CliOptions {
	const args = process.argv.slice(2);
	const options: CliOptions = {
		verbose: false,
		collection: undefined,
	};

	for (const arg of args) {
		if (arg === "--verbose" || arg === "-v") {
			options.verbose = true;
		} else if (arg.startsWith("--collection=")) {
			options.collection = arg.slice("--collection=".length);
		} else if (arg.startsWith("-c=")) {
			options.collection = arg.slice("-c=".length);
		}
	}

	return options;
}

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
	const cliOptions = parseCliArgs();

	console.log("=".repeat(60));
	console.log("IXC Schema Audit");
	console.log("=".repeat(60));
	console.log("");

	if (cliOptions.verbose) {
		console.log("📢 Modo VERBOSE ativado");
		console.log("   - Todos os campos serão mostrados nos relatórios");
		console.log("   - Inclui matches e raw field names");
		console.log("");
	}

	console.log("🔍 Descobrindo collections...");
	let collections = discoverCollections();

	if (cliOptions.collection) {
		const filtered = collections.filter(
			(c) => c.name.toLowerCase() === cliOptions.collection?.toLowerCase(),
		);
		if (filtered.length === 0) {
			console.error(`❌ Collection "${cliOptions.collection}" não encontrada`);
			console.error(
				`   Disponíveis: ${collections.map((c) => c.name).join(", ")}`,
			);
			process.exit(1);
		}
		collections = filtered;
		console.log(`   Filtrada: ${collections[0].name}`);
	} else {
		console.log(`   Encontradas: ${collections.length} collections`);
		console.log(`   ${collections.map((c) => c.name).join(", ")}`);
	}
	console.log("");

	const allDiffs: CollectionDiff[] = [];
	const errors: Array<{ collection: string; error: string }> = [];

	for (const [i, collection] of collections.entries()) {
		console.log(
			`\n[${i + 1}/${collections.length}] Processando: ${collection.name}`,
		);

		try {
			console.log(`   📦 Extraindo schema NocoBase...`);
			const nocobaseSchema = await extractCollectionSchema(collection);
			console.log(`      Scalars: ${nocobaseSchema.scalars.size}`);
			console.log(`      Enums: ${nocobaseSchema.enums.size}`);
			console.log(`      Relations: ${nocobaseSchema.relations.size}`);

			console.log(`   🌐 Buscando schema IXC (Wiki API + Relations Map)...`);
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
			console.log(`      Relations Map: ${ixcSchema.relations.size} relações`);

			console.log(`   🔄 Comparando...`);
			const diff = compareCollections(
				ixcSchema,
				nocobaseSchema,
				cliOptions.verbose,
			);
			console.log(`      Diffs: ${diff.diffCount}`);

			allDiffs.push(diff);

			if (diff.diffCount === 0) {
				console.log(`   ✅ Nenhum diff!`);
			} else {
				const actualScalarDiffs = diff.scalars.filter(
					(d) => d.side !== "match",
				).length;
				const actualEnumDiffs = diff.enums.filter(
					(d) => d.side !== "match",
				).length;
				const actualRelDiffs = diff.relations.filter(
					(d) => d.side !== "match",
				).length;
				console.log(
					`   ⚠️ ${actualScalarDiffs} scalars, ${actualEnumDiffs} enums, ${actualRelDiffs} relations com diff`,
				);
				if (cliOptions.verbose) {
					const scalarMatches = diff.scalars.filter(
						(d) => d.side === "match",
					).length;
					const enumMatches = diff.enums.filter(
						(d) => d.side === "match",
					).length;
					const relMatches = diff.relations.filter(
						(d) => d.side === "match",
					).length;
					console.log(
						`      (e ${scalarMatches + enumMatches + relMatches} matches no modo verbose)`,
					);
				}
			}
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			console.error(`   ❌ ERRO: ${msg}`);
			errors.push({ collection: collection.name, error: msg });
		}
	}

	console.log(`\n${"=".repeat(60)}`);
	console.log("📝 Gerando relatórios...");

	const writtenPaths = writeReports(allDiffs, cliOptions.verbose);
	console.log(`   Escritos: ${writtenPaths.length} arquivos`);
	console.log(`   Diretório: ${CONFIG.OUTPUT_DIR}`);
	console.log(
		`   Modo verbose: ${cliOptions.verbose ? "ativado" : "desativado"}`,
	);

	console.log(`\n${"=".repeat(60)}`);
	console.log("📊 Resumo Final");
	console.log("=".repeat(60));

	const totalDiffs = allDiffs.reduce((sum, d) => sum + d.diffCount, 0);
	const collectionsWithDiffs = allDiffs.filter((d) => d.diffCount > 0).length;
	const totalIxcFields = allDiffs.reduce(
		(sum, d) => sum + d.metadata.ixcTotalFields,
		0,
	);
	const totalNbFields = allDiffs.reduce(
		(sum, d) => sum + d.metadata.nocobaseTotalFields,
		0,
	);

	console.log(`Collections processadas: ${collections.length}`);
	console.log(`Collections com diffs: ${collectionsWithDiffs}`);
	console.log(`Total de campos IXC: ${totalIxcFields}`);
	console.log(`Total de campos NocoBase: ${totalNbFields}`);
	console.log(`Total de diffs: ${totalDiffs}`);

	if (errors.length > 0) {
		console.log(`\n⚠️ Erros (${errors.length}):`);
		for (const e of errors) {
			console.log(`   - ${e.collection}: ${e.error}`);
		}
	}

	console.log(`\n${"=".repeat(60)}`);
	console.log(`Relatório principal: ${CONFIG.OUTPUT_DIR}/index.md`);
	if (cliOptions.verbose) {
		console.log(
			"💡 Dica: Abra os relatórios .md para ver a comparação completa",
		);
		console.log("   de todos os campos, incluindo nomes brutos e matches.");
	}
	console.log("=".repeat(60));
}

main().catch((err) => {
	console.error("ERRO FATAL:", err);
	process.exit(1);
});
