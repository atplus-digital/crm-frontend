import type { PipelineContext, PipelineStage } from "./types";

export function pipeAsync<C extends PipelineContext>(
	...stages: PipelineStage<C>[]
): (initial: C) => Promise<PipelineContext> {
	return async (initial: C) => {
		let context: PipelineContext = initial;
		for (const stage of stages) {
			context = await stage(context as C);
		}
		return context;
	};
}
