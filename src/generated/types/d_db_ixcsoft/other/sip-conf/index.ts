/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SipConf = z.infer<typeof import("./schemas").sip_confSchema>;
export type SipConfRelations = Record<string, never>;

export type SipConfRelationKey = keyof SipConfRelations;
