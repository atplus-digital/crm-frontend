import * as fs from "node:fs";
import * as path from "node:path";
import { runLinterFix } from "@generators/lib/validation/linter-runner";
import { validateTypeScriptDirectory } from "@generators/lib/validation/tsc-validator";

interface DiffResult {
	changedFiles: string[];
	unchangedFiles: string[];
	deletedFiles: string[];
}

interface ValidationOptions {
	validate?: boolean;
	lint?: boolean;
}

function listFilesRecursively(dir: string): string[] {
	const files: string[] = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...listFilesRecursively(fullPath));
		} else {
			files.push(fullPath);
		}
	}

	return files;
}

export function computeDiff(tempDir: string, outputDir: string): DiffResult {
	const changedFiles: string[] = [];
	const unchangedFiles: string[] = [];
	const deletedFiles: string[] = [];

	const tempFiles = listFilesRecursively(tempDir);
	const existingFiles = fs.existsSync(outputDir)
		? listFilesRecursively(outputDir)
		: [];

	const existingSet = new Set(
		existingFiles.map((f) => path.relative(outputDir, f)),
	);

	for (const tempFile of tempFiles) {
		const relativePath = path.relative(tempDir, tempFile);
		existingSet.delete(relativePath);

		const targetPath = path.join(outputDir, relativePath);
		const tempContent = fs.readFileSync(tempFile, "utf-8");

		if (fs.existsSync(targetPath)) {
			const existingContent = fs.readFileSync(targetPath, "utf-8");
			if (existingContent === tempContent) {
				unchangedFiles.push(relativePath);
				continue;
			}
		}

		changedFiles.push(relativePath);
	}

	// Files that exist in output but not in temp = deleted
	for (const relativePath of existingSet) {
		deletedFiles.push(relativePath);
	}

	return { changedFiles, unchangedFiles, deletedFiles };
}

export function backupDir(sourceDir: string, backupDirPath: string): void {
	if (!fs.existsSync(sourceDir)) return;
	fs.cpSync(sourceDir, backupDirPath, { recursive: true });
}

export function swapTempToOutput(tempDir: string, outputDir: string): void {
	if (fs.existsSync(outputDir)) {
		fs.rmSync(outputDir, { recursive: true, force: true });
	}

	const outputParent = path.dirname(outputDir);
	if (!fs.existsSync(outputParent)) {
		fs.mkdirSync(outputParent, { recursive: true });
	}

	fs.renameSync(tempDir, outputDir);
}

export function removeDir(dir: string): void {
	if (fs.existsSync(dir)) {
		fs.rmSync(dir, { recursive: true, force: true });
	}
}

export function cleanupTempSessionDir(tempDir: string): void {
	removeDir(tempDir);

	const tempRootDir = path.dirname(tempDir);
	if (path.basename(tempRootDir) !== ".temp") {
		return;
	}

	if (!fs.existsSync(tempRootDir)) {
		return;
	}

	const tempRootEntries = fs.readdirSync(tempRootDir);
	if (tempRootEntries.length === 0) {
		removeDir(tempRootDir);
	}
}

export async function runValidation(
	targetDir: string,
	options?: ValidationOptions,
): Promise<boolean> {
	const validate = options?.validate ?? true;
	const lint = options?.lint ?? true;

	if (validate) {
		const isValid = await validateTypeScriptDirectory(targetDir);
		if (!isValid) {
			console.error("TypeScript validation failed");
			return false;
		}
	}

	if (lint) {
		await runLinterFix([targetDir]);
	}

	return true;
}
