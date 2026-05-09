/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CENTRALBLOQUEIOIP_HOUVEBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const central_bloqueio_ipHouveBloqueioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "houve_bloqueio: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CentralBloqueioIpHouveBloqueio = z.infer<
	typeof central_bloqueio_ipHouveBloqueioSchema
>;
