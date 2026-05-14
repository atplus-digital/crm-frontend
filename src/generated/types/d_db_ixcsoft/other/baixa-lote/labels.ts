/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const BAIXALOTE_FIELD_LABELS = {
	codigo_tecido: "codigo_tecido",
	data: "data",
	fator_conversao: "fator_conversao",
	filial_id: "filial_id",
	id: "id",
	id_item_pedido: "id_item_pedido",
	id_origem: "id_origem",
	id_produto: "id_produto",
	lote: "lote",
	origem: "origem",
	qtde: "qtde",
	qtde_entrada: "qtde_entrada",
	temp: "temp",
	tipo: "tipo",
} as const;

export const BAIXALOTE_TIPO_LABELS = {
	E: "E",
	S: "S",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const baixa_loteTipoSchema = z.enum(["E", "S", "I"], {
	error: () => ({ message: "tipo: valores válidos são [E, S, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type BaixaLoteTipo = z.infer<typeof baixa_loteTipoSchema>;
