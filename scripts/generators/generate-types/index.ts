import "./config";
import {
	createGenerator,
	runGeneratorCli,
} from "@scripts/generators/run-generator";
import type { RuntimeConfig } from "./src/@types/script";
import {
	assertGenerateTypesResult,
	backupGenerateTypesOutputs,
	cleanupGenerateTypesBackups,
	createGenerateTypesExecutionContext,
	lockGenerateTypesWorkspace,
	runDatasourcesOrchestrationStage,
	runFormatResultOrchestrationStage,
	runLoadConfigOrchestrationStage,
	runPostPipelineOrchestrationStage,
	runResolveDatasourcesOrchestrationStage,
} from "./src/generate-types";

export { config } from "./config";

interface GenerateTypesGeneratorContext {
	overrideConfig?: Partial<RuntimeConfig>;
	executionContext?: ReturnType<typeof createGenerateTypesExecutionContext>;
}

const generateTypes = createGenerator<GenerateTypesGeneratorContext>(
	"generate-types",
	{},
)
	.addStep("prepare-context", (context) => {
		context.executionContext = createGenerateTypesExecutionContext(
			context.overrideConfig,
		);
	})
	.addStep("lock-workspace", () => {
		lockGenerateTypesWorkspace();
	})
	.addStep("backup-outputs", (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		backupGenerateTypesOutputs(context.executionContext);
	})
	.addStep("load-config", async (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		await runLoadConfigOrchestrationStage(context.executionContext);
	})
	.addStep("resolve-datasources", async (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		await runResolveDatasourcesOrchestrationStage(context.executionContext);
	})
	.addStep("run-datasources", async (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		await runDatasourcesOrchestrationStage(context.executionContext);
	})
	.addStep("run-post-pipeline", async (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		await runPostPipelineOrchestrationStage(context.executionContext);
	})
	.addStep("format-result", async (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		await runFormatResultOrchestrationStage(context.executionContext);
	})
	.addStep("assert-result", (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		assertGenerateTypesResult(context.executionContext);
	})
	.addStep("cleanup-backups", (context) => {
		if (!context.executionContext) {
			throw new Error("Contexto de execução não inicializado");
		}

		cleanupGenerateTypesBackups(context.executionContext);
	});

void runGeneratorCli(generateTypes);
