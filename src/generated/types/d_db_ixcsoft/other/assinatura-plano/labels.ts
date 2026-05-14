/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURAPLANO_FIELD_LABELS = {
	ativo: "ativo",
	create_time: "create_time",
	descricao: "descricao",
	id: "id",
	id_assinatura_notificacao_grupo: "id_assinatura_notificacao_grupo",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_filial: "id_filial",
	id_tipo_cobranca: "id_tipo_cobranca",
	id_tipo_documento: "id_tipo_documento",
	obs: "obs",
	tipo_plano: "tipo_plano",
	update_time: "update_time",
} as const;

export const ASSINATURAPLANO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ASSINATURAPLANO_TIPOPLANO_LABELS = {
	R: "R",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_planoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const assinatura_planoTipoPlanoSchema = z.enum(["R", "C"], {
	error: () => ({ message: "tipo_plano: valores válidos são [R, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaPlanoAtivo = z.infer<typeof assinatura_planoAtivoSchema>;

export type AssinaturaPlanoTipoPlano = z.infer<
	typeof assinatura_planoTipoPlanoSchema
>;
