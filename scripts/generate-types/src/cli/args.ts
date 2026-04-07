import type {
	GenerateTypesArgs,
	ParsedArgs,
} from "@scripts/generate-types/src/@types/script";

export function parseArgs(argv: string[]): ParsedArgs {
	const options: GenerateTypesArgs = {
		dryRun: false,
	};

	let showHelp = false;

	for (let index = 0; index < argv.length; index++) {
		const arg = argv[index];

		if (arg === "--help" || arg === "-h") {
			showHelp = true;
			continue;
		}

		if (arg === "--") {
			continue;
		}

		if (arg === "--dry-run") {
			options.dryRun = true;
			continue;
		}

		throw new Error(`Argumento desconhecido: ${arg}`);
	}

	return { showHelp, options };
}
