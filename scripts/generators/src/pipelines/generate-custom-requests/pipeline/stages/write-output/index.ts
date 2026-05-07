import type { GenerationStage } from "../../../@types/orchestration";
import { executeWriteOutput } from "./operations";

export {
	executeWriteOutput,
	hasEntriesToWrite,
	writeGeneratedRegistryOutput,
	writeSplitFilesOutput,
} from "./operations";
export { runWriteOutputOrchestration } from "./task-runner";
export type { WriteOutputContext } from "./types";

export function writeOutputStage(): GenerationStage {
	return async (context) => {
		await executeWriteOutput(context);
		return context;
	};
}
