import type { GenerateTypesResult } from "./@types/script";
import { runGenerationPipelineFactory } from "./pipeline/orchestration";
import { normalizeCollectionNames } from "./utils/naming";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";

export { normalizeCollectionNames };

export async function runGenerateTypes(
	overrideConfig?: Partial<import("./@types/script").RuntimeConfig>,
): Promise<GenerateTypesResult> {
	applyWorkspaceLockIfNeeded();

	const context = await runGenerationPipelineFactory({ overrideConfig });

	if (!context.dataSourceConfigs || context.dataSourceConfigs.length === 0) {
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	const successfulCount = context.datasourceResults?.filter(
		(r) => r.status === "fulfilled",
	).length;

	if (!successfulCount || successfulCount === 0) {
		const failedNames =
			context.datasourceResults
				?.filter((r) => r.status === "rejected")
				.map((r) => r.name)
				.join(", ") ?? "unknown";
		throw new Error(`Todos os datasources falharam: ${failedNames}`);
	}

	if (!context.finalResult) {
		throw new Error("Pipeline não produziu resultado final");
	}

	return context.finalResult;
}
