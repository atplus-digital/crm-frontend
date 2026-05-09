import type { CreateScriptTasksInput } from "../../generator-registry";
import type { GeneratorDefinition, TaskRunner } from "../cli/types";
import { runGeneratorCli } from "./orchestrator";

export function createScriptTasks(
	input: CreateScriptTasksInput,
): GeneratorDefinition {
	const cliOptions = input.createCliOptions();
	const getOutputDirs = () => input.outputDirs;

	return {
		name: cliOptions.name,
		description: input.description,
		getOutputDirs,
		createPipelineOptions: (_config, _task: TaskRunner) => ({
			defaultConfig: {},
			getOutputDirs,
			stages: [(_ctx, stageTask) => runGeneratorCli(cliOptions, stageTask)],
			label: cliOptions.name,
		}),
	};
}
