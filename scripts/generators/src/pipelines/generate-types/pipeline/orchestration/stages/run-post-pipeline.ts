import { runPostPipeline } from "../../post-pipeline";
import type { GenerationContext, GenerationStage } from "../types";

export interface PostPipelineInputs {
	hasSuccessfulResults: boolean;
	outputDirs: string[];
	writeFiles: NonNullable<
		GenerationContext["datasourceResults"][number]["result"]
	>["writeFiles"];
}

export function resolvePostPipelineInputs(
	ctx: GenerationContext,
): PostPipelineInputs {
	const successfulResults = ctx.datasourceResults.filter(
		(r) => r.status === "fulfilled",
	);

	if (successfulResults.length === 0) {
		return {
			hasSuccessfulResults: false,
			outputDirs: [],
			writeFiles: [],
		};
	}

	const outputDirs = Array.from(
		new Set(
			successfulResults
				.map((r) => {
					const ds = ctx.config.datasources?.find((d) => d.name === r.name);
					return ds?.outputDir;
				})
				.filter((dir): dir is string => dir !== undefined),
		),
	);

	const writeFiles = successfulResults.flatMap(
		(r) => r.result?.writeFiles ?? [],
	);

	return {
		hasSuccessfulResults: true,
		outputDirs,
		writeFiles,
	};
}

export function runPostPipelineStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		const postPipelineInputs = resolvePostPipelineInputs(ctx);
		if (!postPipelineInputs.hasSuccessfulResults) {
			return { ...ctx, postPipelineCompleted: false };
		}

		if (postPipelineInputs.writeFiles.length > 0) {
			await runPostPipeline(
				postPipelineInputs.outputDirs,
				postPipelineInputs.writeFiles,
				ctx.logger,
			);
		}

		return { ...ctx, postPipelineCompleted: true };
	};
}
