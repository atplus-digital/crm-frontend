/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEENVIOS_ORIGEMENVIO_LABELS = {
	mapa: "mapa",
	kanban: "kanban",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_enviosOrigemEnvioSchema = z.enum(["mapa", "kanban"], {
	error: () => ({
		message: "origem_envio: valores válidos são [mapa, kanban]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteEnviosOrigemEnvio = z.infer<
	typeof lote_enviosOrigemEnvioSchema
>;
