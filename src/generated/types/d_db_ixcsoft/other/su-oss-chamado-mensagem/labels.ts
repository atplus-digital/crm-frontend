/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSCHAMADOMENSAGEM_FINALIZAPROCESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADOMENSAGEM_GERACOMISSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADOMENSAGEM_ORIGEMREGISTRO_LABELS = {
	RM: "RM",
	RA: "RA",
	SW: "SW",
	IP: "IP",
} as const;

export const SUOSSCHAMADOMENSAGEM_STATUS_LABELS = {
	A: "A",
	F: "F",
	AN: "AN",
	EN: "EN",
	AS: "AS",
	AG: "AG",
	EX: "EX",
	RAG: "RAG",
	DS: "DS",
} as const;

export const SUOSSCHAMADOMENSAGEM_TIPOCOBRANCA_LABELS = {
	FAT: "FAT",
	AM: "AM",
	GAR: "GAR",
	NENHUM: "NENHUM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_chamado_mensagemFinalizaProcessoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "finaliza_processo: valores válidos são [S, N]" }),
	},
);

export const su_oss_chamado_mensagemGeraComissaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_comissao: valores válidos são [S, N]" }),
});

export const su_oss_chamado_mensagemOrigemRegistroSchema = z.enum(
	["RM", "RA", "SW", "IP"],
	{
		error: () => ({
			message: "origem_registro: valores válidos são [RM, RA, SW, IP]",
		}),
	},
);

export const su_oss_chamado_mensagemStatusSchema = z.enum(
	["A", "F", "AN", "EN", "AS", "AG", "EX", "RAG", "DS"],
	{
		error: () => ({
			message:
				"status: valores válidos são [A, F, AN, EN, AS, AG, EX, RAG, DS]",
		}),
	},
);

export const su_oss_chamado_mensagemTipoCobrancaSchema = z.enum(
	["FAT", "AM", "GAR", "NENHUM"],
	{
		error: () => ({
			message: "tipo_cobranca: valores válidos são [FAT, AM, GAR, NENHUM]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssChamadoMensagemFinalizaProcesso = z.infer<
	typeof su_oss_chamado_mensagemFinalizaProcessoSchema
>;

export type SuOssChamadoMensagemGeraComissao = z.infer<
	typeof su_oss_chamado_mensagemGeraComissaoSchema
>;

export type SuOssChamadoMensagemOrigemRegistro = z.infer<
	typeof su_oss_chamado_mensagemOrigemRegistroSchema
>;

export type SuOssChamadoMensagemStatus = z.infer<
	typeof su_oss_chamado_mensagemStatusSchema
>;

export type SuOssChamadoMensagemTipoCobranca = z.infer<
	typeof su_oss_chamado_mensagemTipoCobrancaSchema
>;
