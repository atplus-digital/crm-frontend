import * as fs from "node:fs";
import * as path from "node:path";
import { runLinterFix } from "@scripts/shared/lib/linter-runner";
import { logger } from "@scripts/shared/lib/logger";
import { validateTypeScriptDirectory } from "@scripts/shared/lib/tsc-validator";

export interface AtomicWriterOptions {
	/**
	 * Path to the target output directory (e.g., `src/generated/types/nocobase`).
	 * Files will be written to a temp dir first, validated against the real output,
	 * and only committed if validation passes.
	 */
	outputDir: string;
	/**
	 * Human-readable label for log messages (e.g., "generate-types (nocobase)").
	 */
	label: string;
	/**
	 * Whether to run TypeScript validation after moving files to the real output dir.
	 * If validation fails, the backup is restored.
	 * @default true
	 */
	validate?: boolean;
	/**
	 * Whether to run Biome/Prettier linter after moving files to the real output dir.
	 * @default true
	 */
	lint?: boolean;
}

export interface AtomicWriteResult {
	/** Files that were written/changed. */
	changedFiles: string[];
	/** Files that were unchanged (content matched existing). */
	unchangedFiles: string[];
	/** The temp directory used for staging (cleaned up after commit). */
	tempDir: string;
	/** The backup directory (cleaned up after successful commit, preserved on failure). */
	backupDir: string;
	/** Whether the commit succeeded. */
	committed: boolean;
}

/**
 * Creates an atomic write session — all files are staged in a temp directory,
 * then swapped into the final output dir atomically.
 *
 * **Strategy: backup → swap → validate → keep or restore**
 *
 * 1. Files are written to a temp staging directory
 * 2. On commit: existing output dir is backed up, temp is swapped in
 * 3. Validation (tsc + lint) runs on the real output path (important for relative imports)
 * 4. If validation passes → backup is deleted, commit succeeds
 * 5. If validation fails → backup is restored, commit fails, temp preserved for debugging
 *
 * Usage:
 * ```ts
 * const session = createAtomicWriteSession({ outputDir: "src/generated/types", label: "types" });
 * session.ensureTempDir();
 * fs.writeFileSync(path.join(session.tempDir, "foo.ts"), content);
 * const result = await session.commit();
 * if (!result.committed) {
 *   // Original files are restored, check session.backupDir for what was preserved
 * }
 * ```
 */
export function createAtomicWriteSession(
	options: AtomicWriterOptions,
): AtomicWriteSession {
	const { outputDir, label } = options;
	const resolvedOutputDir = path.resolve(process.cwd(), outputDir);

	// Temp dirs are siblings of the output dir (same parent)
	const parentDir = path.dirname(resolvedOutputDir);
	const tempId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

	return new AtomicWriteSession(
		resolvedOutputDir,
		path.join(parentDir, `.tmp-${tempId}`),
		path.join(parentDir, `.backup-${tempId}`),
		label,
		options.validate ?? true,
		options.lint ?? true,
	);
}

export class AtomicWriteSession {
	private committed = false;
	private backedUp = false;

	constructor(
		public readonly outputDir: string,
		public readonly tempDir: string,
		public readonly backupDir: string,
		private readonly label: string,
		private readonly validate: boolean,
		private readonly lint: boolean,
	) {}

	/**
	 * Ensures the temp directory exists.
	 */
	ensureTempDir(): void {
		if (!fs.existsSync(this.tempDir)) {
			fs.mkdirSync(this.tempDir, { recursive: true });
		}
	}

	// ─── Automatic mode: temp dir → commit ────────────

	/**
	 * Commits the staged files to the final output directory.
	 *
	 * Flow: backup → swap temp → validate → keep or restore
	 */
	async commit(): Promise<AtomicWriteResult> {
		if (this.committed) {
			throw new Error(`[AtomicWriter:${this.label}] Session already committed`);
		}
		this.committed = true;

		if (!fs.existsSync(this.tempDir)) {
			logger.warn(
				`[AtomicWriter:${this.label}] Temp dir does not exist, nothing to commit`,
			);
			return {
				changedFiles: [],
				unchangedFiles: [],
				tempDir: this.tempDir,
				backupDir: this.backupDir,
				committed: false,
			};
		}

		const diff = this.computeDiff();

		// If nothing changed, skip entirely
		if (diff.changedFiles.length === 0 && diff.deletedFiles.length === 0) {
			logger.info(
				`[AtomicWriter:${this.label}] No changes detected, skipping commit`,
			);
			this.removeTempDir();
			return {
				changedFiles: [],
				unchangedFiles: diff.unchangedFiles,
				tempDir: this.tempDir,
				backupDir: this.backupDir,
				committed: true,
			};
		}

		logger.info(
			`[AtomicWriter:${this.label}] Staging: ${diff.changedFiles.length} changed, ${diff.unchangedFiles.length} unchanged, ${diff.deletedFiles.length} deleted`,
		);

		// Step 1: Backup existing output dir (if it exists)
		this.backupOutputDir();

		// Step 2: Move temp → output (swap)
		this.swapTempToOutput();

		// Step 3: Validate on the real output path
		const validationOk = await this.runValidation();

		if (!validationOk) {
			// Step 4a: Restore backup
			this.restoreBackup();
			logger.error(
				`[AtomicWriter:${this.label}] Validation FAILED — original files restored. Backup preserved at: ${this.backupDir}`,
			);
			return {
				changedFiles: [],
				unchangedFiles: [],
				tempDir: this.tempDir,
				backupDir: this.backupDir,
				committed: false,
			};
		}

		// Step 4b: Success — clean up backup
		this.removeBackupDir();

		logger.info(
			`[AtomicWriter:${this.label}] Committed ${diff.changedFiles.length} changed files successfully`,
		);

		return {
			changedFiles: diff.changedFiles,
			unchangedFiles: diff.unchangedFiles,
			tempDir: this.tempDir,
			backupDir: this.backupDir,
			committed: true,
		};
	}

