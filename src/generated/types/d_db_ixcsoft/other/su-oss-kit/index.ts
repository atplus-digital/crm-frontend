/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuOssKit = z.infer<typeof import("./schemas").su_oss_kitSchema>;
export type SuOssKitRelations = Record<string, never>;

export type SuOssKitRelationKey = keyof SuOssKitRelations;
