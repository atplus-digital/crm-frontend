/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	tv_equipamentosDhcpSchema,
	tv_equipamentosHdSchema,
	tv_equipamentosPltSchema,
	tv_equipamentosPvrSchema,
	tv_equipamentosStatusInicialSchema,
	tv_equipamentosStatusSchema,
} from "./labels";

export const TV_EQUIPAMENTOS_TABLE_NAME = "tv_equipamentos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tv_equipamentosBaseSchema = z.object({
	id: z.number(),
	account_number: z.string(),
	data_final: z.string(),
	data_inicial: z.string(),
	DHCP: tv_equipamentosDhcpSchema,
	endereco_ip: z.string(),
	endereco_mac: z.string(),
	HD: tv_equipamentosHdSchema,
	id_equipamento_plataforma: z.string(),
	id_tv_usuarios: z.number(),
	modelo_setbox: z.string(),
	nome_aparelho: z.string(),
	plataforma: z.string(),
	PLT: tv_equipamentosPltSchema,
	porta_de_rede: z.number(),
	porta_ip: z.number(),
	prioridade: z.number(),
	PVR: tv_equipamentosPvrSchema,
	smartCard_setbox: z.string(),
	status: tv_equipamentosStatusSchema,
	status_inicial: tv_equipamentosStatusInicialSchema,
	videos_simultaneos: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tv_equipamentosSchema = tv_equipamentosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tv_equipamentosCreateSchema = tv_equipamentosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tv_equipamentosUpdateSchema =
	tv_equipamentosCreateSchema.partial();
