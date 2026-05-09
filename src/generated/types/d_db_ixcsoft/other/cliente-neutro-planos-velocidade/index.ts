/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteNeutroPlanosVelocidade = z.infer<
	typeof import("./schemas").cliente_neutro_planos_velocidadeSchema
>;
export type ClienteNeutroPlanosVelocidadeRelations = Record<string, never>;

export type ClienteNeutroPlanosVelocidadeRelationKey =
	keyof ClienteNeutroPlanosVelocidadeRelations;
