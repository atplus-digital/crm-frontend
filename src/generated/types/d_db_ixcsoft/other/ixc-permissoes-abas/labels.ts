/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCPERMISSOESABAS_FIELD_LABELS = {
	aba: "aba",
	id: "id",
	id_tabela: "id_tabela",
	tipo: "tipo",
} as const;

export const IXCPERMISSOESABAS_TIPO_LABELS = {
	H: "H",
	R: "R",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_permissoes_abasTipoSchema = z.enum(["H", "R", "E"], {
	error: () => ({ message: "tipo: valores válidos são [H, R, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcPermissoesAbasTipo = z.infer<
	typeof ixc_permissoes_abasTipoSchema
>;
