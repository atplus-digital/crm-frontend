import type { ScriptConfig } from "../../../@types/script-config";
import { parseConfig } from "../../../utils/config";
import type { GenerationStage } from "../../orchestration/types";

export interface LoadConfigStageOptions {
	overrideConfig?: Partial<ScriptConfig>;
}

export function loadConfigStage(
	options: LoadConfigStageOptions = {},
): GenerationStage {
	return async (context) => ({
		...context,
		config: parseConfig(options.overrideConfig),
	});
}
