import "./config";
import {
	createGenerator,
	runGeneratorCli,
} from "@scripts/generators/run-generator";
import type { ScriptConfig } from "./@types/script-config";
import {
	assertGenerateCustomRequestsResult,
	createGenerateCustomRequestsExecutionContext,
	lockGenerateCustomRequestsWorkspace,
	runFetchEntriesOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runTransformAndMergeOrchestrationStage,
	runWriteAnalysisReportOrchestrationStage,
	runWriteOutputOrchestrationStage,
} from "./generate-custom-requests";

export { config } from "./config";

interface GenerateCustomRequestsGeneratorContext {
	overrideConfig?: Partial<ScriptConfig>;
	executionContext?: ReturnType<
		typeof createGenerateCustomRequestsExecutionContext
	>;
}

const generateCustomRequests =
	createGenerator<GenerateCustomRequestsGeneratorContext>(
		"generate-custom-requests",
		{},
	)
		.addStep("prepare-context", (context) => {
			context.executionContext = createGenerateCustomRequestsExecutionContext(
				context.overrideConfig,
				context.logger,
			);
		})
		.addStep("lock-workspace", () => {
			lockGenerateCustomRequestsWorkspace();
		})
		.addStep("load-config", async (context) => {
			if (!context.executionContext) {
				throw new Error("Contexto de execução não inicializado");
			}

			await runLoadConfigOrchestrationStage(context.executionContext);
		})
		.addStep("fetch-entries", async (context) => {
			if (!context.executionContext) {
				throw new Error("Contexto de execução não inicializado");
			}

			await runFetchEntriesOrchestrationStage(context.executionContext);
		})
		.addStep("write-analysis-report", async (context) => {
			if (!context.executionContext) {
				throw new Error("Contexto de execução não inicializado");
			}

			await runWriteAnalysisReportOrchestrationStage(context.executionContext);
		})
		.addStep("transform-and-merge", async (context) => {
			if (!context.executionContext) {
				throw new Error("Contexto de execução não inicializado");
			}

			await runTransformAndMergeOrchestrationStage(context.executionContext);
		})
		.addStep("write-output", async (context) => {
			if (!context.executionContext) {
				throw new Error("Contexto de execução não inicializado");
			}

			await runWriteOutputOrchestrationStage(context.executionContext);
		})
		.addStep("assert-result", (context) => {
			if (!context.executionContext) {
				throw new Error("Contexto de execução não inicializado");
			}

			assertGenerateCustomRequestsResult(context.executionContext);
		});

void runGeneratorCli(generateCustomRequests);
