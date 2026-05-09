/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radpostauth = z.infer<typeof import("./schemas").radpostauthSchema>;
export type RadpostauthRelations = Record<string, never>;

export type RadpostauthRelationKey = keyof RadpostauthRelations;
