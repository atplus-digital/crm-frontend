import {
	createLoggedSubtask,
	getSubtaskOptions,
	type OrchestrationTaskRunner,
} from "@scripts/generators/src/lib/cli";
import type { AtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import {
	createWriteOutputSession,
	finalizeWriteOutput,
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

	let atomicSession: AtomicWriteSession | undefined;

	const rollbackAtomicSession = async (): Promise<void> => {
		if (!atomicSession) {
			return;
		}

		atomicSession.restore();
		atomicSession.cleanup();
		atomicSession = undefined;
	};

	return task.newListr(
		[
			createLoggedSubtask({
				title: "backup-output",
				logger: context.logger,
				run: async () => {
					atomicSession = createWriteOutputSession(context);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "write-generated-registry",
				logger: context.logger,
				run: async () => {
					await writeGeneratedRegistryOutput(context);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "write-split-files",
				logger: context.logger,
				run: async () => {
					writeSplitFilesOutput(context);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "validate-output",
				logger: context.logger,
				run: async () => {
					if (!atomicSession) {
						throw new Error("Sessão atômica não inicializada para validação");
					}

					await finalizeWriteOutput(atomicSession);
				},
				rollback: rollbackAtomicSession,
			}),
			createLoggedSubtask({
				title: "cleanup-output",
				logger: context.logger,
				run: () => {
					atomicSession?.cleanup();
					atomicSession = undefined;
				},
			}),
		],
		{
			...getSubtaskOptions("nested"),
		},
	);
}
