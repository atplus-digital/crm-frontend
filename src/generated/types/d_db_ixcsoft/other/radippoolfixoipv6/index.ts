/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radippoolfixoipv6 = z.infer<
	typeof import("./schemas").radippoolfixoipv6Schema
>;
export type Radippoolfixoipv6Relations = Record<string, never>;

export type Radippoolfixoipv6RelationKey = keyof Radippoolfixoipv6Relations;
