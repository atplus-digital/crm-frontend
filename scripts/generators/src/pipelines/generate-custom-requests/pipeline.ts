import { join } from "node:path";
import type { OrchestrationTaskRunner } from "../../lib/cli/types";
import type { PipelineExecutionContext } from "../../lib/pipeline/context";
import { runStandardPipeline } from "../../lib/pipeline/lifecycle";
import type { RunGeneratorCliOptions } from "../../lib/pipeline/orchestrator";
import type { AsyncPipelineStage } from "../../lib/pipeline/runner";
import type { ScriptConfig } from "./@types/script-config";
import { fetchEntriesStage } from "./stages/fetch-entries";
import { loadConfigStage } from "./stages/load-config";
import type { CustomRequestsPipelineCtx } from "./stages/load-schemas";
import { loadSchemasStage } from "./stages/load-schemas";
import { transformEntriesStage } from "./stages/transform-entries";
import { writeOutputStage } from "./stages/write-output";
import { writeReportsStage } from "./stages/write-reports";

type Ctx = PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>;
type Stage = AsyncPipelineStage<Ctx>;

const OUTPUT_DIR = "src/generated/custom-requests";
const REPORTS_OUTPUT = "scripts/generators/reports/custom-requests-report.md";

/**
 * Creates a Listr2 task definition for the generate-custom-requests pipeline.
 *
 * Pipeline stages:
 *   1. load-config    — merge requestsConfig + defaults + env
 *   2. fetch-entries   — paginate NocoBase customRequests:list API
 *   3. load-schemas    — scan generated collection schemas
 *   4. transform-entries — transform + filter + merge with manual
 *   5. write-output    — write registry + split files to tempDir
 *   6. write-reports   — populate context.reports with analysis
 *
 * @returns CLI generator options consumable by createScriptTasks()
 */
export function createCustomRequestsPipeline(): RunGeneratorCliOptions<object> {
	const writeOutputToTempStage: Stage = async function writeOutputToTempStage(
		ctx,
		task,
	): Promise<Ctx> {
		const tempOutputDir = join(ctx.tempDir, OUTPUT_DIR);
		const patched: Ctx = {
			...ctx,
			runtimeConfig: {
				...ctx.runtimeConfig,
				outputDir: tempOutputDir,
			},
		};

		return writeOutputStage(patched, task);
	};

	return {
		name: "generate-custom-requests",
		stages: [
			{
				title: "📦 Custom Requests",
				run: (_ctx: object, task: OrchestrationTaskRunner) =>
					runStandardPipeline<ScriptConfig, CustomRequestsPipelineCtx>({
						task,
						defaultConfig: {
							baseUrl: "",
							token: "",
							timeoutMs: 15_000,
							outputDir: OUTPUT_DIR,
							requests: {},
							manualRequests: [],
							generateAnalysisReport: true,
							reports: {
								generateConsolidatedMarkdown: true,
								consolidatedMarkdownOutputFile: REPORTS_OUTPUT,
							},
						} satisfies ScriptConfig,
						getOutputDirs: () => [OUTPUT_DIR],
						label: "generate-custom-requests",
						stages: [
							loadConfigStage,
							fetchEntriesStage,
							loadSchemasStage,
							transformEntriesStage,
							writeOutputToTempStage,
							writeReportsStage,
						],
						reportsOutputPath: REPORTS_OUTPUT,
					}),
			},
		],
		context: {},
	};
}
