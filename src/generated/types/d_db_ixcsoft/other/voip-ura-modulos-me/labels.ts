/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
