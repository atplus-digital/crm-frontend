/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPURAMODULOSME_FIELD_LABELS = {
	acao_id_fila_0: "acao_id_fila_0",
	acao_id_fila_1: "acao_id_fila_1",
	acao_id_fila_2: "acao_id_fila_2",
	acao_id_fila_3: "acao_id_fila_3",
	acao_id_fila_4: "acao_id_fila_4",
	acao_id_fila_5: "acao_id_fila_5",
	acao_id_fila_6: "acao_id_fila_6",
	acao_id_fila_7: "acao_id_fila_7",
	acao_id_fila_8: "acao_id_fila_8",
	acao_id_fila_9: "acao_id_fila_9",
	acao_id_fila_erro: "acao_id_fila_erro",
	acao_id_fila_time: "acao_id_fila_time",
	acao_id_modulo_0: "acao_id_modulo_0",
	acao_id_modulo_1: "acao_id_modulo_1",
	acao_id_modulo_2: "acao_id_modulo_2",
	acao_id_modulo_3: "acao_id_modulo_3",
	acao_id_modulo_4: "acao_id_modulo_4",
	acao_id_modulo_5: "acao_id_modulo_5",
	acao_id_modulo_6: "acao_id_modulo_6",
	acao_id_modulo_7: "acao_id_modulo_7",
	acao_id_modulo_8: "acao_id_modulo_8",
	acao_id_modulo_9: "acao_id_modulo_9",
	acao_id_modulo_erro: "acao_id_modulo_erro",
	acao_id_modulo_time: "acao_id_modulo_time",
	acao_id_ramal_0: "acao_id_ramal_0",
	acao_id_ramal_1: "acao_id_ramal_1",
	acao_id_ramal_2: "acao_id_ramal_2",
	acao_id_ramal_3: "acao_id_ramal_3",
	acao_id_ramal_4: "acao_id_ramal_4",
	acao_id_ramal_5: "acao_id_ramal_5",
	acao_id_ramal_6: "acao_id_ramal_6",
	acao_id_ramal_7: "acao_id_ramal_7",
	acao_id_ramal_8: "acao_id_ramal_8",
	acao_id_ramal_9: "acao_id_ramal_9",
	acao_id_ramal_erro: "acao_id_ramal_erro",
	acao_id_ramal_time: "acao_id_ramal_time",
	acao_numeroexterno_time: "acao_numeroexterno_time",
	acao_numexterno_0: "acao_numexterno_0",
	acao_numexterno_1: "acao_numexterno_1",
	acao_numexterno_2: "acao_numexterno_2",
	acao_numexterno_3: "acao_numexterno_3",
	acao_numexterno_4: "acao_numexterno_4",
	acao_numexterno_5: "acao_numexterno_5",
	acao_numexterno_6: "acao_numexterno_6",
	acao_numexterno_7: "acao_numexterno_7",
	acao_numexterno_8: "acao_numexterno_8",
	acao_numexterno_9: "acao_numexterno_9",
	acao_numexterno_erro: "acao_numexterno_erro",
	acao_tipo_0: "acao_tipo_0",
	acao_tipo_1: "acao_tipo_1",
	acao_tipo_2: "acao_tipo_2",
	acao_tipo_3: "acao_tipo_3",
	acao_tipo_4: "acao_tipo_4",
	acao_tipo_5: "acao_tipo_5",
	acao_tipo_6: "acao_tipo_6",
	acao_tipo_7: "acao_tipo_7",
	acao_tipo_8: "acao_tipo_8",
	acao_tipo_9: "acao_tipo_9",
	acao_tipo_erro: "acao_tipo_erro",
	acao_tipo_time: "acao_tipo_time",
	aguarda_audio: "aguarda_audio",
	audio: "audio",
	descricao: "descricao",
	id: "id",
	repeticao: "repeticao",
	texto: "texto",
	tipo: "tipo",
} as const;

export const VOIPURAMODULOSME_AGUARDAAUDIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAMODULOSME_TIPO_LABELS = {
	A: "A",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_ura_modulos_meAguardaAudioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aguarda_audio: valores válidos são [S, N]" }),
});

export const voip_ura_modulos_meTipoSchema = z.enum(["A", "T"], {
	error: () => ({ message: "tipo: valores válidos são [A, T]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipUraModulosMeAguardaAudio = z.infer<
	typeof voip_ura_modulos_meAguardaAudioSchema
>;

export type VoipUraModulosMeTipo = z.infer<
	typeof voip_ura_modulos_meTipoSchema
>;
