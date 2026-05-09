/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MOVIMENTO_PRODUTOS_NUMEROS_SERIE_TABLE_NAME =
	"movimento_produtos_numeros_serie";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const movimento_produtos_numeros_serieBaseSchema = z.object({
	id: z.number(),
	id_movimento_produto_entrada: z.number(),
	numero_de_serie: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const movimento_produtos_numeros_serieSchema =
	movimento_produtos_numeros_serieBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const movimento_produtos_numeros_serieCreateSchema =
	movimento_produtos_numeros_serieSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const movimento_produtos_numeros_serieUpdateSchema =
	movimento_produtos_numeros_serieCreateSchema.partial();
