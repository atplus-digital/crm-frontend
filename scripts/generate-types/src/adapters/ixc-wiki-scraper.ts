import type { EnumAdapter } from "../@types/script";
import { fetchWithCache } from "../utils/enum-cache";
import { logVerbose } from "../utils/logger";

const WIKI_BASE_URL = "https://wikiapiprovedor.ixcsoft.com.br";

export function createIXCWikiAdapter(): EnumAdapter {
	return {
		name: "IXC Wiki Schema",
		async fetchEnums(
			collectionName: string,
		): Promise<
			Record<string, { values: string[]; labels: Record<string, string> }>
		> {
			const url = `${WIKI_BASE_URL}/formulario.php?form=${collectionName}`;

			logVerbose(`[IXC Wiki] Fetching ${url}`);

			let enums: Record<
				string,
				{ values: string[]; labels: Record<string, string> }
			>;
			try {
				enums = await fetchWithCache(collectionName, url);
			} catch (err) {
				logVerbose(
					`[IXC Wiki] Falha ao buscar ${url}: ${err instanceof Error ? err.message : String(err)}`,
				);
				throw err;
			}

			const count = Object.keys(enums).length;
			logVerbose(`[IXC Wiki] ${count} campos com enum para ${collectionName}`);

			return enums;
		},
	};
}
