/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rel_tributos_saida_fiscaisTipoDataEmissaoSchema } from "./labels";

export const REL_TRIBUTOS_SAIDA_FISCAIS_TABLE_NAME =
	"rel_tributos_saida_fiscais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rel_tributos_saida_fiscaisBaseSchema = z.object({
	id: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_emissao_fin: z.string(),
	data_emissao_ini: z.string(),
	data_emissao_periodo: z.string(),
	data_ultima_impres: z.string(),
	id_classificacao_fiscal: z.number(),
	id_cliente: z.number(),
	id_filial: z.number(),
	id_produto: z.number(),
	impresso_por: z.number(),
	mod_doc_fiscal: z.string(),
	nome: z.string(),
	relatorio: z.string(),
	tipo_data_emissao: rel_tributos_saida_fiscaisTipoDataEmissaoSchema,
	tipo_movimento: z.string(),
	tributos: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rel_tributos_saida_fiscaisSchema =
	rel_tributos_saida_fiscaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rel_tributos_saida_fiscaisCreateSchema =
	rel_tributos_saida_fiscaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rel_tributos_saida_fiscaisUpdateSchema =
	rel_tributos_saida_fiscaisCreateSchema.partial();
