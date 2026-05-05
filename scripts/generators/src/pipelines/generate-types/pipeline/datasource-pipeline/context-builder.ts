import type { Logger } from "@scripts/generators/src/lib/logging";
import type {
	DataSourceClient,
	DataSourceGenerationConfig,
	RuntimeConfig,
} from "../../@types/script";
import type { InitContext } from "./types";

export function createInitialContext(
	config: RuntimeConfig,
	dataSource: DataSourceGenerationConfig,
	client: DataSourceClient,
	logger: Logger,
): InitContext {
	return { config, dataSource, client, logger };
}
