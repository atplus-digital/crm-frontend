/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImVantagens = z.infer<
	typeof import("./schemas").im_vantagensSchema
>;
export type ImVantagensRelations = Record<string, never>;

export type ImVantagensRelationKey = keyof ImVantagensRelations;
