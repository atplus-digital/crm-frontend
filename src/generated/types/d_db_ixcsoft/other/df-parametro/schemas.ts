/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_parametroEquipeFrotaSchema,
	df_parametroFiltrarFilialSchema,
	df_parametroMostrarCaixaInativaSchema,
	df_parametroMostrarManutencaoSchema,
	df_parametroMostrarOnusSchema,
	df_parametroMostrarPopsProjetosSchema,
	df_parametroMostrarPopsSchema,
	df_parametroOrdenacaoProjetosSchema,
} from "./labels";

export const DF_PARAMETRO_TABLE_NAME = "df_parametro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_parametroBaseSchema = z.object({
	id: z.number(),
	equipe_frota: df_parametroEquipeFrotaSchema,
	filtrar_filial: df_parametroFiltrarFilialSchema,
	mostrar_caixa_inativa: df_parametroMostrarCaixaInativaSchema,
	mostrar_manutencao: df_parametroMostrarManutencaoSchema,
	mostrar_onus: df_parametroMostrarOnusSchema,
	mostrar_pops: df_parametroMostrarPopsSchema,
	mostrar_pops_projetos: df_parametroMostrarPopsProjetosSchema,
	nove_a_x_portas_disp: z.string(),
	ordenacao_projetos: df_parametroOrdenacaoProjetosSchema,
	quatro_a_oito_portas_disp: z.string(),
	todas_portas_disp: z.string(),
	um_a_tres_portas_disp: z.string(),
	zero_portas_disp: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_parametroSchema = df_parametroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_parametroCreateSchema = df_parametroSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_parametroUpdateSchema = df_parametroCreateSchema.partial();
