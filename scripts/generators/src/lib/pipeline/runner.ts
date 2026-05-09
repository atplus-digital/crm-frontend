export type AsyncPipelineStage<TContext> = (
	context: TContext,
) => Promise<TContext>;

export async function runPipelineStages<TContext>(
	initialContext: TContext,
	stages: AsyncPipelineStage<TContext>[],
): Promise<TContext> {
	let currentContext = initialContext;
	for (const stage of stages) {
		currentContext = await stage(currentContext);
	}
	return currentContext;
}
