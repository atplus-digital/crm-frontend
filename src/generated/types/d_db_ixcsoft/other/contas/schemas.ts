/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	contasAnexarComprovanteCpaAutoSchema,
	contasAtivoSchema,
	contasIntegrationEnvironmentSchema,
	contasPermitirPagSaldoNegativoSchema,
	contasTipoContaSchema,
} from "./labels";

export const CONTAS_TABLE_NAME = "contas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contasBaseSchema = z.object({
	id: z.number(),
	agencia: z.string(),
	agencia_dv: z.string(),
	anexar_comprovante_cpa_auto: contasAnexarComprovanteCpaAutoSchema,
	ativo: contasAtivoSchema,
	bairro: z.string(),
	cep: z.string(),
	cidade: z.number(),
	cnpj: z.string(),
	cod_banco: z.string(),
	complemento: z.string(),
	conta: z.string(),
	data_abertura: z.string(),
	descricao: z.string(),
	filial_padrao: z.number(),
	id_centro_custo_rel_centro_custo_categoria_padrao: z.number(),
	id_planejamento: z.number(),
	integration_client_id: z.string(),
	integration_client_secret: z.string(),
	integration_environment: contasIntegrationEnvironmentSchema,
	integration_name: z.string(),
	integration_secret_key: z.string(),
	intermediary_city_id: z.number(),
	intermediary_cnpj: z.string(),
	intermediary_complement: z.string(),
	intermediary_name: z.string(),
	intermediary_neighborhood: z.string(),
	intermediary_number: z.string(),
	intermediary_street: z.string(),
	layout_conciliacao: z.string(),
	logradouro: z.string(),
	numero_conta: z.string(),
	numero_conta_dv: z.string(),
	numero_convenio: z.string(),
	numero_convenio_fornecedor: z.string(),
	numero_cooperativa: z.string(),
	numero_residencia: z.string(),
	operacao: z.string(),
	parametro_troca_eletronica: z.string(),
	permitir_pag_saldo_negativo: contasPermitirPagSaldoNegativoSchema,
	razao_banco: z.string(),
	saldo_abertura: z.number(),
	suframa: z.string(),
	tipo_conta: contasTipoContaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contasSchema = contasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contasCreateSchema = contasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contasUpdateSchema = contasCreateSchema.partial();
