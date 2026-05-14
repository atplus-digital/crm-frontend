/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TARIFASGRUPOS_FIELD_LABELS = {
	ddd: "ddd",
	ddi: "ddi",
	dt_fin_vigencia: "dt_fin_vigencia",
	dt_ini_vigencia: "dt_ini_vigencia",
	franquia_mascara: "franquia_mascara",
	franquia_tempo_segundos: "franquia_tempo_segundos",
	franquia_valor: "franquia_valor",
	id: "id",
	id_produto_franquia: "id_produto_franquia",
	id_produto_ligacoes: "id_produto_ligacoes",
	id_tarifa_franquia: "id_tarifa_franquia",
	idx_zeus: "idx_zeus",
	nome: "nome",
	padrao: "padrao",
} as const;

export const TARIFASGRUPOS_PADRAO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tarifas_gruposPadraoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "padrao: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TarifasGruposPadrao = z.infer<typeof tarifas_gruposPadraoSchema>;
