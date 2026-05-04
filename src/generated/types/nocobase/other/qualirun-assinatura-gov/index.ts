/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type QualirunAssinaturaGov = z.infer<
	typeof import("./schemas").qualirun_assinatura_govSchema
>;
export type QualirunAssinaturaGovRelations = z.infer<
	typeof import("./schemas").qualirun_assinatura_govRelationSchema
>;

export type QualirunAssinaturaGovRelationKey =
	keyof QualirunAssinaturaGovRelations;
