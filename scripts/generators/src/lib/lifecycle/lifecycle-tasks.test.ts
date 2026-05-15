import * as fs from "node:fs";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock the external dependencies that lifecycle-tasks imports from @generators paths
// IMPORTANT: These vi.mock calls MUST be at the top level, before any imports
vi.mock("@generators/lib/io/atomic-writer", () => ({
	backupDir: vi.fn(),
	cleanupTempSessionDir: vi.fn(),
	computeDiff: vi.fn(),
	runValidation: vi.fn(),
	swapTempToOutput: vi.fn(),
}));

vi.mock("@generators/lib/pipeline/reports", () => ({
	countReports: vi.fn(() => 0),
	renderReportsMarkdown: vi.fn(() => "# Report\n"),
}));

// Import the mocked modules for setting up test assertions
import {
	backupDir,
	cleanupTempSessionDir,
	computeDiff,
	runValidation,
	swapTempToOutput,
} from "@generators/lib/io/atomic-writer";
import type { PipelineReportsContext } from "@generators/lib/pipeline/reports";
import {
	countReports,
	renderReportsMarkdown,
} from "@generators/lib/pipeline/reports";

import type { TaskRunner } from "../types";
// Import the module under test using relative paths
import {
	backupCurrentOutput,
	diffTempVsOutput,
	handleNoChanges,
	type LifecycleTaskParams,
	renderReportsSummary,
	swapTempToOutputDirs,
	validateGeneratedOutput,
} from "./lifecycle-tasks";

// Working directory for tests
const WORKSPACE_ROOT = "/tmp/test-lifecycle-tasks";

