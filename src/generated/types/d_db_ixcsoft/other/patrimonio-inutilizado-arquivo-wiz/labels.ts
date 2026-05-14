/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIOINUTILIZADOARQUIVOWIZ_FIELD_LABELS = {
	classificacao_arquivo: "classificacao_arquivo",
	data_envio: "data_envio",
	descricao: "descricao",
	id: "id",
	id_inutilizado: "id_inutilizado",
	id_patrimonio: "id_patrimonio",
	ids_patrimonio: "ids_patrimonio",
	local_arquivo: "local_arquivo",
	nome_arquivo: "nome_arquivo",
	status_inutilizado: "status_inutilizado",
	tipo: "tipo",
} as const;

export const PATRIMONIOINUTILIZADOARQUIVOWIZ_CLASSIFICACAOARQUIVO_LABELS = {
	O: "O",
	P: "P",
	A: "A",
} as const;

export const PATRIMONIOINUTILIZADOARQUIVOWIZ_STATUSINUTILIZADO_LABELS = {
	A: "A",
	F: "F",
} as const;

export const PATRIMONIOINUTILIZADOARQUIVOWIZ_TIPO_LABELS = {
	A: "A",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonio_inutilizado_arquivo_wizClassificacaoArquivoSchema =
	z.enum(["O", "P", "A"], {
		error: () => ({
			message: "classificacao_arquivo: valores válidos são [O, P, A]",
		}),
	});

export const patrimonio_inutilizado_arquivo_wizStatusInutilizadoSchema = z.enum(
	["A", "F"],
	{
		error: () => ({
			message: "status_inutilizado: valores válidos são [A, F]",
		}),
	},
);

export const patrimonio_inutilizado_arquivo_wizTipoSchema = z.enum(["A", "N"], {
	error: () => ({ message: "tipo: valores válidos são [A, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioInutilizadoArquivoWizClassificacaoArquivo = z.infer<
	typeof patrimonio_inutilizado_arquivo_wizClassificacaoArquivoSchema
>;

export type PatrimonioInutilizadoArquivoWizStatusInutilizado = z.infer<
	typeof patrimonio_inutilizado_arquivo_wizStatusInutilizadoSchema
>;

export type PatrimonioInutilizadoArquivoWizTipo = z.infer<
	typeof patrimonio_inutilizado_arquivo_wizTipoSchema
>;
