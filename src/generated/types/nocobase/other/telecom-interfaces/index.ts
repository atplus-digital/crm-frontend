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
export type TelecomInterfaces = z.infer<
	typeof import("./schemas").telecom_interfacesSchema
>;
export type TelecomInterfacesRelations = z.infer<
	typeof import("./schemas").telecom_interfacesRelationSchema
>;

export type TelecomInterfacesRelationKey = keyof TelecomInterfacesRelations;
