/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADUSUARIOSWISPRO_FIELD_LABELS = {
	cidade: "cidade",
	cliente_id: "cliente_id",
	cliente_nome: "cliente_nome",
	external_id: "external_id",
	ftth_porta: "ftth_porta",
	id: "id",
	id_caixa_ftth: "id_caixa_ftth",
	id_df_projeto: "id_df_projeto",
	id_onu: "id_onu",
	info_endereco: "info_endereco",
	ip: "ip",
	latitude: "latitude",
	longitude: "longitude",
	mac: "mac",
	modo: "modo",
	numero: "numero",
	olt: "olt",
	plano_id: "plano_id",
	plano_nome: "plano_nome",
	pppoe_nome: "pppoe_nome",
	pppoe_senha: "pppoe_senha",
	provincia: "provincia",
	rua: "rua",
	servidor: "servidor",
	status: "status",
	status_iva: "status_iva",
	tipo: "tipo",
	tipo_fatura: "tipo_fatura",
} as const;

export const RADUSUARIOSWISPRO_MODO_LABELS = {
	E: "E",
	P: "P",
	D: "D",
} as const;

export const RADUSUARIOSWISPRO_STATUS_LABELS = {
	HA: "HA",
	DE: "DE",
	AL: "AL",
	DG: "DG",
} as const;

export const RADUSUARIOSWISPRO_TIPO_LABELS = {
	R: "R",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radusuarios_wisproModoSchema = z.enum(["E", "P", "D"], {
	error: () => ({ message: "modo: valores válidos são [E, P, D]" }),
});

export const radusuarios_wisproStatusSchema = z.enum(["HA", "DE", "AL", "DG"], {
	error: () => ({ message: "status: valores válidos são [HA, DE, AL, DG]" }),
});

export const radusuarios_wisproTipoSchema = z.enum(["R", "B"], {
	error: () => ({ message: "tipo: valores válidos são [R, B]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadusuariosWisproModo = z.infer<
	typeof radusuarios_wisproModoSchema
>;

export type RadusuariosWisproStatus = z.infer<
	typeof radusuarios_wisproStatusSchema
>;

export type RadusuariosWisproTipo = z.infer<
	typeof radusuarios_wisproTipoSchema
>;
