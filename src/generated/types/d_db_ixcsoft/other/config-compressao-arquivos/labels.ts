/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONFIGCOMPRESSAOARQUIVOS_REDUZIRQUALIDADEIMAGEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONFIGCOMPRESSAOARQUIVOS_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const config_compressao_arquivosReduzirQualidadeImagemSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "reduzir_qualidade_imagem: valores válidos são [S, N]",
		}),
	},
);

export const config_compressao_arquivosStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConfigCompressaoArquivosReduzirQualidadeImagem = z.infer<
	typeof config_compressao_arquivosReduzirQualidadeImagemSchema
>;

export type ConfigCompressaoArquivosStatus = z.infer<
	typeof config_compressao_arquivosStatusSchema
>;
