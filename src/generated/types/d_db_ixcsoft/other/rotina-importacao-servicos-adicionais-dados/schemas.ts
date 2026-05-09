/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rotina_importacao_servicos_adicionais_dadosStatusRotinaSchema } from "./labels";

export const ROTINA_IMPORTACAO_SERVICOS_ADICIONAIS_DADOS_TABLE_NAME =
	"rotina_importacao_servicos_adicionais_dados";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rotina_importacao_servicos_adicionais_dadosBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	empresa: z.string(),
	id_contrato: z.number(),
	id_rotina: z.number(),
	sessoes: z.number(),
	sessoes_cobradas: z.number(),
	sessoes_gratuitas: z.number(),
	status_rotina: rotina_importacao_servicos_adicionais_dadosStatusRotinaSchema,
	valor: z.number(),
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rotina_importacao_servicos_adicionais_dadosSchema =
	rotina_importacao_servicos_adicionais_dadosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rotina_importacao_servicos_adicionais_dadosCreateSchema =
	rotina_importacao_servicos_adicionais_dadosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rotina_importacao_servicos_adicionais_dadosUpdateSchema =
	rotina_importacao_servicos_adicionais_dadosCreateSchema.partial();
