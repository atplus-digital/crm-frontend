/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsContatos = z.infer<typeof import("./schemas").hs_contatosSchema>;
export type HsContatosRelations = Record<string, never>;

export type HsContatosRelationKey = keyof HsContatosRelations;
