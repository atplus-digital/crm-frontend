/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSCHAMADOARQUIVOS_CLASSIFICACAOARQUIVO_LABELS = {
	O: "O",
	P: "P",
	A: "A",
} as const;

export const SUOSSCHAMADOARQUIVOS_TIPO_LABELS = {
	A: "A",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_chamado_arquivosClassificacaoArquivoSchema = z.enum(
	["O", "P", "A"],
	{
		error: () => ({
			message: "classificacao_arquivo: valores válidos são [O, P, A]",
		}),
	},
);

export const su_oss_chamado_arquivosTipoSchema = z.enum(["A", "N"], {
	error: () => ({ message: "tipo: valores válidos são [A, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssChamadoArquivosClassificacaoArquivo = z.infer<
	typeof su_oss_chamado_arquivosClassificacaoArquivoSchema
>;

export type SuOssChamadoArquivosTipo = z.infer<
	typeof su_oss_chamado_arquivosTipoSchema
>;
