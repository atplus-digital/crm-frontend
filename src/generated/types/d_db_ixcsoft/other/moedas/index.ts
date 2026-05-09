/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Moedas = z.infer<typeof import("./schemas").moedasSchema>;
export type MoedasRelations = Record<string, never>;

export type MoedasRelationKey = keyof MoedasRelations;
