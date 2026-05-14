/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOACRESCIMOS_FIELD_LABELS = {
	ativo: "ativo",
	data: "data",
	data_validade: "data_validade",
	descricao: "descricao",
	id: "id",
	id_contrato: "id_contrato",
	id_reajuste: "id_reajuste",
	id_vd_contrato_produtos: "id_vd_contrato_produtos",
	percentual: "percentual",
	valor: "valor",
} as const;

export const CLIENTECONTRATOACRESCIMOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_acrescimosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoAcrescimosAtivo = z.infer<
	typeof cliente_contrato_acrescimosAtivoSchema
>;
