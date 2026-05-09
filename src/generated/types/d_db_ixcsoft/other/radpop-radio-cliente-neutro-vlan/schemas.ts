/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_CLIENTE_NEUTRO_VLAN_TABLE_NAME =
	"radpop_radio_cliente_neutro_vlan";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_cliente_neutro_vlanBaseSchema = z.object({
	id: z.number(),
	id_cliente_neutro: z.number(),
	id_transmissor: z.number(),
	vlan: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_cliente_neutro_vlanSchema =
	radpop_radio_cliente_neutro_vlanBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_cliente_neutro_vlanCreateSchema =
	radpop_radio_cliente_neutro_vlanSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_cliente_neutro_vlanUpdateSchema =
	radpop_radio_cliente_neutro_vlanCreateSchema.partial();
