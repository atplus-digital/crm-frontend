import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { PipelineContext } from "./@types/script";

// Mock all stage imports BEFORE importing pipeline
vi.mock("./stages/resolve-config", () => ({
	resolveConfig: vi.fn(),
}));
vi.mock("./stages/fetch-existing-fields", () => ({
	fetchExistingFields: vi.fn(),
}));
vi.mock("./stages/update-fields", () => ({
	updateFields: vi.fn(),
}));

import { runUpdateFieldNamesPipeline } from "./pipeline";
import { fetchExistingFields } from "./stages/fetch-existing-fields";
import { resolveConfig } from "./stages/resolve-config";
import { updateFields } from "./stages/update-fields";

const resolveConfigMock = resolveConfig as ReturnType<typeof vi.fn>;
const fetchExistingFieldsMock = fetchExistingFields as ReturnType<typeof vi.fn>;
const updateFieldsMock = updateFields as ReturnType<typeof vi.fn>;

beforeEach(() => {
	vi.clearAllMocks();
	resolveConfigMock.mockImplementation(
		async (ctx: {
			updates: unknown[];
			credentials: Record<string, unknown>;
		}) => {
			ctx.updates = [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			];
			ctx.credentials = {
				baseUrl: "https://test.local",
				token: "tok",
				timeoutMs: 30_000,
			};
		},
	);
	fetchExistingFieldsMock.mockResolvedValue(undefined);
	updateFieldsMock.mockReturnValue(undefined); // will skip sub-tasks
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe("runUpdateFieldNamesPipeline", () => {
	it("executa as 3 stages em ordem", async () => {
		await runUpdateFieldNamesPipeline();

		expect(resolveConfigMock).toHaveBeenCalledOnce();
		expect(fetchExistingFieldsMock).toHaveBeenCalledOnce();
		expect(updateFieldsMock).toHaveBeenCalledOnce();

		// Order: resolveConfig → fetchExistingFields → updateFields
		const resolveOrder = resolveConfigMock.mock.invocationCallOrder[0];
		const fetchOrder = fetchExistingFieldsMock.mock.invocationCallOrder[0];
		const updateOrder = updateFieldsMock.mock.invocationCallOrder[0];

		expect(resolveOrder).toBeLessThan(fetchOrder);
		expect(fetchOrder).toBeLessThan(updateOrder);
	});

	it("seta `process.exitCode = 1` quando há falhas", async () => {
		resolveConfigMock.mockImplementation(
			async (ctx: {
				updates: unknown[];
				credentials: Record<string, unknown>;
				results: unknown[];
			}) => {
				ctx.updates = [
					{
						datasourceKey: "d_db_ixcsoft",
						collectionName: "cidade",
						fieldName: "nome",
						newLabel: "Cidade",
					},
				];
				ctx.credentials = {
					baseUrl: "https://test.local",
					token: "tok",
					timeoutMs: 30_000,
				};

				// Simulate a failure in results (updateFields will populate results)
				ctx.results = [
					{
						request: ctx.updates[0],
						success: false,
						errorMessage: "Falhou",
					},
				];
			},
		);

		const prevExitCode = process.exitCode;
		process.exitCode = 0;

		await runUpdateFieldNamesPipeline();

		expect(process.exitCode).toBe(1);

		process.exitCode = prevExitCode;
	});

	it("não altera exitCode quando todas as atualizações têm sucesso", async () => {
		resolveConfigMock.mockImplementation(
			async (ctx: {
				updates: unknown[];
				credentials: Record<string, unknown>;
				results: unknown[];
			}) => {
				ctx.updates = [];
				ctx.credentials = {
					baseUrl: "https://test.local",
					token: "tok",
					timeoutMs: 30_000,
				};
				ctx.results = [{ request: {}, success: true }];
			},
		);

		const prevExitCode = process.exitCode;
		process.exitCode = 0;

		await runUpdateFieldNamesPipeline();

		expect(process.exitCode).toBe(0);

		process.exitCode = prevExitCode;
	});

	it("inicializa o contexto com valores padrão corretos", async () => {
		// Let resolveConfig run as default empty impl but spy on ctx passed
		let capturedCtx: PipelineContext | null = null;

		resolveConfigMock.mockImplementation(async (ctx: PipelineContext) => {
			capturedCtx = ctx;
			ctx.updates = [];
		});

		await runUpdateFieldNamesPipeline();

		expect(capturedCtx).not.toBeNull();
		const ensuredCtx = capturedCtx as unknown as PipelineContext;
		expect(ensuredCtx.fieldLookup).toBeInstanceOf(Map);
		expect(ensuredCtx.results).toEqual([]);
	});
});
