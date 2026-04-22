import type {
	DataSourceClient,
	DataSourceGenerationConfig,
	RuntimeConfig,
} from "../@types/script";
import type { InitContext } from "./types";

export function createInitialContext(
	config: RuntimeConfig,
	dataSource: DataSourceGenerationConfig,
	client: DataSourceClient,
): InitContext {
	return { config, dataSource, client };
}
