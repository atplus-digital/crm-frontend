import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { EnumAdapterFieldEnum } from "../@types/script";
import { logVerbose } from "./logger";
import { parseWikiText } from "./wiki-parser";

interface CachedEntry {
	url: string;
	enums: Record<string, EnumAdapterFieldEnum>;
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
	return path.join(getCacheDir(), `${collectionName}.json`);
}

function getMetadataFilePath(): string {
	return path.join(getCacheDir(), METADATA_FILE);
}

function loadMetadata(): Record<string, number> {
	const metadataFile = getMetadataFilePath();

	if (!existsSync(metadataFile)) {
		return {};
	}

	try {
		const content = readFileSync(metadataFile, "utf-8");
		return JSON.parse(content) as Record<string, number>;
	} catch {
		return {};
	}
}

function saveMetadata(metadata: Record<string, number>): void {
	const metadataFile = getMetadataFilePath();
	writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
}

export async function fetchWithCache(
	collectionName: string,
	url: string,
): Promise<Record<string, EnumAdapterFieldEnum>> {
	if (!config.cacheEnums) {
		logVerbose(`[Cache] Disabled — fetching from ${url}`);
		const html = await fetchFromWiki(url);
		return parseWikiText(html);
	}

	const cacheFile = getCacheFilePath(collectionName);

	if (existsSync(cacheFile)) {
		try {
			const cached = JSON.parse(
				readFileSync(cacheFile, "utf-8"),
			) as CachedEntry;
			logVerbose(`[Cache] HIT: ${collectionName}`);
			return cached.enums;
		} catch {
			// corrupted cache — fall through to fetch
		}
	}

	logVerbose(`[Cache] MISS — fetching from ${url}`);
	const html = await fetchFromWiki(url);
	const enums = parseWikiText(html);

	try {
		const entry: CachedEntry = { url, enums };
		writeFileSync(cacheFile, JSON.stringify(entry, null, 2));

		const metadata = loadMetadata();
		metadata[collectionName] = Date.now();
		saveMetadata(metadata);

		logVerbose(
			`[Cache] WRITE: ${collectionName} (${Object.keys(enums).length} fields)`,
		);
	} catch (error) {
		logVerbose(
			`[Cache] WRITE FAILED: ${error instanceof Error ? error.message : String(error)}`,
		);
	}

	return enums;
}

async function fetchFromWiki(url: string): Promise<string> {
	const response = await fetch(url, {
		signal: AbortSignal.timeout(30_000),
	});

	if (!response.ok) {
		throw new Error(`HTTP ${response.status}`);
	}

	const buffer = await response.arrayBuffer();
	const decoder = new TextDecoder("iso-8859-1");
	return decoder.decode(buffer);
}
