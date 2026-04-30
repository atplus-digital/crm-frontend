import { createLogger, logger } from "@scripts/generators/src/lib/logger";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("logger", () => {
	let consoleInfoSpy: ReturnType<typeof vi.spyOn>;
	let consoleDebugSpy: ReturnType<typeof vi.spyOn>;
	let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
		consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
		consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		logger.setLevel("info");
	});

	afterEach(() => {
		consoleInfoSpy.mockRestore();
		consoleDebugSpy.mockRestore();
		consoleErrorSpy.mockRestore();
	});

	describe("logger.info", () => {
		it("should call console.info with level prefix", () => {
			const message = "Test info message";

			logger.info(message);

			// Verify the call was made with a string containing the expected parts
			const callArgs = consoleInfoSpy.mock.calls[0][0];
			expect(callArgs).toContain("[INFO]");
			expect(callArgs).toContain(message);
			expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
		});

		it("should not log info when level is error", () => {
			logger.setLevel("error");

			logger.info("Info hidden by error level");
			expect(consoleInfoSpy).not.toHaveBeenCalled();
		});
	});

	describe("logger.debug", () => {
		it("should NOT call console.debug when level is info", () => {
			const message = "Verbose message when off";

			logger.debug(message);

			expect(consoleDebugSpy).not.toHaveBeenCalled();
		});

		it("should call console.debug when level is debug", () => {
			logger.setLevel("debug");
			const message = "Verbose message when on";

			logger.debug(message);

			// Verify the call was made with a string containing the expected parts
			const callArgs = consoleDebugSpy.mock.calls[0][0];
			expect(callArgs).toContain("[DEBUG]");
			expect(callArgs).toContain("Verbose message when on");
			expect(consoleDebugSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe("createLogger", () => {
		it("should expose setLevel and getLevel", () => {
			const isolatedLogger = createLogger();

			isolatedLogger.setLevel("error");
			expect(isolatedLogger.getLevel()).toBe("error");
		});
	});
});
