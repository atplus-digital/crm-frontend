/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PlanosVoip = z.infer<typeof import("./schemas").planos_voipSchema>;
export type PlanosVoipRelations = Record<string, never>;

export type PlanosVoipRelationKey = keyof PlanosVoipRelations;
