import { config } from "@scripts/generate-types/config";
import type { AtomicWriteSession } from "@scripts/shared/lib/atomic-writer";
import { createAtomicWriteSession } from "@scripts/shared/lib/atomic-writer";
import { logger } from "@scripts/shared/lib/logger";
import type { GenerateTypesResult, RuntimeConfig } from "./@types/script";
import { runGenerationPipelineFactory } from "./pipeline/orchestration";
import type { GenerationContext } from "./pipeline/orchestration/types";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export { normalizeCollectionNames } from "./utils/naming";

function getOutputDirs(runtimeConfig: RuntimeConfig): string[] {
	return [
		runtimeConfig.outputDir,
		...(runtimeConfig.datasources ?? [])
			.map((d) => d.outputDir)
			.filter((dir): dir is string => Boolean(dir?.trim())),
	];
}

export async function runGenerateTypes(
	overrideConfig?: Partial<RuntimeConfig>,
): Promise<GenerateTypesResult> {
	applyWorkspaceLockIfNeeded();

	// Resolve config to get outputDirs before running the pipeline
	const runtimeConfig: RuntimeConfig = overrideConfig
		? { ...config, ...overrideConfig }
		: config;
	const outputDirs = getOutputDirs(runtimeConfig);

	// Create atomic sessions for each outputDir and back them up
	const atomicSessions: AtomicWriteSession[] = outputDirs.map((outputDir) => {
		const session = createAtomicWriteSession({
			outputDir,
			label: `generate-types (${outputDir})`,
			validate: false, // pipeline already runs tsc + lint in runPostPipeline
			lint: false,
		});
		session.backup();
		return session;
	});

	let context: GenerationContext;
	try {
		context = await runGenerationPipelineFactory({ overrideConfig });
	} catch (error) {
		// Pipeline failed — restore all backups
		for (const session of atomicSessions) {
			try {
				session.restore();
			} catch (restoreError) {
				logger.warn(
					`Failed to restore backup for ${session.outputDir}: ${restoreError}`,
				);
			}
		}
		throw error;
	}

	if (!context.dataSourceConfigs || context.dataSourceConfigs.length === 0) {
		for (const session of atomicSessions) session.restore();
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	const successfulCount = context.datasourceResults?.filter(
		(r) => r.status === "fulfilled",
	).length;

	if (!successfulCount || successfulCount === 0) {
		for (const session of atomicSessions) session.restore();
		const failedNames =
			context.datasourceResults
				?.filter((r) => r.status === "rejected")
				.map((r) => r.name)
				.join(", ") ?? "unknown";
		throw new Error(`Todos os datasources falharam: ${failedNames}`);
	}

	if (!context.finalResult) {
		for (const session of atomicSessions) session.restore();
		throw new Error("Pipeline não produziu resultado final");
	}

	// Pipeline succeeded — finalize atomic sessions (clean up backups)
	for (const session of atomicSessions) {
		session.cleanup();
	}

	return context.finalResult;
}
