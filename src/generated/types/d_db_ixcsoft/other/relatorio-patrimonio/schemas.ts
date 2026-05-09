/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { relatorio_patrimonioTipoDataAquisicaoSchema } from "./labels";

export const RELATORIO_PATRIMONIO_TABLE_NAME = "relatorio_patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_patrimonioBaseSchema = z.object({
	id: z.number(),
	cod_patrimonio: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_aquisicao_final: z.string(),
	data_aquisicao_inicial: z.string(),
	data_aquisicao_periodo: z.string(),
	data_ultima_impres: z.string(),
	id_almoxarifado: z.number(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	id_mac: z.string(),
	id_produto: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	numero_nf: z.string(),
	relatorio: z.string(),
	serial: z.string(),
	serial_fornecedor: z.string(),
	tipo_data_aquisicao: relatorio_patrimonioTipoDataAquisicaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_patrimonioSchema = relatorio_patrimonioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_patrimonioCreateSchema = relatorio_patrimonioSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_patrimonioUpdateSchema =
	relatorio_patrimonioCreateSchema.partial();
