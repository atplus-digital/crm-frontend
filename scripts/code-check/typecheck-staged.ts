import { execSync } from "node:child_process";
import path from "node:path";
import ts from "typescript";

const cwd = process.cwd();

const tsConfigFileName = "tsconfig.json";

function getStagedTypeScriptFiles(): string[] {
	const output = execSync(
		"git diff --name-only --staged --diff-filter=ACMR -- '*.ts' '*.tsx'",
		{
			cwd,
			encoding: "utf8",
			stdio: ["ignore", "pipe", "pipe"],
		},
	);

	return output
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
}

function getFilesFromArgsOrGit(args: string[]): string[] {
	const inputFiles = args.length > 0 ? args : getStagedTypeScriptFiles();

	return Array.from(
		new Set(
			inputFiles
				.filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
				.map((file) => path.resolve(cwd, file))
				.filter((file) => {
					const relative = path.relative(cwd, file).replaceAll("\\", "/");
					return relative.startsWith("src/");
				}),
		),
	);
}

function loadTsConfig() {
	const configPath = ts.findConfigFile(
		cwd,
		ts.sys.fileExists,
		tsConfigFileName,
	);

	if (!configPath) {
		throw new Error(`Could not find ${tsConfigFileName}`);
	}

	const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
	if (configFile.error) {
		throw new Error(
			ts.formatDiagnosticsWithColorAndContext([configFile.error], {
				getCanonicalFileName: (name) => name,
				getCurrentDirectory: () => cwd,
				getNewLine: () => ts.sys.newLine,
			}),
		);
	}

	const parsed = ts.parseJsonConfigFileContent(
		configFile.config,
		ts.sys,
		path.dirname(configPath),
	);

	return {
		options: {
			...parsed.options,
			noEmit: true,
		},
		projectReferences: parsed.projectReferences,
	};
}

function formatDiagnostics(diagnostics: readonly ts.Diagnostic[]): string {
	return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
		getCanonicalFileName: (name) => name,
		getCurrentDirectory: () => cwd,
		getNewLine: () => ts.sys.newLine,
	});
}

function main() {
	try {
		const files = getFilesFromArgsOrGit(process.argv.slice(2));

		if (files.length === 0) {
			console.log("No staged TypeScript files to typecheck.");
			return;
		}

		const { options, projectReferences } = loadTsConfig();

		const program = ts.createProgram({
			rootNames: files,
			options,
			projectReferences,
		});

		const diagnostics = ts.getPreEmitDiagnostics(program);

		if (diagnostics.length > 0) {
			console.error(formatDiagnostics(diagnostics));
			process.exit(1);
		}

		console.log(`Typecheck passed for ${files.length} staged file(s).`);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(message);
		process.exit(1);
	}
}

main();
