/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_SERIE_MAC_ARQUIVO_TABLE_NAME =
	"patrimonio_serie_mac_arquivo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_serie_mac_arquivoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	id_movimento_produtos: z.number(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_serie_mac_arquivoSchema =
	patrimonio_serie_mac_arquivoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_serie_mac_arquivoCreateSchema =
	patrimonio_serie_mac_arquivoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_serie_mac_arquivoUpdateSchema =
	patrimonio_serie_mac_arquivoCreateSchema.partial();
