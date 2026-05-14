/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPURAMODULOSAU_FIELD_LABELS = {
	acao_id_fila: "acao_id_fila",
	acao_id_modulo: "acao_id_modulo",
	acao_id_ramal: "acao_id_ramal",
	acao_numexterno: "acao_numexterno",
	acao_tipo: "acao_tipo",
	audio: "audio",
	descricao: "descricao",
	id: "id",
	texto: "texto",
	tipo: "tipo",
} as const;

export const VOIPURAMODULOSAU_TIPO_LABELS = {
	A: "A",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_ura_modulos_auTipoSchema = z.enum(["A", "T"], {
	error: () => ({ message: "tipo: valores válidos são [A, T]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipUraModulosAuTipo = z.infer<
	typeof voip_ura_modulos_auTipoSchema
>;
