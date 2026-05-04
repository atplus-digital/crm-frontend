import type { GenerationStage } from "../../../@types/orchestration";
import {
	createRegistry,
	loadCollectionSchemas,
} from "../../../utils/collection-schema-loader";

export function loadSchemasStage(): GenerationStage {
	return async (context) => {
		context.logger.debug("Carregando schemas de collections...");

		const loadResult = loadCollectionSchemas({
			debug: context.logger.debug.bind(context.logger),
		});

		const registry = createRegistry(loadResult.mappings);

		context.logger.info(
			`${loadResult.mappings.length} schemas de collections carregados`,
		);

		return {
			...context,
			schemaRegistry: registry,
			schemaMappings: loadResult.mappings,
			schemasNotFound: [],
		};
	};
}
