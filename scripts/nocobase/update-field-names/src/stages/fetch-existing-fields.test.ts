import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PipelineContext } from "../@types/script";
import { fetchExistingFields } from "./fetch-existing-fields";

// Mock @shared/http/http-client
vi.mock("@shared/http/http-client", () => ({
	fetchJsonWithAuth: vi.fn(),
}));

import { fetchJsonWithAuth } from "@shared/http/http-client";

const fetchJsonMock = fetchJsonWithAuth as ReturnType<typeof vi.fn>;

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

function makeTask(output = "") {
	return {
		title: "",
		output,
	};
}

beforeEach(() => {
	vi.clearAllMocks();
});

describe("fetchExistingFields", () => {
	// ── EMPTY ───────────────────────────────────────────────

	it("early return quando não há updates (ctx.updates vazio)", async () => {
		const ctx = makeCtx();
		const task = makeTask();

		await fetchExistingFields(ctx, task as never);

		expect(fetchJsonMock).not.toHaveBeenCalled();
		expect(task.output).toBe("Nenhuma collection precisa ser consultada.");
	});

	// ── RESPONSE PARSING ────────────────────────────────────

	it("extrai `data` array do wrapper `{ data: [...] }`", async () => {
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

		fetchJsonMock.mockResolvedValueOnce({
			data: [
				{
					name: "cidade",
					fields: [
						{ name: "nome", uiSchema: { type: "string", title: "Nome" } },
						{ name: "uf", uiSchema: { type: "string", title: "UF" } },
					],
				},
			],
		});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		const lookup = ctx.fieldLookup;
		expect(lookup.get("d_db_ixcsoft.cidade.nome")).toEqual({
			type: "string",
			title: "Nome",
		});
		expect(lookup.get("d_db_ixcsoft.cidade.uf")).toEqual({
			type: "string",
			title: "UF",
		});
	});

	it("usa array diretamente quando resposta é `[...]` (sem wrapper)", async () => {
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

		fetchJsonMock.mockResolvedValueOnce([
			{
				name: "cidade",
				fields: [{ name: "nome", uiSchema: { type: "string" } }],
			},
		]);

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(ctx.fieldLookup.get("d_db_ixcsoft.cidade.nome")).toEqual({
			type: "string",
		});
	});

	it("fallback para array vazio quando `response.data` é null", async () => {
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

		fetchJsonMock.mockResolvedValueOnce({ data: null });

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(ctx.fieldLookup.size).toBe(0);
	});

	// ── FILTERING ───────────────────────────────────────────

	it("filtra apenas collections que estão nos updates", async () => {
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
		});

		fetchJsonMock.mockResolvedValueOnce({
			data: [
				{
					name: "cidade",
					fields: [{ name: "nome", uiSchema: { title: "C" } }],
				},
				{
					name: "cliente_contrato",
					fields: [{ name: "status", uiSchema: { title: "S" } }],
				},
				{
					name: "su_ticket",
					fields: [{ name: "status", uiSchema: { title: "ST" } }],
				},
			],
		});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		// Only "cidade" should be in lookup, not "cliente_contrato" or "su_ticket"
		expect(ctx.fieldLookup.get("d_db_ixcsoft.cidade.nome")).toEqual({
			title: "C",
		});
		expect(
			ctx.fieldLookup.get("d_db_ixcsoft.cliente_contrato.status"),
		).toBeUndefined();
		expect(
			ctx.fieldLookup.get("d_db_ixcsoft.su_ticket.status"),
		).toBeUndefined();
	});

	it("funciona com múltiplos datasources nos updates", async () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "C",
				},
				{
					datasourceKey: "main",
					collectionName: "t_pessoas",
					fieldName: "f_nome",
					newLabel: "Nome",
				},
			],
		});

		fetchJsonMock
			.mockResolvedValueOnce({
				data: [
					{
						name: "cidade",
						fields: [{ name: "nome", uiSchema: { title: "Cidade" } }],
					},
				],
			})
			.mockResolvedValueOnce({
				data: [
					{
						name: "t_pessoas",
						fields: [{ name: "f_nome", uiSchema: { title: "Nome" } }],
					},
				],
			});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(fetchJsonMock).toHaveBeenCalledTimes(2);
		expect(ctx.fieldLookup.get("d_db_ixcsoft.cidade.nome")).toEqual({
			title: "Cidade",
		});
		expect(ctx.fieldLookup.get("main.t_pessoas.f_nome")).toEqual({
			title: "Nome",
		});
	});

	// ── LOOKUP KEY FORMAT ───────────────────────────────────

	it("constrói chaves de lookup no formato `ds.collection.field`", async () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "su_ticket",
					fieldName: "status",
					newLabel: "Status",
				},
			],
		});

		fetchJsonMock.mockResolvedValueOnce({
			data: [
				{
					name: "su_ticket",
					fields: [
						{
							name: "status",
							uiSchema: { enum: [{ label: "T", value: "T" }] },
						},
					],
				},
			],
		});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(ctx.fieldLookup.has("d_db_ixcsoft.su_ticket.status")).toBe(true);
	});

	// ── MISSING FIELDS ──────────────────────────────────────

	it("tolera collections sem `fields` array", async () => {
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

		fetchJsonMock.mockResolvedValueOnce({
			data: [{ name: "cidade" }], // no "fields"
		});

		const task = makeTask();
		await expect(
			fetchExistingFields(ctx, task as never),
		).resolves.toBeUndefined();

		expect(ctx.fieldLookup.size).toBe(0);
	});

	it("armazena `undefined` no lookup quando campo não tem uiSchema", async () => {
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

		fetchJsonMock.mockResolvedValueOnce({
			data: [
				{
					name: "cidade",
					fields: [{ name: "nome" }], // no uiSchema prop
				},
			],
		});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(ctx.fieldLookup.get("d_db_ixcsoft.cidade.nome")).toBeUndefined();
	});

	// ── TASK OUTPUT ─────────────────────────────────────────

	it("atualiza `task.output` com resumo após fetch", async () => {
		const ctx = makeCtx({
			updates: [
				{
					datasourceKey: "d_db_ixcsoft",
					collectionName: "cidade",
					fieldName: "nome",
					newLabel: "Cidade Nova",
				},
			],
		});

		fetchJsonMock.mockResolvedValueOnce({
			data: [
				{
					name: "cidade",
					fields: [{ name: "nome", uiSchema: { title: "Cidade" } }],
				},
				{ name: "outra", fields: [] },
				{ name: "mais_uma", fields: [] },
			],
		});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(task.output).toMatch(
			/Filtragem concluída: \d+ campo\(s\) já atualizado\(s\), \d+ pendente\(s\)\./,
		);
	});

	it("filtra campos que já possuem o title desejado", async () => {
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
					newLabel: "UF Novo",
				},
			],
		});

		fetchJsonMock.mockResolvedValueOnce({
			data: [
				{
					name: "cidade",
					fields: [
						{ name: "nome", uiSchema: { title: "Cidade" } },
						{ name: "uf", uiSchema: { title: "UF" } },
					],
				},
			],
		});

		const task = makeTask();
		await fetchExistingFields(ctx, task as never);

		expect(ctx.updates).toHaveLength(1);
		expect(ctx.updates[0].fieldName).toBe("uf");
		expect(task.output).toContain("1 campo(s) já atualizado(s)");
		expect(task.output).toContain("1 pendente(s)");
	});
});
