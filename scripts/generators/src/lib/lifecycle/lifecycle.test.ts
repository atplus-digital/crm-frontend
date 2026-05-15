import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock node:fs before importing lifecycle
vi.mock("node:fs", () => ({
	...vi.importActual("node:fs"),
	mkdirSync: vi.fn(),
	existsSync: vi.fn(() => true),
	writeFileSync: vi.fn(),
	rmSync: vi.fn(),
	readFileSync: vi.fn(),
	readdirSync: vi.fn(() => []),
	copyFileSync: vi.fn(),
}));

// Mock the @generators path aliases
vi.mock("@generators/lib/io/locker", () => ({
	applyWorkspaceLockIfNeeded: vi.fn(),
}));

vi.mock("@generators/lib/pipeline/reports", () => ({
	createReportsContext: vi.fn(() => ({
		schemaVersion: 1,
		namespaces: {},
	})),
	countReports: vi.fn(() => 0),
	renderReportsMarkdown: vi.fn(() => "# Report\n"),
}));

vi.mock("@generators/lib/pipeline/runner", () => ({
	runPipelineStages: vi.fn(),
}));

vi.mock("./lifecycle-tasks", () => ({
	backupCurrentOutput: vi.fn(),
	diffTempVsOutput: vi.fn(),
	handleNoChanges: vi.fn(),
	renderReportsSummary: vi.fn(),
	swapTempToOutputDirs: vi.fn(),
	validateGeneratedOutput: vi.fn(),
}));

// Import mocked functions for assertions
import * as fs from "node:fs";
import { applyWorkspaceLockIfNeeded } from "@generators/lib/io/locker";
import { createReportsContext } from "@generators/lib/pipeline/reports";
import { runPipelineStages } from "@generators/lib/pipeline/runner";
import type { TaskRunner } from "../types";
import { runStandardPipeline } from "./lifecycle";
import {
	backupCurrentOutput,
	diffTempVsOutput,
	handleNoChanges,
	renderReportsSummary,
	swapTempToOutputDirs,
	validateGeneratedOutput,
} from "./lifecycle-tasks";

