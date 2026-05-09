/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadDns = z.infer<typeof import("./schemas").rad_dnsSchema>;
export type RadDnsRelations = Record<string, never>;

export type RadDnsRelationKey = keyof RadDnsRelations;
