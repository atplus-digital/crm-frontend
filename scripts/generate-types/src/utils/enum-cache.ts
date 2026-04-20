import {
	existsSync,
	mkdirSync,
	readFileSync,
	statSync,
	writeFileSync,
} from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import { logVerbose } from "./logger";

interface CacheMetadata {
	entries: Record<string, number>;
}

const METADATA_FILE = "metadata.json";

function getCacheDir(): string {
	const cacheDir = path.join(
		process.cwd(),
		config.cacheDir ?? ".cache/ixc-wiki",
	);

	if (!existsSync(cacheDir)) {
		mkdirSync(cacheDir, { recursive: true });
	}

	return cacheDir;
}

function getCacheFilePath(collectionName: string): string {
	return path.join(getCacheDir(), `${collectionName}.html`);
}

function getMetadataFilePath(): string {
	return path.join(getCacheDir(), METADATA_FILE);
}

function loadMetadata(): CacheMetadata {
	const metadataFile = getMetadataFilePath();

	if (!existsSync(metadataFile)) {
		return { entries: {} };
	}

	try {
		const content = readFileSync(metadataFile, "utf-8");
		return JSON.parse(content) as CacheMetadata;
	} catch {
		return { entries: {} };
	}
}

function saveMetadata(metadata: CacheMetadata): void {
	const metadataFile = getMetadataFilePath();
	writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
}

export async function fetchWithCache(
	collectionName: string,
	url: string,
): Promise<string> {
	if (!config.cacheEnums) {
		logVerbose(`[Cache] Disabled — fetching from ${url}`);
		return fetchFromWiki(url);
	}

	const cacheFile = getCacheFilePath(collectionName);
	const ttlMs = config.cacheTtlMs ?? 86400000;

	if (existsSync(cacheFile)) {
		try {
			const stat = statSync(cacheFile);
			const age = Date.now() - stat.mtimeMs;

			if (age < ttlMs) {
				logVerbose(
					`[Cache] HIT: ${collectionName} (${Math.round(age / 1000)}s old)`,
				);
				return readFileSync(cacheFile, "utf-8");
			}

			logVerbose(
				`[Cache] EXPIRED: ${collectionName} (${Math.round(age / 1000)}s > ${ttlMs / 1000}s)`,
			);
		} catch {
			// Cache corrupt — continuar com fetch
		}
	}

	logVerbose(`[Cache] MISS — fetching from ${url}`);
	const html = await fetchFromWiki(url);

	try {
		writeFileSync(cacheFile, html);

		const metadata = loadMetadata();
		metadata.entries[collectionName] = Date.now();
		saveMetadata(metadata);

		logVerbose(`[Cache] WRITE: ${collectionName}`);
	} catch (error) {
		logVerbose(
			`[Cache] WRITE FAILED: ${error instanceof Error ? error.message : String(error)}`,
		);
	}

	return html;
}

async function fetchFromWiki(url: string): Promise<string> {
	const response = await fetch(url, {
		signal: AbortSignal.timeout(30_000),
	});

	if (!response.ok) {
		throw new Error(`HTTP ${response.status}`);
	}

	// A API do IXC Wiki retorna charset=ISO-8859-1, não UTF-8.
	// Sem correção, caracteres acentuados (é, í, etc.) são corrompidos
	// e o regex de scraping falha em encontrar "Dados técnicos".
	const buffer = await response.arrayBuffer();
	const decoder = new TextDecoder("iso-8859-1");
	return decoder.decode(buffer);
}

export function clearCache(collectionName?: string): void {
	const cacheDir = getCacheDir();

	if (collectionName) {
		const cacheFile = getCacheFilePath(collectionName);
		if (existsSync(cacheFile)) {
			writeFileSync(cacheFile, "");
			logVerbose(`[Cache] CLEARED: ${collectionName}`);
		}
	} else {
		const files = existsSync(cacheDir)
			? require("node:fs").readdirSync(cacheDir)
			: [];

		for (const file of files) {
			if (file.endsWith(".html") || file === METADATA_FILE) {
				require("node:fs").unlinkSync(path.join(cacheDir, file));
			}
		}

		logVerbose("[Cache] CLEARED: all");
	}
}

export function getCacheStats(): { totalEntries: number; totalSize: number } {
	const metadata = loadMetadata();
	const cacheDir = getCacheDir();

	let totalSize = 0;

	if (existsSync(cacheDir)) {
		const files = require("node:fs").readdirSync(cacheDir);
		for (const file of files) {
			if (file.endsWith(".html")) {
				try {
					totalSize += statSync(path.join(cacheDir, file)).size;
				} catch {
					// Ignorar arquivos que não podem ser lidos
				}
			}
		}
	}

	return {
		totalEntries: Object.keys(metadata.entries).length,
		totalSize,
	};
}
