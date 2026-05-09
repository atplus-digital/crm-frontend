/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ServidoresExternosIxc = z.infer<
	typeof import("./schemas").servidores_externos_ixcSchema
>;
export type ServidoresExternosIxcRelations = Record<string, never>;

export type ServidoresExternosIxcRelationKey =
	keyof ServidoresExternosIxcRelations;
