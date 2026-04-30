import type { Logger } from "@scripts/generators/src/lib/logger";
import type { EnumAdapter, EnumAdapterFieldEnum } from "../@types/script";
import { fetchWithCache } from "../utils/enum-cache";

const WIKI_BASE_URL = "https://wikiapiprovedor.ixcsoft.com.br";

export function createIXCWikiAdapter(logger: Logger): EnumAdapter {
	return {
		name: "IXC Wiki Schema",
		async fetchEnums(
			collectionName: string,
		): Promise<Record<string, EnumAdapterFieldEnum>> {
			const url = `${WIKI_BASE_URL}/formulario.php?form=${collectionName}`;

			logger.debug(`[IXC Wiki] Fetching ${url}`);

			let enums: Record<string, EnumAdapterFieldEnum>;
			try {
				enums = await fetchWithCache(collectionName, url, logger);
			} catch (err) {
				logger.debug(
					`[IXC Wiki] Falha ao buscar ${url}: ${err instanceof Error ? err.message : String(err)}`,
				);
				throw err;
			}

			const count = Object.keys(enums).length;
			logger.debug(
				`[IXC Wiki] ${count} campos com enum para ${collectionName}`,
			);

			return enums;
		},
	};
}
