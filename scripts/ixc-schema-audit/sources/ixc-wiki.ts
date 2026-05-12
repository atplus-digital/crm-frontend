/**
 * Fetch de schemas da Wiki API do IXC com cache em disco
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { CONFIG, type CollectionSchema } from "../config";
import { parseWikiHtml, wikiFieldToType } from "./wiki-parser";

function ensureCacheDir(): void {
	if (!fs.existsSync(CONFIG.CACHE_DIR)) {
		fs.mkdirSync(CONFIG.CACHE_DIR, { recursive: true });
	}
}

function getCachePath(collectionName: string): string {
	return path.join(CONFIG.CACHE_DIR, `${collectionName}.html`);
}

function loadFromCache(collectionName: string): string | null {
	const cachePath = getCachePath(collectionName);

	if (!fs.existsSync(cachePath)) return null;

	try {
		const stats = fs.statSync(cachePath);
		const ageMs = Date.now() - stats.mtimeMs;
		const maxAgeMs = 7 * 24 * 60 * 60 * 1000;

		if (ageMs < maxAgeMs) {
			return fs.readFileSync(cachePath, "utf-8");
		}
	} catch {
		return null;
	}

	return null;
}

function saveToCache(collectionName: string, html: string): void {
	ensureCacheDir();
	const cachePath = getCachePath(collectionName);
	fs.writeFileSync(cachePath, html, "utf-8");
}

function getCharsetFromContentType(contentType: string | null): string {
	if (!contentType) return "ISO-8859-1";

	const match = contentType.match(/charset=([^;]+)/i);
	if (match) {
		return match[1].trim();
	}

	return "ISO-8859-1";
}

async function fetchWikiHtml(collectionName: string): Promise<string> {
	const cached = loadFromCache(collectionName);
	if (cached) {
		return cached;
	}

	const url = `${CONFIG.WIKI_BASE_URL}/formulario.php?form=${collectionName}`;

	let response: Response;
	try {
		response = await fetch(url, {
			headers: {
				"User-Agent": "IXC-Schema-Audit/1.0",
				Accept: "text/html",
			},
		});
	} catch (err) {
		throw new Error(`Falha ao conectar na Wiki API: ${err}`);
	}

	if (!response.ok) {
		throw new Error(
			`Wiki API retornou ${response.status} para ${collectionName}`,
		);
	}

	// Wiki API retorna charset=ISO-8859-1, precisamos decodificar corretamente
	const charset = getCharsetFromContentType(
		response.headers.get("content-type"),
	);
	const arrayBuffer = await response.arrayBuffer();

	let html: string;
	try {
		const decoder = new TextDecoder(charset);
		html = decoder.decode(arrayBuffer);
	} catch {
		// Fallback para ISO-8859-1 se o charset for inválido
		const decoder = new TextDecoder("ISO-8859-1");
		html = decoder.decode(arrayBuffer);
	}

	saveToCache(collectionName, html);

	return html;
}

export async function getIXCSchemaFromWiki(
	collectionName: string,
): Promise<CollectionSchema> {
	const result: CollectionSchema = {
		collectionName,
		scalars: new Map(),
		enums: new Map(),
		relations: new Map(),
	};

	const html = await fetchWikiHtml(collectionName);
	const fields = parseWikiHtml(html);

	for (const field of fields) {
		const { scalarType, isEnum, enumOptions } = wikiFieldToType(field);

		if (isEnum && enumOptions) {
			result.enums.set(field.fieldName, enumOptions);
		} else {
			result.scalars.set(field.fieldName, scalarType);
		}
	}

	return result;
}
