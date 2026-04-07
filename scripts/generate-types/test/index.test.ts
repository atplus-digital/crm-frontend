import { afterEach, describe, expect, it, vi } from "vitest";

describe("scripts/generate-types/index", () => {
	afterEach(() => {
		vi.resetModules();
		vi.restoreAllMocks();
	});

	it("deve executar runCli ao importar o entrypoint", async () => {
		const runCli = vi.fn().mockResolvedValue(undefined);

		vi.doMock("../config", () => ({ config: {} }));
		vi.doMock("../src/cli/main", () => ({ runCli }));

		await import("../index");

		expect(runCli).toHaveBeenCalledTimes(1);
	});

	it("deve registrar erro fatal e encerrar processo quando runCli falha", async () => {
		const error = new Error("boom");
		const runCli = vi.fn().mockRejectedValue(error);
		const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		const exitSpy = vi
			.spyOn(process, "exit")
			.mockImplementation(((code?: number) => code as never) as never);

		vi.doMock("../config", () => ({ config: {} }));
		vi.doMock("../src/cli/main", () => ({ runCli }));

		await import("../index");
		await Promise.resolve();

		expect(errorSpy).toHaveBeenCalledWith("Erro fatal:", error);
		expect(exitSpy).toHaveBeenCalledWith(1);
	});
});
