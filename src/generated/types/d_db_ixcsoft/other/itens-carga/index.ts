/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ItensCarga = z.infer<typeof import("./schemas").itens_cargaSchema>;
export type ItensCargaRelations = Record<string, never>;

export type ItensCargaRelationKey = keyof ItensCargaRelations;
