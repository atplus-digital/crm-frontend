/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SERVERINTERFACES_TIPO_LABELS = {
	wan: "wan",
	lan: "lan",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const server_interfacesTipoSchema = z.enum(["wan", "lan"], {
	error: () => ({ message: "tipo: valores válidos são [wan, lan]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ServerInterfacesTipo = z.infer<typeof server_interfacesTipoSchema>;