describe("lifecycle-tasks", () => {
	let mockTask: Partial<TaskRunner>;
	let mockContext: PipelineReportsContext;
	let baseParams: LifecycleTaskParams<unknown, unknown>;

	beforeEach(() => {
		vi.clearAllMocks();

		// Stub process.cwd() to return our workspace
		vi.stubGlobal("process", {
			...process,
			cwd: () => WORKSPACE_ROOT,
		});

		// Create temp directory
		fs.mkdirSync(WORKSPACE_ROOT, { recursive: true });
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".backup"), { recursive: true });
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp"), { recursive: true });

		// Default mocks
		vi.mocked(backupDir).mockReturnValue(undefined);
		vi.mocked(cleanupTempSessionDir).mockReturnValue(undefined);
		vi.mocked(computeDiff).mockReturnValue({
			changedFiles: [],
			unchangedFiles: [],
			deletedFiles: [],
		});
		vi.mocked(runValidation).mockResolvedValue(true);
		vi.mocked(swapTempToOutput).mockReturnValue(undefined);
		vi.mocked(countReports).mockReturnValue(0);
		vi.mocked(renderReportsMarkdown).mockReturnValue("# Report\n");

		// Setup mock task
		mockTask = {
			output: "",
		};

		// Setup mock context
		mockContext = {
			schemaVersion: 1,
			namespaces: {},
		};

		// Setup base params
		baseParams = {
			tempDir: path.join(WORKSPACE_ROOT, ".temp", "123-abc"),
			outputDirs: ["src/generated"],
			context: {
				tempDir: path.join(WORKSPACE_ROOT, ".temp", "123-abc"),
				outputDirs: ["src/generated"],
				runtimeConfig: {},
				reports: mockContext,
			},
			label: "Test Pipeline",
			task: mockTask as TaskRunner,
			cwd: WORKSPACE_ROOT,
			timestamp: 123456,
			randomId: "abc123",
			onReportReady: vi.fn(),
		};
	});

	afterEach(() => {
		fs.rmSync("/tmp/test-lifecycle-tasks", { recursive: true, force: true });
		vi.restoreAllMocks();
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-001: validateGeneratedOutput calls runValidation
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-001: should call runValidation for each output directory", async () => {
		// Arrange
		fs.mkdirSync(
			path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/generated"),
			{ recursive: true },
		);
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/types"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/types"), { recursive: true });

		const params: LifecycleTaskParams<unknown, unknown> = {
			...baseParams,
			outputDirs: ["src/generated", "src/types"],
		};

		// Act
		await validateGeneratedOutput(params);

		// Assert
		expect(runValidation).toHaveBeenCalledTimes(2);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-002: validateGeneratedOutput throws when validation fails
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-002: should throw and cleanup when validation fails", async () => {
		// Arrange
		fs.mkdirSync(
			path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/generated"),
			{ recursive: true },
		);
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});
		vi.mocked(runValidation).mockResolvedValue(false);

		// Act & Assert
		await expect(validateGeneratedOutput(baseParams)).rejects.toThrow(
			"Validação falhou para src/generated. Alterações descartadas.",
		);

		// Assert - cleanup should be called
		expect(cleanupTempSessionDir).toHaveBeenCalledWith(baseParams.tempDir);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-003: validateGeneratedOutput skips non-existent temp output dirs
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-003: should skip validation for non-existent temp output directories", async () => {
		// Arrange - temp dir doesn't have the output subdir
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		// but src/generated doesn't exist in temp
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});

		// Act
		await validateGeneratedOutput(baseParams);

		// Assert
		expect(runValidation).not.toHaveBeenCalled();
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-004: diffTempVsOutput calls computeDiff for each output dir
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-004: should call computeDiff for each output directory", async () => {
		// Arrange
		fs.mkdirSync(
			path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/generated"),
			{ recursive: true },
		);
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/types"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/types"), { recursive: true });

		const ctx = { hasChanges: false };
		const params: LifecycleTaskParams<unknown, unknown> = {
			...baseParams,
			outputDirs: ["src/generated", "src/types"],
		};

		vi.mocked(computeDiff).mockReturnValue({
			changedFiles: [],
			unchangedFiles: ["a.ts"],
			deletedFiles: [],
		});

		// Act
		await diffTempVsOutput(
			ctx as Parameters<typeof diffTempVsOutput>[0],
			params,
		);

		// Assert
		expect(computeDiff).toHaveBeenCalledTimes(2);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-005: diffTempVsOutput sets hasChanges=true when files changed
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-005: should set hasChanges to true when changed files are detected", async () => {
		// Arrange
		fs.mkdirSync(
			path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/generated"),
			{ recursive: true },
		);
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});

		const ctx = { hasChanges: false, diffs: [] as unknown[] };
		vi.mocked(computeDiff).mockReturnValue({
			changedFiles: ["a.ts", "b.ts"],
			unchangedFiles: [],
			deletedFiles: [],
		});

		// Act
		await diffTempVsOutput(
			ctx as Parameters<typeof diffTempVsOutput>[0],
			baseParams,
		);

		// Assert
		expect(ctx.hasChanges).toBe(true);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-006: diffTempVsOutput sets hasChanges=true when files deleted
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-006: should set hasChanges to true when deleted files are detected", async () => {
		// Arrange
		fs.mkdirSync(
			path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/generated"),
			{ recursive: true },
		);
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});

		const ctx = { hasChanges: false, diffs: [] as unknown[] };
		vi.mocked(computeDiff).mockReturnValue({
			changedFiles: [],
			unchangedFiles: [],
			deletedFiles: ["c.ts"],
		});

		// Act
		await diffTempVsOutput(
			ctx as Parameters<typeof diffTempVsOutput>[0],
			baseParams,
		);

		// Assert
		expect(ctx.hasChanges).toBe(true);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-007: handleNoChanges calls cleanupTempSessionDir
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-007: should call cleanupTempSessionDir and onReportReady when no changes", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = { hasChanges: false, diffs: [] };

		// Act
		await handleNoChanges(
			ctx as Parameters<typeof handleNoChanges>[0],
			baseParams,
		);

		// Assert
		expect(cleanupTempSessionDir).toHaveBeenCalledWith(baseParams.tempDir);
		expect(baseParams.onReportReady).toHaveBeenCalledWith({
			label: baseParams.label,
			hasChanges: false,
			reports: baseParams.context.reports,
		});
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-008: handleNoChanges writes report markdown when reportsOutputPath is set
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-008: should write report markdown file when reportsOutputPath is provided", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = { hasChanges: false, diffs: [] };
		const params: LifecycleTaskParams<unknown, unknown> = {
			...baseParams,
			reportsOutputPath: path.join(
				WORKSPACE_ROOT,
				"reports",
				"pipeline-report.md",
			),
		};

		// Act
		await handleNoChanges(ctx as Parameters<typeof handleNoChanges>[0], params);

		// Assert
		expect(fs.existsSync(path.join(WORKSPACE_ROOT, "reports"))).toBe(true);
		expect(fs.existsSync(params.reportsOutputPath!)).toBe(true);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-009: handleNoChanges sets task output with correct format
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-009: should set task output with correct summary format", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = {
			hasChanges: false,
			diffs: [
				{
					changedFiles: [],
					unchangedFiles: ["a.ts", "b.ts"],
					deletedFiles: [],
				},
			],
		};

		// Act
		await handleNoChanges(
			ctx as Parameters<typeof handleNoChanges>[0],
			baseParams,
		);

		// Assert
		expect(mockTask.output).toContain("Sem alterações");
		expect(mockTask.output).toContain("inalterado(s)");
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-010: backupCurrentOutput calls backupDir for each output dir
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-010: should call backupDir for each output directory", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/types"), { recursive: true });

		const params: LifecycleTaskParams<unknown, unknown> = {
			...baseParams,
			outputDirs: ["src/generated", "src/types"],
		};

		// Act
		await backupCurrentOutput(params);

		// Assert
		expect(backupDir).toHaveBeenCalledTimes(2);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-011: swapTempToOutputDirs calls swapTempToOutput for each output dir
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-011: should call swapTempToOutput for each output directory", async () => {
		// Arrange
		fs.mkdirSync(
			path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/generated"),
			{ recursive: true },
		);
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc", "src/types"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/types"), { recursive: true });

		const params: LifecycleTaskParams<unknown, unknown> = {
			...baseParams,
			outputDirs: ["src/generated", "src/types"],
		};

		// Act
		await swapTempToOutputDirs(params);

		// Assert
		expect(swapTempToOutput).toHaveBeenCalledTimes(2);
		expect(cleanupTempSessionDir).toHaveBeenCalledWith(params.tempDir);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-012: swapTempToOutputDirs skips non-existent temp directories
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-012: should skip swap for non-existent temp output directories", async () => {
		// Arrange - temp dir exists but doesn't have the src/generated subdir
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		fs.mkdirSync(path.join(WORKSPACE_ROOT, "src/generated"), {
			recursive: true,
		});

		// Act
		await swapTempToOutputDirs(baseParams);

		// Assert
		expect(swapTempToOutput).not.toHaveBeenCalled();
		expect(cleanupTempSessionDir).toHaveBeenCalled(); // but cleanup is still called
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-013: renderReportsSummary calls onReportReady with correct data
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-013: should call onReportReady with hasChanges=true", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = { hasChanges: true, diffs: [] };

		// Act
		await renderReportsSummary(
			ctx as Parameters<typeof renderReportsSummary>[0],
			baseParams,
		);

		// Assert
		expect(baseParams.onReportReady).toHaveBeenCalledWith({
			label: baseParams.label,
			hasChanges: true,
			reports: baseParams.context.reports,
		});
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-014: renderReportsSummary writes report markdown when reportsOutputPath is set
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-014: should write report markdown file when reportsOutputPath is provided", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = { hasChanges: true, diffs: [] };
		const params: LifecycleTaskParams<unknown, unknown> = {
			...baseParams,
			reportsOutputPath: path.join(
				WORKSPACE_ROOT,
				"reports",
				"pipeline-report.md",
			),
		};

		// Act
		await renderReportsSummary(
			ctx as Parameters<typeof renderReportsSummary>[0],
			params,
		);

		// Assert
		expect(fs.existsSync(path.join(WORKSPACE_ROOT, "reports"))).toBe(true);
		expect(fs.existsSync(params.reportsOutputPath!)).toBe(true);
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-015: renderReportsSummary sets task output with correct format
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-015: should set task output with correct summary for changed files", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = {
			hasChanges: true,
			diffs: [
				{
					changedFiles: ["a.ts", "b.ts"],
					unchangedFiles: ["c.ts"],
					deletedFiles: ["d.ts"],
				},
			],
		};

		// Act
		await renderReportsSummary(
			ctx as Parameters<typeof renderReportsSummary>[0],
			baseParams,
		);

		// Assert
		expect(mockTask.output).toContain("alterado(s)");
		expect(mockTask.output).toContain("removido(s)");
		expect(mockTask.output).toContain("inalterado(s)");
	});

	// ══════════════════════════════════════════════════════════════
	// TC-UT-LIFT-016: Task output matches expected Listr2 format
	// ══════════════════════════════════════════════════════════════
	it("TC-UT-LIFT-016: should set task.output as a string for Listr2 renderer", async () => {
		// Arrange
		fs.mkdirSync(path.join(WORKSPACE_ROOT, ".temp", "123-abc"), {
			recursive: true,
		});
		const ctx = {
			hasChanges: true,
			diffs: [{ changedFiles: ["x.ts"], unchangedFiles: [], deletedFiles: [] }],
		};

		// Act
		await renderReportsSummary(
			ctx as Parameters<typeof renderReportsSummary>[0],
			baseParams,
		);

		// Assert
		expect(typeof mockTask.output).toBe("string");
		expect(mockTask.output).toMatch(/\d+ alterado\(s\)/);
	});
});
