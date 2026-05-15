/**
 * Descoberta dinâmica de collections a partir dos tipos gerados
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { CONFIG } from "./config";

export interface DiscoveredCollection {
	name: string;
	dirName: string;
	schemasPath: string;
	labelsPath: string;
	indexPath: string;
}

/**
 * Converte kebab-case para snake_case
 * Ex: "cliente-contrato" -> "cliente_contrato"
 */
function kebabToSnakeCase(str: string): string {
	return str.replace(/-/g, "_");
}

/**
 * Descobre collections a partir do diretório de tipos gerados
 *
 * Lógica:
 * - Lê diretórios em src/generated/types/d_db_ixcsoft/
 * - Exclui: 'other/', 'collections.ts', 'index.ts'
 * - Cada diretório válido = uma collection
 */
export function discoverCollections(): DiscoveredCollection[] {
	const baseDir = CONFIG.GENERATED_TYPES_DIR;
	const results: DiscoveredCollection[] = [];

	if (!fs.existsSync(baseDir)) {
		throw new Error(
			`Diretório não encontrado: ${baseDir}. Execute pnpm generate:types primeiro.`,
		);
	}

	const entries = fs.readdirSync(baseDir, { withFileTypes: true });

	const excludeDirs = CONFIG.EXCLUDE_DIRS as readonly string[];
	const excludeFiles = CONFIG.EXCLUDE_FILES as readonly string[];

	for (const entry of entries) {
		if (entry.isDirectory() && excludeDirs.includes(entry.name)) continue;

		if (entry.isFile() && excludeFiles.includes(entry.name)) continue;

		if (entry.isDirectory()) {
			const dirName = entry.name;
			const collectionName = kebabToSnakeCase(dirName);
			const schemasPath = path.join(baseDir, dirName, "schemas.ts");
			const labelsPath = path.join(baseDir, dirName, "labels.ts");
			const indexPath = path.join(baseDir, dirName, "index.ts");

			if (fs.existsSync(schemasPath)) {
				results.push({
					name: collectionName,
					dirName,
					schemasPath,
					labelsPath: fs.existsSync(labelsPath) ? labelsPath : "",
					indexPath: fs.existsSync(indexPath) ? indexPath : "",
				});
			}
		}
	}

	return results.sort((a, b) => a.name.localeCompare(b.name));
}
