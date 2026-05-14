/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const AJUSTEINVENTARIO_FIELD_LABELS = {
	data: "data",
	documento: "documento",
	filial_id: "filial_id",
	historico: "historico",
	id: "id",
	id_almox: "id_almox",
	inventario_antigo: "inventario_antigo",
	observacao: "observacao",
	operador: "operador",
} as const;

export const AJUSTEINVENTARIO_INVENTARIOANTIGO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ajuste_inventarioInventarioAntigoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inventario_antigo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AjusteInventarioInventarioAntigo = z.infer<
	typeof ajuste_inventarioInventarioAntigoSchema
>;
