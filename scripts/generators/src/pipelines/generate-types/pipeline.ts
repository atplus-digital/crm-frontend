import * as path from "node:path";
import type { RunGeneratorCliOptions } from "@scripts/generators/src/lib/cli/runner";
import type { OrchestrationTaskRunner } from "@scripts/generators/src/lib/cli/types";
import { NocoBaseApiClient } from "@scripts/generators/src/lib/http/nocobase-client";
import { lockWorkspace } from "@scripts/generators/src/lib/io/locker";
import { toDataSourceOutputFolder } from "@scripts/generators/src/lib/path-utils";
import type { PipelineExecutionContext } from "@scripts/generators/src/lib/pipeline/context";
import { runStandardPipeline } from "@scripts/generators/src/lib/pipeline/lifecycle";
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

/**
 * Creates a Listr2 task tree for the generate-types pipeline.
 */
export function createGenerateTypesTasks(): RunGeneratorCliOptions<object> {
	const stages = dataSourceConfigs.map((dataSource) => ({
		title: `📦 ${dataSource.name}`,
		run: async (
			_ctx: object,
			task?: OrchestrationTaskRunner,
		): Promise<void> => {
			if (!task) {
				throw new Error(
					"generate-types: task wrapper não fornecido pelo Listr2",
				);
			}

			const env = resolveNocoBaseEnv();

			const client = createDataSourceClient({
				baseUrl: env.baseUrl,
				token: env.token,
				timeoutMs: env.timeoutMs,
			});

			const outputFolder = toDataSourceOutputFolder(dataSource.dataSource);
			const outputDirRelative = `src/generated/types/${outputFolder}/`;

			await runStandardPipeline({
				task,
				defaultConfig: dataSource,
				overrideConfig: {
					outputDir: outputDirRelative,
				},
				getOutputDirs: () => [outputDirRelative],
				label: `generate-types:${dataSource.name}`,
				stages: [
					async (
						ctx: PipelineExecutionContext<DataSourceGenerationConfig>,
					) => ({
						...ctx,
						pipelineContext: {
							client,
							dataSource,
						} as GenerateTypesPipelineCtx,
					}),
					fetchSchemas,
					buildTypes,
					generateContentStage,
					async (ctx: PipelineExecutionContext<DataSourceGenerationConfig>) => {
						const tempOutputDir = path.join(ctx.tempDir, outputDirRelative);
						const patchedConfig = {
							...ctx.runtimeConfig,
							outputDir: tempOutputDir,
						};
						return writeFilesStage({
							...ctx,
							runtimeConfig: patchedConfig,
						});
					},
					writeReportsStage,
				],
				lockWorkspace: () => lockWorkspace([outputDirRelative]),
				unlockWorkspace: () => {},
				reportsOutputPath: `${REPORTS_DIR}/${dataSource.name}-report.md`,
			});
		},
	}));

	return {
		name: "generate-types",
		stages,
		context: {},
	};
}
