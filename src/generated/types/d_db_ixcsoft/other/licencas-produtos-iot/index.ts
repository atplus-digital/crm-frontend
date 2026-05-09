/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LicencasProdutosIot = z.infer<
	typeof import("./schemas").licencas_produtos_iotSchema
>;
export type LicencasProdutosIotRelations = Record<string, never>;

export type LicencasProdutosIotRelationKey = keyof LicencasProdutosIotRelations;
