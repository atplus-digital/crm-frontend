import { config as defaultScriptConfig } from "@scripts/generators/src/pipelines/generate-types/config";
import type { RuntimeConfig } from "../../../@types/script";
import { parseConfig } from "../../../utils/config";
import type { GenerationContext, GenerationStage } from "../types";

export interface LoadConfigOptions {
	overrideConfig?: Partial<RuntimeConfig>;
}

export function loadConfigStage(
	options: LoadConfigOptions = {},
): GenerationStage {
	return async (ctx): Promise<GenerationContext> => {
		if (options.overrideConfig) {
			const runtimeConfig = parseConfig(options.overrideConfig);
			return { ...ctx, config: runtimeConfig } as GenerationContext;
		}
		return { ...ctx, config: defaultScriptConfig } as GenerationContext;
	};
}
