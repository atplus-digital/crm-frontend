import * as fs from "node:fs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("node:fs", () => ({
	existsSync: vi.fn(),
	mkdirSync: vi.fn(),
	writeFileSync: vi.fn(),
	readFileSync: vi.fn(),
	unlinkSync: vi.fn(),
	rmSync: vi.fn(),
}));

vi.mock("@scripts/shared/utils/logger", () => ({
	logVerbose: vi.fn(),
}));

describe("workspace-locker", () => {
	let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		vi.clearAllMocks();
		consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
		vi.mocked(fs.existsSync).mockReturnValue(false);
		vi.mocked(fs.readFileSync).mockReturnValue("{}");
		vi.mocked(fs.mkdirSync).mockImplementation(() => {});
		vi.mocked(fs.writeFileSync).mockImplementation(() => {});
	});

	afterEach(() => {
		consoleWarnSpy.mockRestore();
	});

	describe("isWorkspaceLocked", () => {
		it("retorna falso quando o arquivo de configurações não existe", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(false);

			const result = isWorkspaceLocked(["src/generated"]);
			expect(result).toBe(false);
		});

		it("retorna falso quando readonlyInclude está ausente", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({ "editor.tabSize": 2 }),
			);

			const result = isWorkspaceLocked(["src/generated"]);
			expect(result).toBe(false);
		});

		it("retorna falso quando readonlyInclude não tem padrões correspondentes", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/other/**": true },
				}),
			);

			const result = isWorkspaceLocked(["src/generated"]);
			expect(result).toBe(false);
		});

		it("retorna verdadeiro quando GENERATED_PATTERN está presente", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/**": true },
				}),
			);

			const result = isWorkspaceLocked(["src/generated"]);
			expect(result).toBe(true);
		});

		it("retorna verdadeiro quando um dos outputDirs corresponde a um padrão", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/nocobase/index.ts": true },
				}),
			);

			const result = isWorkspaceLocked(["src/generated/nocobase"]);
			expect(result).toBe(true);
		});

		it("retorna falso quando readonlyInclude não é um objeto", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": "invalid-string",
				}),
			);

			const result = isWorkspaceLocked(["src/generated"]);
			expect(result).toBe(false);
		});

		it("retorna falso em caso de erro ao analisar JSON", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue("not json content");

			const result = isWorkspaceLocked(["src/generated"]);
			expect(result).toBe(false);
			expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
		});

		it("trata outputDirs vazio corretamente", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/**": true },
				}),
			);

			const result = isWorkspaceLocked([]);
			expect(result).toBe(true);
		});

		it("verifica múltiplos diretórios de saída", async () => {
			const { isWorkspaceLocked } = await import(
				"@scripts/shared/utils/workspace-locker"
			);
			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": {
						"src/generated/ixc/index.ts": true,
					},
				}),
			);

			const result = isWorkspaceLocked([
				"src/generated/nocobase",
				"src/generated/ixc",
			]);
			expect(result).toBe(true);
		});
	});

	describe("lockWorkspace", () => {
		it("cria o diretório .vscode se não existir", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded(["src/generated"], true);

			expect(fs.mkdirSync).toHaveBeenCalledWith(
				expect.stringContaining(".vscode"),
				expect.objectContaining({ recursive: true }),
			);
		});

		it("escreve no arquivo .vscode/settings.json quando não está bloqueado", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded(["src/generated"], true);

			expect(fs.mkdirSync).toHaveBeenCalled();
			expect(fs.writeFileSync).toHaveBeenCalled();
		});

		it("escreve padrões readonlyInclude corretos", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded(["src/generated/nocobase"], true);

			expect(fs.writeFileSync).toHaveBeenCalled();
			const call = vi.mocked(fs.writeFileSync).mock.calls[0];
			const content = call[1] as string;
			const settings = JSON.parse(content);
			expect(settings["files.readonlyInclude"]).toBeDefined();
			expect(settings["files.readonlyInclude"]["src/generated/**"]).toBe(true);
			expect(
				settings["files.readonlyInclude"]["src/generated/nocobase/index.ts"],
			).toBe(true);
		});

		it("preserva outras configurações ao mesclar", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"editor.tabSize": 2,
					"files.trimTrailingWhitespace": true,
				}),
			);

			applyWorkspaceLockIfNeeded(["src/generated"], true);

			expect(fs.writeFileSync).toHaveBeenCalled();
			const call = vi.mocked(fs.writeFileSync).mock.calls[0];
			const content = call[1] as string;
			const settings = JSON.parse(content);
			expect(settings["editor.tabSize"]).toBe(2);
			expect(settings["files.trimTrailingWhitespace"]).toBe(true);
			expect(settings["files.readonlyInclude"]).toBeDefined();
		});

		it("trata padrões duplicados sem erros", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": {
						"src/generated/**": true,
						"src/generated/nocobase/index.ts": true,
					},
				}),
			);

			expect(() =>
				applyWorkspaceLockIfNeeded(["src/generated/nocobase"], true),
			).not.toThrow();
		});

		it("trata múltiplos diretórios de saída corretamente", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded(
				["src/generated/nocobase", "src/generated/ixc"],
				true,
			);

			expect(fs.writeFileSync).toHaveBeenCalled();
			const call = vi.mocked(fs.writeFileSync).mock.calls[0];
			const content = call[1] as string;
			const settings = JSON.parse(content);
			expect(
				settings["files.readonlyInclude"]["src/generated/nocobase/index.ts"],
			).toBe(true);
			expect(
				settings["files.readonlyInclude"]["src/generated/ixc/index.ts"],
			).toBe(true);
		});

		it("remove duplicatas ao bloquear múltiplos diretórios", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded(
				["src/generated", "src/generated", "src/generated/nocobase"],
				true,
			);

			expect(fs.writeFileSync).toHaveBeenCalled();
			const call = vi.mocked(fs.writeFileSync).mock.calls[0];
			const content = call[1] as string;
			const settings = JSON.parse(content);
			const readonlyPatterns = settings["files.readonlyInclude"];
			const nocobaseCount = Object.keys(readonlyPatterns).filter(
				(key) => key === "src/generated/nocobase/index.ts",
			).length;
			expect(nocobaseCount).toBe(1);
		});

		it("gera erro quando writeFileSync falha", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			vi.mocked(fs.writeFileSync).mockImplementation(() => {
				throw new Error("Permission denied");
			});

			expect(() => applyWorkspaceLockIfNeeded(["src/generated"], true)).toThrow(
				"Falha ao bloquear o workspace",
			);
		});
	});

	describe("applyWorkspaceLockIfNeeded", () => {
		it("não bloqueia quando lockWorkspaceFolder é falso", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			applyWorkspaceLockIfNeeded(["src/generated"], false);

			expect(fs.mkdirSync).not.toHaveBeenCalled();
			expect(fs.writeFileSync).not.toHaveBeenCalled();
		});

		it("não bloqueia quando o workspace já está bloqueado", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			vi.mocked(fs.existsSync).mockReturnValue(true);
			vi.mocked(fs.readFileSync).mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/**": true },
				}),
			);

			applyWorkspaceLockIfNeeded(["src/generated"], true);

			expect(fs.mkdirSync).not.toHaveBeenCalled();
			expect(fs.writeFileSync).not.toHaveBeenCalled();
		});

		it("trata outputDirs vazio sem erro", async () => {
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/shared/utils/workspace-locker"
			);

			expect(() => applyWorkspaceLockIfNeeded([], true)).not.toThrow();
		});
	});
});
