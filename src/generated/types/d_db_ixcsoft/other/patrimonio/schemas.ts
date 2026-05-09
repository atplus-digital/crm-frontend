/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_TABLE_NAME = "patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonioBaseSchema = z.object({
	id: z.number(),
	aguardando_instalacao: z.number(),
	data: z.string(),
	data_aquisicao: z.string(),
	departamento_id: z.number(),
	descricao: z.string(),
	em_laboratorio: z.number(),
	estado: z.number(),
	garantia_ate: z.string(),
	id_almoxarifado: z.number(),
	id_categoria_depreciacao: z.number(),
	id_categoria_patrimonio: z.number(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	id_mac: z.string(),
	id_movimento_produto: z.number(),
	id_produto: z.number(),
	local: z.string(),
	numero_nf: z.string(),
	proxima_revisao: z.string(),
	responsavel_id: z.number(),
	serial: z.string(),
	serial_fornecedor: z.string(),
	situacao: z.number(),
	ultima_revisao: z.string(),
	valor_bem: z.number(),
	valor_residual: z.number(),
	vencimento_garantia: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonioSchema = patrimonioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonioCreateSchema = patrimonioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonioUpdateSchema = patrimonioCreateSchema.partial();
