import * as fs from "node:fs";
import * as path from "node:path";
import { config } from "../../config";
import type { DryRunDiffResult, PersistResult } from "../@types/script";
import { buildDiffOnly } from "./diff";

export function writeGeneratedFile(
	content: string,
	outputPath: string = config.outputPath,
): PersistResult {
	const resolvedOutputPath = resolveOutputPath(outputPath);
	const currentContent = readExistingContent(resolvedOutputPath);

	if (currentContent === content) {
		return {
			mode: "write",
			outputPath: resolvedOutputPath,
			changed: false,
		};
	}

	ensureDirectoryExists(resolvedOutputPath);
	fs.writeFileSync(resolvedOutputPath, content, "utf-8");

	return {
		mode: "write",
		outputPath: resolvedOutputPath,
		changed: true,
	};
}

export function previewGeneratedFile(
	content: string,
	outputPath: string = config.outputPath,
): DryRunDiffResult {
	const resolvedOutputPath = resolveOutputPath(outputPath);
	const currentContent = readExistingContent(resolvedOutputPath);

	if (currentContent === content) {
		return {
			mode: "dry-run",
			outputPath: resolvedOutputPath,
			changed: false,
			diff: "",
		};
	}

	return {
		mode: "dry-run",
		outputPath: resolvedOutputPath,
		changed: true,
		diff: buildDiffOnly(currentContent, content),
	};
}

function resolveOutputPath(outputPath: string = config.outputPath): string {
	return path.resolve(process.cwd(), outputPath);
}

function ensureDirectoryExists(filePath: string) {
	const directoryPath = path.dirname(filePath);
	if (!fs.existsSync(directoryPath)) {
		fs.mkdirSync(directoryPath, { recursive: true });
	}
}

function readExistingContent(filePath: string): string {
	if (!fs.existsSync(filePath)) {
		return "";
	}

	return fs.readFileSync(filePath, "utf-8");
}
