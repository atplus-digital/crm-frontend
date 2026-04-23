import { runPostPipeline } from "../../../pipeline/post-pipeline";
import type { GenerationContext, GenerationStage } from "../types";

export function runPostPipelineStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		const successfulResults = ctx.datasourceResults.filter(
			(r) => r.status === "fulfilled",
		);

		if (successfulResults.length === 0) {
			return { ...ctx, postPipelineCompleted: false };
		}

		const outputDirs = successfulResults
			.map((r) => {
				const ds = ctx.config.datasources?.find((d) => d.name === r.name);
				return ds?.outputDir;
			})
			.filter((dir): dir is string => dir !== undefined);

		const writeFiles = successfulResults.flatMap(
			(r) => r.result?.writeFiles ?? [],
		);

		if (writeFiles.length > 0) {
			await runPostPipeline(outputDirs, writeFiles);
		}

		return { ...ctx, postPipelineCompleted: true };
	};
}
