/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmPerfil = z.infer<typeof import("./schemas").crm_perfilSchema>;
export type CrmPerfilRelations = Record<string, never>;

export type CrmPerfilRelationKey = keyof CrmPerfilRelations;
