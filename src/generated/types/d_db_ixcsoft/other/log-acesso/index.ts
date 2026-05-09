/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogAcesso = z.infer<typeof import("./schemas").log_acessoSchema>;
export type LogAcessoRelations = Record<string, never>;

export type LogAcessoRelationKey = keyof LogAcessoRelations;
