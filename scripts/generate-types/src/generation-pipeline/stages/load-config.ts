import { config } from "@scripts/generate-types/config";
import type { RuntimeConfig } from "../../@types/script";
import { parseConfig } from "../../utils/config";
import type { GenerationContext, GenerationStage } from "../types";

export interface LoadConfigOptions {
	overrideConfig?: Partial<RuntimeConfig>;
}

export function loadConfigStage(
	options: LoadConfigOptions = {},
): GenerationStage {
	return async (): Promise<GenerationContext> => {
		const runtimeConfig = options.overrideConfig
			? parseConfig(options.overrideConfig)
			: (config as RuntimeConfig);

		return { config: runtimeConfig } as GenerationContext;
	};
}
