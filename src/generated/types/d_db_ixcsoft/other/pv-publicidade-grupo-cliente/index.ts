/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PvPublicidadeGrupoCliente = z.infer<
	typeof import("./schemas").pv_publicidade_grupo_clienteSchema
>;
export type PvPublicidadeGrupoClienteRelations = Record<string, never>;

export type PvPublicidadeGrupoClienteRelationKey =
	keyof PvPublicidadeGrupoClienteRelations;
