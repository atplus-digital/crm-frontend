/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SMARTTUBEDEVICELIMIT_FIELD_LABELS = {
	codigo_plataforma: "codigo_plataforma",
	id: "id",
	id_integracao: "id_integracao",
	padrao: "padrao",
	quantidade_devices: "quantidade_devices",
} as const;

export const SMARTTUBEDEVICELIMIT_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const smart_tube_device_limitPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SmartTubeDeviceLimitPadrao = z.infer<
	typeof smart_tube_device_limitPadraoSchema
>;
