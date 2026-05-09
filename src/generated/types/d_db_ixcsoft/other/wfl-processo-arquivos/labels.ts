/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const WFLPROCESSOARQUIVOS_TIPODOCUMENTACAO_LABELS = {
	arquivo: "arquivo",
	link: "link",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const wfl_processo_arquivosTipoDocumentacaoSchema = z.enum(
	["arquivo", "link"],
	{
		error: () => ({
			message: "tipo_documentacao: valores válidos são [arquivo, link]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type WflProcessoArquivosTipoDocumentacao = z.infer<
	typeof wfl_processo_arquivosTipoDocumentacaoSchema
>;
