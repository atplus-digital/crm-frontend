import { execFile } from "node:child_process";
import { runBiomeFix } from "@scripts/generate-types/src/utils/biome-runner";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("node:child_process", () => ({
	execFile: vi.fn(),
}));

vi.mock("@scripts/generate-types/src/utils/logger", () => ({
	logInfo: vi.fn(),
	logVerbose: vi.fn(),
}));

describe("biome-runner", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("runBiomeFix", () => {
		it("deve retornar imediatamente quando dirs está vazio", async () => {
			await runBiomeFix([]);
			expect(execFile).not.toHaveBeenCalled();
		});

		it("deve executar biome com sucesso em diretórios válidos", async () => {
			const mockExecFile = vi.mocked(execFile);
			mockExecFile.mockImplementationOnce((cmd, args, callback) => {
				if (callback) {
					callback(null, "Biome check completed", "");
				}
				return {} as any;
			});

			await runBiomeFix(["/tmp/test1", "/tmp/test2"]);

			expect(execFile).toHaveBeenCalledWith(
				"biome",
				["check", "--write", "/tmp/test1", "/tmp/test2"],
				expect.any(Function),
			);
		});

		it("deve lidar com erro do biome sem lançar exceção", async () => {
			const mockExecFile = vi.mocked(execFile);
			const mockError = new Error("Biome not found");
			mockExecFile.mockImplementationOnce((cmd, args, callback) => {
				if (callback) {
					callback(mockError, "", "Error: biome not found");
				}
				return {} as any;
			});

			await expect(runBiomeFix(["/tmp/test"])).resolves.not.toThrow();
		});

		it("deve lidar com stdout vazio", async () => {
			const mockExecFile = vi.mocked(execFile);
			mockExecFile.mockImplementationOnce((cmd, args, callback) => {
				if (callback) {
					callback(null, "", "");
				}
				return {} as any;
			});

			await expect(runBiomeFix(["/tmp/test"])).resolves.not.toThrow();
		});

		it("deve lidar apenas com stderr", async () => {
			const mockExecFile = vi.mocked(execFile);
			mockExecFile.mockImplementationOnce((cmd, args, callback) => {
				if (callback) {
					callback(null, "", "Warning: deprecated syntax");
				}
				return {} as any;
			});

			await expect(runBiomeFix(["/tmp/test"])).resolves.not.toThrow();
		});

		it("deve lidar com stdout e stderr simultaneamente", async () => {
			const mockExecFile = vi.mocked(execFile);
			mockExecFile.mockImplementationOnce((cmd, args, callback) => {
				if (callback) {
					callback(null, "Formatted 2 files", "Warning: 1 issue found");
				}
				return {} as any;
			});

			await expect(runBiomeFix(["/tmp/test"])).resolves.not.toThrow();
		});
	});
});
