/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	tv_usuariosApiSchema,
	tv_usuariosConnectionTypeTvSchema,
	tv_usuariosControleDosPaisSchema,
	tv_usuariosManuallyDisabledSchema,
	tv_usuariosUsarEmailPrincipalSchema,
} from "./labels";

export const TV_USUARIOS_TABLE_NAME = "tv_usuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tv_usuariosBaseSchema = z.object({
	id: z.number(),
	account_id: z.string(),
	account_number: z.string(),
	api: tv_usuariosApiSchema,
	birthday: z.string(),
	connection_type_tv: tv_usuariosConnectionTypeTvSchema,
	controle_dos_pais: tv_usuariosControleDosPaisSchema,
	created_at: z.string(),
	criado_em: z.string(),
	device_limit_id: z.number(),
	id_assinatura_cliente: z.number(),
	id_assinatura_cliente_produto: z.number(),
	id_contrato: z.number(),
	id_dealer: z.number(),
	id_equipamentos: z.string(),
	id_integracao: z.number(),
	id_login_plataforma: z.string(),
	id_plano_por_contrato: z.number(),
	id_portal: z.number(),
	id_vd_contratos_produtos: z.number(),
	ip: z.string(),
	login: z.string(),
	mac_devices: z.string(),
	manually_disabled: tv_usuariosManuallyDisabledSchema,
	number_devices: z.number(),
	online: z.number(),
	pin: z.string(),
	plataforma: z.string(),
	profile_name: z.string(),
	senha: z.string(),
	status_assinante_watch: z.number(),
	tariff_plan: z.string(),
	token_assinante_watch: z.string(),
	usar_email_principal: tv_usuariosUsarEmailPrincipalSchema,
	version: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tv_usuariosSchema = tv_usuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tv_usuariosCreateSchema = tv_usuariosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tv_usuariosUpdateSchema = tv_usuariosCreateSchema.partial();
