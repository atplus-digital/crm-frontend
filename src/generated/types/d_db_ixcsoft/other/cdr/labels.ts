/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CDR_FIELD_LABELS = {
	accountcode: "accountcode",
	amaflags: "amaflags",
	billsec: "billsec",
	calldate: "calldate",
	channel: "channel",
	clid: "clid",
	cnam: "cnam",
	cnum: "cnum",
	custo: "custo",
	data_utc: "data_utc",
	dcontext: "dcontext",
	dest_descricao: "dest_descricao",
	dest_pais: "dest_pais",
	destino: "destino",
	did: "did",
	disposition: "disposition",
	dnis: "dnis",
	dst: "dst",
	dst_cnam: "dst_cnam",
	dstchannel: "dstchannel",
	duration: "duration",
	id: "id",
	id_contrato: "id_contrato",
	id_contrato_servico: "id_contrato_servico",
	id_fatura: "id_fatura",
	id_iax: "id_iax",
	id_ligacao: "id_ligacao",
	id_sip: "id_sip",
	id_tarifa: "id_tarifa",
	identificador_global_summit: "identificador_global_summit",
	idx_zeus: "idx_zeus",
	importado: "importado",
	lastapp: "lastapp",
	lastdata: "lastdata",
	lote: "lote",
	lote_importacao: "lote_importacao",
	outbound_cnam: "outbound_cnam",
	outbound_cnum: "outbound_cnum",
	profit: "profit",
	ramal: "ramal",
	recordingfile: "recordingfile",
	src: "src",
	tarifado: "tarifado",
	tempo_distribuidor: "tempo_distribuidor",
	tp_chamada: "tp_chamada",
	trunk_summit: "trunk_summit",
	uniqueid: "uniqueid",
	userfield: "userfield",
	valor_user: "valor_user",
} as const;

export const CDR_IMPORTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CDR_TARIFADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cdrImportadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "importado: valores válidos são [S, N]" }),
});

export const cdrTarifadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tarifado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CdrImportado = z.infer<typeof cdrImportadoSchema>;

export type CdrTarifado = z.infer<typeof cdrTarifadoSchema>;
