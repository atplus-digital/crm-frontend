/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIOARQUIVO_FIELD_LABELS = {
	classificacao_arquivo: "classificacao_arquivo",
	data_envio: "data_envio",
	descricao: "descricao",
	id: "id",
	id_patrimonio: "id_patrimonio",
	local_arquivo: "local_arquivo",
	nome_arquivo: "nome_arquivo",
	tipo: "tipo",
} as const;

export const PATRIMONIOARQUIVO_CLASSIFICACAOARQUIVO_LABELS = {
	O: "O",
	P: "P",
	A: "A",
} as const;

export const PATRIMONIOARQUIVO_TIPO_LABELS = {
	A: "A",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonio_arquivoClassificacaoArquivoSchema = z.enum(
	["O", "P", "A"],
	{
		error: () => ({
			message: "classificacao_arquivo: valores válidos são [O, P, A]",
		}),
	},
);

export const patrimonio_arquivoTipoSchema = z.enum(["A", "N"], {
	error: () => ({ message: "tipo: valores válidos são [A, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioArquivoClassificacaoArquivo = z.infer<
	typeof patrimonio_arquivoClassificacaoArquivoSchema
>;

export type PatrimonioArquivoTipo = z.infer<
	typeof patrimonio_arquivoTipoSchema
>;
