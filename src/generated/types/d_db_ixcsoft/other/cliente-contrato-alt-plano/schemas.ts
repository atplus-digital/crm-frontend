/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_alt_planoAlteraPlanoSchema,
	cliente_contrato_alt_planoAlteraTipoCobrancaSchema,
	cliente_contrato_alt_planoAltPlanoTipoAssinaturaSchema,
	cliente_contrato_alt_planoDefinicaoContratoTermoSchema,
	cliente_contrato_alt_planoGerarProrataServAdicSchema,
	cliente_contrato_alt_planoOpcoesVencidosSchema,
	cliente_contrato_alt_planoStatusSchema,
	cliente_contrato_alt_planoTipoAlteracaoSchema,
} from "./labels";

export const CLIENTE_CONTRATO_ALT_PLANO_TABLE_NAME =
	"cliente_contrato_alt_plano";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_alt_planoBaseSchema = z.object({
	id: z.number(),
	alt_plano_modelo_impressao: z.number(),
	alt_plano_tipo_assinatura:
		cliente_contrato_alt_planoAltPlanoTipoAssinaturaSchema,
	altera_plano: cliente_contrato_alt_planoAlteraPlanoSchema,
	altera_tipo_cobranca: cliente_contrato_alt_planoAlteraTipoCobrancaSchema,
	data_hora_alteracao: z.string(),
	definicao_contrato_termo:
		cliente_contrato_alt_planoDefinicaoContratoTermoSchema,
	gerar_prorata_serv_adic: cliente_contrato_alt_planoGerarProrataServAdicSchema,
	id_contrato: z.number(),
	id_lote: z.number(),
	id_modelo_impressao: z.number(),
	id_modelo_termo: z.number(),
	id_operador: z.number(),
	id_tipo_plano_atual: z.number(),
	id_tipo_plano_novo: z.number(),
	id_vd_contrato_atual: z.number(),
	id_vd_contrato_novo: z.number(),
	id_vendedor: z.number(),
	opcoes_vencidos: cliente_contrato_alt_planoOpcoesVencidosSchema,
	status: cliente_contrato_alt_planoStatusSchema,
	tipo_alteracao: cliente_contrato_alt_planoTipoAlteracaoSchema,
	valor_acrescimo_atual: z.number(),
	valor_atual: z.number(),
	valor_desconto_atual: z.number(),
	valor_novo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_alt_planoSchema =
	cliente_contrato_alt_planoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_alt_planoCreateSchema =
	cliente_contrato_alt_planoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_alt_planoUpdateSchema =
	cliente_contrato_alt_planoCreateSchema.partial();
