import { describe, expect, it } from "vitest";
import { payloadSchema as criarContratoIxcSchema } from "../split/criarContratoIxc";
import { payloadSchema as n8nComprasSchema } from "../split/n8nCompras";
import { payloadSchema as qualirunInfoSchema } from "../split/qualirunInfo";

describe("schemas", () => {
	describe("criarContratoIxcSchema", () => {
		it("validates valid payload", () => {
			const payload = {
				id_contrato: 1,
				id_cliente: 2,
				produto: "TV",
				quantidade: 2,
			};
			const result = criarContratoIxcSchema.safeParse(payload);
			expect(result.success).toBe(true);
		});

		it("accepts without optional quantidade", () => {
			const payload = {
				id_contrato: 1,
				id_cliente: 2,
				produto: "TV",
			};
			const result = criarContratoIxcSchema.safeParse(payload);
			expect(result.success).toBe(true);
		});

		it("rejects missing required fields", () => {
			const payload = { id_contrato: 1 };
			const result = criarContratoIxcSchema.safeParse(payload);
			expect(result.success).toBe(false);
		});
	});

	describe("qualirunInfoSchema", () => {
		it("validates valid payload", () => {
			const payload = { cnpj: "12345678000199" };
			const result = qualirunInfoSchema.safeParse(payload);
			expect(result.success).toBe(true);
		});

		it("rejects missing cnpj", () => {
			const payload = {};
			const result = qualirunInfoSchema.safeParse(payload);
			expect(result.success).toBe(false);
		});
	});

	describe("n8nComprasSchema", () => {
		it("validates valid payload", () => {
			const payload = {
				id_pedido: 1,
				id_fornecedor: 2,
				valor: 100.5,
			};
			const result = n8nComprasSchema.safeParse(payload);
			expect(result.success).toBe(true);
		});

		it("rejects missing fields", () => {
			const payload = { id_pedido: 1 };
			const result = n8nComprasSchema.safeParse(payload);
			expect(result.success).toBe(false);
		});
	});
});
