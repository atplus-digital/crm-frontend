import type { GenerateTypesResult } from "../../@types/script";
import type { GenerationContext, GenerationStage } from "../types";

export function formatResultStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		const allWriteFiles = ctx.datasourceResults
			.filter((r) => r.status === "fulfilled")
			.flatMap((r) => r.result?.writeFiles ?? []);

		const totalChanged = allWriteFiles.filter((f) => f.changed).length;
		const totalSkipped = allWriteFiles.filter((f) => f.skipped).length;

		const failedNames = ctx.datasourceResults
			.filter((r) => r.status === "rejected")
			.map((r) => r.name);

		if (failedNames.length > 0) {
			console.warn(
				`⚠️  ${failedNames.length} datasource(s) falharam: ${failedNames.join(", ")}`,
			);
		}

		const finalResult: GenerateTypesResult =
			allWriteFiles.length === 1
				? {
						resultType: "single",
						outputPath: allWriteFiles[0]?.outputPath,
						changed: allWriteFiles[0]?.changed,
						skipped: allWriteFiles[0]?.skipped,
					}
				: {
						resultType: "multi",
						files: allWriteFiles,
						totalFiles: allWriteFiles.length,
						totalChanged,
						totalSkipped,
					};

		return { ...ctx, finalResult };
	};
}
