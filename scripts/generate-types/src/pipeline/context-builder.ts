import type {
	DataSourceClient,
	DataSourceGenerationConfig,
	RuntimeConfig,
} from "../@types/script";
import { logger } from "../utils/logger";
import type { InitContext, PipelineContext } from "./types";

export function createInitialContext(
	config: RuntimeConfig,
	dataSource: DataSourceGenerationConfig,
	client: DataSourceClient,
): InitContext {
	return { config, dataSource, client };
}

export function cloneContext(ctx: PipelineContext): PipelineContext {
	return { ...ctx };
}

export function getContextLogger() {
	return logger;
}
