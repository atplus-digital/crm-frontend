import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PipelineContext } from "../@types/script";

// Mock @shared/utils/env
vi.mock("@shared/utils/env", () => ({
	resolveNocoBaseEnv: vi.fn(),
}));

// Mock config — shared mutable object that both test and resolveConfig see
vi.mock("../../config.js", () => ({
	fieldNameConfig: { d_db_ixcsoft: {} },
}));

import { resolveNocoBaseEnv } from "@shared/utils/env";
import { fieldNameConfig } from "../../config.js";
import { resolveConfig } from "./resolve-config";

const resolveEnvMock = resolveNocoBaseEnv as ReturnType<typeof vi.fn>;

/** Creates a minimal PipelineContext */
function makeCtx(overrides?: Partial<PipelineContext>): PipelineContext {
	return {
		credentials: { baseUrl: "", token: "", timeoutMs: 0 },
		updates: [],
		fieldLookup: new Map(),
		results: [],
		...overrides,
	};
}

function makeTask(output = "") {
	return { title: "", output };
}

beforeEach(() => {
	vi.clearAllMocks();
	resolveEnvMock.mockReturnValue({
		baseUrl: "https://crm.atplus.cloud",
		token: "test-token",
		timeoutMs: 30_000,
	});
	// Reset config to empty state before each test
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(fieldNameConfig as any).d_db_ixcsoft = {};
});

describe("resolveConfig", () => {
	// ── EMPTY CONFIG ────────────────────────────────────────

	it("config vazio → updates vazio, task.message apropriada", async () => {
		const ctx = makeCtx();
		const task = makeTask();

		await resolveConfig(ctx, task as never);

		expect(ctx.updates).toHaveLength(0);
		expect(task.output).toContain("Nenhum campo configurado");
	});

	// ── SINGLE FIELD ────────────────────────────────────────

	it("1 campo em 1 collection → 1 update", async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(fieldNameConfig as any).d_db_ixcsoft = {
			cliente_contrato: {
				restricao_auto_libera_susp_parcial: "Nova label",
			},
		};

		const ctx = makeCtx();
		const task = makeTask();

		await resolveConfig(ctx, task as never);

		expect(ctx.updates).toHaveLength(1);
		expect(ctx.updates[0]).toEqual({
			datasourceKey: "d_db_ixcsoft",
			collectionName: "cliente_contrato",
			fieldName: "restricao_auto_libera_susp_parcial",
			newLabel: "Nova label",
		});
	});

	// ── MULTIPLE FIELDS ─────────────────────────────────────

	it("múltiplos campos em 1 collection → N updates", async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(fieldNameConfig as any).d_db_ixcsoft = {
			cliente_contrato: {
				campo_a: "Label A",
				campo_b: "Label B",
				campo_c: "Label C",
			},
		};

		const ctx = makeCtx();
		const task = makeTask();
		await resolveConfig(ctx, task as never);

		expect(ctx.updates).toHaveLength(3);
		expect(ctx.updates.map((u) => u.fieldName).sort()).toEqual([
			"campo_a",
			"campo_b",
			"campo_c",
		]);
	});

	// ── EMPTY COLLECTIONS ───────────────────────────────────

	it("collections com `{}` não geram updates", async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(fieldNameConfig as any).d_db_ixcsoft = {
			cidade: {},
			su_ticket: {},
			cliente_contrato: {
				status: "Status Atualizado",
			},
		};

		const ctx = makeCtx();
		const task = makeTask();
		await resolveConfig(ctx, task as never);

		expect(ctx.updates).toHaveLength(1);
		expect(ctx.updates[0].fieldName).toBe("status");
		expect(ctx.updates[0].collectionName).toBe("cliente_contrato");
	});

	// ── CREDENTIALS ─────────────────────────────────────────

	it("popula `ctx.credentials` com valores do env", async () => {
		resolveEnvMock.mockReturnValue({
			baseUrl: "https://crm.custom.cloud",
			token: "secret-123",
			timeoutMs: 60_000,
		});

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(fieldNameConfig as any).d_db_ixcsoft = {
			cidade: { nome: "Cidade" },
		};

		const ctx = makeCtx();
		const task = makeTask();
		await resolveConfig(ctx, task as never);

		expect(ctx.credentials).toEqual({
			baseUrl: "https://crm.custom.cloud",
			token: "secret-123",
			timeoutMs: 60_000,
		});
	});

	// ── TASK OUTPUT ─────────────────────────────────────────

	it("task.output inclui contagem de campos e collections", async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(fieldNameConfig as any).d_db_ixcsoft = {
			cidade: { nome: "Cidade", uf: "UF" },
			su_ticket: { status: "Status" },
		};

		const ctx = makeCtx();
		const task = makeTask();
		await resolveConfig(ctx, task as never);

		expect(task.output).toMatch(/3 campo\(s\)/);
		expect(task.output).toMatch(/2 collection\(s\)/);
	});

	// ── ORDER ───────────────────────────────────────────────

	it("preserva ordem dos campos conforme objeto config", async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(fieldNameConfig as any).d_db_ixcsoft = {
			cidade: {
				nome: "1",
				uf: "2",
				ibge: "3",
			},
		};

		const ctx = makeCtx();
		const task = makeTask();
		await resolveConfig(ctx, task as never);

		expect(ctx.updates.map((u) => u.fieldName)).toEqual(["nome", "uf", "ibge"]);
	});
});
