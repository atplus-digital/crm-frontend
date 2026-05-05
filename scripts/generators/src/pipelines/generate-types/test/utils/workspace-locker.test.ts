import * as fs from "node:fs";
import { defaultLogger as logger } from "@scripts/generators/src/lib/logging";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("node:fs", () => ({
	existsSync: vi.fn(),
	mkdirSync: vi.fn(),
	writeFileSync: vi.fn(),
	readFileSync: vi.fn(),
	unlinkSync: vi.fn(),
	rmSync: vi.fn(),
}));

vi.mock("@scripts/generators/src/pipelines/generate-types/config", () => ({
	config: {
		outputDir: "/tmp/generated",
		datasources: [
			{
				name: "nocobase",
				dataSource: "main",
				outputDir: "/tmp/generated/nocobase",
				splitCollections: [],
			},
			{
				name: "ixc",
				dataSource: "d_db_ixcsoft",
				outputDir: "/tmp/generated/ixc",
				splitCollections: ["cliente_contrato"],
				collections: ["cliente_contrato"],
			},
		],
		lockWorkspaceFolder: true,
	},
}));

vi.mock("@scripts/generators/src/lib/logging", () => ({
	defaultLogger: {
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
		debug: vi.fn(),
		setLevel: vi.fn(),
		getLevel: vi.fn(() => "info"),
	},
}));

describe("workspace-locker", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(fs.existsSync).mockReturnValue(false);
		vi.mocked(fs.readFileSync).mockReturnValue("{}");
		vi.mocked(fs.mkdirSync).mockImplementation(() => {});
		vi.mocked(fs.writeFileSync).mockImplementation(() => {});
	});

	describe("isWorkspaceLocked", () => {
		it("returns false when settings file doesn't exist", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(false);

			const result = isWorkspaceLocked();
			expect(result).toBe(false);
		});

		it("returns false when readonlyInclude is absent", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({ "editor.tabSize": 2 }),
			);

			const result = isWorkspaceLocked();
			expect(result).toBe(false);
		});

		it("returns false when readonlyInclude has no matching patterns", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/other/**": true },
				}),
			);

			const result = isWorkspaceLocked();
			expect(result).toBe(false);
		});

		it("returns true when GENERATED_PATTERN is present", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/**": true },
				}),
			);

			const result = isWorkspaceLocked();
			expect(result).toBe(true);
		});

		it("returns false when readonlyInclude is not an object", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": "invalid-string",
				}),
			);

			const result = isWorkspaceLocked();
			expect(result).toBe(false);
		});

		it("returns false on JSON parse error", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("not json content");

			const result = isWorkspaceLocked();
			expect(result).toBe(false);
			expect(logger.warn).toHaveBeenCalledTimes(1);
		});
	});

	describe("applyWorkspaceLockIfNeeded", () => {
		it("calls lockWorkspace when config.lockWorkspaceFolder is true and not locked", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded();

			expect(fs.mkdirSync).toHaveBeenCalled();
			expect(fs.writeFileSync).toHaveBeenCalled();
		});

		it("writes to .vscode/settings.json when not locked", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded();

			expect(fs.mkdirSync).toHaveBeenCalled();
			expect(fs.writeFileSync).toHaveBeenCalled();
		});

		it("writes correct readonlyInclude patterns", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded();

			expect(fs.writeFileSync).toHaveBeenCalled();
			const call = vi.mocked(fs.writeFileSync).mock.calls[0];
			const content = call[1] as string;
			const settings = JSON.parse(content);
			expect(settings["files.readonlyInclude"]).toBeDefined();
			expect(settings["files.readonlyInclude"]["src/generated/**"]).toBe(true);
		});

		it("merges with existing settings preserving other settings", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);

			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"editor.tabSize": 2,
					"files.trimTrailingWhitespace": true,
				}),
			);

			applyWorkspaceLockIfNeeded();

			expect(fs.writeFileSync).toHaveBeenCalled();
			const call = vi.mocked(fs.writeFileSync).mock.calls[0];
			const content = call[1] as string;
			const settings = JSON.parse(content);
			expect(settings["editor.tabSize"]).toBe(2);
			expect(settings["files.trimTrailingWhitespace"]).toBe(true);
			expect(settings["files.readonlyInclude"]).toBeDefined();
		});

		it("handles duplicate patterns without errors", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);

			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": {
						"src/generated/**": true,
						"tmp/generated/nocobase/index.ts": true,
					},
				}),
			);

			expect(() => applyWorkspaceLockIfNeeded()).not.toThrow();
		});

		it("throws error when writeFileSync fails", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generators/src/pipelines/generate-types/utils/workspace-locker"
			);

			vi.mocked(fs.writeFileSync).mockImplementation(() => {
				throw new Error("Permission denied");
			});

			expect(() => applyWorkspaceLockIfNeeded()).toThrow(
				"Falha ao bloquear o workspace",
			);
		});
	});
});
