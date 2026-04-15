import * as path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { mockRuntimeConfig } from "./setup";

const mockFs = {
	existsSync: vi.fn<(path: string) => boolean>(),
	readFileSync: vi.fn<(path: string, encoding: string) => string>(),
	writeFileSync:
		vi.fn<(path: string, data: string, encoding: string) => void>(),
	mkdirSync:
		vi.fn<
			(path: string, options: { recursive: boolean }) => string | undefined
		>(),
};

vi.mock("node:fs", () => ({
	get existsSync() {
		return mockFs.existsSync;
	},
	get readFileSync() {
		return mockFs.readFileSync;
	},
	get writeFileSync() {
		return mockFs.writeFileSync;
	},
	get mkdirSync() {
		return mockFs.mkdirSync;
	},
}));

vi.mock("@scripts/generate-types/config", () => ({
	get config() {
		return mockRuntimeConfig;
	},
}));

describe("workspace-locker", () => {
	const cwd = process.cwd();
	const vscodeDir = path.join(cwd, ".vscode");
	const settingsPath = path.join(vscodeDir, "settings.json");

	beforeEach(() => {
		mockFs.existsSync.mockReset();
		mockFs.readFileSync.mockReset();
		mockFs.writeFileSync.mockReset();
		mockFs.mkdirSync.mockReset();
		mockRuntimeConfig.lockWorkspace = false;
		mockRuntimeConfig.verbose = false;
		mockRuntimeConfig.outputDir = "src/@types/generated/crm";
	});

	describe("isWorkspaceLocked", () => {
		it("deve retornar false quando o arquivo settings.json não existe", async () => {
			mockFs.existsSync.mockReturnValue(false);
			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(false);
		});

		it("deve retornar false quando settings.json existe mas não tem readonlyInclude", async () => {
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({ "editor.fontSize": 14 }),
			);
			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(false);
		});

		it("deve retornar false quando readonlyInclude não é um objeto", async () => {
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({ "files.readonlyInclude": "not-an-object" }),
			);
			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(false);
		});

		it("deve retornar false quando readonlyInclude é null", async () => {
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({ "files.readonlyInclude": null }),
			);
			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(false);
		});

		it("deve retornar false quando readonlyInclude é um objeto mas não contém o padrão generated", async () => {
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/other/**": true },
				}),
			);
			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(false);
		});

		it("deve retornar true quando readonlyInclude contém o padrão src/generated/**", async () => {
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/**": true },
				}),
			);
			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(true);
		});

		it("deve retornar false e avisar quando o JSON é inválido (parse error)", async () => {
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue("not valid json {{{");
			const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

			const { isWorkspaceLocked } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			expect(isWorkspaceLocked()).toBe(false);
			expect(warnSpy).toHaveBeenCalledWith(
				"⚠️ Não foi possível verificar as configurações do workspace:",
				expect.any(Error),
			);
		});
	});

	describe("applyWorkspaceLockIfNeeded", () => {
		it("não deve chamar lockWorkspace quando config.lockWorkspace for false", async () => {
			mockRuntimeConfig.lockWorkspace = false;
			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			expect(mockFs.writeFileSync).not.toHaveBeenCalled();
			expect(mockFs.mkdirSync).not.toHaveBeenCalled();
		});

		it("não deve chamar lockWorkspace quando o workspace já está bloqueado", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/generated/**": true },
				}),
			);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			expect(mockFs.writeFileSync).not.toHaveBeenCalled();
			expect(mockFs.mkdirSync).not.toHaveBeenCalled();
		});

		it("deve criar diretório .vscode e arquivo settings.json quando não existem", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.outputDir = "src/@types/generated/crm";
			mockFs.existsSync.mockReturnValue(false);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			expect(mockFs.mkdirSync).toHaveBeenCalledWith(vscodeDir, {
				recursive: true,
			});
			expect(mockFs.writeFileSync).toHaveBeenCalledWith(
				settingsPath,
				expect.any(String),
				"utf-8",
			);

			const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
			const parsed = JSON.parse(writtenContent);
			expect(parsed["files.readonlyInclude"]["src/generated/**"]).toBe(true);
		});

		it("deve criar novo readonlyInclude em settings.json existente sem readonlyInclude", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.outputDir = "src/@types/generated/crm";
			// isWorkspaceLocked: settings exists, no readonlyInclude → returns false
			// lockWorkspace: .vscode dir exists, settings file exists
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({ "editor.fontSize": 14 }),
			);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			expect(mockFs.mkdirSync).not.toHaveBeenCalled();
			expect(mockFs.writeFileSync).toHaveBeenCalledWith(
				settingsPath,
				expect.any(String),
				"utf-8",
			);

			const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
			const parsed = JSON.parse(writtenContent);
			expect(parsed["editor.fontSize"]).toBe(14);
			expect(parsed["files.readonlyInclude"]["src/generated/**"]).toBe(true);
		});

		it("deve adicionar padrão a readonlyInclude existente em settings.json", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.outputDir = "src/@types/generated/crm";
			// isWorkspaceLocked: settings exists but readonlyInclude doesn't have generated pattern
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": { "src/other/**": true },
				}),
			);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
			const parsed = JSON.parse(writtenContent);
			expect(parsed["files.readonlyInclude"]["src/other/**"]).toBe(true);
			expect(parsed["files.readonlyInclude"]["src/generated/**"]).toBe(true);
		});

		it("deve adicionar mainOutputPattern ao readonlyInclude quando não estiver presente", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.outputDir = "src/@types/generated/crm";
			// isWorkspaceLocked: returns false (no generated pattern in readonlyInclude)
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({ "files.readonlyInclude": {} }),
			);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
			const parsed = JSON.parse(writtenContent);
			// path.join("src/@types/generated/crm", "index.ts") → "src/@types/generated/crm/index.ts"
			// .replace(/^\.\//, "**/") has no effect since it doesn't start with "./"
			expect(
				parsed["files.readonlyInclude"]["src/@types/generated/crm/index.ts"],
			).toBe(true);
			expect(parsed["files.readonlyInclude"]["src/generated/**"]).toBe(true);
		});

		it("não deve adicionar mainOutputPattern duplicado quando já estiver em readonlyInclude", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.outputDir = "src/@types/generated/crm";
			mockFs.existsSync.mockReturnValue(true);
			mockFs.readFileSync.mockReturnValue(
				JSON.stringify({
					"files.readonlyInclude": {
						"src/@types/generated/crm/index.ts": true,
					},
				}),
			);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
			const parsed = JSON.parse(writtenContent);
			expect(
				parsed["files.readonlyInclude"]["src/@types/generated/crm/index.ts"],
			).toBe(true);
			expect(parsed["files.readonlyInclude"]["src/generated/**"]).toBe(true);
		});

		it("deve registrar mensagem de sucesso no console após bloqueio", async () => {
			vi.resetModules();
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.verbose = true;
			mockFs.existsSync.mockReturnValue(false);
			const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			expect(logSpy).toHaveBeenCalledWith(
				"🔒 Workspace bloqueado: os arquivos gerados agora são somente leitura",
			);
		});

		it("deve lançar erro quando writeFileSync falhar", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockFs.existsSync.mockReturnValue(false);
			mockFs.writeFileSync.mockImplementation(() => {
				throw new Error("disk full");
			});

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);

			expect(() => applyWorkspaceLockIfNeeded()).toThrow(
				"Falha ao bloquear o workspace: Error: disk full",
			);
		});

		it("deve usar tabs como indentação no JSON de saída", async () => {
			mockRuntimeConfig.lockWorkspace = true;
			mockRuntimeConfig.outputDir = "src/@types/generated/crm";
			mockFs.existsSync.mockReturnValue(false);

			const { applyWorkspaceLockIfNeeded } = await import(
				"@scripts/generate-types/src/utils/workspace-locker"
			);
			applyWorkspaceLockIfNeeded();

			const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
			expect(writtenContent).toContain("\t");
		});
	});
});
