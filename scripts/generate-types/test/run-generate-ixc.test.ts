import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mockRuntimeConfig } from "./setup";

describe("runGenerateIxc", () => {
	beforeEach(() => {
		mockRuntimeConfig.dryRun = true;
		mockRuntimeConfig.ixcCollections = ["cliente_contrato"];
		mockRuntimeConfig.ixcOutputDir = "src/generated/ixc";
		mockRuntimeConfig.baseInterfaceNaming = {
			prefix: "",
			suffix: "Base",
		};
	});

	afterEach(() => {
		vi.restoreAllMocks();
		vi.unstubAllGlobals();
	});

	it("deve reutilizar o gerador do NocoBase no fluxo IXC com header de datasource", async () => {
		const fetchMock = vi.fn(async (input: URL | string) => {
			const url = String(input);

			if (
				url.includes(
					"collections:get?appends=fields&filterByTk=cliente_contrato",
				)
			) {
				return {
					ok: false,
					status: 404,
					statusText: "Not Found",
					text: vi.fn().mockResolvedValue("Not Found"),
				};
			}

			if (url.includes("cliente_contrato:list?pageSize=1&page=1")) {
				return {
					ok: true,
					json: vi.fn().mockResolvedValue({
						data: [{ id: 1, status: "A" }],
					}),
				};
			}

			throw new Error(`URL não esperada no teste: ${url}`);
		});

		vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

		const { runGenerateIxc } = await import(
			"../src/generation/run-generate-ixc"
		);
		const result = await runGenerateIxc();

		expect(result.mode).toBe("dry-run");
		expect("totalFiles" in result ? result.totalFiles : 0).toBe(2);

		expect(fetchMock).toHaveBeenCalledWith(
			expect.stringContaining(
				"collections:get?appends=fields&filterByTk=cliente_contrato",
			),
			expect.objectContaining({
				headers: {
					Authorization: "Bearer fake-token",
					"X-Data-Source": "d_db_ixcsoft",
				},
			}),
		);
		expect(fetchMock).toHaveBeenCalledWith(
			expect.stringContaining("cliente_contrato:list?pageSize=1&page=1"),
			expect.objectContaining({
				headers: {
					Authorization: "Bearer fake-token",
					"X-Data-Source": "d_db_ixcsoft",
				},
			}),
		);

		if (result.mode !== "dry-run" || !("files" in result)) {
			return;
		}

		const generatedCollectionFile = result.files.find(
			(file: { outputPath: string }) =>
				file.outputPath.endsWith("/cliente-contrato.ts"),
		);

		expect(generatedCollectionFile?.diff).toContain(
			"export interface ClienteContratoBase",
		);
		expect(generatedCollectionFile?.diff).not.toContain("placeholder");
	});

	it("deve falhar quando nenhuma collection IXC estiver configurada", async () => {
		mockRuntimeConfig.ixcCollections = [];

		const { runGenerateIxc } = await import(
			"../src/generation/run-generate-ixc"
		);

		await expect(runGenerateIxc()).rejects.toThrow(
			"Nenhuma collection IXC configurada em config.ixcCollections",
		);
	});
});
