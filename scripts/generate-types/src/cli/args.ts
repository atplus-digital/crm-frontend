import type {
	CliArgs,
	ParsedArgs,
} from "@scripts/generate-types/src/@types/script";

export function parseArgs(argv: string[]): ParsedArgs {
	const options: CliArgs = {
		dryRun: false,
		write: false,
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

		if (arg === "--write") {
			options.write = true;
			continue;
		}

		if (arg === "--lock-workspace") {
			options.lockWorkspace = true;
			continue;
		}

		throw new Error(`Argumento desconhecido: ${arg}`);
	}

	return { showHelp, options };
}
