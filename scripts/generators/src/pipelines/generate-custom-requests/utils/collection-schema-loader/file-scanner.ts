import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

export function scanSchemaFiles(dirPath: string): string[] {
	if (!existsSync(dirPath)) {
		return [];
	}

	const files: string[] = [];
	const entries = readdirSync(dirPath, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = join(dirPath, entry.name);
		if (
			entry.isFile() &&
			entry.name.endsWith(".ts") &&
			entry.name !== "index.ts"
		) {
			files.push(fullPath);
			continue;
		}

		if (entry.isDirectory()) {
			files.push(...scanSchemaFiles(fullPath));
		}
	}

	return files;
}
