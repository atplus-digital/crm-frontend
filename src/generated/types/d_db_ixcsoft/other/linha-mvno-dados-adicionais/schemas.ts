/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { linha_mvno_dados_adicionaisGeraCobrancaSchema } from "./labels";

export const LINHA_MVNO_DADOS_ADICIONAIS_TABLE_NAME =
	"linha_mvno_dados_adicionais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const linha_mvno_dados_adicionaisBaseSchema = z.object({
	id: z.number(),
	dados_adicionais: z.number(),
	data: z.string(),
	gera_cobranca: linha_mvno_dados_adicionaisGeraCobrancaSchema,
	id_linha: z.number(),
	id_produto: z.number(),
	id_servico_adicional: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const linha_mvno_dados_adicionaisSchema =
	linha_mvno_dados_adicionaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const linha_mvno_dados_adicionaisCreateSchema =
	linha_mvno_dados_adicionaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const linha_mvno_dados_adicionaisUpdateSchema =
	linha_mvno_dados_adicionaisCreateSchema.partial();
