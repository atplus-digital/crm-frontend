/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DOCFILTROS_FIELD_LABELS = {
	favorito: "favorito",
	id: "id",
	id_template: "id_template",
	id_usuario: "id_usuario",
	json: "json",
	nome: "nome",
} as const;

export const DOCFILTROS_FAVORITO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const doc_filtrosFavoritoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "favorito: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DocFiltrosFavorito = z.infer<typeof doc_filtrosFavoritoSchema>;
