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
export type SmartTubeDeviceLimit = z.infer<
	typeof import("./schemas").smart_tube_device_limitSchema
>;
export type SmartTubeDeviceLimitRelations = Record<string, never>;

export type SmartTubeDeviceLimitRelationKey =
	keyof SmartTubeDeviceLimitRelations;
