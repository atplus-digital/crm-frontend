import type { DataSourceGenerationConfig } from "../../../@types/script";
import type { GenerationContext, GenerationStage } from "../types";

export function resolveDatasourcesStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		const dataSourceConfigs = (ctx.config.datasources ?? []).filter(
			(
				d: DataSourceGenerationConfig,
			): d is DataSourceGenerationConfig & {
				outputDir: string;
			} => (d.outputDir ?? "").trim().length > 0,
		);

		return { ...ctx, dataSourceConfigs };
	};
}
