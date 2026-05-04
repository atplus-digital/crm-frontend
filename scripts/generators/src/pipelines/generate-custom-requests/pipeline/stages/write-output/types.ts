import type { Logger } from "@scripts/generators/src/lib/logger";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import type { ScriptConfig } from "../../../@types/script-config";

export interface WriteOutputContext {
	config: Pick<ScriptConfig, "outputDir" | "requests">;
	logger: Logger;
	mergedEntries: GeneratedRegistryEntry[];
}
