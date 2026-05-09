/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	tv_usuarios_tmpConnectionTypeTvSchema,
	tv_usuarios_tmpControleDosPaisSchema,
	tv_usuarios_tmpUsarEmailPrincipalSchema,
} from "./labels";

export const TV_USUARIOS_TMP_TABLE_NAME = "tv_usuarios_tmp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tv_usuarios_tmpBaseSchema = z.object({
	id: z.number(),
	account_id: z.string(),
	account_number: z.string(),
	birthday: z.string(),
	connection_type_tv: tv_usuarios_tmpConnectionTypeTvSchema,
	controle_dos_pais: tv_usuarios_tmpControleDosPaisSchema,
	device_limit_id: z.number(),
	id_assinatura_cliente: z.number(),
	id_assinatura_cliente_produto: z.number(),
	id_contrato: z.number(),
	id_dealer: z.number(),
	id_login_plataforma: z.string(),
	id_plano_por_contrato: z.number(),
	id_portal: z.number(),
	id_vd_contratos_produtos: z.number(),
	ip: z.string(),
	login: z.string(),
	mac_devices: z.string(),
	online: z.number(),
	pin: z.string(),
	plataforma: z.string(),
	profile_name: z.string(),
	senha: z.string(),
	status_assinante_watch: z.number(),
	tariff_plan: z.string(),
	token_assinante_watch: z.string(),
	usar_email_principal: tv_usuarios_tmpUsarEmailPrincipalSchema,
	version: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tv_usuarios_tmpSchema = tv_usuarios_tmpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tv_usuarios_tmpCreateSchema = tv_usuarios_tmpSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tv_usuarios_tmpUpdateSchema =
	tv_usuarios_tmpCreateSchema.partial();
