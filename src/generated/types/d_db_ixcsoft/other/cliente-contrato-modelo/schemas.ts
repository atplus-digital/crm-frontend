/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_modeloEhModeloTermoSchema,
	cliente_contrato_modeloImprimiRoteadorSchema,
	cliente_contrato_modeloImprimirComodatosSchema,
	cliente_contrato_modeloImprimirDebitoSchema,
	cliente_contrato_modeloImprimirLoginAssinanteSchema,
	cliente_contrato_modeloImprimirPppoeSchema,
	cliente_contrato_modeloStatusSchema,
} from "./labels";

export const CLIENTE_CONTRATO_MODELO_TABLE_NAME = "cliente_contrato_modelo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_modeloBaseSchema = z.object({
	id: z.number(),
	adesao_arquivo: z.string(),
	cabecalho: z.string(),
	cabecalho_padrao: z.string(),
	cliente_contrato_comodato: z.string(),
	cliente_contrato_de_permanencia: z.string(),
	comodato_arquivo: z.string(),
	contrato_arquivo: z.string(),
	eh_modelo_termo: cliente_contrato_modeloEhModeloTermoSchema,
	fidelidade: z.string(),
	id_contrato_cliente: z.number(),
	id_contrato_testes: z.number(),
	imprimi_roteador: cliente_contrato_modeloImprimiRoteadorSchema,
	imprimir_comodatos: cliente_contrato_modeloImprimirComodatosSchema,
	imprimir_debito: cliente_contrato_modeloImprimirDebitoSchema,
	imprimir_login_assinante: cliente_contrato_modeloImprimirLoginAssinanteSchema,
	imprimir_pppoe: cliente_contrato_modeloImprimirPppoeSchema,
	modelo_subcontrato: z.string(),
	nome: z.string(),
	permanencia_arquivo: z.string(),
	personalizado_arquivo: z.string(),
	prazo: z.string(),
	status: cliente_contrato_modeloStatusSchema,
	termo_personalizado: z.string(),
	texto: z.string(),
	texto_imobiliaria: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_modeloSchema = cliente_contrato_modeloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_modeloCreateSchema =
	cliente_contrato_modeloSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_modeloUpdateSchema =
	cliente_contrato_modeloCreateSchema.partial();
