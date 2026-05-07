import { CustomRequestsApiClient } from "../../../api/client";
import type { GenerationStage } from "../../orchestration/types";

export function fetchEntriesStage(): GenerationStage {
	return async (context) => {
		const client = new CustomRequestsApiClient(context.config, context.logger);
		const entries = await client.fetchAllCustomRequests();
		context.logger.info(`${entries.length} entradas encontradas na API`);

		return {
			...context,
			entries,
		};
	};
}
