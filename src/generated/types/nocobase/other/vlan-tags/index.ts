/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VlanTags = z.infer<typeof import("./schemas").vlan_tagsSchema>;
export type VlanTagsRelations = z.infer<
	typeof import("./schemas").vlan_tagsRelationSchema
>;

export type VlanTagsRelationKey = keyof VlanTagsRelations;
