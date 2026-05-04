import * as fs from "node:fs";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock tsc-validator and linter-runner before importing atomic-writer
vi.mock("@scripts/generators/src/lib/validation/tsc-validator", () => ({
	validateTypeScriptDirectory: vi.fn().mockResolvedValue(true),
}));

vi.mock("@scripts/generators/src/lib/validation/linter-runner", () => ({
	runLinterFix: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("@scripts/generators/src/lib/logger", () => ({
	logger: {
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
		debug: vi.fn(),
		setLevel: vi.fn(),
		getLevel: vi.fn(() => "info"),
	},
}));

describe("AtomicWriter", () => {
	let testDir: string;
	let outputDir: string;

	beforeEach(() => {
		vi.clearAllMocks();
		testDir = fs.mkdtempSync(
			path.join(fs.realpathSync("/tmp"), "atomic-writer-test-"),
		);
		outputDir = path.join(testDir, "output");
	});

	afterEach(() => {
		fs.rmSync(testDir, { recursive: true, force: true });
	});

	describe("createAtomicWriteSession", () => {
		it("creates a session with correct paths", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			expect(session.outputDir).toBe(path.resolve(process.cwd(), outputDir));
			expect(session.tempDir).toContain(".tmp-");
			expect(session.tempDir).toMatch(/^\S+\.tmp-\d+-\w+$/);
			expect(session.backupDir).toContain(".backup-");
		});
	});

	describe("ensureTempDir", () => {
		it("creates the temp directory", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();
			expect(fs.existsSync(session.tempDir)).toBe(true);
		});

		it("is idempotent — calling twice does not throw", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();
			session.ensureTempDir();
			expect(fs.existsSync(session.tempDir)).toBe(true);
		});
	});

	describe("commit", () => {
		it("moves files from temp dir to output dir", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();

			fs.writeFileSync(
				path.join(session.tempDir, "foo.ts"),
				"export const foo = 1;",
			);

			const result = await session.commit();

			expect(result.committed).toBe(true);
			expect(result.changedFiles).toContain("foo.ts");
			expect(fs.existsSync(path.join(outputDir, "foo.ts"))).toBe(true);
			expect(
				fs.readFileSync(path.join(outputDir, "foo.ts"), "utf-8").trimEnd(),
			).toBe("export const foo = 1;");
			// Temp dir and backup dir should be cleaned up
			expect(fs.existsSync(session.tempDir)).toBe(false);
			expect(fs.existsSync(session.backupDir)).toBe(false);
		});

		it("preserves subdirectory structure", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();

			const subDir = path.join(session.tempDir, "nocobase", "pessoas");
			fs.mkdirSync(subDir, { recursive: true });
			fs.writeFileSync(
				path.join(subDir, "index.ts"),
				"export type Pessoas = {};",
			);

			const result = await session.commit();

			expect(result.committed).toBe(true);
			expect(result.changedFiles).toContain(
				path.join("nocobase", "pessoas", "index.ts"),
			);
			expect(
				fs.existsSync(path.join(outputDir, "nocobase", "pessoas", "index.ts")),
			).toBe(true);
		});

		it("reports unchanged files when content matches", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			// Pre-create the output file with same content
			fs.mkdirSync(outputDir, { recursive: true });
			fs.writeFileSync(
				path.join(outputDir, "existing.ts"),
				"export const x = 1;",
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();
			fs.writeFileSync(
				path.join(session.tempDir, "existing.ts"),
				"export const x = 1;",
			);

			const result = await session.commit();

			expect(result.committed).toBe(true);
			expect(result.changedFiles).toHaveLength(0);
			expect(result.unchangedFiles).toContain("existing.ts");
		});

		it("restores backup when tsc validation fails", async () => {
			const { validateTypeScriptDirectory } = await import(
				"@scripts/generators/src/lib/validation/tsc-validator"
			);
			vi.mocked(validateTypeScriptDirectory).mockResolvedValueOnce(false);

			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			// Pre-create an existing file in output dir
			fs.mkdirSync(outputDir, { recursive: true });
			fs.writeFileSync(
				path.join(outputDir, "original.ts"),
				"export const original = 1;",
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();
			fs.writeFileSync(
				path.join(session.tempDir, "broken.ts"),
				"export const x: number = 'not a number';",
			);

			const result = await session.commit();

			expect(result.committed).toBe(false);
			expect(result.changedFiles).toHaveLength(0);
			// Original file should be restored (backup was renamed back to output)
			expect(fs.existsSync(path.join(outputDir, "original.ts"))).toBe(true);
			expect(
				fs.readFileSync(path.join(outputDir, "original.ts"), "utf-8"),
			).toBe("export const original = 1;");
			// Broken file should NOT be in output (backup was restored, not the failed write)
			expect(fs.existsSync(path.join(outputDir, "broken.ts"))).toBe(false);
		});

		it("skips validation when validate=false", async () => {
			const { validateTypeScriptDirectory } = await import(
				"@scripts/generators/src/lib/validation/tsc-validator"
			);

			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
				validate: false,
				lint: false,
			});

			session.ensureTempDir();
			fs.writeFileSync(
				path.join(session.tempDir, "foo.ts"),
				"export const foo = 1;",
			);

			const result = await session.commit();

			expect(result.committed).toBe(true);
			expect(validateTypeScriptDirectory).not.toHaveBeenCalled();
		});

		it("throws if commit is called twice", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();
			fs.writeFileSync(
				path.join(session.tempDir, "foo.ts"),
				"export const foo = 1;",
			);

			await session.commit();

			await expect(session.commit()).rejects.toThrow("already committed");
		});

		it("returns committed=false when temp dir does not exist", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			const result = await session.commit();

			expect(result.committed).toBe(false);
		});
	});

	describe("cleanup", () => {
		it("removes the temp and backup directories", async () => {
			const { createAtomicWriteSession } = await import(
				"@scripts/generators/src/lib/io/atomic-writer"
			);

			const session = createAtomicWriteSession({
				outputDir,
				label: "test",
			});

			session.ensureTempDir();
			expect(fs.existsSync(session.tempDir)).toBe(true);

			// Create backup dir manually to test cleanup
			fs.mkdirSync(session.backupDir, { recursive: true });
			expect(fs.existsSync(session.backupDir)).toBe(true);

			session.cleanup();
			expect(fs.existsSync(session.tempDir)).toBe(false);
			expect(fs.existsSync(session.backupDir)).toBe(false);
		});
	});
});
