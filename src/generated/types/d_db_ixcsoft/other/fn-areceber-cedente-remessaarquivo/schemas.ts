/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_areceber_cedente_remessaarquivoTrazTodosTitulosAbertosSchema } from "./labels";

export const FN_ARECEBER_CEDENTE_REMESSAARQUIVO_TABLE_NAME =
	"fn_areceber_cedente_remessaArquivo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_cedente_remessaarquivoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	emissao: z.string(),
	id_carteira: z.number(),
	numero: z.number(),
	tipo_remessa: z.string(),
	traz_todos_titulos_abertos:
		fn_areceber_cedente_remessaarquivoTrazTodosTitulosAbertosSchema,
	vencimento: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_cedente_remessaarquivoSchema =
	fn_areceber_cedente_remessaarquivoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_cedente_remessaarquivoCreateSchema =
	fn_areceber_cedente_remessaarquivoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_cedente_remessaarquivoUpdateSchema =
	fn_areceber_cedente_remessaarquivoCreateSchema.partial();
