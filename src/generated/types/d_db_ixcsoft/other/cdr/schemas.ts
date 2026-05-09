/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cdrImportadoSchema, cdrTarifadoSchema } from "./labels";

export const CDR_TABLE_NAME = "cdr";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cdrBaseSchema = z.object({
	id: z.number(),
	accountcode: z.string(),
	amaflags: z.number(),
	billsec: z.number(),
	calldate: z.string(),
	channel: z.string(),
	clid: z.string(),
	cnam: z.string(),
	cnum: z.string(),
	custo: z.number(),
	data_utc: z.string(),
	dcontext: z.string(),
	dest_descricao: z.string(),
	dest_pais: z.string(),
	destino: z.string(),
	did: z.string(),
	disposition: z.string(),
	dnis: z.string(),
	dst: z.string(),
	dst_cnam: z.string(),
	dstchannel: z.string(),
	duration: z.number(),
	id_contrato: z.number(),
	id_contrato_servico: z.number(),
	id_fatura: z.number(),
	id_iax: z.number(),
	id_ligacao: z.number(),
	id_sip: z.number(),
	id_tarifa: z.number(),
	identificador_global_summit: z.string(),
	idx_zeus: z.number(),
	importado: cdrImportadoSchema,
	lastapp: z.string(),
	lastdata: z.string(),
	lote: z.number(),
	lote_importacao: z.number(),
	outbound_cnam: z.string(),
	outbound_cnum: z.string(),
	profit: z.number(),
	ramal: z.string(),
	recordingfile: z.string(),
	src: z.string(),
	tarifado: cdrTarifadoSchema,
	tempo_distribuidor: z.number(),
	tp_chamada: z.string(),
	trunk_summit: z.string(),
	uniqueid: z.string(),
	userfield: z.string(),
	valor_user: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cdrSchema = cdrBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cdrCreateSchema = cdrSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cdrUpdateSchema = cdrCreateSchema.partial();
