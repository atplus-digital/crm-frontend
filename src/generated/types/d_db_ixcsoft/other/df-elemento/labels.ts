/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFELEMENTO_FIELD_LABELS = {
	ativo: "ativo",
	codigo_estilo_caixa: "codigo_estilo_caixa",
	codigo_identificador: "codigo_identificador",
	comprimento: "comprimento",
	descricao: "descricao",
	id: "id",
	id_diretorio: "id_diretorio",
	id_elemento_pai: "id_elemento_pai",
	id_mini_projeto: "id_mini_projeto",
	id_projeto: "id_projeto",
	id_tipo_elemento: "id_tipo_elemento",
	observacao: "observacao",
	preco_unidade: "preco_unidade",
	tipo: "tipo",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const DFELEMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_elementoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfElementoAtivo = z.infer<typeof df_elementoAtivoSchema>;
