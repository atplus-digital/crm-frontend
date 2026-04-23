import * as path from "node:path";
import type { GenerateTypesResult } from "../../../@types/script";
import type { GenerationContext, GenerationStage } from "../types";

export function formatResultStage(): GenerationStage {
	return async (ctx: GenerationContext): Promise<GenerationContext> => {
		const allWriteFiles = ctx.datasourceResults
			.filter((r) => r.status === "fulfilled")
			.flatMap((r) => r.result?.writeFiles ?? []);

		const changedFiles = allWriteFiles.filter((f) => f.changed);
		const skippedFiles = allWriteFiles.filter((f) => f.skipped);
		const totalChanged = changedFiles.length;
		const totalSkipped = skippedFiles.length;

		const failedNames = ctx.datasourceResults
			.filter((r) => r.status === "rejected")
			.map((r) => r.name);

		if (failedNames.length > 0) {
			console.warn(
				`⚠️  ${failedNames.length} datasource(s) falharam: ${failedNames.join(", ")}`,
			);
		}

		if (totalChanged > 0) {
			console.info(`\n📝 Arquivos alterados (${totalChanged}):`);
			for (const file of changedFiles.slice(0, 20)) {
				console.info(`   • ${path.relative(process.cwd(), file.outputPath)}`);
			}
			if (totalChanged > 20) {
				console.info(`   ... e mais ${totalChanged - 20} arquivo(s)`);
			}
		}

		if (totalSkipped > 0) {
			console.info(
				`\n⏭️  Arquivos pulados (${totalSkipped}) — em edição ou inalterados`,
			);
		}

		if (totalChanged === 0 && failedNames.length === 0) {
			console.info(`\n✅ Nenhum arquivo alterado — tudo já está atualizado.`);
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
