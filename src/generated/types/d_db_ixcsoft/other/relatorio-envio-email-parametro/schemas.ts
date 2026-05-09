/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_envio_email_parametroFormatoArquivoSchema,
	relatorio_envio_email_parametroOpcMesRotinaSchema,
	relatorio_envio_email_parametroTipoEnvioSchema,
} from "./labels";

export const RELATORIO_ENVIO_EMAIL_PARAMETRO_TABLE_NAME =
	"relatorio_envio_email_parametro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_envio_email_parametroBaseSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	dia_rotina: z.string(),
	dia_semana: z.string(),
	dia_semana_envio: z.number(),
	dias_mes: z.number(),
	endereco_email: z.string(),
	formato_arquivo: relatorio_envio_email_parametroFormatoArquivoSchema,
	hora: z.string(),
	hora_rotina: z.string(),
	mes: z.string(),
	mes_rotina: z.string(),
	minuto_rotina: z.string(),
	modelo_email: z.number(),
	opc_mes_rotina: relatorio_envio_email_parametroOpcMesRotinaSchema,
	semana_rotina: z.string(),
	status: z.string(),
	tipo_envio: relatorio_envio_email_parametroTipoEnvioSchema,
	updated_at: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_envio_email_parametroSchema =
	relatorio_envio_email_parametroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_envio_email_parametroCreateSchema =
	relatorio_envio_email_parametroSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_envio_email_parametroUpdateSchema =
	relatorio_envio_email_parametroCreateSchema.partial();
