/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SmartTubeDevices = z.infer<
	typeof import("./schemas").smart_tube_devicesSchema
>;
export type SmartTubeDevicesRelations = Record<string, never>;

export type SmartTubeDevicesRelationKey = keyof SmartTubeDevicesRelations;
