/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AutenticacaoSuporteOpa = z.infer<
	typeof import("./schemas").autenticacao_suporte_opaSchema
>;
export type AutenticacaoSuporteOpaRelations = Record<string, never>;

export type AutenticacaoSuporteOpaRelationKey =
	keyof AutenticacaoSuporteOpaRelations;
