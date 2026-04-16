import type { RuntimeConfig } from "@scripts/generate-types/src/@types/script";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Hoisted mock factory for config module
const { getMockConfig, setMockConfig } = vi.hoisted(() => {
	let mockConfig: RuntimeConfig = {
		outputDir: "/tmp/test",
		splitCollections: [],
		verbose: false,
		defaultEnvPath: ".env.local",
		requestTimeoutMs: 15_000,
		requestConcurrency: 5,
		baseInterfaceNaming: { prefix: "", suffix: "Base" },
		baseUrl: "https://example.com/api",
		token: "fake-token",
		timeoutMs: 30_000,
	};

	return {
		getMockConfig: () => mockConfig,
		setMockConfig: (newConfig: Partial<RuntimeConfig>) => {
			mockConfig = { ...mockConfig, ...newConfig };
		},
	};
});

vi.mock("@scripts/generate-types/config", () => ({
	get config() {
		return getMockConfig();
	},
}));

// Import the module under test after mocks are set up
import { logInfo, logVerbose } from "@scripts/generate-types/src/utils/logger";

describe("logger", () => {
	let consoleLogSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
		// Reset config to default (verbose: false)
		setMockConfig({ verbose: false });
	});

	afterEach(() => {
		consoleLogSpy.mockRestore();
	});

	describe("logInfo", () => {
		it("should call console.log with the message", () => {
			const message = "Test info message";

			logInfo(message);

			expect(consoleLogSpy).toHaveBeenCalledWith(message);
			expect(consoleLogSpy).toHaveBeenCalledTimes(1);
		});

		it("should call console.log even when verbose is false", () => {
			setMockConfig({ verbose: false });
			const message = "Info message with verbose off";

			logInfo(message);

			expect(consoleLogSpy).toHaveBeenCalledWith(message);
		});

		it("should call console.log even when verbose is true", () => {
			setMockConfig({ verbose: true });
			const message = "Info message with verbose on";

			logInfo(message);

			expect(consoleLogSpy).toHaveBeenCalledWith(message);
		});
	});

	describe("logVerbose", () => {
		it("should NOT call console.log when config.verbose is false", () => {
			setMockConfig({ verbose: false });
			const message = "Verbose message when off";

			logVerbose(message);

			expect(consoleLogSpy).not.toHaveBeenCalled();
		});

		it("should call console.log when config.verbose is true", () => {
			setMockConfig({ verbose: true });
			const message = "Verbose message when on";

			logVerbose(message);

			expect(consoleLogSpy).toHaveBeenCalledWith(message);
			expect(consoleLogSpy).toHaveBeenCalledTimes(1);
		});

		it("should toggle behavior based on config.verbose changes", () => {
			// First call with verbose: false
			setMockConfig({ verbose: false });
			logVerbose("First message");
			expect(consoleLogSpy).not.toHaveBeenCalled();

			// Second call with verbose: true
			setMockConfig({ verbose: true });
			logVerbose("Second message");
			expect(consoleLogSpy).toHaveBeenCalledWith("Second message");
			expect(consoleLogSpy).toHaveBeenCalledTimes(1);
		});
	});
});
