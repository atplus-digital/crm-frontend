/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SPEDCONTRIBUICOES_FIELD_LABELS = {
	cod_inc_trib: "cod_inc_trib",
	cod_tipo_cont: "cod_tipo_cont",
	cod_ver: "cod_ver",
	id: "id",
	id_empresa: "id_empresa",
	id_filial: "id_filial",
	ind_apro_cred: "ind_apro_cred",
	ind_escri: "ind_escri",
	ind_reg_cum: "ind_reg_cum",
	momento_fim_geracao: "momento_fim_geracao",
	momento_ini_geracao: "momento_ini_geracao",
	nat_bc_cred: "nat_bc_cred",
	numero_escrituracao_anterior: "numero_escrituracao_anterior",
	periodo_final: "periodo_final",
	periodo_inicial: "periodo_inicial",
	situacao_especial: "situacao_especial",
	status: "status",
	tempo_total: "tempo_total",
	tipo_escrituracao: "tipo_escrituracao",
} as const;

export const SPEDCONTRIBUICOES_STATUS_LABELS = {
	A: "A",
	P: "P",
	G: "G",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sped_contribuicoesStatusSchema = z.enum(["A", "P", "G", "E"], {
	error: () => ({ message: "status: valores válidos são [A, P, G, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SpedContribuicoesStatus = z.infer<
	typeof sped_contribuicoesStatusSchema
>;
