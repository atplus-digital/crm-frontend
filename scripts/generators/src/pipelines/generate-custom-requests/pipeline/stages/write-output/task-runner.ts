import {
	createLoggedSubtask,
	getSubtaskOptions,
	type OrchestrationTaskRunner,
} from "@scripts/generators/src/lib/cli";
import {
	hasEntriesToWrite,
	writeGeneratedRegistryOutput,
	writeSplitFilesOutput,
} from "./operations";
import type { WriteOutputContext } from "./types";

export function runWriteOutputOrchestration(
	context: WriteOutputContext,
	task: OrchestrationTaskRunner,
) {
	if (!hasEntriesToWrite(context)) {
		context.logger.warn(
			"Nenhuma entrada válida para escrever. Pulando escrita.",
		);
		return;
	}

	return task.newListr(
		[
			createLoggedSubtask({
				title: "write-generated-registry",
				logger: context.logger,
				run: async () => {
					await writeGeneratedRegistryOutput(context);
				},
			}),
			createLoggedSubtask({
				title: "write-split-files",
				logger: context.logger,
				run: async () => {
					writeSplitFilesOutput(context);
				},
			}),
		],
		{
			...getSubtaskOptions("nested"),
		},
	);
}
