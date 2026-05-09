/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_apagarCentroCustoRegraCriterioSchema,
	fn_apagarComunicadoSchema,
	fn_apagarEhDespesaVeiculoSchema,
	fn_apagarEstornadoSchema,
	fn_apagarLiberadoSchema,
	fn_apagarStatusAuditoriaSchema,
	fn_apagarStatusSchema,
	fn_apagarTipoPixSchema,
} from "./labels";

export const FN_APAGAR_TABLE_NAME = "fn_apagar";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagarBaseSchema = z.object({
	id: z.number(),
	cancelamento_id_operador: z.number(),
	centro_custo_regra_criterio: fn_apagarCentroCustoRegraCriterioSchema,
	chave_pix: z.string(),
	codigo_barras: z.string(),
	comunicado: fn_apagarComunicadoSchema,
	conta_pagamento: z.number(),
	data_cancelamento: z.string(),
	data_emissao: z.string(),
	data_pagamento: z.string(),
	data_termino: z.string(),
	data_vencimento: z.string(),
	debito_data: z.string(),
	despesa_tipo: z.number(),
	documento: z.string(),
	duplicata: z.string(),
	eh_despesa_veiculo: fn_apagarEhDespesaVeiculoSchema,
	estornado: fn_apagarEstornadoSchema,
	filial_id: z.number(),
	id_centro_custo_categoria_filtro: z.number(),
	id_centro_custo_criterio_rateio: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_conta: z.number(),
	id_contas: z.number(),
	id_dado_bancario: z.number(),
	id_entrada: z.number(),
	id_fornecedor: z.number(),
	id_funcionario: z.number(),
	id_lote_importacao: z.number(),
	id_lote_pagamento: z.number(),
	id_mot_cancelamento: z.number(),
	id_origem: z.number(),
	id_remessa_pagamento: z.number(),
	liberado: fn_apagarLiberadoSchema,
	lote: z.string(),
	numero_nota: z.string(),
	obs: z.string(),
	previsao: z.string(),
	sistema_origem: z.number(),
	status: fn_apagarStatusSchema,
	status_auditoria: fn_apagarStatusAuditoriaSchema,
	tipo_pix: fn_apagarTipoPixSchema,
	ultima_atualizacao: z.string(),
	valor: z.number(),
	valor_aberto: z.number(),
	valor_cancelado: z.number(),
	valor_pago: z.number(),
	valor_total_pago: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagarSchema = fn_apagarBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagarCreateSchema = fn_apagarSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagarUpdateSchema = fn_apagarCreateSchema.partial();
