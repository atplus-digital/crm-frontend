/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Contador = z.infer<typeof import("./schemas").contadorSchema>;
export type ContadorRelations = Record<string, never>;

export type ContadorRelationKey = keyof ContadorRelations;
