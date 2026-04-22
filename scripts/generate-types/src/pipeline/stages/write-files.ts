import * as path from "node:path";
import { writeGeneratedFile } from "../../utils/writer";
import type { GeneratedFileWrite, PipelineContext } from "../types";

export async function writeFiles(
	ctx: Readonly<PipelineContext & { fileContents: Map<string, string> }>,
): Promise<PipelineContext> {
	const outputDir = ctx.dataSource.outputDir;
	const writeResults: GeneratedFileWrite[] = [];

	for (const [relativePath, content] of ctx.fileContents.entries()) {
		const fullPath = path.join(outputDir, relativePath);
		const result = writeGeneratedFile(content, fullPath);

		writeResults.push({
			outputPath: result.outputPath,
			changed: result.changed,
			skipped: result.skipped,
		});
	}

	return {
		...ctx,
		writeResults,
	};
}
