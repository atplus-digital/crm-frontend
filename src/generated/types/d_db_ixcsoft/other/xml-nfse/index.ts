/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type XmlNfse = z.infer<typeof import("./schemas").xml_nfseSchema>;
export type XmlNfseRelations = Record<string, never>;

export type XmlNfseRelationKey = keyof XmlNfseRelations;
