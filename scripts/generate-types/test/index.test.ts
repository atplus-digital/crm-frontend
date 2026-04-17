import { afterEach, describe, expect, it, vi } from "vitest";

describe("index.ts - entry point", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("deve exportar config do config.ts", async () => {
		const indexModule = await import("@scripts/generate-types/index");
		expect(indexModule.config).toBeDefined();
	});

	it("deve executar runGenerateTypes e lidar com erro fatal", async () => {
		const consoleErrorSpy = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});
		const processExitSpy = vi
			.spyOn(process, "exit")
			.mockImplementation(() => undefined as never);

		const mockRunGenerateTypes = vi
			.fn()
			.mockRejectedValue(new Error("Test error"));

		vi.doMock("@scripts/generate-types/src/generate-types", () => ({
			runGenerateTypes: mockRunGenerateTypes,
		}));

		await import("@scripts/generate-types/index");

		expect(mockRunGenerateTypes).toHaveBeenCalled();
		await vi.runAllTimersAsync();

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			"Ero fatal:",
			expect.any(Error),
		);
		expect(processExitSpy).toHaveBeenCalledWith(1);

		vi.doUnmock("@scripts/generate-types/src/generate-types");
		consoleErrorSpy.mockRestore();
		processExitSpy.mockRestore();
	});
});
