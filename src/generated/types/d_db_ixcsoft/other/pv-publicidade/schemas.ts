/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PV_PUBLICIDADE_TABLE_NAME = "pv_publicidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_publicidadeBaseSchema = z.object({
	id: z.number(),
	altura: z.number(),
	data_hora_fim: z.string(),
	data_hora_inicio: z.string(),
	descricao: z.string(),
	exibe_domingo: z.string(),
	exibe_quarta: z.string(),
	exibe_quinta: z.string(),
	exibe_sabado: z.string(),
	exibe_segunda: z.string(),
	exibe_sexta: z.string(),
	exibe_terca: z.string(),
	fundo: z.string(),
	id_cliente_dono: z.number(),
	id_concentrador: z.number(),
	id_tipo_publicidade: z.number(),
	largura: z.number(),
	nome_arquivo: z.string(),
	status: z.string(),
	tempo_espera_segundos: z.number(),
	titulo: z.string(),
	url_aplicativo: z.string(),
	url_destino: z.string(),
	views: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_publicidadeSchema = pv_publicidadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_publicidadeCreateSchema = pv_publicidadeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_publicidadeUpdateSchema = pv_publicidadeCreateSchema.partial();
