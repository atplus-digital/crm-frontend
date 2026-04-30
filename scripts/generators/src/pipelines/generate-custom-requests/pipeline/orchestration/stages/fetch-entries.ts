import { logger } from "@scripts/generators/src/lib/logger";
import { CustomRequestsApiClient } from "../../../api/client";
import type { GenerationStage } from "../types";

export function fetchEntriesStage(): GenerationStage {
	return async (context) => {
		logger.info("Iniciando geração de custom requests...");
		const client = new CustomRequestsApiClient(context.config);
		const entries = await client.fetchAllCustomRequests();
		logger.info(`${entries.length} entradas encontradas na API`);

		return {
			...context,
			entries,
		};
	};
}
