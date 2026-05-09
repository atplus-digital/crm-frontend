/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_CLIENTE_FIBRA_HISTORICO_TABLE_NAME =
	"radpop_radio_cliente_fibra_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_cliente_fibra_historicoBaseSchema = z.object({
	id: z.number(),
	data_sinal: z.string(),
	id_cliente_fibra: z.number(),
	sinal_rx: z.number(),
	sinal_tx: z.number(),
	temperatura: z.number(),
	voltagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_cliente_fibra_historicoSchema =
	radpop_radio_cliente_fibra_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_cliente_fibra_historicoCreateSchema =
	radpop_radio_cliente_fibra_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_cliente_fibra_historicoUpdateSchema =
	radpop_radio_cliente_fibra_historicoCreateSchema.partial();