	// ─── Wrap mode: backup → write normally → validate ──

	/**
	 * Creates a backup of the current output directory.
	 * Use in "wrap mode" when the script writes directly to outputDir.
	 *
	 * Flow: `backup()` → script writes files → `validateAndFinalize()` or `restore()`
	 */
	backup(): void {
		if (this.backedUp) {
			throw new Error(`[AtomicWriter:${this.label}] Already backed up`);
		}
		this.backedUp = true;

		this.backupOutputDir();
		logger.info(
			`[AtomicWriter:${this.label}] Backup created at: ${this.backupDir}`,
		);
	}

	/**
	 * Validates the output directory and restores backup on failure.
	 *
	 * Returns `true` if validation passed (backup cleaned up).
	 * Returns `false` if validation failed (backup restored).
	 */
	async validateAndFinalize(): Promise<boolean> {
		if (!this.backedUp) {
			throw new Error(
				`[AtomicWriter:${this.label}] Must call backup() before validateAndFinalize()`,
			);
		}
		this.committed = true;

		const validationOk = await this.runValidation();

		if (!validationOk) {
			this.restoreBackup();
			logger.error(
				`[AtomicWriter:${this.label}] Validation FAILED — original files restored from: ${this.backupDir}`,
			);
			return false;
		}

		this.removeBackupDir();
		logger.info(
			`[AtomicWriter:${this.label}] Validation passed, backup cleaned up`,
		);
		return true;
	}

	/**
	 * Restores the backup (discards all changes made to outputDir after backup()).
	 */
	restore(): void {
		if (!this.backedUp) {
			throw new Error(
				`[AtomicWriter:${this.label}] No backup to restore — call backup() first`,
			);
		}
		this.committed = true;

		this.restoreBackup();
		logger.info(
			`[AtomicWriter:${this.label}] Backup restored from: ${this.backupDir}`,
		);
	}

	/**
	 * Cleans up the temp and backup directories.
	 */
	cleanup(): void {
		this.removeTempDir();
		this.removeBackupDir();
	}

	// ─── Private methods ──────────────────────────────────

	private computeDiff(): {
		changedFiles: string[];
		unchangedFiles: string[];
		deletedFiles: string[];
	} {
		const changedFiles: string[] = [];
		const unchangedFiles: string[] = [];
		const deletedFiles: string[] = [];

		const tempFiles = this.listFilesRecursively(this.tempDir);
		const existingFiles = fs.existsSync(this.outputDir)
			? this.listFilesRecursively(this.outputDir)
			: [];

		const existingSet = new Set(
			existingFiles.map((f) => path.relative(this.outputDir, f)),
		);

		for (const tempFile of tempFiles) {
			const relativePath = path.relative(this.tempDir, tempFile);
			existingSet.delete(relativePath);

			const targetPath = path.join(this.outputDir, relativePath);
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

	private backupOutputDir(): void {
		if (!fs.existsSync(this.outputDir)) return;

		logger.debug(
			`[AtomicWriter:${this.label}] Backing up output dir to: ${this.backupDir}`,
		);
		fs.cpSync(this.outputDir, this.backupDir, { recursive: true });
	}

	private swapTempToOutput(): void {
		// Remove current output dir
		if (fs.existsSync(this.outputDir)) {
			fs.rmSync(this.outputDir, { recursive: true, force: true });
		}

		// Rename temp → output (atomic on same filesystem)
		fs.renameSync(this.tempDir, this.outputDir);
	}

	private async runValidation(): Promise<boolean> {
		if (this.validate) {
			const isValid = await validateTypeScriptDirectory(this.outputDir);
			if (!isValid) return false;
		}

		if (this.lint) {
			await runLinterFix([this.outputDir]);
		}

		return true;
	}

	private restoreBackup(): void {
		// Remove the (now invalid) output dir
		if (fs.existsSync(this.outputDir)) {
			fs.rmSync(this.outputDir, { recursive: true, force: true });
		}

		// Restore backup → output
		if (fs.existsSync(this.backupDir)) {
			fs.renameSync(this.backupDir, this.outputDir);
		}

		// Keep temp dir for debugging (don't remove it)
	}

	private removeTempDir(): void {
		if (fs.existsSync(this.tempDir)) {
			fs.rmSync(this.tempDir, { recursive: true, force: true });
		}
	}

	private removeBackupDir(): void {
		if (fs.existsSync(this.backupDir)) {
			fs.rmSync(this.backupDir, { recursive: true, force: true });
		}
	}

	private listFilesRecursively(dir: string): string[] {
		const files: string[] = [];
		const entries = fs.readdirSync(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				files.push(...this.listFilesRecursively(fullPath));
			} else {
				files.push(fullPath);
			}
		}

		return files;
	}
}
