import type { ListrTask } from "listr2";

export const DEFAULT_TASK_RENDERER_OPTIONS: NonNullable<
	ListrTask["rendererOptions"]
> = {
	outputBar: Number.POSITIVE_INFINITY,
	persistentOutput: true,
};

export const DEFAULT_SUBTASK_OPTIONS = {
	concurrent: false,
	rendererOptions: {
		collapseSubtasks: false,
	},
};
