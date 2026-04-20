import {
	createLogger,
	logger,
	logInfo,
	logVerbose,
} from "@scripts/generate-types/src/utils/logger";
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

	describe("logInfo", () => {
		it("should call console.info with level prefix", () => {
			const message = "Test info message";

			logInfo(message);

			expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] Test info message");
			expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
		});

		it("should not log info when level is error", () => {
			logger.setLevel("error");

			logInfo("Info hidden by error level");
			expect(consoleInfoSpy).not.toHaveBeenCalled();
		});
	});

	describe("logVerbose", () => {
		it("should NOT call console.debug when level is info", () => {
			const message = "Verbose message when off";

			logVerbose(message);

			expect(consoleDebugSpy).not.toHaveBeenCalled();
		});

		it("should call console.debug when level is debug", () => {
			logger.setLevel("debug");
			const message = "Verbose message when on";

			logVerbose(message);

			expect(consoleDebugSpy).toHaveBeenCalledWith(
				"[DEBUG] Verbose message when on",
			);
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
