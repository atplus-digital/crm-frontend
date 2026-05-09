/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImContrato = z.infer<typeof import("./schemas").im_contratoSchema>;
export type ImContratoRelations = Record<string, never>;

export type ImContratoRelationKey = keyof ImContratoRelations;