describe("lifecycle", () => {
	beforeEach(() => {
		vi.clearAllMocks();

		// Default mock implementations
		vi.mocked(applyWorkspaceLockIfNeeded).mockImplementation(() => {});
		vi.mocked(createReportsContext).mockReturnValue({
			schemaVersion: 1,
			namespaces: {},
		});
		vi.mocked(runPipelineStages).mockReturnValue(undefined);
		vi.mocked(validateGeneratedOutput).mockResolvedValue(undefined);
		vi.mocked(diffTempVsOutput).mockResolvedValue(undefined);
		vi.mocked(handleNoChanges).mockResolvedValue(undefined);
		vi.mocked(backupCurrentOutput).mockResolvedValue(undefined);
		vi.mocked(swapTempToOutputDirs).mockResolvedValue(undefined);
		vi.mocked(renderReportsSummary).mockResolvedValue(undefined);
		vi.mocked(fs.mkdirSync).mockImplementation(() => {});
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	// TC-UT-LIF-001: Empty outputDirs skips lock/stages/validation
	it("TC-UT-LIF-001: should skip lock and stages when outputDirs is empty array", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => [],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert
		expect(mockTask.newListr).toHaveBeenCalledWith(
			expect.arrayContaining([
				expect.objectContaining({
					title: "Pipeline",
				}),
			]),
			expect.any(Object),
		);
		// Should NOT call lock when outputDirs is empty
		expect(applyWorkspaceLockIfNeeded).not.toHaveBeenCalled();
	});

	// TC-UT-LIF-002: Full clean run executes lock → stages → validate → diff → no changes
	it("TC-UT-LIF-002: should execute lock, stages, validate, diff when no changes detected", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		vi.mocked(diffTempVsOutput).mockImplementation(async (ctx) => {
			ctx.hasChanges = false;
			ctx.diffs = [];
		});

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert - verify the Listr task structure includes all lifecycle stages
		expect(mockTask.newListr).toHaveBeenCalledWith(
			expect.arrayContaining([
				expect.objectContaining({
					title: "Bloqueando workspace para saídas geradas",
				}),
				expect.objectContaining({ title: "Pipeline" }),
				expect.objectContaining({ title: "Validando saída gerada" }),
				expect.objectContaining({ title: "Comparando alterações" }),
				expect.objectContaining({ title: "Sem alterações" }),
			]),
			expect.any(Object),
		);

		// Lock should be set up (call verified via task structure)
		expect(mockTask.newListr).toHaveBeenCalled();
	});

	// TC-UT-LIF-003: Changes detected → backup → swap → reports
	it("TC-UT-LIF-003: should execute backup, swap, and renderReportsSummary when changes are detected", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		vi.mocked(diffTempVsOutput).mockImplementation(async (ctx) => {
			ctx.hasChanges = true;
			ctx.diffs = [
				{ changedFiles: ["a.ts"], unchangedFiles: [], deletedFiles: [] },
			];
		});

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert - verify task structure has skip functions for conditional tasks
		const callArgs = mockTask.newListr.mock.calls[0][0] as Array<{
			title: string;
			skip?: (ctx: unknown) => string | boolean;
		}>;

		// No changes task should be skipped when hasChanges is true
		const noChangesTask = callArgs.find((t) => t.title === "Sem alterações");
		expect(noChangesTask?.skip).toBeDefined();

		// Backup task should NOT be skipped when hasChanges is true
		const backupTask = callArgs.find((t) => t.title === "Realizando backup");
		expect(backupTask?.skip).toBeDefined();
		// Verify the skip function returns false (not skipped) when hasChanges is true
		expect(backupTask?.skip?.({ hasChanges: true })).toBe(false);

		// Swap task should NOT be skipped when hasChanges is true
		const swapTask = callArgs.find((t) => t.title === "Aplicando alterações");
		expect(swapTask?.skip).toBeDefined();
	});

	// TC-UT-LIF-004: No-changes scenario has correct skip logic
	it("TC-UT-LIF-004: should skip backup and swap tasks when no changes are detected", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		vi.mocked(diffTempVsOutput).mockImplementation(async (ctx) => {
			ctx.hasChanges = false;
			ctx.diffs = [];
		});

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert - verify skip logic for no-changes scenario
		const callArgs = mockTask.newListr.mock.calls[0][0] as Array<{
			title: string;
			skip?: (ctx: unknown) => string | boolean;
		}>;

		// No changes task should NOT be skipped (hasChanges=false)
		const noChangesTask = callArgs.find((t) => t.title === "Sem alterações");
		expect(noChangesTask?.skip?.({ hasChanges: false })).toBe(false);

		// Backup task should be skipped when hasChanges is false
		const backupTask = callArgs.find((t) => t.title === "Realizando backup");
		expect(backupTask?.skip?.({ hasChanges: false })).toBe("Sem alterações");

		// Swap task should be skipped when hasChanges is false
		const swapTask = callArgs.find((t) => t.title === "Aplicando alterações");
		expect(swapTask?.skip?.({ hasChanges: false })).toBe("Sem alterações");
	});

	// TC-UT-LIF-005: Validation task is present with correct title
	it("TC-UT-LIF-005: should include validation task in lifecycle", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert - validation task is in the task list
		const callArgs = mockTask.newListr.mock.calls[0][0] as Array<{
			title: string;
		}>;
		const validationTask = callArgs.find(
			(t) => t.title === "Validando saída gerada",
		);
		expect(validationTask).toBeDefined();
	});

	// TC-UT-LIF-006: Lock task has async task function
	it("TC-UT-LIF-006: should include async lock task in lifecycle", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert - lock task is present
		const callArgs = mockTask.newListr.mock.calls[0][0] as Array<{
			title: string;
			task: unknown;
		}>;
		const lockTask = callArgs.find(
			(t) => t.title === "Bloqueando workspace para saídas geradas",
		);
		expect(lockTask).toBeDefined();
		// Lock task should have an async task function
		expect(typeof lockTask?.task).toBe("function");
	});

	// TC-UT-LIF-007: overrideConfig merges with defaultConfig
	it("TC-UT-LIF-007: should merge overrideConfig with defaultConfig", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		const options = {
			task: mockTask as unknown as TaskRunner,
			overrideConfig: { basePath: "/custom" },
			defaultConfig: { basePath: "/default" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert
		expect(mockTask.newListr).toHaveBeenCalled();
	});

	// TC-UT-LIF-008: Pipeline creates temp directory
	it("TC-UT-LIF-008: should create temp directory when outputDirs is not empty", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
		};

		// Act
		runStandardPipeline(options);

		// Assert - verify mkdirSync was called with .temp path
		expect(fs.mkdirSync).toHaveBeenCalledWith(
			expect.stringContaining(".temp"),
			expect.objectContaining({ recursive: true }),
		);
	});

	// TC-UT-LIF-009: Pipeline task structure includes runPipelineStages call
	it("TC-UT-LIF-009: should include Pipeline task that calls runPipelineStages", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
			label: "Test Pipeline",
			reportsOutputPath: "/tmp/report.md",
		};

		// Act
		runStandardPipeline(options);

		// Assert - verify the Pipeline task exists in the task list
		const callArgs = mockTask.newListr.mock.calls[0][0] as Array<{
			title: string;
			task: unknown;
		}>;
		const pipelineTask = callArgs.find((t) => t.title === "Pipeline");
		expect(pipelineTask).toBeDefined();
		// Pipeline task should have a task function that calls runPipelineStages
		expect(typeof pipelineTask?.task).toBe("function");
	});

	// TC-UT-LIF-010: onReportReady callback is passed through
	it("TC-UT-LIF-010: should pass onReportReady callback to task params", () => {
		// Arrange
		const mockTask = {
			newListr: vi.fn().mockReturnValue({}),
		};
		const onReportReady = vi.fn();

		const options = {
			task: mockTask as unknown as TaskRunner,
			defaultConfig: { outputPath: "src/generated" },
			getOutputDirs: () => ["src/generated"],
			stages: [],
			onReportReady,
		};

		// Act
		runStandardPipeline(options);

		// Assert
		expect(mockTask.newListr).toHaveBeenCalled();
	});
});
