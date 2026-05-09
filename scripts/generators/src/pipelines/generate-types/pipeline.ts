import * as path from "node:path";
import type { OrchestrationTaskRunner } from "@scripts/generators/src/lib/cli/types";
import { NocoBaseApiClient } from "@scripts/generators/src/lib/http/nocobase-client";
import { toDataSourceOutputFolder } from "@scripts/generators/src/lib/path-utils";
import type { PipelineExecutionContext } from "@scripts/generators/src/lib/pipeline/context";
import { runStandardPipeline } from "@scripts/generators/src/lib/pipeline/lifecycle";
import type { RunGeneratorCliOptions } from "@scripts/generators/src/lib/pipeline/orchestrator";
import type { AsyncPipelineStage } from "@scripts/generators/src/lib/pipeline/runner";
import type { ListrTaskResult } from "listr2";
import { dataSourceConfigs } from "../../config/datasources";
import { resolveNocoBaseEnv } from "../../config/env";
import type {
	DataSourceClient,
	DataSourceCollection,
	DataSourceGenerationConfig,
} from "./@types/script";
import { buildTypes } from "./stages/build-types";
import type { GenerateTypesPipelineCtx } from "./stages/fetch-schemas";
import { fetchSchemas } from "./stages/fetch-schemas";
import { generateContentStage } from "./stages/generate-content";
import { writeFilesStage } from "./stages/write-files";
import { writeReportsStage } from "./stages/write-reports";

// ──────────────────────────────────────────────
// Reports output directory
// ──────────────────────────────────────────────

const REPORTS_DIR = "scripts/generators/reports/generate-types";

// ──────────────────────────────────────────────
// DataSource client factory (composition over NocoBaseApiClient)
// ──────────────────────────────────────────────

class NocoBaseDataSourceClient extends NocoBaseApiClient {
	public constructor(baseUrl: string, token: string, timeoutMs: number) {
		super({ baseUrl, token, timeoutMs });
	}

	/**
	 * Fetch collections with fields from the data source API.
	 * Public accessor for the protected fetchCollections method.
	 */
	public async fetchDataSourceCollections(
		dataSourceKey: string,
	): Promise<DataSourceCollection[]> {
		return this.fetchCollections(dataSourceKey) as Promise<
			DataSourceCollection[]
		>;
	}
}

function createDataSourceClient(credentials: {
	baseUrl: string;
	token: string;
	timeoutMs: number;
}): DataSourceClient {
	const inner = new NocoBaseDataSourceClient(
		credentials.baseUrl,
		credentials.token,
		credentials.timeoutMs,
	);

	return {
		get baseUrl() {
			return inner.baseUrl;
		},
		async fetchCollections(dataSourceKey: string) {
			return inner.fetchDataSourceCollections(dataSourceKey);
		},
	};
}

// ──────────────────────────────────────────────
// Pipeline definition
// ──────────────────────────────────────────────

type TypesCtx = PipelineExecutionContext<
	DataSourceGenerationConfig,
	GenerateTypesPipelineCtx
>;

type TypesStage = AsyncPipelineStage<TypesCtx>;

type GenerateTypesBootstrapCtx = Pick<
	GenerateTypesPipelineCtx,
	"client" | "dataSource"
>;

type DataSourceTaskCtx = {
	client?: DataSourceClient;
	outputDirRelative?: string;
	pipelineContext?: GenerateTypesBootstrapCtx;
};

/**
 * Creates a Listr2 task tree for the generate-types pipeline.
 */
export function createGenerateTypesPipeline(): RunGeneratorCliOptions<object> {
	const stages = dataSourceConfigs.map((dataSource) => ({
		title: `📦 ${dataSource.name}`,
		run: (
			_ctx: object,
			task?: OrchestrationTaskRunner,
		): ListrTaskResult<unknown> => {
			if (!task) {
				throw new Error(
					"generate-types: task wrapper não fornecido pelo Listr2",
				);
			}

			return task.newListr<DataSourceTaskCtx>(
				[
					{
						title: "Resolver cliente da datasource",
						task: (ctx): void => {
							const env = resolveNocoBaseEnv();

							ctx.client = createDataSourceClient({
								baseUrl: env.baseUrl,
								token: env.token,
								timeoutMs: env.timeoutMs,
							});
						},
					},
					{
						title: "Preparar contexto da pipeline",
						task: (ctx): void => {
							if (!ctx.client) {
								throw new Error("generate-types: cliente não inicializado");
							}

							const outputFolder = toDataSourceOutputFolder(
								dataSource.dataSource,
							);
							ctx.outputDirRelative = `src/generated/types/${outputFolder}/`;
							ctx.pipelineContext = {
								client: ctx.client,
								dataSource,
							};
						},
					},
					{
						title: "Executar pipeline",
						task: (ctx, task) => {
							if (!ctx.outputDirRelative) {
								throw new Error("generate-types: outputDir não inicializado");
							}

							if (!ctx.pipelineContext) {
								throw new Error(
									"generate-types: pipelineContext não inicializado",
								);
							}

							const outputDirRelative = ctx.outputDirRelative;
							const pipelineContext = ctx.pipelineContext;

							const writeFilesToTempStage: TypesStage =
								async function writeFilesToTempStage(stageCtx, task) {
									const tempOutputDir = path.join(
										stageCtx.tempDir,
										outputDirRelative,
									);
									const patchedConfig = {
										...stageCtx.runtimeConfig,
										outputDir: tempOutputDir,
									};

									return writeFilesStage(
										{
											...stageCtx,
											runtimeConfig: patchedConfig,
										},
										task,
									);
								};

							return runStandardPipeline<
								DataSourceGenerationConfig,
								GenerateTypesPipelineCtx
							>({
								task,
								defaultConfig: dataSource,
								overrideConfig: {
									outputDir: outputDirRelative,
								},
								pipelineContext: pipelineContext as GenerateTypesPipelineCtx,
								getOutputDirs: () => [outputDirRelative],
								label: `generate-types:${dataSource.name}`,
								stages: [
									fetchSchemas,
									buildTypes,
									generateContentStage,
									writeFilesToTempStage,
									writeReportsStage,
								],
								reportsOutputPath: `${REPORTS_DIR}/${dataSource.name}-report.md`,
							}) as ListrTaskResult<DataSourceTaskCtx>;
						},
					},
				],
				{
					concurrent: false,
					ctx: {},
				},
			);
		},
	}));

	return {
		name: "generate-types",
		stages,
		context: {},
	};
}
