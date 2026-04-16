import type {
	CliArgs,
	ParsedArgs,
} from "@scripts/generate-types/src/@types/script";

export function parseArgs(argv: string[]): ParsedArgs {
	const options: CliArgs = {
		write: false,
		datasources: [],
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

		if (arg === "--write") {
			options.write = true;
			continue;
		}

		if (arg === "--datasource") {
			const value = argv[index + 1];
			if (!value || value.startsWith("-")) {
				throw new Error("O argumento --datasource exige um valor");
			}

			options.datasources.push(
				...value
					.split(",")
					.map((item) => item.trim())
					.filter((item) => item.length > 0),
			);
			index++;
			continue;
		}

		if (arg.startsWith("--datasource=")) {
			const value = arg.slice("--datasource=".length);
			if (!value) {
				throw new Error("O argumento --datasource exige um valor");
			}

			options.datasources.push(
				...value
					.split(",")
					.map((item) => item.trim())
					.filter((item) => item.length > 0),
			);
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
