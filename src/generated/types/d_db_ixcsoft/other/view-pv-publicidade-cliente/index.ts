/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ViewPvPublicidadeCliente = z.infer<
	typeof import("./schemas").view_pv_publicidade_clienteSchema
>;
export type ViewPvPublicidadeClienteRelations = Record<string, never>;

export type ViewPvPublicidadeClienteRelationKey =
	keyof ViewPvPublicidadeClienteRelations;
