/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	movimento_comodatosStatusNotaSchema,
	movimento_comodatosTipoSchema,
} from "./labels";

export const MOVIMENTO_COMODATOS_TABLE_NAME = "movimento_comodatos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const movimento_comodatosBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	filial_emissao: z.number(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_devolucao: z.number(),
	id_emprestimo: z.number(),
	id_entrada: z.number(),
	id_filial: z.number(),
	id_movimento_produtos: z.number(),
	id_os: z.number(),
	id_produto: z.number(),
	id_saida: z.number(),
	motivo_dispensa_nf: z.string(),
	nf_complementar_comodato: z.string(),
	nota_cancelada_em: z.string(),
	nota_emitida_em: z.string(),
	nota_emitida_por: z.number(),
	numero_nota: z.number(),
	status_nota: movimento_comodatosStatusNotaSchema,
	tipo: movimento_comodatosTipoSchema,
	tipo_documento: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const movimento_comodatosSchema = movimento_comodatosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const movimento_comodatosCreateSchema = movimento_comodatosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const movimento_comodatosUpdateSchema =
	movimento_comodatosCreateSchema.partial();
