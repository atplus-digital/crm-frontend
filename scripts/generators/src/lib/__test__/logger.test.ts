import {
	createLogger,
	isLogLevelEnabled,
	type LogLevel,
	logger,
} from "@scripts/generators/src/lib/logging";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("logger", () => {
	const writeLine = vi.fn<(line: string, level: LogLevel) => void>();

	beforeEach(() => {
		writeLine.mockReset();
		logger.setLevel("info");
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("isLogLevelEnabled", () => {
		it("respeita prioridade dos níveis", () => {
			expect(isLogLevelEnabled("debug", "info")).toBe(false);
			expect(isLogLevelEnabled("info", "info")).toBe(true);
			expect(isLogLevelEnabled("warn", "info")).toBe(true);
			expect(isLogLevelEnabled("error", "warn")).toBe(true);
		});
	});

	describe("createLogger", () => {
		it("expõe setLevel/getLevel", () => {
			const isolatedLogger = createLogger({ writeLine });

			isolatedLogger.setLevel("error");
			expect(isolatedLogger.getLevel()).toBe("error");
		});

		it("não escreve logs abaixo do nível configurado", () => {
			const isolatedLogger = createLogger({
				level: "warn",
				writeLine,
			});

			isolatedLogger.info("mensagem info");
			expect(writeLine).not.toHaveBeenCalled();
		});

		it("formata nível e metadados", () => {
			const isolatedLogger = createLogger({ writeLine });

			isolatedLogger.info("carregando", {
				stage: "fetch",
				datasource: "main",
			});

			expect(writeLine).toHaveBeenCalledTimes(1);
			expect(writeLine).toHaveBeenCalledWith(
				expect.stringContaining(
					"[INFO] [stage=fetch datasource=main] carregando",
				),
				"info",
			);
		});

		it("escreve warn/error com nível correspondente", () => {
			const isolatedLogger = createLogger({ writeLine });

			isolatedLogger.warn("atenção");
			isolatedLogger.error("falhou");

			expect(writeLine).toHaveBeenNthCalledWith(
				1,
				expect.stringContaining("[WARN] atenção"),
				"warn",
			);
			expect(writeLine).toHaveBeenNthCalledWith(
				2,
				expect.stringContaining("[ERROR] falhou"),
				"error",
			);
		});
	});
});
