/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NFARQUIVOMESTRE_FIELD_LABELS = {
	ano: "ano",
	chave_autenticacao: "chave_autenticacao",
	cnpj: "cnpj",
	data: "data",
	finalidade: "finalidade",
	id: "id",
	id_filial: "id_filial",
	id_operador: "id_operador",
	mes: "mes",
	modelo: "modelo",
	nome_arquivo: "nome_arquivo",
	serie: "serie",
} as const;

export const NFARQUIVOMESTRE_FINALIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const nf_arquivo_mestreFinalidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "finalidade: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NfArquivoMestreFinalidade = z.infer<
	typeof nf_arquivo_mestreFinalidadeSchema
>;
