import { config } from "@scripts/generate-types/config";
import { formatBaseInterfacePattern } from "@scripts/generate-types/src/utils/naming";

export function printHelp() {
	console.log(
		`
Uso:
  pnpm generate-types [opções]

Opções:
  --dry-run           Executa sem escrever arquivos (preview de alterações)
  --write             Bypass na confirmação de remoção de arquivos não utilizados
  --ixc               Gera tipos para collections do IXC (Integração)
  -h, --help          Exibe esta ajuda

Configuração:
  env: ${config.defaultEnvPath}
  output: ${config.outputDir}/
  ixc output: ${config.ixcOutputDir ?? "src/@types/generated/ixc"}/
  output principal: ${config.outputDir}/index.ts
  output split: ${config.outputDir}/
  verbose: ${config.verbose ? "ativado" : "desativado"}
  interface base: ${formatBaseInterfacePattern(config.baseInterfaceNaming)}

Estrutura de saída:
  - Arquivo principal: ${config.outputDir}/index.ts
    └─ ~100 collections (todas exceto as splitCollections)

  - Arquivos individuais: ${config.outputDir}/<collection>.ts
    └─ 10 collections em arquivos separados:
       • users.ts
       • f_funcionarios.ts
       • t_negociacoes.ts
       • t_pessoas.ts
       • t_empresas.ts
       • t_contratos.ts
       • t_servicos.ts
       • t_sites.ts
       • t_equipamentos.ts
       • t_telecom_recursos.ts

Tipos gerados por collection:
  - ${formatBaseInterfacePattern(config.baseInterfaceNaming)}: interface com campos escalares/FKs
  - <Collection>Relations: interface com todas as relações (opcional)
  - <Collection>RelationKey: union type das chaves de relação
`.trim(),
	);
}
