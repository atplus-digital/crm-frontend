/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATODESCONTOS_FIELD_LABELS = {
	data_validade: "data_validade",
	descricao: "descricao",
	id: "id",
	id_contrato: "id_contrato",
	id_vd_contrato_produtos: "id_vd_contrato_produtos",
	origem: "origem",
	percentual: "percentual",
	valor: "valor",
} as const;

export const CLIENTECONTRATODESCONTOS_ORIGEM_LABELS = {
	A: "A",
	M: "M",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_descontosOrigemSchema = z.enum(["A", "M"], {
	error: () => ({ message: "origem: valores válidos são [A, M]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoDescontosOrigem = z.infer<
	typeof cliente_contrato_descontosOrigemSchema
>;
