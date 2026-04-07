import { config } from "../../config";

export function printHelp() {
	console.log(
		`
Uso:
  pnpm generate-types [opções]

Opções:
  --dry-run           Executa sem escrever arquivo
  -h, --help          Exibe esta ajuda

Configuração:
  env: ${config.defaultEnvPath}
  output: ${config.outputPath}
`.trim(),
	);
}
