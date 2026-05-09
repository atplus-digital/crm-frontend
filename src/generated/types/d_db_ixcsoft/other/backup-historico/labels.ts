/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const BACKUPHISTORICO_TIPO_LABELS = {
	CS: "CS",
	B: "B",
	E: "E",
	A: "A",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const backup_historicoTipoSchema = z.enum(["CS", "B", "E", "A", "C"], {
	error: () => ({ message: "tipo: valores válidos são [CS, B, E, A, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type BackupHistoricoTipo = z.infer<typeof backup_historicoTipoSchema>;
