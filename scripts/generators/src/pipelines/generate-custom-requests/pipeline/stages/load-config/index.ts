import type { ScriptConfig } from "../../../@types/script-config";
import { config as defaultScriptConfig } from "../../../config";
import { parseConfig } from "../../../utils/config";
import type { GenerationStage } from "../../orchestration/types";

export interface LoadConfigStageOptions {
	overrideConfig?: Partial<ScriptConfig>;
}

export function loadConfigStage(
	options: LoadConfigStageOptions = {},
): GenerationStage {
	return async (context) => {
		if (options.overrideConfig) {
			return {
				...context,
				config: parseConfig(options.overrideConfig),
			};
		}

		return {
			...context,
			config: defaultScriptConfig,
		};
	};
}
