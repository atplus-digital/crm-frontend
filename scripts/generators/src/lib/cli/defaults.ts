import type { ListrTask } from "listr2";

export const DEFAULT_TASK_RENDERER_OPTIONS: NonNullable<
	ListrTask["rendererOptions"]
> = {
	outputBar: Number.POSITIVE_INFINITY,
	persistentOutput: true,
};

type SubtaskOptions = {
	concurrent: boolean;
	rendererOptions: {
		collapseSubtasks: boolean;
		showSubtasks?: boolean;
		showSkip?: boolean;
	};
};

export type SubtaskProfile = "main" | "nested" | "parallel" | "silent";

const SUBTASK_PROFILE_OPTIONS: Record<SubtaskProfile, SubtaskOptions> = {
	main: {
		concurrent: false,
		rendererOptions: {
			collapseSubtasks: false,
			showSubtasks: true,
		},
	},
	nested: {
		concurrent: false,
		rendererOptions: {
			collapseSubtasks: false,
			showSubtasks: true,
		},
	},
	parallel: {
		concurrent: true,
		rendererOptions: {
			collapseSubtasks: false,
			showSubtasks: true,
		},
	},
	silent: {
		concurrent: false,
		rendererOptions: {
			collapseSubtasks: true,
			showSubtasks: false,
			showSkip: false,
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
