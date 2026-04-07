import { config } from "@scripts/generate-types/config";

export function printHelp() {
	console.log(
		`
Uso:
  pnpm generate-types [opções]

Opções:
  --dry-run           Executa sem escrever arquivos (preview de alterações)
  -h, --help          Exibe esta ajuda

Configuração:
  env: ${config.defaultEnvPath}
  output principal: ${config.outputPath}
  output split: ${config.splitOutputDir}/

Estrutura de saída:
  - Arquivo principal: ${config.outputPath}
    └─ ~100 collections (todas exceto as splitCollections)

  - Arquivos individuais: ${config.splitOutputDir}/<collection>.ts
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
  - <Collection>Base: interface com campos escalares + relações one
  - <Collection>Relations: interface com todas as relações (opcional)
  - <Collection>RelationKey: union type das chaves de relação
`.trim(),
	);
}
