/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARREMESSALOTE_FIELD_LABELS = {
	data_fin: "data_fin",
	data_geracao: "data_geracao",
	data_ini: "data_ini",
	descricao: "descricao",
	id: "id",
	id_contas: "id_contas",
	numero_sequencia: "numero_sequencia",
	tipo_remessa: "tipo_remessa",
} as const;

export const FNAPAGARREMESSALOTE_TIPOREMESSA_LABELS = {
	D: "D",
	F: "F",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_remessa_loteTipoRemessaSchema = z.enum(["D", "F", "S"], {
	error: () => ({ message: "tipo_remessa: valores válidos são [D, F, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarRemessaLoteTipoRemessa = z.infer<
	typeof fn_apagar_remessa_loteTipoRemessaSchema
>;
