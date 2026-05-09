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
export type AcsDevice = z.infer<typeof import("./schemas").acs_deviceSchema>;
export type AcsDeviceRelations = Record<string, never>;

export type AcsDeviceRelationKey = keyof AcsDeviceRelations;
