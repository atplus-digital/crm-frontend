/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FolhaTurno = z.infer<typeof import("./schemas").folha_turnoSchema>;
export type FolhaTurnoRelations = Record<string, never>;

export type FolhaTurnoRelationKey = keyof FolhaTurnoRelations;
