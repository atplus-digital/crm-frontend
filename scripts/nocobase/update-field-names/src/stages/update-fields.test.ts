import { Listr } from "listr2";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { PipelineContext } from "../@types/script";
import { updateFields } from "./update-fields";

/** Creates a minimal PipelineContext for testing */
function makeCtx(overrides?: Partial<PipelineContext>): PipelineContext {
	return {
		credentials: {
			baseUrl: "https://crm.atplus.cloud",
			token: "test-token",
			timeoutMs: 30_000,
		},
		updates: [],
		fieldLookup: new Map(),
		results: [],
		...overrides,
	};
}

/** Creates a mock TaskRunner */
function makeTask(output = "") {
	return {
		title: "",
		output,
		newListr: (subTasks: unknown[], opts: unknown) =>
			new Listr(subTasks as never, opts as never),
	};
}

// Stub global fetch
const fetchStub = vi.fn();

beforeEach(() => {
	vi.stubGlobal("fetch", fetchStub);
});

afterEach(() => {
	vi.unstubAllGlobals();
	vi.resetAllMocks();
});

describe("updateFields", () => {
	// ── RETURN ──────────────────────────────────────────────

	it("retorna undefined quando não há `updates`", () => {
		const ctx = makeCtx();
		const task = makeTask();
		const result = updateFields(ctx, task as never);
		expect(result).toBeUndefined();
	});

	it("retorna uma Listr quando há `updates`", () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			],
		});
		const task = makeTask();
		const result = updateFields(ctx, task as never);
		expect(result).toBeInstanceOf(Listr);
	});

	// ── MERGE ───────────────────────────────────────────────

	it("merge: preserva enum, x-component e type ao atualizar o title", async () => {
		const lookup = new Map([
			[
				"d_db_ixcsoft.su_ticket.status",
				{
					type: "string",
					"x-component": "Select",
					enum: [
						{ label: "T", value: "T" },
						{ label: "C", value: "C" },
						{ label: "F", value: "F" },
					],
				},
			],
		]);

		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "su_ticket",
					fieldName: "status",
					newLabel: "Status Ticket",
				},
			],
			fieldLookup: lookup,
		});

		fetchStub.mockResolvedValueOnce(
			new Response(JSON.stringify({ data: { id: 1 } }), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			}),
		);

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		expect(fetchStub).toHaveBeenCalledOnce();

		const url = fetchStub.mock.calls[0][0] as string;
		expect(url).toContain("filterByTk=status");

		const init = fetchStub.mock.calls[0][1] as RequestInit;
		const body = JSON.parse(init.body as string);

		// title must be updated
		expect(body.uiSchema.title).toBe("Status Ticket");

		// existing properties must be preserved
		expect(body.uiSchema.type).toBe("string");
		expect(body.uiSchema["x-component"]).toBe("Select");
		expect(body.uiSchema.enum).toEqual([
			{ label: "T", value: "T" },
			{ label: "C", value: "C" },
			{ label: "F", value: "F" },
		]);
	});

	it("merge: preserva propriedades arbitrárias desconhecidas", async () => {
		const lookup = new Map([
			[
				"d_db_ixcsoft.fn_areceber.valor",
				{
					"x-component": "InputNumber",
					"x-read-pretty": true,
					"x-unknown-prop": { nested: true },
				},
			],
		]);

		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "fn_areceber",
					fieldName: "valor",
					newLabel: "Valor (R$)",
				},
			],
			fieldLookup: lookup,
		});

		fetchStub.mockResolvedValueOnce(new Response("{}", { status: 200 }));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		const body = JSON.parse(
			(fetchStub.mock.calls[0][1] as RequestInit).body as string,
		);
		expect(body.uiSchema.title).toBe("Valor (R$)");
		expect(body.uiSchema["x-component"]).toBe("InputNumber");
		expect(body.uiSchema["x-read-pretty"]).toBe(true);
		expect(body.uiSchema["x-unknown-prop"]).toEqual({ nested: true });
	});

	it("merge: campos sem uiSchema existente — apenas o title", async () => {
		// lookup has no entry for this field
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cliente_contrato",
					fieldName: "novo_campo",
					newLabel: "Novo Campo",
				},
			],
			fieldLookup: new Map(),
		});

		fetchStub.mockResolvedValueOnce(new Response("{}", { status: 200 }));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		const body = JSON.parse(
			(fetchStub.mock.calls[0][1] as RequestInit).body as string,
		);
		expect(body.uiSchema).toEqual({ title: "Novo Campo" });
	});

	it("merge: campo com `undefined` no lookup vira só `{ title }`", async () => {
		const lookup = new Map([
			["d_db_ixcsoft.cliente_contrato.inexistente", undefined],
		]);

		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cliente_contrato",
					fieldName: "inexistente",
					newLabel: "Inexistente",
				},
			],
			fieldLookup: lookup,
		});

		fetchStub.mockResolvedValueOnce(new Response("{}", { status: 200 }));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		const body = JSON.parse(
			(fetchStub.mock.calls[0][1] as RequestInit).body as string,
		);
		expect(body.uiSchema).toEqual({ title: "Inexistente" });
	});

	// ── RESULTS ─────────────────────────────────────────────

	it("adiciona `success: true` em `ctx.results` quando dá 200", async () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			],
		});

		fetchStub.mockResolvedValueOnce(new Response("{}", { status: 200 }));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		expect(ctx.results).toHaveLength(1);
		expect(ctx.results[0].success).toBe(true);
	});

	it("adiciona erro em `ctx.results` com `success: false` e statusCode", async () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			],
		});

		fetchStub.mockResolvedValueOnce(
			new Response("Internal Server Error", { status: 500 }),
		);

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		expect(ctx.results).toHaveLength(1);
		expect(ctx.results[0].success).toBe(false);
		expect(ctx.results[0].statusCode).toBe(500);
		expect(ctx.results[0].errorMessage).toContain("Internal Server Error");
	});

	it("adiciona erro em `ctx.results` com status 0 quando fetch rejeita", async () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			],
		});

		fetchStub.mockRejectedValueOnce(new Error("Network failure"));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		const results = ctx.results;
		expect(results).toHaveLength(1);
		expect(results[0].success).toBe(false);
		expect(results[0].errorMessage).toContain("Network failure");
	});

	// ── TIMEOUT ─────────────────────────────────────────────

	it("mensagem de erro inclui 'Timeout' quando request aborta", async () => {
		const ctx = makeCtx({
			credentials: {
				baseUrl: "https://crm.atplus.cloud",
				token: "test-token",
				timeoutMs: 5000,
			},
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			],
		});

		const abortError = new DOMException("aborted", "AbortError");
		fetchStub.mockRejectedValueOnce(abortError);

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		expect(ctx.results[0].success).toBe(false);
		expect(ctx.results[0].errorMessage).toContain("Timeout de 5000ms");
	});

	// ── MULTIPLE UPDATES ────────────────────────────────────

	it("processa múltiplos updates sequencialmente", async () => {
		const lookup = new Map([
			["d_db_ixcsoft.cidade.nome", { type: "string", "x-component": "Input" }],
			[
				"d_db_ixcsoft.cidade.uf",
				{ type: "string", "x-component": "Select", enum: [] },
			],
		]);

		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "uf",
					newLabel: "UF",
				},
			],
			fieldLookup: lookup,
		});

		fetchStub.mockResolvedValue(new Response("{}", { status: 200 }));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		expect(fetchStub).toHaveBeenCalledTimes(2);
		expect(ctx.results).toHaveLength(2);
		expect(ctx.results.every((r) => r.success)).toBe(true);

		// First call merges nome
		const body0 = JSON.parse(
			(fetchStub.mock.calls[0][1] as RequestInit).body as string,
		);
		expect(body0.uiSchema.title).toBe("Cidade");
		expect(body0.uiSchema.type).toBe("string");

		// Second call merges uf
		const body1 = JSON.parse(
			(fetchStub.mock.calls[1][1] as RequestInit).body as string,
		);
		expect(body1.uiSchema.title).toBe("UF");
		expect(body1.uiSchema.enum).toEqual([]);
	});

	// ── AUTH HEADER ─────────────────────────────────────────

	it("envia header de Authorization com token", async () => {
		const ctx = makeCtx({
			credentials: {
				baseUrl: "https://crm.atplus.cloud",
				token: "secret-token-abc",
				timeoutMs: 30_000,
			},
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade",
				},
			],
		});

		fetchStub.mockResolvedValueOnce(new Response("{}", { status: 200 }));

		const task = makeTask();
		const listr = updateFields(ctx, task as never);
		await listr?.run(ctx);

		const init = fetchStub.mock.calls[0][1] as RequestInit;
		expect(init.headers).toEqual(
			expect.objectContaining({
				Authorization: "Bearer secret-token-abc",
			}),
		);
	});
});
