import { config } from "@scripts/generate-types/config";
import { formatBaseInterfacePattern } from "@scripts/generate-types/src/utils/naming";

export function printHelp() {
	const datasourceSummary = (config.datasources ?? [])
		.map(
			(datasource) =>
				`- ${datasource.datasource} (${datasource.name}) → output: ${datasource.outputDir}/ | split: ${datasource.splitCollections.length}`,
		)
		.join("\n");

	console.log(
		`
Uso:
  pnpm generate-types [opções]

Opções:
  --write             Bypass na confirmação de remoção de arquivos não utilizados
  --ixc               Gera tipos para collections do IXC (Integração)
  -h, --help          Exibe esta ajuda

Configuração:
  env: ${config.defaultEnvPath}
  output padrão: ${config.outputDir}/
  verbose: ${config.verbose ? "ativado" : "desativado"}
  interface base: ${formatBaseInterfacePattern(config.baseInterfaceNaming)}

Datasources configurados:
${datasourceSummary || "- nenhum datasource configurado"}

Estrutura de saída:
  - Para cada datasource:
    • index.ts com collections não-split
    • collections.ts (quando existir split)
    • <collection>.ts para cada interface split

Tipos gerados por collection:
  - ${formatBaseInterfacePattern(config.baseInterfaceNaming)}: interface com campos escalares/FKs
  - <Collection>Relations: interface com todas as relações (opcional)
  - <Collection>RelationKey: union type das chaves de relação
`.trim(),
	);
}
