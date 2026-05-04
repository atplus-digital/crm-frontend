import type { ListrTask } from "listr2";

export const DEFAULT_TASK_RENDERER_OPTIONS: NonNullable<
	ListrTask["rendererOptions"]
> = {
	outputBar: true,
	persistentOutput: true,
};

type SubtaskOptions = {
	concurrent: boolean;
	rendererOptions: {
		collapseSubtasks: boolean;
	};
};

export type SubtaskProfile = "main" | "nested" | "parallel";

const SUBTASK_PROFILE_OPTIONS: Record<SubtaskProfile, SubtaskOptions> = {
	main: {
		concurrent: false,
		rendererOptions: {
			collapseSubtasks: false,
		},
	},
	nested: {
		concurrent: false,
		rendererOptions: {
			collapseSubtasks: false,
		},
	},
	parallel: {
		concurrent: true,
		rendererOptions: {
			collapseSubtasks: false,
		},
	},
};

export function getSubtaskOptions(profile: SubtaskProfile): SubtaskOptions {
	const options = SUBTASK_PROFILE_OPTIONS[profile];
	return {
		...options,
		rendererOptions: {
			...options.rendererOptions,
		},
	};
}
